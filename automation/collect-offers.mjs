import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const dataPath = path.join(root, "data.js");
const outputPath = path.join(root, "live-offers.json");
const requestTimeoutMs = 15000;

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
    return normalized(await response.text());
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
    const visibleInSource = sourcePage.includes(titleNeedle);
    const visibleInDestination = !destinationPage || destinationPage.includes(titleNeedle);

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

const seedJobs = readSeedJobs();
const previousJobs = readPreviousIndex();
const previousById = new Map(previousJobs.map((job) => [job.id, job]));
const outcomes = await Promise.all(seedJobs.map((job) => verifyJob(job, previousById)));
const jobs = outcomes
  .filter(({ status }) => status !== "expired" && status !== "not-found")
  .map(({ job }) => job);

const payload = {
  schemaVersion: 1,
  updatedAt: new Date().toISOString(),
  checkedLabel: checkedLabel(),
  method: "Verifica automatica di pagine pubbliche autorizzate nel registro RadarSanita",
  sourcesChecked: seedJobs.length,
  outcomes: outcomes.map(({ status, job, error }) => ({ id: job.id, status, error: error || null })),
  jobs
};

fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Indice aggiornato: ${jobs.length}/${seedJobs.length} schede disponibili.`);
