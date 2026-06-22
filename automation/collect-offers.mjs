import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const dataPath = path.join(root, "data.js");
const outputPath = path.join(root, "live-offers.json");
const requestTimeoutMs = 15000;
const maxCatalogCandidates = 8;
const discoveryCatalogs = [
  {
    name: "Manpower Italia - catalogo pubblico",
    url: "https://www.manpower.it/it/all-jobs"
  }
];

function readSeedJobs() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(dataPath, "utf8"), sandbox, { filename: "data.js" });
  const jobs = sandbox.window.RADAR_DATA?.jobs;
  if (!Array.isArray(jobs)) throw new Error("data.js non contiene un indice offerte valido");
  return jobs.filter((job) => job?.publicationStatus === "published");
}

function readPreviousIndex() {
  try {
    const payload = JSON.parse(fs.readFileSync(outputPath, "utf8"));
    return Array.isArray(payload.jobs) ? payload.jobs : [];
  } catch {
    return [];
  }
}

function normalized(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function isExpired(deadline) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(deadline || ""))) return false;
  return new Date(`${deadline}T23:59:59+02:00`).getTime() < Date.now();
}

function checkedLabel() {
  return new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

async function fetchPublicPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "RadarSanitaCollector/0.1 (+https://rk547svrdm-bit.github.io/radarsanita-beta/)"
      }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyJob(job, previousById) {
  if (isExpired(job.deadline)) {
    return { status: "expired", job };
  }

  try {
    const [sourcePage, destinationPage] = await Promise.all([
      fetchPublicPage(job.sourceUrl),
      job.application?.destinationUrl && job.application.destinationUrl !== job.sourceUrl
        ? fetchPublicPage(job.application.destinationUrl)
        : Promise.resolve("")
    ]);
    const titleNeedle = normalized(job.title);
    const visibleInSource = normalized(sourcePage).includes(titleNeedle);
    const visibleInDestination = !destinationPage || normalized(destinationPage).includes(titleNeedle);

    if (!visibleInSource || !visibleInDestination) {
      return { status: "not-found", job };
    }

    const checked = checkedLabel();
    return {
      status: "verified",
      job: {
        ...job,
        checked,
        sources: (job.sources || []).map((source) => ({ ...source, checked }))
      }
    };
  } catch (error) {
    // A temporary source failure must not erase an otherwise valid public record.
    const previous = previousById.get(job.id);
    return { status: "unreachable", job: previous || job, error: error.message };
  }
}

function decodeEntities(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&(nbsp|amp|quot|apos|lt|gt);/gi, (_, name) => ({
      nbsp: " ", amp: "&", quot: "\"", apos: "'", lt: "<", gt: ">"
    })[name.toLowerCase()]);
}

function htmlText(value) {
  return decodeEntities(String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

function isHealthcareRole(title) {
  const value = normalized(title);
  return /\binfermier\w*/.test(value) || /\boss(?:[\s/\-]|$)/.test(value);
}

function extractManpowerCandidates(html) {
  const results = [];
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attributes = match[1];
    if (!/\bseo-job-link\b/i.test(attributes)) continue;
    const href = attributes.match(/\bhref=['"]([^'"]+)['"]/i)?.[1];
    const title = htmlText(match[2]);
    if (!href || !title || !isHealthcareRole(title)) continue;
    results.push({ url: decodeEntities(href), title });
  }
  return [...new Map(results.map((item) => [item.url, item])).values()].slice(0, maxCatalogCandidates);
}

function parseJsonLdJob(html) {
  for (const match of html.matchAll(/<script[^>]+type=['"]application\/ld\+json['"][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const value = JSON.parse(match[1]);
      const entries = Array.isArray(value) ? value : [value];
      const posting = entries.find((entry) => entry?.["@type"] === "JobPosting");
      if (posting) return posting;
    } catch {
      // Ignore malformed metadata and keep the source page as the evidence.
    }
  }
  return null;
}

function parseItalianDeadline(html) {
  const text = htmlText(html).toLowerCase();
  const match = text.match(/annuncio valido fino a\s*:?\s*(\d{1,2})[\s-]([a-z]+)[\s-](\d{4})/i)
    || text.match(/validita annuncio fino a\s*:?\s*(\d{1,2})[\s-]([a-z]+)[\s-](\d{4})/i);
  if (!match) return null;
  const months = {
    gen: 1, gennaio: 1, jan: 1, feb: 2, febbraio: 2, mar: 3, marzo: 3,
    apr: 4, aprile: 4, may: 5, mag: 5, maggio: 5, jun: 6, giugno: 6,
    lug: 7, luglio: 7, jul: 7, ago: 8, agosto: 8, aug: 8, set: 9, settembre: 9,
    sep: 9, ott: 10, ottobre: 10, oct: 10, nov: 11, novembre: 11, dic: 12, dicembre: 12, dec: 12
  };
  const month = months[match[2].toLowerCase()];
  if (!month) return null;
  return `${match[3]}-${String(month).padStart(2, "0")}-${String(match[1]).padStart(2, "0")}`;
}

function deadlineLabel(deadline) {
  if (!deadline) return "Scadenza non dichiarata";
  return new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome", day: "numeric", month: "long", year: "numeric"
  }).format(new Date(`${deadline}T12:00:00+02:00`));
}

function titleCase(value) {
  return String(value || "")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function locationFromTitle(title, posting) {
  const locality = String(posting?.jobLocation?.address?.addressLocality || "").trim();
  const italianRegions = new Set([
    "abruzzo", "basilicata", "calabria", "campania", "emilia romagna", "friuli venezia giulia",
    "lazio", "liguria", "lombardia", "marche", "molise", "piemonte", "puglia", "sardegna",
    "sicilia", "toscana", "trentino alto adige", "umbria", "valle d'aosta", "veneto", "italia"
  ]);
  if (locality && !italianRegions.has(normalized(locality))) return locality;
  const asl = String(title).match(/\basl\s+([a-zà-ÿ' -]+)$/i);
  if (asl) return titleCase(asl[1]);
  const province = String(title).match(/\binfermier[^\s]*(?:\s*\/\s*[a-z]+)?\s+([a-zà-ÿ' -]+?)\s+e\s+provincia\b/i);
  if (province) return titleCase(province[1]);
  const trailing = String(title).match(/[-|]\s*([a-zà-ÿ' ]+)$/i);
  return trailing ? titleCase(trailing[1]) : null;
}

function contractFromText(text) {
  if (/tempo indeterminato/i.test(text)) return "Tempo indeterminato";
  if (/tempo determinato/i.test(text)) return "Tempo determinato";
  if (/partita iva|libera professione/i.test(text)) return "Partita IVA / libera professione";
  return "Non dichiarato";
}

function shiftsFromText(text) {
  if (/tre turni|3 turni/i.test(text)) return "Tre turni";
  if (/due turni|2 turni/i.test(text)) return "Due turni";
  if (/solo diurn/i.test(text)) return "Solo diurni";
  if (/turni/i.test(text)) return "Turni da verificare";
  return "Non dichiarati";
}

function requirementsFromText(text) {
  const requirements = [];
  if (/laurea[^.]{0,80}infermier/i.test(text)) requirements.push(["Laurea in Infermieristica", "Richiesta dalla fonte"]);
  if (/iscrizione[^.]{0,80}(?:opi|albo)/i.test(text)) requirements.push(["Iscrizione OPI", "Richiesta dalla fonte"]);
  if (/automunit/i.test(text)) requirements.push(["Automunito/a", "Richiesto dalla fonte"]);
  return requirements.length ? requirements : [["Requisiti", "Da verificare nella pagina fonte"]];
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function geocodeCity(city) {
  await sleep(1100);
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("countrycodes", "it");
  url.searchParams.set("q", `${city}, Italia`);
  const response = await fetch(url, {
    headers: {
      "user-agent": "RadarSanitaCollector/0.1 (+https://rk547svrdm-bit.github.io/radarsanita-beta/)"
    }
  });
  if (!response.ok) throw new Error(`Geocoding HTTP ${response.status}`);
  const [result] = await response.json();
  if (!result) return null;
  const lat = Number(result.lat);
  const lng = Number(result.lon);
  return Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null;
}

async function buildManpowerJob(candidate) {
  const html = await fetchPublicPage(candidate.url);
  const posting = parseJsonLdJob(html);
  const title = String(posting?.title || candidate.title).trim();
  const deadline = parseItalianDeadline(html);
  const text = htmlText(posting?.description || html);
  const city = locationFromTitle(title, posting);
  if (!deadline || isExpired(deadline) || !city) return null;
  const coordinates = await geocodeCity(city);
  if (!coordinates) return null;

  const isOss = /\boss(?:[\s/\-]|$)/.test(normalized(title));
  const contract = contractFromText(text);
  const schedule = String(posting?.employmentType || "Non dichiarato");
  const shifts = shiftsFromText(text);
  const nights = /notturn/i.test(text) ? true : shifts === "Solo diurni" ? false : null;
  const checked = checkedLabel();
  const sourceName = `Manpower Italia - annuncio ${candidate.url.split("/").pop()}`;
  const roleLabel = isOss ? "OSS" : "infermiere/a";

  return {
    id: `manpower-discovered-${candidate.url.split("/").pop()}`,
    publicationStatus: "published",
    title,
    company: "Azienda cliente non nominata nell'annuncio",
    location: `${city}, Italia`,
    coordinates,
    coordinatePrecision: "city",
    contract,
    schedule,
    shifts,
    nights,
    deadline,
    deadlineLabel: deadlineLabel(deadline),
    salary: "Non pubblicato",
    match: 76,
    type: "Selezione tramite agenzia",
    category: isOss ? "oss" : "privato",
    summary: `Annuncio Manpower per ${roleLabel} con sede indicata a ${city}. Condizioni disponibili nella fonte originale.`,
    reasons: ["Ruolo sanitario dichiarato", "Pagina fonte pubblica", "Candidatura sul canale originale"],
    warning: "Retribuzione e nome del datore non sono pubblicati nell'annuncio.",
    requirements: requirementsFromText(text),
    contractDetails: [
      ["Contratto", contract],
      ["Orario", schedule],
      ["Turni", shifts],
      ["Retribuzione", "Non pubblicata"],
      ["Scadenza", deadlineLabel(deadline)]
    ],
    shiftDetails: [
      ["Organizzazione", shifts],
      ["Notti", nights === true ? "Previste" : nights === false ? "Non previste" : "Da verificare"],
      ["Sede", `${city}, Italia`],
      ["Fonte", "Dettaglio annuncio Manpower"]
    ],
    application: {
      channel: "Pulsante Candidati ora sul portale Manpower",
      destinationUrl: candidate.url,
      contactEmail: null,
      documents: /curriculum/i.test(text) ? ["CV", "Requisiti dichiarati nell'annuncio"] : ["Documenti da verificare nel portale"],
      missing: "Confermare documenti e disponibilita prima dell'invio",
      message: `Buongiorno, desidero candidarmi alla posizione di ${title}. Allego il curriculum e resto disponibile per un colloquio. Cordiali saluti.`
    },
    source: sourceName,
    sourceUrl: candidate.url,
    checked,
    sources: [
      { name: sourceName, kind: "primaria", url: candidate.url, checked },
      { name: "Manpower Italia - catalogo pubblico", kind: "duplicato", url: "https://www.manpower.it/it/all-jobs", checked }
    ],
    media: {
      type: "none",
      url: null,
      sourceUrl: null,
      alt: "",
      reason: "Nessuna foto verificabile della struttura e pubblicata nella scheda."
    }
  };
}

async function discoverCatalogJobs(existingIds) {
  const discovered = [];
  for (const catalog of discoveryCatalogs) {
    try {
      const candidates = extractManpowerCandidates(await fetchPublicPage(catalog.url));
      for (const candidate of candidates) {
        const id = `manpower-discovered-${candidate.url.split("/").pop()}`;
        if (existingIds.has(id)) continue;
        try {
          const job = await buildManpowerJob(candidate);
          if (job) {
            discovered.push(job);
            existingIds.add(job.id);
          }
        } catch (error) {
          console.warn(`Annuncio non pubblicato (${candidate.url}): ${error.message}`);
        }
      }
    } catch (error) {
      console.warn(`Catalogo non raggiungibile (${catalog.name}): ${error.message}`);
    }
  }
  return discovered;
}

const seedJobs = readSeedJobs();
const previousJobs = readPreviousIndex();
const previousById = new Map(previousJobs.map((job) => [job.id, job]));
const outcomes = await Promise.all(seedJobs.map((job) => verifyJob(job, previousById)));
const verifiedSeeds = outcomes
  .filter(({ status }) => status !== "expired" && status !== "not-found")
  .map(({ job }) => job);
const discoveredJobs = await discoverCatalogJobs(new Set(verifiedSeeds.map((job) => job.id)));
const jobs = [...verifiedSeeds, ...discoveredJobs];

const payload = {
  schemaVersion: 1,
  updatedAt: new Date().toISOString(),
  checkedLabel: checkedLabel(),
  method: "Verifica automatica di pagine pubbliche autorizzate nel registro RadarSanita",
  sourcesChecked: seedJobs.length + discoveryCatalogs.length,
  outcomes: [
    ...outcomes.map(({ status, job, error }) => ({ id: job.id, status, error: error || null })),
    ...discoveredJobs.map((job) => ({ id: job.id, status: "discovered", error: null }))
  ],
  jobs
};

fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Indice aggiornato: ${jobs.length}/${seedJobs.length} schede disponibili.`);
