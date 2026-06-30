var jobs = window.RADAR_DATA?.jobs || [
  {
    id: "aurora",
    publicationStatus: "draft",
    title: "Infermiere ambulatoriale",
    company: "Poliambulatorio Aurora",
    location: "Torino",
    searchAreas: ["torino-nord"],
    distance: 8,
    contract: "Indeterminato",
    schedule: "Part-time 30 ore",
    shifts: "Solo diurni",
    nights: false,
    deadline: "2026-06-26",
    deadlineLabel: "26 giugno",
    salary: "Non pubblicato",
    match: 96,
    type: "Sanità privata",
    category: "privato",
    summary:
      "Attività ambulatoriale programmata, dal lunedì al sabato, senza reperibilità notturna. Il ruolo è coerente con chi cerca orari regolari.",
    reasons: ["Nessun turno notturno", "A soli 8 km", "Esperienza coerente"],
    warning: "La retribuzione non è stata pubblicata.",
    requirements: [
      ["Laurea in Infermieristica", "Risulta presente"],
      ["Iscrizione OPI", "Risulta presente"],
      ["1 anno di esperienza", "Risulta coerente"],
      ["Disponibilità al sabato", "Da confermare"]
    ],
    contractDetails: [
      ["Contratto", "Tempo indeterminato"],
      ["Orario", "Part-time, 30 ore"],
      ["CCNL", "Sanità privata"],
      ["Periodo di prova", "3 mesi"],
      ["Retribuzione", "Non pubblicata"],
      ["Inizio previsto", "Luglio 2026"]
    ],
    shiftDetails: [
      ["Fascia principale", "07:30-14:30"],
      ["Sabato", "Uno ogni tre settimane"],
      ["Notti", "Non previste"],
      ["Reperibilità", "Non prevista"]
    ],
    application: {
      channel: "Modulo ufficiale del datore",
      documents: ["CV", "Iscrizione OPI", "Documento di identità"],
      missing: "Conferma disponibilità al sabato",
      message:
        "Buongiorno,\nsono interessato alla posizione di infermiere ambulatoriale. La mia esperienza e la mia disponibilità sono coerenti con le attività indicate. Allego il curriculum e la documentazione richiesta.\n\nCordiali saluti"
    },
    source: "Sito ufficiale del Poliambulatorio Aurora",
    sources: [
      ["Sito datore", "primaria"],
      ["Portale lavoro", "duplicato"],
      ["Scheda RadarSanità", "verificata"]
    ],
    excludedReason: null,
    checked: "Oggi alle 09:40"
  },
  {
    id: "rsa-collina",
    publicationStatus: "draft",
    title: "Infermiere per nucleo riabilitativo",
    company: "RSA La Collina",
    location: "San Mauro Torinese",
    searchAreas: ["torino-nord", "limitrofi"],
    distance: 14,
    contract: "Indeterminato",
    schedule: "Full-time",
    shifts: "Due turni",
    nights: false,
    deadline: "2026-07-05",
    deadlineLabel: "5 luglio",
    salary: "€1.850-2.050 lordi",
    match: 91,
    type: "RSA",
    category: "privato",
    sponsored: true,
    summary:
      "Assistenza infermieristica in nucleo riabilitativo. Turni mattina e pomeriggio; le notti sono coperte da un'équipe dedicata.",
    reasons: ["Notti non previste", "Contratto stabile", "Stipendio indicato"],
    warning: "È richiesta disponibilità a due domeniche al mese.",
    requirements: [
      ["Laurea in Infermieristica", "Risulta presente"],
      ["Iscrizione OPI", "Risulta presente"],
      ["Esperienza in RSA", "Preferibile, non obbligatoria"],
      ["Disponibilità festiva", "Da confermare"]
    ],
    contractDetails: [
      ["Contratto", "Tempo indeterminato"],
      ["Orario", "Full-time, 38 ore"],
      ["CCNL", "UNEBA"],
      ["Retribuzione", "€1.850-2.050 lordi"],
      ["Buoni pasto", "€7 per turno"],
      ["Inizio previsto", "Appena possibile"]
    ],
    shiftDetails: [
      ["Mattino", "06:30-14:00"],
      ["Pomeriggio", "13:30-21:00"],
      ["Notti", "Coperte da équipe dedicata"],
      ["Festivi", "Due domeniche al mese"]
    ],
    application: {
      channel: "Email dell'ufficio personale",
      documents: ["CV", "Iscrizione OPI"],
      missing: "Conferma disponibilità festiva",
      message:
        "Buongiorno,\ninvio la mia candidatura per la posizione infermieristica presso il nucleo riabilitativo. Sono disponibile a un colloquio per approfondire attività e organizzazione dei turni.\n\nCordiali saluti"
    },
    source: "Pagina Lavora con noi della RSA La Collina",
    sources: [
      ["Sito datore", "primaria"],
      ["Agenzia lavoro", "duplicato"],
      ["Recensioni colleghi", "separata"]
    ],
    excludedReason: null,
    checked: "Ieri alle 18:20"
  },
  {
    id: "domiciliare-nord",
    publicationStatus: "draft",
    title: "Infermiere domiciliare",
    company: "Cura Nord",
    location: "Ciriè e comuni limitrofi",
    searchAreas: ["valli-lanzo", "limitrofi"],
    distance: 22,
    contract: "Partita IVA",
    schedule: "Flessibile",
    shifts: "Giorni concordati",
    nights: false,
    deadline: "2026-07-12",
    deadlineLabel: "12 luglio",
    salary: "€26-32 per accesso",
    match: 86,
    type: "Assistenza domiciliare",
    category: "lp",
    summary:
      "Accessi domiciliari programmati per medicazioni, terapie e monitoraggi. Agenda concordata settimanalmente.",
    reasons: ["Agenda flessibile", "Compenso pubblicato", "Nessuna notte"],
    warning: "Sono richieste auto propria e partita IVA.",
    requirements: [
      ["Laurea in Infermieristica", "Risulta presente"],
      ["Iscrizione OPI", "Risulta presente"],
      ["Partita IVA", "Da confermare"],
      ["Auto propria", "Da confermare"]
    ],
    contractDetails: [
      ["Rapporto", "Collaborazione in partita IVA"],
      ["Compenso", "€26-32 per accesso"],
      ["Pagamenti", "Mensili"],
      ["Area", "Ciriè e comuni limitrofi"],
      ["Minimo richiesto", "Due giorni a settimana"],
      ["Inizio previsto", "Luglio 2026"]
    ],
    shiftDetails: [
      ["Agenda", "Concordata settimanalmente"],
      ["Fasce", "Prevalentemente diurne"],
      ["Notti", "Non previste"],
      ["Festivi", "Facoltativi"]
    ],
    application: {
      channel: "Email della coordinatrice",
      documents: ["CV", "Iscrizione OPI", "Polizza professionale"],
      missing: "Conferma partita IVA e disponibilità auto",
      message:
        "Buongiorno,\nsono interessato alla collaborazione per l'assistenza domiciliare nell'area di Ciriè. Allego il mio curriculum e resto disponibile per definire zone, agenda e tipologia di accessi.\n\nCordiali saluti"
    },
    source: "Annuncio verificato dal datore",
    sources: [
      ["Datore", "primaria"],
      ["Gruppo territoriale", "segnalazione"],
      ["Scheda RadarSanità", "verificata"]
    ],
    excludedReason: null,
    checked: "Oggi alle 08:15"
  },
  {
    id: "asl-chivasso",
    publicationStatus: "draft",
    title: "Avviso pubblico per infermieri",
    company: "ASL TO4",
    location: "Chivasso",
    searchAreas: ["torino-nord", "limitrofi"],
    distance: 28,
    contract: "Determinato",
    schedule: "Full-time",
    shifts: "Tre turni",
    nights: true,
    deadline: "2026-06-22",
    deadlineLabel: "22 giugno",
    salary: "CCNL Comparto Sanità",
    match: 72,
    type: "Avviso pubblico",
    category: "concorso",
    summary:
      "Avviso per incarichi a tempo determinato. Sono previsti turni sulle 24 ore e candidatura tramite portale pubblico.",
    reasons: ["Ente pubblico", "Entro 30 km", "Requisiti coerenti"],
    warning: "Sono previsti turni notturni.",
    requirements: [
      ["Laurea in Infermieristica", "Risulta presente"],
      ["Iscrizione OPI", "Risulta presente"],
      ["SPID o CIE", "Necessario sul portale pubblico"],
      ["Contributo", "Non previsto"]
    ],
    contractDetails: [
      ["Contratto", "Tempo determinato"],
      ["Orario", "Full-time, 36 ore"],
      ["CCNL", "Comparto Sanità"],
      ["Durata", "12 mesi"],
      ["Posti", "8"],
      ["Graduatoria", "Validità indicata nel bando"]
    ],
    shiftDetails: [
      ["Organizzazione", "Tre turni"],
      ["Notti", "Previste"],
      ["Festivi", "Previsti"],
      ["Sedi", "Presidi aziendali"]
    ],
    application: {
      channel: "Portale pubblico con SPID/CIE",
      documents: ["CV", "Documento di identità", "Dichiarazioni del bando"],
      missing: "Accesso personale con SPID o CIE",
      message:
        "La piattaforma prepara dati e checklist. Accesso e invio finale restano personali sul portale pubblico."
    },
    source: "Bando ufficiale ASL TO4",
    sources: [
      ["Bando ASL", "primaria"],
      ["Portale pubblico", "ufficiale"],
      ["PDF letto da IA", "estratto"]
    ],
    excludedReason: "Meno adatta: contiene notti e festivi",
    checked: "Oggi alle 10:05"
  },
  {
    id: "asl-lp-ivrea",
    publicationStatus: "draft",
    title: "Incarico libero-professionale infermieristico",
    company: "Azienda Sanitaria Piemonte Centro",
    location: "Ivrea",
    searchAreas: ["limitrofi"],
    distance: 29,
    contract: "Partita IVA",
    schedule: "36 ore da concordare",
    shifts: "Turni concordati",
    nights: false,
    deadline: "2026-07-03",
    deadlineLabel: "3 luglio",
    salary: "€32 lordi/ora",
    match: 84,
    type: "Avviso pubblico LP",
    category: "lp",
    summary:
      "Avviso dimostrativo per il conferimento di incarichi libero-professionali infermieristici. Compenso, durata e criteri di valutazione sono già sintetizzati.",
    reasons: ["Compenso pubblicato", "Incarico pubblico", "Notti non obbligatorie"],
    warning: "È richiesta partita IVA attiva prima della sottoscrizione dell'incarico.",
    requirements: [
      ["Laurea in Infermieristica", "Risulta presente"],
      ["Iscrizione OPI", "Risulta presente"],
      ["Partita IVA", "Da confermare"],
      ["Polizza professionale", "Necessaria"]
    ],
    contractDetails: [
      ["Rapporto", "Incarico libero-professionale"],
      ["Durata", "12 mesi"],
      ["Compenso", "€32 lordi/ora"],
      ["Monte ore", "Fino a 36 ore settimanali"],
      ["Pagamento", "Mensile su fattura"],
      ["Posti", "5 incarichi"]
    ],
    shiftDetails: [
      ["Programmazione", "Mensile"],
      ["Notti", "Non obbligatorie"],
      ["Festivi", "Da concordare"],
      ["Sede", "Presidio di Ivrea"]
    ],
    application: {
      channel: "Portale istituzionale dell'azienda sanitaria",
      documents: ["CV", "Iscrizione OPI", "Documento di identità", "Polizza professionale"],
      missing: "Conferma partita IVA e polizza",
      message:
        "RadarSanità prepara bozza, checklist e allegati dopo l'iscrizione; l'invio finale resta personale sul canale ufficiale."
    },
    source: "Avviso pubblico dimostrativo dell'azienda sanitaria",
    sources: [
      ["Albo pretorio", "primaria"],
      ["Portale istituzionale", "ufficiale"],
      ["PDF letto da IA", "estratto"]
    ],
    excludedReason: null,
    checked: "Oggi alle 11:10"
  },
  {
    id: "oss-rivoli",
    publicationStatus: "draft",
    title: "Operatore sociosanitario",
    company: "Residenza San Luca",
    location: "Rivoli",
    searchAreas: ["torino-nord", "limitrofi"],
    distance: 16,
    contract: "Determinato",
    schedule: "Full-time",
    shifts: "Due turni",
    nights: false,
    deadline: "2026-07-08",
    deadlineLabel: "8 luglio",
    salary: "€1.550-1.700 lordi",
    match: 79,
    type: "Opportunità OSS",
    category: "oss",
    summary:
      "Inserimento in struttura sociosanitaria con affiancamento iniziale. La scheda evidenzia nucleo, turnazione, rapporto operatori-ospiti e maggiorazioni.",
    reasons: ["Retribuzione indicata", "A 16 km", "Affiancamento previsto"],
    warning: "Sono richiesti due fine settimana al mese.",
    requirements: [
      ["Qualifica OSS", "Da verificare nel profilo"],
      ["Disponibilità su due turni", "Da confermare"],
      ["Esperienza in struttura", "Preferibile"],
      ["Automunito", "Non obbligatorio"]
    ],
    contractDetails: [
      ["Contratto", "Tempo determinato"],
      ["Durata", "6 mesi con possibilità di proroga"],
      ["Orario", "Full-time, 38 ore"],
      ["CCNL", "UNEBA"],
      ["Retribuzione", "€1.550-1.700 lordi"],
      ["Maggiorazioni", "Notturni e festivi"]
    ],
    shiftDetails: [
      ["Mattino", "06:00-14:00"],
      ["Pomeriggio", "14:00-22:00"],
      ["Notti", "Non previste"],
      ["Fine settimana", "Due al mese"]
    ],
    application: {
      channel: "Modulo ufficiale della struttura",
      documents: ["CV", "Attestato OSS", "Documento di identità"],
      missing: "Caricamento attestato OSS",
      message:
        "Buongiorno, sono interessato alla posizione OSS presso la Residenza San Luca. Allego il curriculum e l'attestato richiesto."
    },
    source: "Annuncio dimostrativo verificato dalla struttura",
    sources: [
      ["Sito struttura", "primaria"],
      ["Portale OSS", "duplicato"],
      ["Scheda RadarSanità", "verificata"]
    ],
    excludedReason: "Profilo diverso: opportunità OSS",
    checked: "Oggi alle 10:50"
  }
];

var coverageStats = window.RADAR_DATA?.coverageStats || {
  monitored: 46,
  checkedToday: 39,
  duplicateGroups: 12,
  excludedForProfile: 31,
  families: [
    ["Siti ufficiali ASL/ospedali", 14, "fonte primaria"],
    ["Portali pubblici e bandi", 8, "fonte ufficiale"],
    ["Cliniche, RSA e cooperative", 13, "datore diretto"],
    ["Aggregatori e agenzie", 11, "fonte secondaria"]
  ]
};

var sourceRegistry = window.RADAR_DATA?.sourceRegistry || { families: [] };
var liveOfferIndexState = "pending";

var marketRates = window.RADAR_DATA?.marketRates || [
  {
    key: "privato",
    label: "RSA / cliniche private",
    role: "Infermiere",
    area: "Torino e cintura",
    range: "€24-30/h",
    urgent: "+€4/h urgenza",
    net: "Netto professionista stimato: €21,60-27/h",
    demand: "Domanda alta",
    signal: "Molti turni scoperti nei weekend",
    status: "Stima da offerte e segnalazioni verificate",
    unit: "eurHour",
    trend: {
      day: { label: "7 giorni", startLabel: "7 gg fa", endLabel: "oggi", points: [27.4, 27.8, 28.1, 27.9, 28.6, 29.2, 29.5] },
      week: { label: "4 settimane", startLabel: "4 sett. fa", endLabel: "questa sett.", points: [26.2, 27.1, 28.0, 29.5] },
      month: { label: "mese", startLabel: "mese scorso", endLabel: "oggi", points: [25.8, 26.4, 26.9, 27.3, 27.8, 28.4, 29.1, 29.5] }
    }
  },
  {
    key: "lp",
    label: "Libera professione",
    role: "Infermiere LP",
    area: "Domiciliare e incarichi",
    range: "€28-35/h",
    urgent: "+€2-4/h urgenza",
    net: "Netto dipende da regime fiscale e costi",
    demand: "Domanda media-alta",
    signal: "Richieste forti su accessi domiciliari e coperture brevi",
    status: "Dato da validare sul singolo incarico",
    unit: "eurHour",
    trend: {
      day: { label: "7 giorni", startLabel: "7 gg fa", endLabel: "oggi", points: [31.2, 31.5, 31.1, 32.0, 32.4, 32.9, 33.2] },
      week: { label: "4 settimane", startLabel: "4 sett. fa", endLabel: "questa sett.", points: [30.4, 31.3, 32.1, 33.2] },
      month: { label: "mese", startLabel: "mese scorso", endLabel: "oggi", points: [29.8, 30.5, 31.0, 31.6, 32.0, 32.5, 32.9, 33.2] }
    }
  },
  {
    key: "concorso",
    label: "Pubblico / concorsi",
    role: "Infermiere",
    area: "ASL e aziende ospedaliere",
    range: "CCNL pubblico",
    urgent: "Nessuna borsa libera",
    net: "Conta più stabilità, sede e turnazione",
    demand: "Domanda stabile",
    signal: "Valore economico meno negoziabile, alta rilevanza di sede e notti",
    status: "Fonte primaria: bando o portale istituzionale",
    unit: "score",
    trend: {
      day: { label: "7 giorni", startLabel: "7 gg fa", endLabel: "oggi", points: [70, 70, 71, 71, 71, 72, 72] },
      week: { label: "4 settimane", startLabel: "4 sett. fa", endLabel: "questa sett.", points: [68, 69, 71, 72] },
      month: { label: "mese", startLabel: "mese scorso", endLabel: "oggi", points: [67, 68, 69, 69, 70, 71, 72, 72] }
    }
  },
  {
    key: "oss",
    label: "OSS in struttura",
    role: "OSS",
    area: "RSA e assistenza",
    range: "€13-18/h",
    urgent: "+€1-3/h urgenza",
    net: "Da leggere con CCNL, maggiorazioni e turni",
    demand: "Domanda alta",
    signal: "Molte ricerche su due turni e weekend",
    status: "Stima da offerte normalizzate",
    unit: "eurHour",
    trend: {
      day: { label: "7 giorni", startLabel: "7 gg fa", endLabel: "oggi", points: [15.1, 15.3, 15.4, 15.2, 15.7, 16.0, 16.1] },
      week: { label: "4 settimane", startLabel: "4 sett. fa", endLabel: "questa sett.", points: [14.8, 15.2, 15.6, 16.1] },
      month: { label: "mese", startLabel: "mese scorso", endLabel: "oggi", points: [14.4, 14.8, 15.0, 15.1, 15.4, 15.7, 15.9, 16.1] }
    }
  }
];

var workplaceProfiles = window.RADAR_DATA?.workplaceProfiles || {
  aurora: {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Zona urbana servita dai mezzi", "Ingresso accessibile", "Attività prevalentemente ambulatoriale"],
    rating: "4,2",
    reviewCount: 18,
    verifiedReviews: 7,
    reviews: [
      {
        score: 4,
        role: "Infermiera ambulatoriale",
        period: "Aprile 2026",
        text: "Turni prevedibili e buona collaborazione con i medici. Il sabato va chiarito già al colloquio.",
        source: "Profilo professionale verificato"
      },
      {
        score: 4,
        role: "Ex infermiere",
        period: "Gennaio 2026",
        text: "Ambiente ordinato e ritmi sostenuti nelle ore centrali. Affiancamento iniziale presente.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  },
  "rsa-collina": {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Struttura con giardino", "Parcheggio interno", "Nucleo riabilitativo dedicato"],
    rating: "3,9",
    reviewCount: 26,
    verifiedReviews: 11,
    reviews: [
      {
        score: 4,
        role: "Infermiere di nucleo",
        period: "Maggio 2026",
        text: "Coordinamento disponibile e consegne ben organizzate. Il carico aumenta nei fine settimana.",
        source: "Profilo professionale verificato"
      },
      {
        score: 3,
        role: "Ex infermiera",
        period: "Febbraio 2026",
        text: "Buona équipe, ma conviene chiedere il rapporto operatori-ospiti previsto per il proprio turno.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  },
  "domiciliare-nord": {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Sede operativa di quartiere", "Area di lavoro concordabile", "Spostamenti con mezzo proprio"],
    rating: "4,4",
    reviewCount: 9,
    verifiedReviews: 4,
    reviews: [
      {
        score: 5,
        role: "Infermiera collaboratrice",
        period: "Marzo 2026",
        text: "Agenda realmente flessibile e pagamenti regolari. Le distanze tra accessi vanno concordate bene.",
        source: "Profilo professionale verificato"
      },
      {
        score: 4,
        role: "Infermiere domiciliare",
        period: "Dicembre 2025",
        text: "Buona autonomia professionale. Materiali disponibili, ma alcune zone richiedono molta guida.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  },
  "asl-chivasso": {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Presidio ospedaliero", "Collegamenti ferroviari vicini", "Possibili assegnazioni su più sedi"],
    rating: "3,7",
    reviewCount: 64,
    verifiedReviews: 19,
    reviews: [
      {
        score: 4,
        role: "Infermiere dipendente",
        period: "Maggio 2026",
        text: "Formazione presente e buona varietà clinica. L'organizzazione cambia molto tra reparti.",
        source: "Profilo professionale verificato"
      },
      {
        score: 3,
        role: "Ex infermiera a tempo determinato",
        period: "Novembre 2025",
        text: "Esperienza utile, ma è importante chiedere sede effettiva, turnazione e tempi di assegnazione.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  },
  "asl-lp-ivrea": {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Presidio pubblico", "Parcheggio nelle vicinanze", "Incarico su sede definita"],
    rating: "3,8",
    reviewCount: 31,
    verifiedReviews: 9,
    reviews: [
      {
        score: 4,
        role: "Infermiere libero professionista",
        period: "Aprile 2026",
        text: "Programmazione abbastanza stabile. È utile chiarire subito tempi di fatturazione e copertura dei turni.",
        source: "Profilo professionale verificato"
      },
      {
        score: 3,
        role: "Ex collaboratrice LP",
        period: "Dicembre 2025",
        text: "Buona autonomia, ma documentazione amministrativa iniziale piuttosto articolata.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  },
  "oss-rivoli": {
    media: {
      type: "none",
      reason: "Nessuna foto ufficiale collegata a una fonte verificabile per questa scheda."
    },
    facts: ["Struttura residenziale", "Fermata autobus vicina", "Spogliatoi e mensa interna"],
    rating: "4,0",
    reviewCount: 22,
    verifiedReviews: 8,
    reviews: [
      {
        score: 4,
        role: "OSS in servizio",
        period: "Maggio 2026",
        text: "Affiancamento utile e coordinatore presente. Il carico dipende molto dal nucleo assegnato.",
        source: "Profilo professionale verificato"
      },
      {
        score: 4,
        role: "Ex OSS",
        period: "Febbraio 2026",
        text: "Turnazione comunicata con anticipo. Consiglio di chiedere il rapporto operatori-ospiti al colloquio.",
        source: "Esperienza lavorativa verificata"
      }
    ]
  }
};

const LOCAL_STORAGE_KEYS = {
  profile: "radarSanita.profile.v1",
  applications: "radarSanita.applications.v1",
  feedbackSubmissions: "radarSanita.feedbackSubmissions.v1",
  sponsorRequests: "radarSanita.sponsorRequests.v1"
};

function readLocalJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocalJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function cleanLocalText(value, limit = 80) {
  return String(value || "").trim().slice(0, limit);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadLocalProfile() {
  const profile = readLocalJson(LOCAL_STORAGE_KEYS.profile, {});
  return {
    role: cleanLocalText(profile.role),
    area: cleanLocalText(profile.area)
  };
}

function loadApplicationRecords() {
  const records = readLocalJson(LOCAL_STORAGE_KEYS.applications, []);
  if (!Array.isArray(records)) return [];
  return records
    .filter((record) => record && jobs.some((job) => job.id === record.jobId && job.publicationStatus === "published"))
    .slice(0, 50)
    .map((record) => ({
      jobId: cleanLocalText(record.jobId),
      jobTitle: cleanLocalText(record.jobTitle),
      company: cleanLocalText(record.company),
      status: ["bozza", "kit_scaricato", "canale_aperto", "inviata"].includes(record.status)
        ? record.status
        : "bozza",
      createdAt: record.createdAt || new Date().toISOString(),
      updatedAt: record.updatedAt || record.createdAt || new Date().toISOString(),
      sentAt: record.sentAt || null
    }));
}

const state = {
  route: "intro",
  selectedJobId: "aurora",
  saved: new Set(),
  quickFilters: new Set(["noNights"]),
  selectedCategory: "all",
  ratePeriod: "month",
  searchQuery: "Ricerca personalizzata per distanza e disponibilita",
  wizardStep: 1,
  filteredJobs: [],
  exactResultsCount: 0,
  softFallbackActive: false,
  searchCompleted: false,
  searchOrigin: null,
  locationRequestInFlight: false,
  locationRequestAttempted: false,
  searchProfile: {
    role: "",
    distance: 0,
    origin: null,
    shifts: ["any"],
    availability: ["any"],
    contracts: [],
    notes: ""
  },
  lastReviewPrompt: "",
  localProfile: loadLocalProfile(),
  applicationRecords: loadApplicationRecords(),
  applicationDrafts: {}
};

async function hydrateLiveOfferIndex() {
  try {
    const response = await fetch(`live-offers.json?updated=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const index = await response.json();
    if (!Array.isArray(index.jobs)) throw new Error("Indice offerte non valido");

    jobs = index.jobs.filter((job) => job?.publicationStatus === "published");
    liveOfferIndexState = "ready";
    updateLiveSourceCounters(index.sourcesChecked);
    if (window.RADAR_DATA) {
      window.RADAR_DATA.searchSnapshot = {
        ...(window.RADAR_DATA.searchSnapshot || {}),
        checked: index.checkedLabel || "data non indicata",
        sourcesUsed: Number(index.sourcesChecked) || 0,
        method: index.method || "Indice pubblico aggiornato"
      };
    }

    if (state.searchCompleted) applyJobFilters();
  } catch {
    // The embedded source-backed index remains available when the refresh file is unreachable.
    liveOfferIndexState = "fallback";
    updateLiveSourceCounters(window.RADAR_DATA?.searchSnapshot?.sourcesUsed);
  }
}

const views = Array.from(document.querySelectorAll("[data-view]"));
const navItems = Array.from(document.querySelectorAll("[data-route]"));
const featuredJobs = document.getElementById("featuredJobs");
const jobList = document.getElementById("jobList");
const savedJobs = document.getElementById("savedJobs");
const savedEmpty = document.getElementById("savedEmpty");
const jobDetail = document.getElementById("jobDetail");
const applicationWizard = document.getElementById("applicationWizard");
const applicationsList = document.getElementById("applicationsList");
const toast = document.getElementById("toast");
const screeningGrid = document.getElementById("screeningGrid");
const screeningSummary = document.getElementById("screeningSummary");
const rateMarketList = document.getElementById("rateMarketList");
const offerReviewInput = document.getElementById("offerReviewInput");
const offerReviewOutput = document.getElementById("offerReviewOutput");
const resultsTriage = document.getElementById("resultsTriage");
const sourceRegistryList = document.getElementById("sourceRegistryList");
const personalMarketPanel = document.getElementById("personalMarketPanel");
const feedbackRegistry = document.getElementById("feedbackRegistry");
const sponsorRegistry = document.getElementById("sponsorRegistry");

function updateLiveSourceCounters(count) {
  const safeCount = Number(count) || 13;
  const introCount = document.getElementById("introSourceCount");
  const radarCount = document.getElementById("radarSourceCount");
  const radarShortCount = document.getElementById("radarSourceCountShort");
  const radarOfferCount = document.getElementById("radarOfferCount");
  const radarSalaryCount = document.getElementById("radarSalaryCount");
  if (introCount) introCount.textContent = String(safeCount);
  if (radarCount) radarCount.textContent = `${safeCount} fonti controllate`;
  if (radarShortCount) radarShortCount.textContent = String(safeCount);
  if (radarOfferCount) radarOfferCount.textContent = String(jobs.length || 0);
  if (radarSalaryCount) radarSalaryCount.textContent = String(salaryObservationsForJobs(jobs).length || 0);
}

function getJob(id) {
  return jobs.find((job) => job.id === id) || jobs[0];
}

function getApplicationRecord(jobId) {
  return state.applicationRecords.find((record) => record.jobId === jobId);
}

function applicationMessageFor(job) {
  return state.applicationDrafts[job.id] || job.application.message || "";
}

function saveLocalProfileFromForm() {
  const roleInput = document.getElementById("localProfileRole");
  const areaInput = document.getElementById("localProfileArea");
  if (!roleInput && !areaInput) return true;

  state.localProfile = {
    role: cleanLocalText(roleInput?.value),
    area: cleanLocalText(areaInput?.value)
  };

  const saved = writeLocalJson(LOCAL_STORAGE_KEYS.profile, state.localProfile);
  if (!saved) showToast("Il browser non permette di salvare il profilo locale");
  return saved;
}

function clearLocalProfile() {
  state.localProfile = { role: "", area: "" };
  try {
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.profile);
  } catch {
    // The UI still clears the in-memory profile when browser storage is unavailable.
  }
}

function upsertApplicationRecord(job, changes = {}) {
  const existing = getApplicationRecord(job.id);
  const now = new Date().toISOString();
  const next = {
    ...(existing || {
      jobId: job.id,
      status: "bozza",
      createdAt: now,
      sentAt: null
    }),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    updatedAt: now,
    ...changes
  };

  state.applicationRecords = [
    next,
    ...state.applicationRecords.filter((record) => record.jobId !== job.id)
  ];
  writeLocalJson(LOCAL_STORAGE_KEYS.applications, state.applicationRecords);
  updateCounts();
  return next;
}

function applicationDestination(job) {
  const destinationUrl = String(job.application.destinationUrl || "").trim();
  if (/^https:\/\//i.test(destinationUrl)) {
    return { href: destinationUrl, type: "web" };
  }

  const contactEmail = String(job.application.contactEmail || "").trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    const subject = encodeURIComponent(`Candidatura - ${job.title}`);
    return { href: `mailto:${contactEmail}?subject=${subject}`, type: "email" };
  }

  return null;
}

function channelHandoffControl(job) {
  const destination = applicationDestination(job);
  if (!destination) {
    return `
      <div class="destination-missing">
        <strong>Canale ufficiale da verificare</strong>
        <span>Questa scheda demo non contiene un link o un'email pubblicata. Un'offerta reale non viene pubblicata senza destinazione verificata.</span>
      </div>
    `;
  }

  const target = destination.type === "web" ? `target="_blank" rel="noopener noreferrer"` : "";
  const label = destination.type === "web" ? "Apri canale ufficiale" : "Apri email";
  return `
    <a class="primary-button application-handoff" href="${destination.href}" ${target} data-action="open-channel" data-job-id="${job.id}">
      ${label}
    </a>
  `;
}

function applicationKitText(job) {
  const destination = applicationDestination(job);
  const profile = [state.localProfile.role, state.localProfile.area].filter(Boolean).join(" · ");
  return [
    "RADARSANITA - KIT CANDIDATURA",
    "",
    `Posizione: ${job.title}`,
    `Struttura: ${job.company}`,
    `Scadenza: ${job.deadlineLabel}`,
    `Canale: ${job.application.channel}`,
    `Profilo locale: ${profile || "non compilato"}`,
    `Destinazione verificata: ${destination ? destination.href : "manca - verifica la fonte prima di procedere"}`,
    "",
    "DOCUMENTI DA PREPARARE",
    ...job.application.documents.map((document) => `[ ] ${document}`),
    `[ ] ${job.application.missing}`,
    "",
    "MESSAGGIO DA CONTROLLARE",
    applicationMessageFor(job),
    "",
    "L'invio finale, gli allegati, SPID/CIE, CAPTCHA e le dichiarazioni personali restano sul canale ufficiale."
  ].join("\n");
}

function copyApplicationMessage(jobId) {
  const text = applicationMessageFor(getJob(jobId));
  if (!navigator.clipboard?.writeText) {
    showToast("Messaggio pronto nel riquadro: selezionalo e copialo");
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => showToast("Messaggio candidatura copiato"))
    .catch(() => showToast("Messaggio pronto nel riquadro: selezionalo e copialo"));
}

function downloadApplicationKit(jobId) {
  const job = getJob(jobId);
  const text = applicationKitText(job);
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);

  upsertApplicationRecord(job, { status: "kit_scaricato" });

  if (isIos && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast("Kit copiato: incollalo in Note o in un editor"))
      .catch(() => showToast("Kit pronto: aprilo dal messaggio e copialo"));
    return;
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `kit-candidatura-${job.id}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 0);
  showToast("Kit candidatura scaricato");
}

function prepareApplicationRecord(jobId) {
  const job = getJob(jobId);
  upsertApplicationRecord(job, { status: "bozza" });
  renderApplicationsList();
  showToast("Bozza salvata solo su questo dispositivo");
}

function applicationStatusMeta(status) {
  const labels = {
    bozza: ["Bozza locale", "preparing"],
    kit_scaricato: ["Kit pronto", "ready"],
    canale_aperto: ["Canale aperto", "opened"],
    inviata: ["Segnata inviata", "sent"]
  };
  return labels[status] || labels.bozza;
}

function renderApplicationsList() {
  if (!applicationsList) return;
  if (!state.applicationRecords.length) {
    applicationsList.innerHTML = `
      <div class="applications-empty">
        <strong>Nessuna candidatura preparata</strong>
        <span>Quando crei un kit candidatura, comparirà qui solo su questo dispositivo.</span>
        <button class="primary-button" data-route="home">Cerca offerte</button>
      </div>
    `;
    return;
  }

  applicationsList.innerHTML = state.applicationRecords.map((record) => {
    const [label, tone] = applicationStatusMeta(record.status);
    const job = getJob(record.jobId);
    const sentLabel = record.sentAt
      ? `Segnata il ${new Date(record.sentAt).toLocaleDateString("it-IT")}`
      : "Invio finale da confermare";
    return `
      <article class="application-row status-${tone}">
        <span class="status-dot ${tone}"></span>
        <div class="application-row-main">
          <strong>${escapeHtml(job.title)}</strong>
          <span>${escapeHtml(job.company)} · ${sentLabel}</span>
        </div>
        <span class="status-badge">${label}</span>
        <div class="application-row-actions">
          <button class="secondary-button small-button" data-job-id="${record.jobId}" data-action="apply">Continua</button>
          ${record.status === "inviata" ? "" : `<button class="text-button" data-job-id="${record.jobId}" data-action="mark-sent">Segna inviata</button>`}
        </div>
      </article>
    `;
  }).join("");
}

function formatMatch(job) {
  if (job.match >= 92) return "Molto adatta";
  if (job.match >= 84) return "Adatta";
  return "Parzialmente adatta";
}

function isSalaryMissing(job) {
  return /non pubblicat|non indicat|da concordare/i.test(job.salary || "");
}

function salaryFact(job) {
  if (isSalaryMissing(job)) {
    return `<span class="fact-pill pill-unknown"><span aria-hidden="true">!</span> Compenso da chiarire</span>`;
  }
  return `<span class="fact-pill">${job.salary}</span>`;
}

function parseItalianNumber(value) {
  const cleaned = String(value || "")
    .replace(/\s/g, "")
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(",", ".");
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
}

function salaryObservation(job) {
  if (!job || isSalaryMissing(job)) return null;
  const salary = String(job.salary || "");
  const matches = salary.match(/\d+(?:[.\s]\d{3})*(?:,\d+)?/g) || [];
  const values = matches.map(parseItalianNumber).filter((value) => Number.isFinite(value));
  if (!values.length) return null;

  let low = Math.min(...values);
  let high = Math.max(...values);
  let unit = "oraria";
  let method = "Tariffa oraria pubblicata";
  const lower = salary.toLowerCase();

  if (/annua|annuale|ral/.test(lower) || high > 5000) {
    low = low / 1650;
    high = high / 1650;
    unit = "annuale-convertita";
    method = "Range annuo convertito in lordo/ora stimato";
  } else if (/mensile|mese/.test(lower) || high > 80) {
    low = low / 160;
    high = high / 160;
    unit = "mensile-convertita";
    method = "Range mensile convertito in lordo/ora stimato";
  }

  if (!Number.isFinite(low) || !Number.isFinite(high) || high < 7 || low < 6) return null;

  return {
    jobId: job.id,
    title: job.title,
    source: job.source,
    sourceUrl: job.sourceUrl,
    raw: salary,
    low,
    high,
    mid: (low + high) / 2,
    unit,
    method
  };
}

function salaryObservationsForJobs(jobList) {
  return jobList.map(salaryObservation).filter(Boolean);
}

function median(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function marketSummaryFromObservations(observations) {
  const valid = observations.filter((item) => Number.isFinite(item.low) && Number.isFinite(item.high));
  if (!valid.length) return null;
  const lows = valid.map((item) => item.low);
  const highs = valid.map((item) => item.high);
  const mids = valid.map((item) => item.mid);
  const domains = new Set(valid.map((item) => sourceDomain(item.sourceUrl)).filter(Boolean));
  return {
    observations: valid,
    count: valid.length,
    min: Math.min(...lows),
    max: Math.max(...highs),
    median: median(mids),
    converted: valid.filter((item) => item.unit !== "oraria").length,
    domains
  };
}

function formatHourlyRange(low, high) {
  if (!Number.isFinite(low) || !Number.isFinite(high)) return "dato non calcolabile";
  if (Math.abs(low - high) < 0.25) return `€${formatMarketNumber(low)}/h`;
  return `€${formatMarketNumber(low)}-${formatMarketNumber(high)}/h`;
}

function marketObservationsForJob(job) {
  const comparableJobs = state.searchCompleted && state.filteredJobs.length
    ? state.filteredJobs.filter((item) => item.category === job.category)
    : jobs.filter((item) => item.category === job.category);
  const observations = salaryObservationsForJobs(comparableJobs);
  const own = salaryObservation(job);
  if (own && !observations.some((item) => item.jobId === own.jobId)) observations.unshift(own);
  return observations;
}

function observedMarketChart(summary) {
  if (!summary) return "";
  const values = summary.observations.map((item) => item.mid).sort((a, b) => a - b);
  const width = 300;
  const height = 116;
  const pad = 14;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = Math.max(max - min, 1);
  const pointList = values.map((value, index) => {
    const x = pad + (values.length === 1 ? 0.5 : index / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((value - min) / spread) * (height - pad * 2);
    return `${Number(x.toFixed(1))},${Number(y.toFixed(1))}`;
  });
  const points = pointList.join(" ");
  const dotStep = Math.max(1, Math.ceil(pointList.length / 18));
  return `
    <div class="market-chart-wrap trend-flat observed-market-chart">
      <svg class="market-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Distribuzione tariffe osservate">
        <line class="chart-grid" x1="${pad}" y1="${pad}" x2="${width - pad}" y2="${pad}"></line>
        <line class="chart-grid" x1="${pad}" y1="${height / 2}" x2="${width - pad}" y2="${height / 2}"></line>
        <line class="chart-grid" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
        <polygon class="chart-area" points="${pad},${height - pad} ${points} ${width - pad},${height - pad}"></polygon>
        <polyline class="chart-line" points="${points}"></polyline>
        ${pointList.map((point, index) => {
          if (index % dotStep !== 0 && index !== pointList.length - 1) return "";
          const [x, y] = point.split(",");
          const latestClass = index === pointList.length - 1 ? " latest-dot" : "";
          const radius = index === pointList.length - 1 ? 2.8 : 1.45;
          return `<circle class="chart-dot${latestClass}" cx="${x}" cy="${y}" r="${radius}"></circle>`;
        }).join("")}
      </svg>
      <div class="market-chart-labels">
        <span>min</span>
        <span>mediana ${formatHourlyRange(summary.median, summary.median)}</span>
        <span>max</span>
      </div>
    </div>
  `;
}

function httpsUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function sourceDomain(value) {
  const url = httpsUrl(value);
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function sourceEntries(job) {
  if (!Array.isArray(job.sources)) return [];
  return job.sources.map((source, index) => {
    if (Array.isArray(source)) {
      const [name, kind] = source;
      return {
        name: String(name || "Fonte non indicata"),
        kind: String(kind || "separata"),
        url: index === 0 ? httpsUrl(job.sourceUrl) : null,
        checked: ""
      };
    }

    return {
      name: String(source?.name || "Fonte non indicata"),
      kind: String(source?.kind || "separata"),
      url: httpsUrl(source?.url) || (index === 0 ? httpsUrl(job.sourceUrl) : null),
      checked: String(source?.checked || "")
    };
  });
}

function sourceLogoUrl(entry) {
  const domain = sourceDomain(entry?.url);
  return domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64` : "";
}

function sourceAvatarMarkup(entry, className = "source-avatar", decorative = false) {
  const [iconClass, iconLabel] = sourceIconMeta(entry.name || "Fonte", entry.kind || "separata");
  const fullLabel = sourceFullLabel(entry.name || "Fonte", entry.kind || "separata");
  const logoUrl = sourceLogoUrl(entry);
  const sourceLabel = escapeHtml(entry.name || "Fonte");
  const content = logoUrl
    ? `<img class="source-logo-img" src="${logoUrl}" alt="${decorative ? "" : sourceLabel}" loading="lazy" onerror="this.remove();this.nextElementSibling.classList.add('visible')"><span class="source-logo-fallback">${iconLabel}</span>`
    : `<span class="source-logo-fallback visible">${iconLabel}</span>`;
  return decorative
    ? `<span class="${className} ${iconClass}" aria-hidden="true">${content}</span>`
    : `<button class="${className} ${iconClass}" type="button" aria-label="${escapeHtml(fullLabel)}" data-source-full="${escapeHtml(fullLabel)}">${content}</button>`;
}

function sourceCount(job) {
  return sourceEntries(job).length;
}

function sourceRegistryMetrics() {
  const families = Array.isArray(sourceRegistry.families) ? sourceRegistry.families : [];
  const entries = families.flatMap((family) => Array.isArray(family.sources) ? family.sources : []);
  return {
    sources: entries.length,
    linked: entries.filter((entry) => Boolean(httpsUrl(entry.url))).length,
    families: families.length,
    strong: entries.filter((entry) => entry.kind === "ufficiale" || entry.kind === "primaria").length,
    signals: entries.filter((entry) => entry.kind === "segnalazione").length
  };
}

function sourceNameMarkup(entry, className = "") {
  const name = escapeHtml(entry.name);
  if (!entry.url) return `<span class="${className}">${name}</span>`;
  return `<a class="${className} source-outbound-link" href="${entry.url}" target="_blank" rel="noreferrer noopener">${name}<span aria-hidden="true">↗</span></a>`;
}

function sourceProvenance(job) {
  const [entry = { name: "Fonte non indicata", kind: "separata", url: null }] = sourceEntries(job);
  const [label] = sourceKindMeta(entry.kind);
  return `
    <p class="job-source-provenance">
      <span class="source-provenance-label">${label}</span>
      ${sourceNameMarkup({ ...entry, name: job.source || entry.name }, "source-provenance-name")}
    </p>
  `;
}

function jobSourceUrl(job) {
  return httpsUrl(job.sourceUrl) || httpsUrl(job.application?.destinationUrl) || httpsUrl(sourceEntries(job)[0]?.url);
}

function matchTrail(job) {
  return `
    <details class="match-trail">
      <summary>
        <span class="fact-pill match-pill">${formatMatch(job)}</span>
        <span>Perché compare</span>
      </summary>
      <ul class="match-reasons">
        ${job.reasons.map((reason) => `<li>${reason}</li>`).join("")}
      </ul>
    </details>
  `;
}

function workplaceFor(job) {
  return workplaceProfiles[job.id] || {
    media: job.media || { type: "none", reason: "Nessuna immagine ufficiale verificata" },
    facts: [
      `Sede dichiarata: ${job.location}`,
      "Informazioni sul posto da chiedere alla struttura"
    ],
    rating: null,
    reviewCount: 0,
    verifiedReviews: 0,
    reviews: []
  };
}

function verifiedOfferMedia(job) {
  const workplace = workplaceFor(job) || {};
  const media = job.media || workplace.media || {};
  const type = media.type;
  const imageUrl = httpsUrl(media.url);
  const sourceUrl = httpsUrl(media.sourceUrl);

  if ((type === "official-photo" || type === "official-logo") && imageUrl && sourceUrl) {
    return {
      type,
      url: imageUrl,
      sourceUrl,
      alt: String(media.alt || (type === "official-photo" ? "Foto ufficiale della struttura" : "Logo ufficiale della fonte")),
      sourceName: String(media.sourceName || "Fonte ufficiale")
    };
  }

  return { type: "none", reason: String(media.reason || "Nessuna immagine ufficiale verificata") };
}

function renderOfferMedia(job, variant = "card") {
  const media = verifiedOfferMedia(job);
  const [entry = { name: "Fonte da verificare", kind: "separata", url: null }] = sourceEntries(job);
  const [iconClass, iconLabel] = sourceIconMeta(entry.name, entry.kind);
  const isDetail = variant === "detail";
  const wrapperClass = isDetail ? "workplace-hero" : variant === "list" ? "job-list-photo-button" : "job-photo-button";
  const actionAttributes = isDetail
    ? ""
    : ` data-action="detail" data-job-id="${escapeHtml(job.id)}" aria-label="Apri ${escapeHtml(job.title)}"`;

  if (media.type !== "none") {
    const mediaLabel = media.type === "official-photo" ? "Foto ufficiale" : "Logo ufficiale";
    const image = `<img class="${isDetail ? "workplace-media-image" : variant === "list" ? "job-list-photo" : "job-photo"}" src="${media.url}" alt="${escapeHtml(media.alt)}" loading="lazy">`;
    const sourceLabel = isDetail
      ? `<a href="${media.sourceUrl}" target="_blank" rel="noreferrer noopener">${escapeHtml(media.sourceName)} <span aria-hidden="true">↗</span></a>`
      : `<span>${escapeHtml(media.sourceName)}</span>`;
    const caption = `
      <div class="offer-media-caption">
        <span>${mediaLabel}</span>
        ${sourceLabel}
      </div>
    `;
    return isDetail ? `<div class="${wrapperClass} official-offer-media">${image}${caption}</div>` : `<button class="${wrapperClass} official-offer-media"${actionAttributes}>${image}${caption}</button>`;
  }

  const sourceName = isDetail
    ? sourceNameMarkup(entry, "offer-media-source-name")
    : escapeHtml(entry.name);
  const fallback = `
    <span class="offer-media-mark source-avatar ${iconClass}" aria-hidden="true">${iconLabel}</span>
    <span class="offer-media-copy">
      <small>Immagine ufficiale non pubblicata</small>
      <strong>${sourceName}</strong>
      <em>Mostriamo la fonte, non una foto sostitutiva.</em>
    </span>
  `;
  const caption = `
    <div class="offer-media-caption">
      <span>Fonte dell'offerta</span>
      <small>${escapeHtml(media.reason)}</small>
    </div>
  `;
  return isDetail
    ? `<div class="${wrapperClass} source-offer-media">${fallback}${caption}</div>`
    : `<button class="${wrapperClass} source-offer-media"${actionAttributes}>${fallback}</button>`;
}

function marketForJob(job) {
  return marketRates.find((market) => market.key === job.category) || marketRates[0];
}

const ratePeriodLabels = {
  day: "giorni",
  week: "settimane",
  month: "mese"
};

function marketTrendFor(market, period = state.ratePeriod) {
  return market.trend?.[period] || market.trend?.month || {
    label: "mese",
    startLabel: "inizio periodo",
    endLabel: "oggi",
    points: [0, 0]
  };
}

function marketStats(market, period = state.ratePeriod) {
  const trend = marketTrendFor(market, period);
  const points = trend.points.length > 1 ? trend.points : [trend.points[0] || 0, trend.points[0] || 0];
  const previous = points[0];
  const current = points[points.length - 1];
  const delta = current - previous;
  const percent = previous ? (delta / previous) * 100 : 0;
  const direction = Math.abs(percent) < 0.4 ? "flat" : percent > 0 ? "up" : "down";
  return { trend, points, previous, current, delta, percent, direction };
}

function formatMarketNumber(value) {
  return value.toFixed(value % 1 === 0 ? 0 : 1).replace(".", ",");
}

function formatMarketValue(market, value) {
  if (market.unit === "score") return `${Math.round(value)}/100`;
  return `€${formatMarketNumber(value)}/h`;
}

function formatMarketDelta(market, delta) {
  const sign = delta > 0 ? "+" : delta < 0 ? "-" : "";
  const absolute = Math.abs(delta);
  if (market.unit === "score") return `${sign}${Math.round(absolute)} punti`;
  return `${sign}€${formatMarketNumber(absolute)}/h`;
}

function formatTrendPercent(percent) {
  if (Math.abs(percent) < 0.4) return "stabile";
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent.toFixed(1).replace(".", ",")}%`;
}

function ratePeriodControls(compact = false) {
  return `
    <div class="rate-market-controls ${compact ? "compact-controls" : ""}" aria-label="Periodo andamento tariffe">
      <button class="period-button ${state.ratePeriod === "day" ? "selected" : ""}" data-rate-period="day">Giorni</button>
      <button class="period-button ${state.ratePeriod === "week" ? "selected" : ""}" data-rate-period="week">Settimane</button>
      <button class="period-button ${state.ratePeriod === "month" ? "selected" : ""}" data-rate-period="month">Mesi</button>
    </div>
  `;
}

function marketChart(market, options = {}) {
  const { compact = false } = options;
  const stats = marketStats(market);
  const width = compact ? 210 : 250;
  const height = compact ? 72 : 92;
  const pad = 8;
  const min = Math.min(...stats.points);
  const max = Math.max(...stats.points);
  const spread = Math.max(max - min, 1);
  const coords = stats.points.map((value, index) => {
    const x = pad + (index / (stats.points.length - 1)) * (width - pad * 2);
    const y = height - pad - ((value - min) / spread) * (height - pad * 2);
    return [Number(x.toFixed(1)), Number(y.toFixed(1))];
  });
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = [
    `${coords[0][0]},${height - pad}`,
    ...coords.map(([x, y]) => `${x},${y}`),
    `${coords[coords.length - 1][0]},${height - pad}`
  ].join(" ");
  const last = coords[coords.length - 1];

  return `
    <div class="market-chart-wrap trend-${stats.direction}">
      <svg class="market-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Andamento ${stats.trend.label}">
        <line class="chart-grid" x1="${pad}" y1="${pad}" x2="${width - pad}" y2="${pad}"></line>
        <line class="chart-grid" x1="${pad}" y1="${height / 2}" x2="${width - pad}" y2="${height / 2}"></line>
        <line class="chart-grid" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
        <polyline class="chart-area" points="${area}"></polyline>
        <polyline class="chart-line" points="${line}"></polyline>
        <circle class="chart-dot" cx="${last[0]}" cy="${last[1]}" r="${compact ? 3.4 : 4.2}"></circle>
      </svg>
      <div class="market-chart-labels">
        <span>${stats.trend.startLabel}</span>
        <span>${stats.trend.endLabel}</span>
      </div>
    </div>
  `;
}

const categoryLabels = {
  all: "Tutte",
  privato: "Lavoro privato",
  concorso: "Concorsi e avvisi",
  lp: "Libera professione",
  oss: "Opportunità OSS"
};

function stars(score) {
  return `${"★".repeat(score)}${"☆".repeat(5 - score)}`;
}

function sourceKindMeta(kind) {
  const meta = {
    primaria: ["Primaria", "Dato letto dal datore o dall'ente"],
    ufficiale: ["Ufficiale", "Canale istituzionale o portale pubblico"],
    verificata: ["Verificata", "Scheda controllata da RadarSanità"],
    duplicato: ["Duplicato", "Usato per confermare e accorpare"],
    segnalazione: ["Segnalazione", "Indizio territoriale da separare"],
    estratto: ["Estratto", "Dato letto da documento o PDF"],
    separata: ["Separata", "Dato su sede o reputazione non mescolato ai dati ufficiali"]
  };
  return meta[kind] || [kind, "Fonte di supporto"];
}

function sourceIconMeta(name, kind) {
  const normalized = name.toLowerCase();
  if (normalized.includes("inpa")) return ["source-albo", "inPA"];
  if (normalized.includes("azienda zero") || normalized.includes("regione")) return ["source-albo", "PA"];
  if (normalized.includes("asl") || normalized.includes("bando")) return ["source-asl", "ASL"];
  if (normalized.includes("opi")) return ["source-opi", "OPI"];
  if (normalized.includes("rsa") || normalized.includes("struttura") || normalized.includes("datore")) return ["source-rsa", "RSA"];
  if (normalized.includes("linkedin")) return ["source-linkedin", "in"];
  if (normalized.includes("infojobs")) return ["source-infojobs", "ij"];
  if (normalized.includes("indeed")) return ["source-indeed", "id"];
  if (normalized.includes("albo") || normalized.includes("portale pubblico")) return ["source-albo", "Al"];
  if (normalized.includes("gruppo") || normalized.includes("segnalazione") || kind === "segnalazione") return ["source-social", "So"];
  if (kind === "ufficiale" || kind === "primaria") return ["source-albo", "Uf"];
  if (kind === "duplicato") return ["source-infojobs", "Du"];
  return ["source-radar", "R"];
}

function sourceFullLabel(name, kind) {
  const normalized = name.toLowerCase();
  if (normalized.includes("asl") || normalized.includes("bando")) return "ASL: Azienda Sanitaria Locale, bandi e avvisi aziendali";
  if (normalized.includes("opi")) return "OPI: Ordine delle Professioni Infermieristiche";
  if (normalized.includes("rsa") || normalized.includes("struttura") || normalized.includes("datore")) return "RSA: Residenza Sanitaria Assistenziale o struttura privata";
  if (normalized.includes("linkedin")) return "LinkedIn: social e portale professionale";
  if (normalized.includes("infojobs")) return "InfoJobs: portale lavoro generalista";
  if (normalized.includes("indeed")) return "Indeed: portale lavoro generalista";
  if (normalized.includes("albo") || normalized.includes("portale pubblico")) return "Albo: albo pretorio o portale pubblico ufficiale";
  if (normalized.includes("gruppo") || normalized.includes("segnalazione") || kind === "segnalazione") return "Segnalazione territoriale: gruppo, passaparola o fonte locale da verificare";
  if (kind === "ufficiale" || kind === "primaria") return "Fonte ufficiale: canale istituzionale o fonte primaria";
  if (kind === "duplicato") return "Duplicato: offerta trovata su piu canali e accorpata";
  return "RadarSanità: dato rielaborato e collegato alla fonte";
}

function sourceConfidence(job) {
  const strongKinds = new Set(["primaria", "ufficiale", "verificata"]);
  const strongSources = sourceEntries(job).filter(({ kind }) => strongKinds.has(kind)).length;
  const checkedToday = job.checked.toLowerCase().includes("oggi");

  if (checkedToday && strongSources >= 2) {
    return {
      value: "Alta",
      note: "Più fonti forti e controllo recente",
      level: "high"
    };
  }

  if (strongSources >= 1) {
    return {
      value: "Media",
      note: "Presente almeno una fonte forte",
      level: "medium"
    };
  }

  return {
    value: "Da verificare",
    note: "Prevalgono fonti secondarie",
    level: "low"
  };
}

function applicationEffort(job) {
  const applicationText = [
    job.application.channel,
    job.application.missing,
    ...job.application.documents
  ].join(" ").toLowerCase();

  if (applicationText.includes("spid") || applicationText.includes("cie")) {
    return {
      value: "SPID/CIE",
      note: "Accesso personale richiesto",
      level: "high"
    };
  }

  if (applicationText.includes("partita iva") || applicationText.includes("polizza")) {
    return {
      value: "Requisito amm.",
      note: "Serve confermare requisiti amministrativi",
      level: "medium"
    };
  }

  if (job.application.missing && !job.application.missing.toLowerCase().includes("nessun")) {
    return {
      value: "1 conferma",
      note: job.application.missing.replace(/^Conferma\s+/i, ""),
      level: "low"
    };
  }

  if (job.application.documents.length <= 2) {
    return {
      value: "Pronta",
      note: "Pochi documenti da preparare",
      level: "low"
    };
  }

  return {
    value: "Documenti",
    note: "Documenti standard da controllare",
    level: "medium"
  };
}

function deadlineSignal(job) {
  if (!job.deadline) {
    return { value: job.deadlineLabel, note: "Scadenza non indicata nella fonte", level: "medium" };
  }
  const today = new Date();
  const deadline = new Date(`${job.deadline}T12:00:00`);
  const days = Math.ceil((deadline - today) / 86400000);

  if (!Number.isFinite(days)) {
    return { value: job.deadlineLabel, note: "Scadenza indicata nella fonte", level: "medium" };
  }

  if (days < 0) return { value: "Scaduta", note: "Scadenza superata nella fonte", level: "high" };
  if (days === 0) return { value: "Oggi", note: "Scade oggi", level: "high" };
  if (days <= 4) return { value: "Alta", note: `Scade tra ${days} giorni`, level: "high" };
  if (days <= 10) return { value: "Media", note: `Scade tra ${days} giorni`, level: "medium" };
  return { value: "Bassa", note: `Scade tra ${days} giorni`, level: "low" };
}

function valueSignal(job) {
  const market = marketForJob(job);
  if (job.salary.toLowerCase().includes("non")) {
    return {
      value: "Da stimare",
      note: `Mercato simile: ${market.range}`,
      level: "medium"
    };
  }

  return {
    value: "Pubblicato",
    note: `${job.salary} · mercato ${market.range}`,
    level: "high"
  };
}

function professionalReviewsFor(job) {
  const workplace = workplaceFor(job);
  return Array.isArray(workplace.reviews)
    ? workplace.reviews.filter((review) => /infermier|oss|profession|lavorativ|operat|dipendent|collabor/i.test(`${review.role} ${review.source}`))
    : [];
}

function operatorFeedbackBadge(job) {
  const reviews = professionalReviewsFor(job);
  if (!reviews.length) {
    return `<span class="workplace-score empty-operator-score">Reputazione professionale da approfondire</span>`;
  }
  const workplace = workplaceFor(job);
  return `<span class="workplace-score">${workplace.rating} ★ · ${reviews.length} segnali professionali</span>`;
}

function decisionStrip(job) {
  const trust = sourceConfidence(job);
  const urgency = deadlineSignal(job);
  const value = valueSignal(job);
  const operatorReviews = professionalReviewsFor(job);

  const cells = [
    ["trust", "Fiducia dati", trust.value, trust.note, trust.level],
    ["value", "Mercato", value.value, value.note, value.level],
    ["effort", "Reputazione", operatorReviews.length ? `${operatorReviews.length} segnali` : "Da approfondire", operatorReviews.length ? "Esperienze professionali disponibili" : "Nessun segnale professionale collegato", operatorReviews.length ? "medium" : "low"],
    ["urgency", "Urgenza", urgency.value, urgency.note, urgency.level]
  ];

  return `
    <div class="decision-strip" aria-label="Sintesi decisionale">
      ${cells.map(([tone, label, value, note, level]) => `
        <div class="decision-cell tone-${tone} level-${level}">
          <small>${label}</small>
          <strong>${value}</strong>
          <span>${note}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function infoMap(job, workplace) {
  const operatorReviews = professionalReviewsFor(job);
  return `
    <div class="info-map" aria-label="Mappa delle informazioni principali">
      <div class="info-map-item money">
        <span>Economia</span>
        <strong>${job.salary}</strong>
        <small>${job.contract}</small>
      </div>
      <div class="info-map-item time">
        <span>Turni</span>
        <strong>${job.shifts}</strong>
        <small>${job.schedule}</small>
      </div>
      <div class="info-map-item place">
        <span>Sede</span>
        <strong>${distanceLabelForJob(job, " da te")}</strong>
        <small>${workplace.facts[0]}</small>
      </div>
      <div class="info-map-item effort">
        <span>Reputazione</span>
        <strong>${operatorReviews.length ? `${operatorReviews.length} segnali` : "non raccolti"}</strong>
        <small>Esperienze professionali</small>
      </div>
    </div>
  `;
}

function sourceTrustPanel(job) {
  return `
    <div class="source-trust-panel">
      <div class="source-trust-heading">
        <strong>Affidabilità del dossier</strong>
        <span>${sourceConfidence(job).note}. Sponsorizzazioni e compatibilità restano separate.</span>
      </div>
      <div class="source-trust-grid">
        ${sourceEntries(job).map((entry) => {
          const [label, description] = sourceKindMeta(entry.kind);
          return `
            <div class="source-trust-card source-${entry.kind}">
              ${sourceAvatarMarkup(entry)}
              <small>${label}</small>
              ${sourceNameMarkup(entry, "source-trust-name")}
              <span>${description}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function applicationEffortPanel(job) {
  const effort = applicationEffort(job);
  return `
    <div class="application-effort-panel effort-${effort.level}">
      <div>
        <span>Passaggio da completare</span>
        <strong>${effort.value}</strong>
        <small>${effort.note}</small>
      </div>
      <ul>
        <li><strong>Canale</strong><span>${job.application.channel}</span></li>
        <li><strong>Documenti</strong><span>${job.application.documents.join(", ")}</span></li>
        <li><strong>Da completare</strong><span>${job.application.missing}</span></li>
      </ul>
    </div>
  `;
}

function sourceChips(job, limit = 3) {
  return `
    <div class="source-chips" aria-label="Fonti dell'offerta">
      ${sourceEntries(job).slice(0, limit).map((entry) => {
        return `
        <span class="source-chip source-${entry.kind}">
          ${sourceAvatarMarkup(entry)}
          ${sourceNameMarkup(entry, "source-chip-name")}
        </span>
      `;
      }).join("")}
    </div>
  `;
}

function sponsorBadge(job) {
  if (!job.sponsored) return "";
  return `<span class="sponsored-badge">In evidenza</span>`;
}

function choiceArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return [value];
}

function readCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
    .map((input) => input.value)
    .filter(Boolean);
}

function setCheckedValues(name, values, fallback = "any") {
  const selected = new Set(choiceArray(values));
  if (!selected.size && fallback) selected.add(fallback);
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = selected.has(input.value);
  });
}

function keepAnyChoiceExclusive(groupName, changedInput) {
  if (!changedInput?.checked) {
    const checked = readCheckedValues(groupName);
    if (!checked.length) setCheckedValues(groupName, ["any"]);
    return;
  }
  const inputs = Array.from(document.querySelectorAll(`input[name="${groupName}"]`));
  if (changedInput.value === "any") {
    inputs.forEach((input) => {
      input.checked = input === changedInput;
    });
    return;
  }
  inputs.forEach((input) => {
    if (input.value === "any") input.checked = false;
  });
}

function compactChoices(values, fallback = "any") {
  const selected = choiceArray(values);
  if (!selected.length) return fallback ? [fallback] : [];
  return selected.includes("any") && selected.length > 1
    ? selected.filter((value) => value !== "any")
    : selected;
}

function choicesLabel(values, labels, fallback) {
  const selected = compactChoices(values, "any");
  if (!selected.length || selected.includes("any")) return fallback;
  return selected.map((value) => labels[value]).filter(Boolean).join(", ");
}

function shiftPreferenceLabel(values) {
  return choicesLabel(values, shiftPreferenceLabels, "turni aperti");
}

function availabilityPreferenceLabel(values = state.searchProfile.availability) {
  const selected = values || readCheckedValues("availabilityFilter");
  return choicesLabel(selected, availabilityPreferenceLabels, "disponibilità da concordare");
}

function requestSignals() {
  if (state.searchCompleted) {
    const profile = state.searchProfile;
    return [searchRoleLabels[profile.role], searchDistanceLabel(profile), shiftPreferenceLabel(profile.shifts)].filter(Boolean);
  }
  const query = state.searchQuery.toLowerCase();
  const signals = [];
  if (query.includes("torino")) signals.push("zona Torino");
  if (query.includes("senza notti") || query.includes("niente notti")) signals.push("no notti");
  if (query.includes("indeterminato")) signals.push("stabilità");
  if (query.includes("oss")) signals.push("profilo OSS");
  if (query.includes("partita iva") || query.includes("libera professione")) signals.push("LP/partita IVA");
  return signals.length ? signals : ["preferenze del profilo"];
}

const searchRoleLabels = {
  infermiere: "Infermiere/a",
  oss: "OSS"
};

const shiftPreferenceLabels = {
  any: "turni aperti",
  noNights: "senza notti",
  dayOnly: "solo diurno",
  twoShifts: "due turni",
  threeShifts: "tre turni"
};

const availabilityPreferenceLabels = {
  any: "disponibilità da concordare",
  immediate: "disponibile da subito",
  days: "inizio entro pochi giorni",
  weeks: "inizio entro poche settimane",
  months: "inizio tra alcuni mesi"
};

const italianPlaceCatalog = [
  ["Torino", 45.0703, 7.6869],
  ["Lanzo Torinese", 45.2763, 7.4787],
  ["Ciriè", 45.2341, 7.6016],
  ["Venaria Reale", 45.1356, 7.6316],
  ["San Mauro Torinese", 45.1038, 7.7682],
  ["Ivrea", 45.4676, 7.8758],
  ["Alessandria", 44.9125, 8.6189],
  ["Asti", 44.9008, 8.2066],
  ["Cuneo", 44.3845, 7.5427],
  ["Novara", 45.4469, 8.6222],
  ["Milano", 45.4642, 9.19],
  ["Bergamo", 45.6983, 9.6773],
  ["Capriate San Gervasio", 45.6107, 9.5307],
  ["Brescia", 45.5416, 10.2118],
  ["Varese", 45.8206, 8.8251],
  ["Genova", 44.4056, 8.9463],
  ["Bologna", 44.4949, 11.3426],
  ["Parma", 44.8015, 10.328],
  ["Modena", 44.6471, 10.9252],
  ["Firenze", 43.7696, 11.2558],
  ["Pisa", 43.7228, 10.4017],
  ["Venezia", 45.4408, 12.3155],
  ["Padova", 45.4064, 11.8768],
  ["Verona", 45.4384, 10.9916],
  ["Roma", 41.9028, 12.4964],
  ["Orvieto", 42.7185, 12.1107],
  ["Napoli", 40.8518, 14.2681],
  ["Salerno", 40.6824, 14.7681],
  ["Bari", 41.1171, 16.8719],
  ["Lecce", 40.352, 18.169],
  ["Pescara", 42.4618, 14.2161],
  ["Ancona", 43.6158, 13.5189],
  ["Palermo", 38.1157, 13.3615],
  ["Catania", 37.5079, 15.083],
  ["Cagliari", 39.2238, 9.1217]
].map(([label, lat, lng]) => ({ label, lat, lng }));

function jobMatchesSearchProfile(job) {
  const profile = state.searchProfile;
  if (!state.searchCompleted) return false;
  if (job.publicationStatus !== "published") return false;
  if (profile.role === "oss" && job.category !== "oss") return false;
  if (profile.role === "infermiere" && job.category === "oss") return false;
  if (Number(profile.distance) < 9999) {
    const distance = distanceFromSearchOrigin(job);
    if (distance === null || distance > Number(profile.distance)) return false;
  }
  if (!contractMatches(job, profile.contracts)) return false;
  if (!shiftMatches(job, profile.shifts)) return false;
  return true;
}

function jobMatchesBaseSearchProfile(job) {
  const profile = state.searchProfile;
  if (!state.searchCompleted) return false;
  if (job.publicationStatus !== "published") return false;
  if (profile.role === "oss" && job.category !== "oss") return false;
  if (profile.role === "infermiere" && job.category === "oss") return false;
  if (Number(profile.distance) < 9999) {
    const distance = distanceFromSearchOrigin(job);
    if (distance === null || distance > Number(profile.distance)) return false;
  }
  return true;
}

function validCoordinates(value) {
  const lat = Number(value?.lat);
  const lng = Number(value?.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  return { lat, lng };
}

function distanceInKm(origin, destination) {
  const earthRadiusKm = 6371;
  const radians = (value) => (value * Math.PI) / 180;
  const dLat = radians(destination.lat - origin.lat);
  const dLng = radians(destination.lng - origin.lng);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(radians(origin.lat)) * Math.cos(radians(destination.lat)) * Math.sin(dLng / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function distanceFromSearchOrigin(job) {
  const origin = validCoordinates(state.searchProfile.origin);
  const destination = validCoordinates(job.coordinates);
  if (!origin || !destination) return null;
  return Number(distanceInKm(origin, destination).toFixed(1));
}

function distanceLabelForJob(job, suffix = "") {
  const distance = distanceFromSearchOrigin(job);
  return distance === null ? "Distanza non disponibile" : `${distance} km${suffix}`;
}

function searchDistanceLabel(profile = state.searchProfile) {
  const distance = Number(profile.distance);
  if (distance >= 9999) return "in tutta Italia";
  return distance ? `entro ${distance} km dalla tua posizione` : "raggio da definire";
}

function resultsSummaryForProfile() {
  const profile = state.searchProfile;
  const parts = [
    searchRoleLabels[profile.role],
    searchDistanceLabel(profile),
    shiftPreferenceLabel(profile.shifts),
    availabilityPreferenceLabel(profile.availability)
  ].filter(Boolean);
  return parts.join(" · ");
}

function normalized(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeContractValue(value) {
  const text = normalized(value);
  if (!text) return "";
  if (text.includes("indeterminato")) return "tempo-indeterminato";
  if (text.includes("determinato")) return "tempo-determinato";
  if (text.includes("partita iva") || text.includes("libera professione")) return "partita-iva";
  return text;
}

function contractMatches(job, selectedContracts = []) {
  if (!selectedContracts.length) return true;
  const selected = new Set(selectedContracts.map(normalizeContractValue));
  return selected.has(normalizeContractValue(job.contract));
}

function shiftMatches(job, preference) {
  const preferences = compactChoices(preference, "any");
  const shifts = normalized(job.shifts);
  if (!preferences.length || preferences.includes("any")) return true;
  return preferences.some((selected) => {
    if (selected === "noNights") return job.nights !== true;
    if (selected === "dayOnly") return job.nights === false || shifts.includes("solo diurn");
    if (selected === "twoShifts") return shifts.includes("due turni") || shifts.includes("2 turni");
    if (selected === "threeShifts") return shifts.includes("tre turni") || shifts.includes("3 turni");
    return false;
  });
}

function syncResultControlsFromSearch() {
  const profile = state.searchProfile;
  const roleCategory = profile.role === "oss" ? "oss" : "all";
  const selectedContracts = new Set(profile.contracts.map(normalizeContractValue));
  selectCategory(roleCategory);
  document.getElementById("categoryFilter").value = roleCategory;
  document.getElementById("distanceFilter").value = String(profile.distance);
  setCheckedValues("shiftFilter", profile.shifts);
  setCheckedValues("availabilityFilter", profile.availability);
  document.querySelectorAll('input[name="contract"]').forEach((input) => {
    input.checked = selectedContracts.has(normalizeContractValue(input.value));
  });
}

function renderResultsTriage() {
  if (!resultsTriage || !state.searchCompleted) return;
  const profile = state.searchProfile;
  const sourceCount = new Set(state.filteredJobs.flatMap((job) => sourceEntries(job).map(({ name }) => name))).size;
  resultsTriage.innerHTML = `
    <div><small>Profilo</small><strong>${searchRoleLabels[profile.role]}</strong><span>${searchDistanceLabel(profile)}</span></div>
    <div><small>Vincoli scelti</small><strong>${shiftPreferenceLabel(profile.shifts)}</strong><span>${availabilityPreferenceLabel(profile.availability)}</span></div>
    <div><small>${state.softFallbackActive ? "Da verificare" : "Risultati nel perimetro"}</small><strong>${state.filteredJobs.length}</strong><span>${sourceCount} fonti nelle schede</span></div>
  `;
}

function renderScreening() {
  if (!screeningGrid) return;
  const publishedJobs = jobs.filter((job) => job.publicationStatus === "published");
  const excludedByNight = publishedJobs.filter((job) => job.nights).length;
  const activeDistance = Number(document.getElementById("distanceFilter").value);
  const outsideDistance = activeDistance >= 9999 ? 0 : publishedJobs.filter((job) => {
    const distance = distanceFromSearchOrigin(job);
    return distance === null || distance > activeDistance;
  }).length;
  const visibleSources = new Set(state.filteredJobs.flatMap((job) => sourceEntries(job).map(({ name }) => name)));
  const signals = requestSignals();

  const sourceLinks = state.filteredJobs.flatMap((job) => sourceEntries(job));
  const snapshot = window.RADAR_DATA?.searchSnapshot || {};
  const snapshotLabel = String(snapshot.checked || "data non indicata");
  const snapshotSources = Number(snapshot.sourcesUsed) || new Set(
    publishedJobs.flatMap((job) => sourceEntries(job).map(({ name }) => name))
  ).size;
  const screeningTitle = document.getElementById("screeningTitle");

  if (!state.filteredJobs.length) {
    if (screeningTitle) screeningTitle.textContent = "Nessun risultato con questi vincoli";
    screeningSummary.textContent = `La raccolta verificata del ${snapshotLabel} contiene ${publishedJobs.length} schede attive da ${snapshotSources} fonti. Nessuna scheda rispetta tutti i filtri selezionati: non sostituiamo il risultato con annunci generici.`;
    screeningGrid.innerHTML = `
      <div class="screening-tile"><strong>0</strong><span>risultati adatti ai filtri</span></div>
      <div class="screening-tile"><strong>${publishedJobs.length}</strong><span>schede attive nella raccolta</span></div>
      <div class="screening-tile"><strong>${snapshotSources}</strong><span>fonti usate nella raccolta</span></div>
      <div class="screening-tile warning-screening"><strong>${excludedByNight + outsideDistance}</strong><span>escluse dai filtri attivi</span></div>
    `;
    return;
  }

  if (screeningTitle) screeningTitle.textContent = state.softFallbackActive ? "Nessuna corrispondenza perfetta: ecco cosa verificare" : "Perché vedi questi risultati";
  screeningSummary.textContent = state.softFallbackActive
    ? `Raccolta verificata il ${snapshotLabel}. I vincoli selezionati non hanno prodotto una corrispondenza perfetta; mostro schede reali nel perimetro per controllare fonte, turni, contratto e candidatura.`
    : `Raccolta verificata il ${snapshotLabel}. Filtri applicati: ${signals.join(", ")}; ${availabilityPreferenceLabel()}. Apri ogni scheda per vedere fonte, dati dichiarati e canale di candidatura.`;
  screeningGrid.innerHTML = `
    <div class="screening-tile">
      <strong>${sourceLinks.filter(({ url }) => url).length}</strong>
      <span>fonti con link nelle schede</span>
    </div>
    <div class="screening-tile">
      <strong>${visibleSources.size}</strong>
      <span>fonti nei risultati visibili</span>
    </div>
    <div class="screening-tile">
      <strong>${snapshotSources}</strong>
      <span>fonti usate nella raccolta</span>
    </div>
    <div class="screening-tile warning-screening">
      <strong>${excludedByNight + outsideDistance}</strong>
      <span>${state.softFallbackActive ? "vincoli da verificare" : "scartate per filtri attivi"}</span>
    </div>
  `;
}

function renderPersonalMarket() {
  if (!personalMarketPanel || !state.searchCompleted) return;
  const profile = state.searchProfile;
  const salaryObservations = salaryObservationsForJobs(state.filteredJobs);
  const summary = marketSummaryFromObservations(salaryObservations);
  const role = searchRoleLabels[profile.role];
  const area = searchDistanceLabel(profile);

  personalMarketPanel.innerHTML = `
    <div class="personal-market-copy">
      <span class="eyebrow">Stima mercato tariffe</span>
      <h2>${role} · ${area}</h2>
      <p>Confronta le retribuzioni pubblicate nelle offerte trovate per il tuo ruolo e nel perimetro scelto. Serve a capire se il mercato si sta muovendo verso il basso, in linea o verso offerte piu alte.</p>
      <button class="text-button" data-action="open-sources">Controlla l'origine dei dati</button>
    </div>
    <div class="personal-market-chart">
      ${summary ? observedMarketChart(summary) : `<img src="assets/function-visuals/rate-market-clean.svg" alt="Grafico stilizzato della borsa tariffe">`}
    </div>
    <div class="personal-market-status ${summary ? "available" : "empty"}">
      <strong>${summary ? formatHourlyRange(summary.min, summary.max) : "Nessun range affidabile"}</strong>
      <span>${summary ? `${summary.count} retribuzioni pubblicate · mediana ${formatHourlyRange(summary.median, summary.median)}${summary.converted ? ` · ${summary.converted} convertite da annuo/mensile` : ""}` : "Nessun valore viene stimato se le fonti non pubblicano retribuzioni."}</span>
    </div>
  `;
}

function rejectionReasonsForJob(job) {
  const profile = state.searchProfile;
  const reasons = [];
  if (profile.role === "oss" && job.category !== "oss") reasons.push("profilo diverso da OSS");
  if (profile.role === "infermiere" && job.category === "oss") reasons.push("profilo OSS, non infermieristico");
  if (Number(profile.distance) < 9999) {
    const distance = distanceFromSearchOrigin(job);
    if (distance === null) reasons.push("distanza non calcolabile dalla tua posizione");
    if (distance !== null && distance > Number(profile.distance)) reasons.push(`${distance} km, fuori dal raggio scelto`);
  }
  if (!contractMatches(job, profile.contracts)) reasons.push(`contratto: ${job.contract}`);
  if (!shiftMatches(job, profile.shifts)) {
    const shiftLabel = job.shifts || "turni non dichiarati";
    reasons.push(`turni: ${shiftLabel}`);
  }
  if (state.selectedCategory !== "all" && job.category !== state.selectedCategory) reasons.push("tipologia diversa dal filtro risultati");

  const filterContracts = Array.from(document.querySelectorAll('input[name="contract"]:checked')).map((input) => input.value);
  if (!contractMatches(job, filterContracts)) reasons.push(`filtro contratto non compatibile`);
  const filterShift = readCheckedValues("shiftFilter");
  if (!shiftMatches(job, filterShift)) reasons.push("filtro turni non compatibile");

  return [...new Set(reasons)].slice(0, 3);
}

function renderSearchAnalysis() {
  const container = document.getElementById("searchAnalysis");
  if (!container) return;
  if (!state.searchCompleted || state.filteredJobs.length) {
    container.innerHTML = "";
    return;
  }

  const evaluatedJobs = jobs
    .filter((job) => job.publicationStatus === "published")
    .slice(0, 6);

  if (!evaluatedJobs.length) {
    container.innerHTML = `<strong>Nessuna scheda attiva nell'indice locale.</strong>`;
    return;
  }

  container.innerHTML = `
    <strong>${evaluatedJobs.length} schede verificate analizzate</strong>
    <div class="search-analysis-list">
      ${evaluatedJobs.map((job) => {
        const reasons = rejectionReasonsForJob(job);
        const sourceUrl = httpsUrl(sourceEntries(job).find((entry) => entry.url)?.url || job.sourceUrl);
        return `
          <article>
            <span>${escapeHtml(job.source || "Fonte verificata")}</span>
            <b>${escapeHtml(job.title)}</b>
            <small>${escapeHtml(reasons.length ? reasons.join(" · ") : "compatibile: modifica un filtro secondario")}</small>
            <div class="search-analysis-actions">
              <button type="button" data-action="detail" data-job-id="${escapeHtml(job.id)}">Apri scheda</button>
              ${sourceUrl ? `<a href="${sourceUrl}" target="_blank" rel="noreferrer noopener">Fonte</a>` : ""}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function jobCard(job) {
  const saved = state.saved.has(job.id);
  const workplace = workplaceFor(job);
  const sourceUrl = jobSourceUrl(job);
  return `
    <article class="job-card">
      ${renderOfferMedia(job)}
      <div class="job-card-top">
        <div>
          <span class="job-type">${job.type}</span>
          ${sponsorBadge(job)}
          <h3>${job.title}</h3>
          <div class="company-line">${job.company} · ${job.location}</div>
        </div>
        <button
          class="save-button ${saved ? "saved" : ""}"
          data-action="save"
          data-job-id="${job.id}"
          aria-label="${saved ? "Rimuovi dai salvati" : "Salva offerta"}"
        >${saved ? "♥" : "♡"}</button>
      </div>
      <span class="match-badge">${formatMatch(job)}</span>
      ${sourceChips(job, 2)}
      <div class="job-meta">
        <div class="meta-item"><small>Distanza</small><strong>${distanceLabelForJob(job)}</strong></div>
        <div class="meta-item"><small>Contratto</small><strong>${job.contract}</strong></div>
        <div class="meta-item"><small>Turni</small><strong>${job.shifts}</strong></div>
        <div class="meta-item"><small>Scadenza</small><strong>${job.deadlineLabel}</strong></div>
      </div>
      <ul class="job-card-reasons">
        ${job.reasons.slice(0, 3).map((reason) => `<li>${reason}</li>`).join("")}
      </ul>
      <div class="card-actions">
        <button class="secondary-button" data-action="detail" data-job-id="${job.id}">
          Vedi tutto
        </button>
        ${sourceUrl ? `<a class="primary-button" href="${sourceUrl}" target="_blank" rel="noreferrer noopener">Candidati</a>` : ""}
      </div>
    </article>
  `;
}

function jobListCard(job, index = 0, total = 1) {
  const saved = state.saved.has(job.id);
  const workplace = workplaceFor(job);
  const sourceUrl = jobSourceUrl(job);
  return `
    <article class="job-list-card result-swipe-card" data-deck-index="${index}" aria-label="Offerta ${index + 1} di ${total}: ${escapeHtml(job.title)}">
      <div class="deck-card-kicker">
        <span>${index + 1} di ${total}</span>
        <strong>${state.softFallbackActive ? "Da verificare" : "Compatibile"}</strong>
      </div>
      <div class="job-list-layout">
        ${renderOfferMedia(job, "list")}
        <div class="job-list-main">
          <div class="job-list-card-top">
            <div>
              <span class="job-type">${job.type}</span>
              ${sponsorBadge(job)}
              ${state.softFallbackActive ? `<span class="verify-badge">Da verificare sui vincoli</span>` : ""}
              <h3>${job.title}</h3>
              <p>${job.company} · ${job.location} · ${distanceLabelForJob(job)}</p>
              ${sourceProvenance(job)}
              ${operatorFeedbackBadge(job)}
              ${sourceChips(job)}
              <div class="deck-reason-strip">
                ${job.reasons.slice(0, 2).map((reason) => `<span>${escapeHtml(reason)}</span>`).join("")}
              </div>
            </div>
            <button
              class="save-button ${saved ? "saved" : ""}"
              data-action="save"
              data-job-id="${job.id}"
              aria-label="${saved ? "Rimuovi dai salvati" : "Salva offerta"}"
            >${saved ? "♥" : "♡"}</button>
          </div>
          <div class="list-card-body">
            <div class="list-facts">
              <span class="fact-pill">${job.contract}</span>
              <span class="fact-pill">${job.schedule}</span>
              <span class="fact-pill">${job.shifts}</span>
              ${salaryFact(job)}
            </div>
            <div class="list-actions">
              <button class="secondary-button" data-action="detail" data-job-id="${job.id}">
                Entra nella scheda
              </button>
              ${sourceUrl ? `<a class="primary-button" href="${sourceUrl}" target="_blank" rel="noreferrer noopener">Candidati</a>` : ""}
            </div>
            <small class="deck-card-hint">Scorri verso il basso per la prossima offerta.</small>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  if (!featuredJobs) return;
  featuredJobs.innerHTML = jobs.slice(0, 3).map(jobCard).join("");
}

function renderCoverageDashboard() {
  const registry = sourceRegistryMetrics();
  const fields = {
    coverageMonitored: registry.sources,
    coverageChecked: registry.families,
    coverageDuplicates: registry.strong,
    coverageExcluded: registry.signals
  };

  Object.entries(fields).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function renderSourceRegistry() {
  if (!sourceRegistryList) return;
  const families = Array.isArray(sourceRegistry.families) ? sourceRegistry.families : [];
  sourceRegistryList.innerHTML = families.map((family) => `
    <article class="source-registry-family">
      <h3>${escapeHtml(family.label || "Fonti")}</h3>
      <div class="source-registry-items">
        ${(Array.isArray(family.sources) ? family.sources : []).map((entry) => {
          const url = httpsUrl(entry.url);
          const description = escapeHtml(entry.scope || sourceKindMeta(entry.kind || "separata")[1]);
          const body = `
            ${sourceAvatarMarkup(entry, "source-avatar", true)}
            <span><strong>${escapeHtml(entry.name || "Fonte")}</strong><small>${description}</small></span>
          `;
          return url
            ? `<a class="source-registry-item" href="${url}" target="_blank" rel="noreferrer noopener">${body}<b aria-hidden="true">↗</b></a>`
            : `<div class="source-registry-item unavailable">${body}<em>In mappatura</em></div>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderRateMarket() {
  if (!rateMarketList) return;
  document.querySelectorAll("[data-rate-period]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.ratePeriod === state.ratePeriod);
  });
  rateMarketList.innerHTML = marketRates.map((market) => {
    const stats = marketStats(market);
    return `
    <article class="rate-card trend-${stats.direction}">
      <div class="rate-card-top">
        <div>
          <span>${market.role}</span>
          <strong>${market.label}</strong>
        </div>
        <em>${market.demand}</em>
      </div>
      <div class="rate-value-row">
        <div class="rate-value">${formatMarketValue(market, stats.current)}</div>
        <span class="trend-pill trend-${stats.direction}">${formatTrendPercent(stats.percent)}</span>
      </div>
      ${marketChart(market)}
      <div class="rate-detail">
        <span>${market.area}</span>
        <span>${market.urgent}</span>
        <span>Range: ${market.range}</span>
      </div>
      <p>${market.signal}</p>
      <div class="rate-card-foot">
        <span>${formatMarketDelta(market, stats.delta)} vs ${stats.trend.startLabel}</span>
        <span>${stats.trend.label}</span>
      </div>
      <small>${market.status}</small>
    </article>
  `;
  }).join("");
}

function applyJobFilters() {
  if (!state.searchCompleted) {
    state.filteredJobs = [];
    state.exactResultsCount = 0;
    state.softFallbackActive = false;
    return;
  }
  const maxDistance = Number(document.getElementById("distanceFilter").value);
  const contracts = Array.from(document.querySelectorAll('input[name="contract"]:checked'))
    .map((input) => input.value);
  const shiftPreference = readCheckedValues("shiftFilter");

  const exactMatches = jobs.filter((job) => {
    if (!jobMatchesSearchProfile(job)) return false;
    if (state.selectedCategory !== "all" && job.category !== state.selectedCategory) return false;
    const jobDistance = distanceFromSearchOrigin(job);
    if (maxDistance < 9999 && (jobDistance === null || jobDistance > maxDistance)) return false;
    if (!contractMatches(job, contracts)) return false;
    if (!shiftMatches(job, shiftPreference)) return false;
    return true;
  });

  state.exactResultsCount = exactMatches.length;
  state.softFallbackActive = false;
  state.filteredJobs = exactMatches;

  if (!state.filteredJobs.length) {
    state.filteredJobs = jobs.filter((job) => {
      if (!jobMatchesBaseSearchProfile(job)) return false;
      if (state.selectedCategory !== "all" && job.category !== state.selectedCategory) return false;
      const jobDistance = distanceFromSearchOrigin(job);
      if (maxDistance < 9999 && (jobDistance === null || jobDistance > maxDistance)) return false;
      return true;
    });
    state.softFallbackActive = state.filteredJobs.length > 0;
  }

  const sort = document.getElementById("sortJobs").value;
  state.filteredJobs.sort((a, b) => {
    if (sort === "distance") return (distanceFromSearchOrigin(a) ?? Infinity) - (distanceFromSearchOrigin(b) ?? Infinity);
    if (sort === "deadline") return String(a.deadline || "9999-12-31").localeCompare(String(b.deadline || "9999-12-31"));
    return b.match - a.match;
  });

  renderResults();
}

function selectCategory(category) {
  state.selectedCategory = category;
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.category === category);
  });
  const categoryFilter = document.getElementById("categoryFilter");
  if (categoryFilter) categoryFilter.value = category;
}

function renderResults() {
  const empty = document.getElementById("emptyState");
  const resultCount = document.getElementById("resultCount");
  resultCount.textContent = state.softFallbackActive
    ? `${state.filteredJobs.length} ${state.filteredJobs.length === 1 ? "scheda da verificare" : "schede da verificare"}`
    : `${state.filteredJobs.length} ${state.filteredJobs.length === 1 ? "offerta" : "offerte"}`;
  jobList.innerHTML = state.filteredJobs.map((job, index) => jobListCard(job, index, state.filteredJobs.length)).join("");
  empty.classList.toggle("hidden", state.filteredJobs.length > 0);
  document.getElementById("resultDeckIntro")?.classList.toggle("hidden", state.filteredJobs.length === 0);
  renderResultsTriage();
  renderScreening();
  renderPersonalMarket();
  renderSearchAnalysis();
}

function detailSection(title, content, options = {}) {
  const { open = false, icon = "•", tone = "neutral", meta = "" } = options;
  return `
    <details class="detail-accordion tone-${tone}" ${open ? "open" : ""}>
      <summary>
        <span class="detail-summary-title">
          <span class="detail-summary-icon" aria-hidden="true">${icon}</span>
          <span class="detail-summary-copy">
            <span>${title}</span>
            ${meta ? `<small>${meta}</small>` : ""}
          </span>
        </span>
      </summary>
      <div class="detail-section-content">${content}</div>
    </details>
  `;
}

function marketPanel(job) {
  const observations = marketObservationsForJob(job);
  const summary = marketSummaryFromObservations(observations);
  if (!summary) {
    return `
      <div class="market-panel empty-market-panel">
        <div class="market-panel-main">
          <span>Stima mercato tariffe</span>
          <strong>Nessun range affidabile</strong>
          <p>Le offerte simili consultate non pubblicano una retribuzione leggibile. RadarSanità non sostituisce questo vuoto con valori inventati.</p>
        </div>
      </div>
    `;
  }
  const own = salaryObservation(job);
  const ownPosition = own
    ? own.mid > summary.median + 1 ? "sopra la mediana osservata" : own.mid < summary.median - 1 ? "sotto la mediana osservata" : "in linea con la mediana osservata"
    : "compenso dell'offerta non pubblicato";
  return `
    <div class="market-panel trend-flat">
      <div class="market-panel-main">
        <span>Stima mercato tariffe</span>
        <strong>${formatHourlyRange(summary.min, summary.max)}</strong>
        <p>Stima in tempo reale sul ruolo e sull'area della ricerca, basata su ${summary.count} retribuzioni pubblicate nelle offerte trovate. Questa offerta è ${ownPosition}.</p>
      </div>
      <div class="market-panel-chart">
        ${observedMarketChart(summary)}
      </div>
      <div class="market-panel-grid">
        <div><small>Mediana</small><strong>${formatHourlyRange(summary.median, summary.median)}</strong></div>
        <div><small>Range osservato</small><strong>${formatHourlyRange(summary.min, summary.max)}</strong></div>
        <div><small>Osservazioni</small><strong>${summary.count}</strong></div>
        <div><small>Fonti con dato</small><strong>${summary.domains.size}</strong></div>
        <div><small>Conversioni</small><strong>${summary.converted ? `${summary.converted} annue/mensili` : "nessuna"}</strong></div>
        <div><small>Stato dato</small><strong>Da offerte pubblicate</strong></div>
      </div>
      <div class="market-source-strip">
        ${summary.observations.slice(0, 5).map((item) => {
          const pseudoEntry = { name: item.source || "Fonte", kind: "primaria", url: item.sourceUrl };
          const url = httpsUrl(item.sourceUrl);
          const body = `${sourceAvatarMarkup(pseudoEntry, "source-avatar", true)}<span>${escapeHtml(formatHourlyRange(item.low, item.high))}</span>`;
          return url
            ? `<a href="${url}" target="_blank" rel="noreferrer noopener">${body}</a>`
            : `<span>${body}</span>`;
        }).join("")}
      </div>
    </div>
    <div class="prototype-disclaimer">
      Stima calcolata da retribuzioni pubblicate nelle fonti consultate. I range annui o mensili vengono convertiti in lordo/ora stimato e non sostituiscono bando, CCNL o contratto individuale.
    </div>
  `;
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function reviewSignal(label, ok, detail) {
  return { label, ok, detail };
}

function buildOfferReviewPrompt(rawText, signals) {
  const missing = signals.filter((signal) => !signal.ok).map((signal) => signal.label).join(", ") || "nessun dato evidente";
  return `Analizza questa offerta sanitaria per infermieri/OSS nell'area Valli di Lanzo, comuni limitrofi o Torino Nord.

Obiettivo:
1. Dimmi se l'offerta e chiara o rischiosa.
2. Evidenzia stipendio, contratto, turni, notti/festivi, distanza/zona, fonte e documenti.
3. Distingui dati certi, dati mancanti e cose da chiedere al colloquio.
4. Dai un giudizio sintetico: conviene / da chiarire / da evitare.

Dati mancanti gia rilevati dal controllo locale: ${missing}.

Offerta da analizzare:
${rawText.trim()}`;
}

function analyzeOfferReview(rawText) {
  const text = rawText.toLowerCase();
  const isUrlOnly = /^https?:\/\/\S+$/i.test(rawText.trim());
  const signals = [
    reviewSignal(
      "Retribuzione",
      hasAny(text, [/eur\s?\d+/i, /€\s?\d+/i, /ral/i, /retribuz/i, /stipend/i, /compenso/i, /\d+\s?(lordi|netti|ora|h)\b/i]),
      "Stipendio, RAL o compenso orario/accesso"
    ),
    reviewSignal(
      "Contratto",
      hasAny(text, [/indeterminato/i, /determinato/i, /partita iva/i, /libero.?profession/i, /ccnl/i, /cooperativa/i, /tempo pieno/i, /part.?time/i]),
      "Tipo contratto e inquadramento"
    ),
    reviewSignal(
      "Turni",
      hasAny(text, [/turn/i, /diurn/i, /mattin/i, /pomerig/i, /notte/i, /notturn/i, /festiv/i, /weekend/i, /reperibil/i, /h24/i]),
      "Fasce orarie, notti, weekend o reperibilita"
    ),
    reviewSignal(
      "Zona",
      hasAny(text, [/lanzo/i, /cirie|ciriè/i, /valli/i, /torino nord/i, /venaria/i, /borgaro/i, /caselle/i, /nole/i, /mathi/i, /balangero/i, /germagnano/i, /cafasse/i, /robassomero/i, /leini|leinì/i, /san maurizio/i]),
      "Luogo compatibile con area target"
    ),
    reviewSignal(
      "Fonte",
      isUrlOnly || hasAny(text, [/asl/i, /rsa/i, /clinica/i, /casa di cura/i, /sito ufficial/i, /lavora con noi/i, /indeed/i, /linkedin/i, /infojobs/i, /agenzia/i]),
      "Fonte o canale di pubblicazione"
    ),
    reviewSignal(
      "Documenti",
      hasAny(text, [/cv/i, /opi/i, /spid/i, /cie/i, /documento/i, /attestato/i, /qualifica/i, /polizza/i, /laurea/i]),
      "Documenti o requisiti richiesti"
    )
  ];

  const positives = signals.filter((signal) => signal.ok).length;
  const score = Math.round((positives / signals.length) * 100);
  const hasNightRisk = hasAny(text, [/notte/i, /notturn/i, /h24/i, /tre turni/i, /reperibil/i]);
  const hasUrgencyRisk = hasAny(text, [/urgente/i, /immediata/i, /disponibilita immediata/i, /flessibilita/i]) && !signals[0].ok;
  const risks = [
    !signals[0].ok ? "Retribuzione non visibile" : "",
    !signals[2].ok ? "Turni poco chiari" : "",
    hasNightRisk ? "Possibili notti, h24 o reperibilita" : "",
    hasUrgencyRisk ? "Urgenza senza compenso chiaro" : "",
    isUrlOnly ? "Solo link: serve aprire la fonte per analisi completa" : ""
  ].filter(Boolean);

  const verdict = score >= 80
    ? "Offerta abbastanza chiara"
    : score >= 55
      ? "Da chiarire prima di candidarsi"
      : "Troppi dati mancanti";

  return { score, verdict, signals, risks, prompt: buildOfferReviewPrompt(rawText, signals) };
}

function renderOfferReview(result) {
  const presentSignals = result.signals.filter((signal) => signal.ok).length;
  offerReviewOutput.innerHTML = `
    <div class="review-score-card">
      <div>
        <span>Dati rilevabili</span>
        <strong>${presentSignals}/${result.signals.length}</strong>
      </div>
      <div class="review-score-copy">
        <p>${result.verdict}</p>
        <small>Misura la completezza del testo, non il valore dell'offerta.</small>
      </div>
    </div>
    <div class="review-signal-grid">
      ${result.signals.map((signal) => `
        <div class="${signal.ok ? "ok" : "warn"}">
          <strong>${signal.ok ? "OK" : "Manca"}</strong>
          <span>${signal.label}</span>
          <small>${signal.detail}</small>
        </div>
      `).join("")}
    </div>
    <div class="review-risk-box">
      <strong>Da controllare</strong>
      <ul>
        ${(result.risks.length ? result.risks : ["Nessuna criticita evidente nel testo incollato."]).map((risk) => `<li>${risk}</li>`).join("")}
      </ul>
    </div>
    <div class="review-prompt-box">
      <strong>Prompt pronto per ChatGPT, Gemini o Claude</strong>
      <textarea readonly rows="8" aria-label="Prompt pronto per ChatGPT, Gemini o Claude">${result.prompt}</textarea>
    </div>
  `;
}

function requirementEvidence(value) {
  const normalized = value.toLowerCase();
  if (/conferma|necessario|preferibile|verifica/i.test(normalized)) {
    return { level: "to-check", label: "Da verificare", note: "Non è una conferma documentale" };
  }
  if (/risulta presente|estratto|pubblicato|coerente/i.test(normalized)) {
    return { level: "declared", label: "Dichiarato", note: "Riportato nella fonte o nell'offerta" };
  }
  return { level: "neutral", label: "Da leggere", note: "Dato riportato nella scheda" };
}

function dataGrid(items, options = {}) {
  const { evidence = false } = options;
  return `
    <ul class="detail-data-grid">
      ${items.map(([label, value]) => {
        const signal = evidence ? requirementEvidence(value) : null;
        return `
          <li class="${signal ? `evidence-${signal.level}` : ""}">
            <strong>${label}</strong>
            <span>${value}</span>
            ${signal ? `<small><b>${signal.label}</b><span>${signal.note}</span></small>` : ""}
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

function withoutMoneyRows(rows = []) {
  return rows.filter(([label]) => !/retribuzione|compenso|stipendio|ral/i.test(String(label || "")));
}

function professionalOpinionLinks(job) {
  const workplace = workplaceFor(job);
  const terms = [job.company, job.location, workplace.name]
    .filter(Boolean)
    .join(" ");
  const workQuery = encodeURIComponent(`${terms} opinioni lavoro infermieri OSS dipendenti`);
  const employerQuery = encodeURIComponent(`${job.company} recensioni lavoro operatori sanitari`);
  return `
    <div class="external-opinion-links" aria-label="Ricerche esterne sulla reputazione professionale">
      <a href="https://www.google.com/search?q=${workQuery}" target="_blank" rel="noreferrer noopener">Cerca opinioni lavoro</a>
      <a href="https://www.google.com/search?q=${employerQuery}" target="_blank" rel="noreferrer noopener">Cerca segnali sul datore</a>
    </div>
  `;
}

function renderDetail(jobId) {
  const job = getJob(jobId);
  const workplace = workplaceFor(job);
  const professionalReviews = professionalReviewsFor(job);
  const sourceUrl = jobSourceUrl(job);
  state.selectedJobId = job.id;
  const saved = state.saved.has(job.id);
  const colleagueSection = professionalReviews.length
    ? detailSection(`Reputazione professionale · ${workplace.rating}/5`, `
        <div class="review-summary">
          <div><strong>${workplace.rating}/5</strong><span>${professionalReviews.length} segnali professionali disponibili</span></div>
          <span>Valutazioni utili per capire organizzazione, clima e affidabilita percepita.</span>
        </div>
        <div class="review-list">
          ${professionalReviews.map((review) => `
            <article class="review-card">
              <div class="review-card-top">
                <span class="review-stars" aria-label="${review.score} stelle su 5">${stars(review.score)}</span>
                <small>${review.period}</small>
              </div>
              <strong>${review.role}</strong>
              <p>${review.text}</p>
              <span class="review-verified">✓ ${review.source}</span>
            </article>
          `).join("")}
        </div>
        ${professionalOpinionLinks(job)}
      `, { icon: "7", tone: "reviews", meta: "Esperienze professionali collegate" })
    : detailSection("Reputazione professionale", `
        <p class="content-note">Per questa offerta non sono ancora presenti valutazioni professionali collegate alla struttura. Puoi approfondire i segnali online sul datore o sul luogo prima di candidarti.</p>
        ${professionalOpinionLinks(job)}
      `, { icon: "7", tone: "reviews", meta: "Da approfondire prima della decisione" });
  jobDetail.innerHTML = `
    <div class="detail-page">
      <div class="detail-topbar">
        <button class="back-button" data-route="results">←</button>
        <button
          class="save-button ${saved ? "saved" : ""}"
          data-action="save"
          data-job-id="${job.id}"
          aria-label="${saved ? "Rimuovi dai salvati" : "Salva offerta"}"
        >${saved ? "♥" : "♡"}</button>
      </div>

      <section class="detail-title-card">
        ${renderOfferMedia(job, "detail")}
        <div class="detail-title-row">
          <div>
            <span class="job-type">${job.type}</span>
            <h1>${job.title}</h1>
            <div class="detail-company">${job.company} · ${job.location} · ${distanceLabelForJob(job)}</div>
            <span class="verified-badge">Fonte controllata · ${job.checked}</span>
            ${sponsorBadge(job)}
          </div>
          <span class="match-badge">${formatMatch(job)}</span>
        </div>

        <div class="detail-summary-grid">
          <div class="summary-tile"><small>Contratto</small><strong>${job.contract}</strong></div>
          <div class="summary-tile"><small>Orario</small><strong>${job.schedule}</strong></div>
          <div class="summary-tile"><small>Turni</small><strong>${job.shifts}</strong></div>
          <div class="summary-tile"><small>Distanza</small><strong>${distanceLabelForJob(job)}</strong></div>
        </div>

        ${decisionStrip(job)}

        <div class="dossier-proof">
          <div>
            <strong>Informazioni raccolte da ${sourceCount(job)} fonti</strong>
            <span>Apri la candidatura sul sito ufficiale e verifica i dettagli prima dell'invio.</span>
          </div>
          ${sourceChips(job)}
          ${sourceUrl ? `<a class="primary-button source-detail-button" href="${sourceUrl}" target="_blank" rel="noreferrer noopener">Candidati sul sito ufficiale</a>` : ""}
        </div>
      </section>

      <div class="detail-sections">
        ${detailSection("In breve", `
          <p>${job.summary}</p>
          <div class="warning-box">${job.warning}</div>
        `, { open: true, icon: "1", tone: "overview", meta: "Il riassunto operativo prima dei dettagli" })}
        ${detailSection("Contratto e condizioni", dataGrid(withoutMoneyRows(job.contractDetails)), {
          icon: "2",
          tone: "money",
          meta: "Condizioni formali dichiarate"
        })}
        ${detailSection("Stima mercato tariffe", marketPanel(job), {
          icon: "3",
          tone: "market",
          meta: "Retribuzioni pubblicate nel perimetro"
        })}
        ${detailSection("Orari e turni", dataGrid(job.shiftDetails), {
          icon: "4",
          tone: "time",
          meta: "Carico prevedibile, notti e festivi"
        })}
        ${detailSection("Requisiti", dataGrid(job.requirements, { evidence: true }), {
          icon: "5",
          tone: "requirements",
          meta: "Cosa risulta presente e cosa va confermato"
        })}
        ${detailSection("Com'è il posto", `
          <div class="place-facts">
            ${workplace.facts.map((fact) => `<span>${fact}</span>`).join("")}
          </div>
          <p class="content-note">
            Usa questi dati per capire se la sede e l'organizzazione dichiarata
            sono compatibili con i tuoi vincoli prima di candidarti.
          </p>
        `, { icon: "6", tone: "place", meta: "Logistica e contesto non ufficiale" })}
        ${colleagueSection}
        ${detailSection("Fonte e aggiornamento", `
          ${sourceTrustPanel(job)}
          <div class="source-line"><strong>Fonte</strong><span>${job.source}</span></div>
          <div class="source-line"><strong>Ultimo controllo</strong><span>${job.checked}</span></div>
          <div class="source-line"><strong>Scadenza</strong><span>${job.deadlineLabel}</span></div>
          <div class="source-line"><strong>Copertura</strong><span>${sourceEntries(job).map(({ name, kind }) => `${escapeHtml(name)} (${escapeHtml(kind)})`).join(", ")}</span></div>
        `, { icon: "9", tone: "source", meta: "Da dove arriva ogni informazione" })}
      </div>
      <div class="sticky-offer-cta" aria-label="Azioni offerta sempre disponibili">
        <button
          class="save-button sticky-save-button ${saved ? "saved" : ""}"
          data-action="save"
          data-job-id="${job.id}"
          aria-label="${saved ? "Rimuovi dai salvati" : "Salva offerta"}"
        >${saved ? "♥" : "♡"}</button>
        ${sourceUrl
          ? `<a class="primary-button sticky-apply-button" href="${sourceUrl}" target="_blank" rel="noreferrer noopener">Candidati</a>`
          : `<button class="primary-button sticky-apply-button" type="button" disabled>Candidatura non disponibile</button>`}
      </div>
    </div>
  `;
}

function renderApplication(jobId, step = 1) {
  const job = getJob(jobId);
  state.selectedJobId = job.id;
  state.wizardStep = step;
  const profile = state.localProfile;
  const draftMessage = applicationMessageFor(job);

  let body = "";
  if (step === 1) {
    body = `
      <section class="wizard-card">
        <span class="eyebrow">Passaggio 1 di 3</span>
        <h2>Profilo locale e controllo prima degli allegati</h2>
        <p class="wizard-intro">
          Non crei un account remoto. Le preferenze qui sotto restano solo nel browser
          di questo dispositivo e servono a preparare il kit candidatura.
        </p>

        <div class="wizard-section">
          <div class="signup-gate">
            <div class="signup-gate-heading">
              <span class="signup-gate-icon">LO</span>
              <div>
                <strong>Profilo leggero, solo locale</strong>
                <span>Non salvare qui nome, documenti, codici OPI, SPID/CIE o informazioni sanitarie.</span>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-field">
                <label for="localProfileRole">Profilo professionale</label>
                <input id="localProfileRole" value="${escapeHtml(profile.role)}" autocomplete="organization-title" placeholder="Es. Infermiere, OSS">
              </div>
              <div class="form-field">
                <label for="localProfileArea">Zona di riferimento</label>
                <input id="localProfileArea" value="${escapeHtml(profile.area)}" autocomplete="address-level2" placeholder="Es. Torino Nord">
              </div>
            </div>
            <div class="local-profile-actions">
              <button class="secondary-button" type="button" data-action="save-local-profile">Salva sul dispositivo</button>
              <button class="text-button" type="button" data-action="clear-local-profile">Cancella profilo locale</button>
            </div>
            <ul class="signup-reasons">
              <li>non carichi CV o PDF su RadarSanità;</li>
              <li>prepari il messaggio e la checklist prima di aprire il sito esterno;</li>
              <li>puoi cancellare questi dati in qualsiasi momento da questa schermata.</li>
            </ul>
          </div>
        </div>

        <div class="wizard-section">
          <h3>Controllo idoneità minimo</h3>
          <div class="profile-check-list">
            ${job.requirements.map(([label, value]) => {
              const warning = value.toLowerCase().includes("confermare") ||
                value.toLowerCase().includes("necessario");
              return `
                <div class="profile-check ${warning ? "warning" : ""}">
                  <span class="profile-check-icon">${warning ? "!" : "✓"}</span>
                  <div><strong>${label}</strong><span>${value}</span></div>
                  <em>${warning ? "Controlla" : "Pronto"}</em>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <div class="wizard-section">
          <div class="form-grid">
            <div class="form-field full">
              <label for="availability">Informazione da confermare</label>
              <input id="availability" value="${job.application.missing}">
            </div>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="secondary-button" data-action="detail" data-job-id="${job.id}">Torna all'offerta</button>
          <button class="primary-button" data-action="wizard-next" data-step="2">Continua al kit</button>
        </div>
      </section>
    `;
  } else if (step === 2) {
    body = `
      <section class="wizard-card">
        <span class="eyebrow">Passaggio 2 di 3</span>
        <h2>Prepara checklist e messaggio</h2>
        <p class="wizard-intro">
          RadarSanità non riceve allegati: ti mostra cosa preparare e ti lascia
          modificare il messaggio prima dell'invio sul canale ufficiale.
        </p>

        <div class="wizard-section">
          <h3>Documenti da preparare</h3>
          <div class="document-list">
            <div class="document-row">
              <div><span class="document-icon">CV</span><span><strong>CV personale</strong><small>Lo alleghi tu dal telefono o dal computer sul canale ufficiale</small></span></div>
              <span class="status-pending">Da preparare</span>
            </div>
            ${job.application.documents.slice(1).map((document) => `
              <div class="document-row">
                <div><span class="document-icon">PDF</span><span><strong>${document}</strong><small>Verifica la versione richiesta nella fonte ufficiale</small></span></div>
                <span class="status-pending">Da preparare</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="wizard-section">
          <div class="form-field">
            <label for="applicationMessage">Messaggio di presentazione</label>
            <textarea id="applicationMessage">${escapeHtml(draftMessage)}</textarea>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="secondary-button" data-action="wizard-next" data-step="1">Indietro</button>
          <button class="primary-button" data-action="wizard-next" data-step="3">Prepara consegna</button>
        </div>
      </section>
    `;
  } else {
    body = `
      <section class="wizard-card">
        <span class="eyebrow">Passaggio 3 di 3</span>
        <h2>Consegna il kit sul canale ufficiale</h2>
        <p class="wizard-intro">
          RadarSanità non invia candidature e non opera su portali esterni. Ti prepara
          un kit da scaricare o copiare, poi apri tu il sito o l'email ufficiale.
        </p>

        <div class="wizard-section">
          <div class="preview-box">
            <h3>Riepilogo</h3>
            <p><strong>Posizione:</strong> ${job.title}
<strong>Datore:</strong> ${job.company}
<strong>Canale ufficiale:</strong> ${job.application.channel}
<strong>Allegati:</strong> ${job.application.documents.join(", ")}
<strong>Scadenza:</strong> ${job.deadlineLabel}</p>
          </div>
        </div>

        <div class="wizard-section">
          <div class="application-delivery-box">
            <div class="agent-consent-heading">
              <span class="agent-mark">KIT</span>
              <div>
                <strong>Pronto per la consegna manuale</strong>
                <small>${job.application.channel}</small>
              </div>
            </div>
            <ol class="agent-task-list">
              <li>Scarica o copia checklist e messaggio</li>
              <li>Apri il canale ufficiale verificato</li>
              <li>Allega personalmente i tuoi documenti</li>
              <li>Invia e conserva la ricevuta del datore o del portale</li>
            </ol>
            <div class="agent-boundary">
              SPID/CIE, CAPTCHA, dichiarazioni personali, caricamento allegati e invio
              finale restano sempre fuori da RadarSanità.
            </div>
            <div class="application-delivery-actions">
              <button class="secondary-button" data-action="copy-application-message" data-job-id="${job.id}">Copia messaggio</button>
              <button class="secondary-button" data-action="download-kit" data-job-id="${job.id}">Scarica kit</button>
              <button class="primary-button" data-action="prepare-application" data-job-id="${job.id}">Salva bozza locale</button>
              ${channelHandoffControl(job)}
            </div>
            <p class="delivery-note">Su iPhone il kit viene copiato per poterlo incollare in Note o in un editor. Nessun documento viene caricato sulla piattaforma.</p>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="secondary-button" data-action="wizard-next" data-step="2">Modifica candidatura</button>
          <button class="text-button" data-route="applications">Salva e continua dopo</button>
        </div>
      </section>
    `;
  }

  applicationWizard.innerHTML = `
    <div class="application-page">
      <div class="detail-topbar">
        <button class="back-button" data-action="detail" data-job-id="${job.id}">←</button>
      </div>
      <span class="job-type">${job.company}</span>
      <h1>${job.title}</h1>
      <div class="progress" aria-label="Avanzamento candidatura">
        <span class="progress-step active"></span>
        <span class="progress-step ${step >= 2 ? "active" : ""}"></span>
        <span class="progress-step ${step >= 3 ? "active" : ""}"></span>
      </div>
      ${body}
    </div>
  `;
}

function renderSaved() {
  const saved = jobs.filter((job) => state.saved.has(job.id) && job.publicationStatus === "published");
  savedJobs.innerHTML = saved.map(jobListCard).join("");
  savedEmpty.classList.toggle("hidden", saved.length > 0);
  savedJobs.classList.toggle("hidden", saved.length === 0);
}

function updateCounts() {
  document.getElementById("savedCount").textContent = state.saved.size;
  const applicationCount = document.getElementById("applicationCount");
  if (applicationCount) applicationCount.textContent = state.applicationRecords.length;
}

function navigate(route) {
  if (route === "results" && !state.searchCompleted) {
    route = "home";
    showToast("Completa prima la tua ricerca");
  }
  state.route = route;
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === route));
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === route);
  });

  if (route === "results") {
    applyJobFilters();
  } else if (route === "home") {
    requestSearchLocation({ automatic: true });
  } else if (route === "detail") {
    renderDetail(state.selectedJobId);
  } else if (route === "apply") {
    renderApplication(state.selectedJobId, state.wizardStep);
  } else if (route === "saved") {
    renderSaved();
  } else if (route === "applications") {
    renderApplicationsList();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function toggleSave(jobId) {
  if (state.saved.has(jobId)) {
    state.saved.delete(jobId);
    showToast("Offerta rimossa dai salvati");
  } else {
    state.saved.add(jobId);
    showToast("Offerta salvata");
  }
  updateCounts();
  renderFeatured();
  renderResults();
  if (state.route === "detail") renderDetail(jobId);
  if (state.route === "saved") renderSaved();
}

function setRatePeriod(period) {
  if (!ratePeriodLabels[period]) return;
  state.ratePeriod = period;
  renderRateMarket();
  if (state.route === "detail") renderDetail(state.selectedJobId);
}

function setFeedbackRole(role) {
  document.querySelectorAll("[data-feedback-role]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.feedbackRole === role);
  });
  document.querySelectorAll("[data-feedback-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.feedbackPanel !== role);
  });
}

function collectFeedbackAnswers() {
  const activeRole = document.querySelector("[data-feedback-role].selected")?.dataset.feedbackRole || "candidate";
  const panel = document.querySelector(`[data-feedback-panel="${activeRole}"]`);
  if (!panel) return "";

  const roleLabel = activeRole === "employer" ? "Enti e strutture" : "Infermieri e OSS";
  const answers = Array.from(panel.querySelectorAll(".feedback-question"))
    .map((question) => {
      const label = question.querySelector("label")?.textContent.trim();
      const value = question.querySelector("textarea")?.value.trim();
      if (!label || !value) return "";
      return `${label}\n${value}`;
    })
    .filter(Boolean);

  if (!answers.length) return "";
  return [`Percorso: ${roleLabel}`, ...answers].join("\n\n");
}

function collectSponsorRequest() {
  const fields = [
    ["Struttura o ente", document.getElementById("sponsorStructure")?.value.trim()],
    ["Referente", document.getElementById("sponsorReferent")?.value.trim()],
    ["Contatto", document.getElementById("sponsorContact")?.value.trim()],
    ["Zona e profili", document.getElementById("sponsorArea")?.value.trim()],
    ["Messaggio", document.getElementById("sponsorMessage")?.value.trim()]
  ].filter(([, value]) => value);

  if (!fields.length) return "";
  return [
    "Richiesta sponsorizzazione RadarSanità",
    "Nota: priorità di evidenza solo se compatibile con le ricerche degli utenti.",
    ...fields.map(([label, value]) => `${label}: ${value}`)
  ].join("\n\n");
}

function localDateLabel(value) {
  try {
    return new Intl.DateTimeFormat("it-IT", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(value));
  } catch {
    return "data non disponibile";
  }
}

function readLocalSubmissions(key) {
  const submissions = readLocalJson(key, []);
  return Array.isArray(submissions) ? submissions.slice(0, 40) : [];
}

function saveLocalSubmission(key, text, meta = {}) {
  const submission = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    text,
    ...meta
  };
  const next = [submission, ...readLocalSubmissions(key)].slice(0, 40);
  writeLocalJson(key, next);
  renderLocalRegistries();
  return submission;
}

function registryText(key, title) {
  const items = readLocalSubmissions(key);
  if (!items.length) return "";
  return [
    title,
    ...items.map((item, index) => [
      `#${index + 1} · ${localDateLabel(item.createdAt)}${item.role ? ` · ${item.role}` : ""}`,
      item.text
    ].join("\n"))
  ].join("\n\n---\n\n");
}

function renderRegistry(container, key, title, emptyText) {
  if (!container) return;
  const items = readLocalSubmissions(key);
  container.innerHTML = `
    <div class="local-submissions-heading">
      <div>
        <span class="eyebrow">Registro locale</span>
        <h2>${title}</h2>
        <p>Questi dati sono salvati solo nel browser di questo dispositivo.</p>
      </div>
      <button class="secondary-button" type="button" data-action="copy-local-registry" data-registry="${key}">Copia registro</button>
    </div>
    ${items.length ? `
      <div class="local-submissions-list">
        ${items.slice(0, 5).map((item) => `
          <article class="local-submission-card">
            <small>${localDateLabel(item.createdAt)}${item.role ? ` · ${escapeHtml(item.role)}` : ""}</small>
            <p>${escapeHtml(item.text).replace(/\n/g, "<br>")}</p>
          </article>
        `).join("")}
      </div>
    ` : `<p class="local-submissions-empty">${emptyText}</p>`}
  `;
}

function renderLocalRegistries() {
  renderRegistry(
    feedbackRegistry,
    LOCAL_STORAGE_KEYS.feedbackSubmissions,
    "Risposte raccolte",
    "Nessuna risposta salvata su questo dispositivo."
  );
  renderRegistry(
    sponsorRegistry,
    LOCAL_STORAGE_KEYS.sponsorRequests,
    "Richieste enti salvate",
    "Nessuna richiesta salvata su questo dispositivo."
  );
}

function updateSelectedPlaceCard(label, note = "Il raggio partirà da qui quando scegli una distanza in km.") {
  const card = document.getElementById("selectedPlaceCard");
  if (!card) return;
  card.innerHTML = `
    <span>Origine</span>
    <strong>${escapeHtml(label)}</strong>
    <small>${escapeHtml(note)}</small>
  `;
}

function findCatalogPlace(value) {
  const target = normalized(value);
  if (!target) return null;
  return italianPlaceCatalog.find((place) => normalized(place.label) === target)
    || italianPlaceCatalog.find((place) => normalized(place.label).startsWith(target));
}

async function geocodeItalianPlace(value) {
  const label = String(value || "").trim();
  if (!label) return null;
  const knownPlace = findCatalogPlace(label);
  if (knownPlace) return knownPlace;
  if (window.location.protocol === "file:" || !window.isSecureContext) return null;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "1");
    url.searchParams.set("countrycodes", "it");
    url.searchParams.set("q", `${label}, Italia`);
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) return null;
    const [result] = await response.json();
    if (!result) return null;
    const lat = Number(result.lat);
    const lng = Number(result.lon);
    const display = String(result.display_name || label).split(",")[0] || label;
    return validCoordinates({ lat, lng }) ? { label: display, lat, lng } : null;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function selectSearchPlaceFromInput() {
  const placeInput = document.getElementById("searchPlace");
  const requestedPlace = placeInput?.value.trim();
  if (!requestedPlace) {
    showToast("Scrivi una città o un comune");
    placeInput?.focus();
    return;
  }
  const button = document.querySelector('[data-action="select-place"]');
  button?.setAttribute("disabled", "disabled");
  const previousText = button?.textContent;
  if (button) button.textContent = "Cerco...";
  const place = await geocodeItalianPlace(requestedPlace);
  if (button) {
    button.textContent = previousText || "Imposta";
    button.removeAttribute("disabled");
  }
  if (!place) {
    showToast("Località non trovata: prova un comune più preciso");
    placeInput?.focus();
    return;
  }
  if (placeInput) placeInput.value = place.label;
  setSearchOrigin(place.lat, place.lng, place.label);
}

function nationalSearchFallbackMarkup(message) {
  return `${message} <button class="location-fallback-button" type="button" data-action="use-national-search">Continua in tutta Italia</button>.`;
}

function useNationalSearchFallback(message = "Ricerca nazionale pronta: non richiede la posizione del dispositivo.") {
  state.searchOrigin = null;
  const locationInput = document.getElementById("searchLocation");
  const locationHint = document.getElementById("searchLocationHint");
  const distanceInput = document.getElementById("searchDistance");
  const placeInput = document.getElementById("searchPlace");
  if (locationInput) locationInput.value = "Ricerca in tutta Italia";
  if (placeInput) placeInput.value = "";
  if (distanceInput) distanceInput.value = "9999";
  if (locationHint) locationHint.textContent = message;
  updateSelectedPlaceCard("Tutta Italia", "Nessun raggio locale: vengono mostrate le offerte pubblicate nella raccolta nazionale.");
  showToast("Ricerca nazionale impostata");
}

function setSearchOrigin(lat, lng, label, pin = null) {
  const coordinates = validCoordinates({ lat, lng });
  if (!coordinates) return false;
  state.searchOrigin = { ...coordinates, label };
  const locationInput = document.getElementById("searchLocation");
  const locationHint = document.getElementById("searchLocationHint");
  const placeInput = document.getElementById("searchPlace");
  if (locationInput) locationInput.value = label;
  if (placeInput && label !== "la tua posizione attuale") placeInput.value = label;
  if (locationHint) locationHint.textContent = `Raggio pronto: i km partiranno da ${label}.`;
  updateSelectedPlaceCard(label, `Coordinate impostate: ${coordinates.lat.toFixed(3)}, ${coordinates.lng.toFixed(3)}.`);
  showToast("Punto di partenza impostato");
  return true;
}

function setSearchOriginFromMapEvent(event) {
  const map = event.currentTarget;
  const rect = map.getBoundingClientRect();
  const x = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
  const y = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));
  const lng = 6.2 + (x / 100) * 12.9;
  const lat = 47.4 - (y / 100) * 11.4;
  setSearchOrigin(lat, lng, `Punto scelto sulla mappa (${lat.toFixed(2)}, ${lng.toFixed(2)})`, { x, y });
}

function setSearchOriginFromPreset(target) {
  const lat = Number(target.dataset.lat);
  const lng = Number(target.dataset.lng);
  const label = target.dataset.label || "punto scelto";
  setSearchOrigin(lat, lng, label);
}

function requestSearchLocation({ automatic = false, force = false } = {}) {
  const locationInput = document.getElementById("searchLocation");
  const locationHint = document.getElementById("searchLocationHint");
  const publicAppUrl = "https://rk547svrdm-bit.github.io/radarsanita-beta/?v=58";

  if (state.locationRequestInFlight || (automatic && state.locationRequestAttempted)) return;
  if (state.searchOrigin && !force) {
    if (locationInput) locationInput.value = "Posizione attuale acquisita";
    return;
  }

  if (automatic) state.locationRequestAttempted = true;
  if (window.location.protocol === "file:") {
    if (locationHint) {
      locationHint.innerHTML = `La posizione non può essere usata aprendo un file locale. <a href="${publicAppUrl}" target="_blank" rel="noreferrer noopener">Apri la versione online</a> oppure ${nationalSearchFallbackMarkup("")}`;
    }
    showToast("Apri la versione online per usare la posizione");
    return;
  }
  if (!window.isSecureContext) {
    if (locationHint) locationHint.innerHTML = nationalSearchFallbackMarkup("La posizione richiede una connessione protetta.");
    showToast("La posizione richiede la versione online");
    return;
  }
  if (!navigator.geolocation) {
    if (locationHint) locationHint.innerHTML = nationalSearchFallbackMarkup("Questo browser non mette a disposizione la posizione.");
    return;
  }

  state.locationRequestInFlight = true;
  if (locationInput) locationInput.value = "Rilevamento in corso...";
  if (locationHint) locationHint.textContent = "Consenti l'uso della posizione per calcolare il raggio in km. Non viene salvata.";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.locationRequestInFlight = false;
      state.searchOrigin = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        label: "la tua posizione attuale"
      };
      if (locationInput) locationInput.value = "Posizione attuale acquisita";
      if (locationHint) locationHint.textContent = "Posizione pronta: il raggio in km partirà da qui. Puoi aggiornarla dal mirino.";
      updateSelectedPlaceCard("Posizione attuale", "Il raggio parte dalla posizione concessa dal browser.");
      showToast("Posizione pronta per la ricerca");
    },
    (error) => {
      state.locationRequestInFlight = false;
      state.searchOrigin = null;
      const message = error?.code === 1
        ? "Questo browser non ha autorizzato la posizione. Ho impostato la ricerca in tutta Italia; apri Safari completo o riprova dal mirino per usare il raggio in km."
        : "Non riesco a rilevare la posizione in questo browser. Ho impostato la ricerca in tutta Italia; puoi riprovare dal mirino per usare il raggio in km.";
      useNationalSearchFallback(message);
    },
    { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }
  );
}

function searchGuideSteps() {
  return Array.from(document.querySelectorAll("#searchForm .search-intake-step"));
}

function updateSearchGuideProgress(activeIndex = 0) {
  document.querySelectorAll(".vertical-guide-strip span").forEach((item, index) => {
    item.classList.toggle("active", index === activeIndex);
    item.classList.toggle("done", index < activeIndex);
  });
  searchGuideSteps().forEach((step, index) => {
    step.classList.toggle("active-step", index === activeIndex);
  });
}

function validateSearchGuideStep(index) {
  const role = document.getElementById("searchRole")?.value;
  const distance = Number(document.getElementById("searchDistance")?.value);
  const shifts = compactChoices(readCheckedValues("searchShift"));
  const availability = compactChoices(readCheckedValues("searchAvailability"));
  const origin = validCoordinates(state.searchOrigin);

  if (index === 0 && !role) {
    showToast("Scegli prima il profilo");
    document.getElementById("searchRole")?.focus();
    return false;
  }
  if (index === 1) {
    if (!distance) {
      showToast("Scegli il raggio di ricerca");
      document.getElementById("searchDistance")?.focus();
      return false;
    }
    if (distance < 9999 && !origin) {
      showToast("Imposta una posizione o scegli tutta Italia");
      document.getElementById("searchPlace")?.focus();
      return false;
    }
  }
  if (index === 2 && (!shifts.length || !availability.length)) {
    showToast("Scegli turni e disponibilità");
    document.querySelector('input[name="searchShift"]')?.focus();
    return false;
  }
  return true;
}

function moveSearchGuide(targetIndex) {
  const steps = searchGuideSteps();
  const boundedIndex = Math.max(0, Math.min(Number(targetIndex), steps.length - 1));
  const currentIndex = steps.findIndex((step) => step.classList.contains("active-step"));
  if (currentIndex > -1 && boundedIndex > currentIndex && !validateSearchGuideStep(currentIndex)) return;
  updateSearchGuideProgress(boundedIndex);
  steps[boundedIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function setupSearchVerticalFlow() {
  const steps = searchGuideSteps();
  if (!steps.length) return;
  steps.forEach((step, index) => {
    step.dataset.guideIndex = String(index);
    if (step.querySelector(".journey-step-actions")) return;
    const actions = document.createElement("div");
    actions.className = "journey-step-actions";
    actions.innerHTML = `
      ${index > 0 ? `<button class="secondary-button" type="button" data-action="guide-prev" data-guide-index="${index - 1}">Indietro</button>` : ""}
      ${index < steps.length - 1 ? `<button class="primary-button" type="button" data-action="guide-next" data-guide-index="${index + 1}">Avanti</button>` : `<span class="journey-end-note">Ultimo passo: elabora la ricerca.</span>`}
    `;
    step.appendChild(actions);
  });
  updateSearchGuideProgress(0);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      updateSearchGuideProgress(Number(visible.target.dataset.guideIndex || 0));
    }, { threshold: [0.55], root: document.getElementById("searchForm") });
    steps.forEach((step) => observer.observe(step));
  }
}

document.addEventListener("click", (event) => {
  const ratePeriodTarget = event.target.closest("[data-rate-period]");
  if (ratePeriodTarget) {
    setRatePeriod(ratePeriodTarget.dataset.ratePeriod);
    return;
  }

  const feedbackRoleTarget = event.target.closest("[data-feedback-role]");
  if (feedbackRoleTarget) {
    setFeedbackRole(feedbackRoleTarget.dataset.feedbackRole);
    return;
  }

  const sourceTarget = event.target.closest("[data-source-full]");
  if (sourceTarget) {
    const label = sourceTarget.dataset.sourceFull;
    const container = sourceTarget.closest(".source-dock, .info-source-card, .source-trust-panel, .source-chips");
    const explainer = container?.querySelector("[data-source-explainer]");
    if (explainer) explainer.textContent = label;
    sourceTarget.closest(".source-dock-row, .source-chips, .source-trust-grid")
      ?.querySelectorAll("[data-source-full]")
      .forEach((item) => item.classList.toggle("selected", item === sourceTarget));
    showToast(label);
    return;
  }

  const categoryTarget = event.target.closest("[data-category]");
  if (categoryTarget) {
    selectCategory(categoryTarget.dataset.category);
    setCheckedValues("shiftFilter", ["any"]);
    document.getElementById("resultsSummary").textContent =
      categoryLabels[state.selectedCategory];
    navigate("results");
    return;
  }

  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    navigate(routeTarget.dataset.route);
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const { action, jobId, step } = actionTarget.dataset;
  if (action === "save") {
    toggleSave(jobId);
  } else if (action === "detail") {
    state.selectedJobId = jobId;
    navigate("detail");
  } else if (action === "guide-next" || action === "guide-prev") {
    moveSearchGuide(actionTarget.dataset.guideIndex);
  } else if (action === "apply") {
    state.selectedJobId = jobId;
    state.wizardStep = 1;
    navigate("apply");
  } else if (action === "wizard-next") {
    const nextStep = Number(step);
    if (nextStep === 2) saveLocalProfileFromForm();
    if (nextStep === 3) {
      const message = document.getElementById("applicationMessage");
      if (message) state.applicationDrafts[state.selectedJobId] = message.value;
    }
    renderApplication(state.selectedJobId, nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (action === "save-local-profile") {
    if (saveLocalProfileFromForm()) showToast("Profilo salvato solo su questo dispositivo");
  } else if (action === "clear-local-profile") {
    clearLocalProfile();
    renderApplication(state.selectedJobId, 1);
    showToast("Profilo locale cancellato");
  } else if (action === "prepare-application") {
    prepareApplicationRecord(jobId);
  } else if (action === "copy-application-message") {
    copyApplicationMessage(jobId);
  } else if (action === "download-kit") {
    downloadApplicationKit(jobId);
  } else if (action === "open-channel") {
    upsertApplicationRecord(getJob(jobId), { status: "canale_aperto" });
  } else if (action === "mark-sent") {
    upsertApplicationRecord(getJob(jobId), {
      status: "inviata",
      sentAt: new Date().toISOString()
    });
    renderApplicationsList();
    showToast("Candidatura segnata come inviata");
  } else if (action === "copy-review-prompt") {
    if (!state.lastReviewPrompt) {
      showToast("Prima revisiona un'offerta");
      return;
    }
    if (!navigator.clipboard?.writeText) {
      showToast("Prompt pronto nel riquadro");
      return;
    }
    navigator.clipboard.writeText(state.lastReviewPrompt)
      .then(() => showToast("Prompt IA copiato"))
      .catch(() => showToast("Prompt pronto nel riquadro"));
  } else if (action === "copy-feedback") {
    const text = collectFeedbackAnswers();
    if (!text) {
      showToast("Scrivi almeno una risposta");
      return;
    }
    const activeRole = document.querySelector("[data-feedback-role].selected")?.dataset.feedbackRole || "candidate";
    saveLocalSubmission(LOCAL_STORAGE_KEYS.feedbackSubmissions, text, {
      role: activeRole === "employer" ? "Enti e strutture" : "Infermieri e OSS"
    });
    if (!navigator.clipboard?.writeText) {
      showToast("Risposte salvate in questo dispositivo");
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => showToast("Risposte salvate e copiate"))
      .catch(() => showToast("Risposte salvate in questo dispositivo"));
  } else if (action === "copy-sponsor-request") {
    const text = collectSponsorRequest();
    if (!text) {
      showToast("Compila almeno un campo");
      return;
    }
    saveLocalSubmission(LOCAL_STORAGE_KEYS.sponsorRequests, text, { role: "Enti e strutture" });
    if (!navigator.clipboard?.writeText) {
      showToast("Richiesta salvata in questo dispositivo");
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => showToast("Richiesta salvata e copiata"))
      .catch(() => showToast("Richiesta salvata in questo dispositivo"));
  } else if (action === "copy-local-registry") {
    const key = target.dataset.registry;
    const title = key === LOCAL_STORAGE_KEYS.sponsorRequests
      ? "Registro richieste enti RadarSanità"
      : "Registro risposte RadarSanità";
    const text = registryText(key, title);
    if (!text) {
      showToast("Nessun elemento salvato");
      return;
    }
    if (!navigator.clipboard?.writeText) {
      showToast("Registro pronto nella pagina");
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => showToast("Registro copiato"))
      .catch(() => showToast("Registro pronto nella pagina"));
  } else if (action === "open-sources") {
    navigate("info");
    window.setTimeout(() => document.getElementById("sourceRegistry")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  } else if (action === "locate-search") {
    requestSearchLocation({ force: true });
  } else if (action === "use-national-search") {
    useNationalSearchFallback();
  } else if (action === "map-location") {
    setSearchOriginFromPreset(actionTarget);
  } else if (action === "select-place") {
    void selectSearchPlaceFromInput();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "applicationMessage") {
    state.applicationDrafts[state.selectedJobId] = event.target.value;
  }
});

document.getElementById("searchPlace")?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  void selectSearchPlaceFromInput();
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (["searchShift", "searchAvailability", "shiftFilter", "availabilityFilter"].includes(target.name)) {
    keepAnyChoiceExclusive(target.name, target);
  }
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const role = document.getElementById("searchRole").value;
  const distance = Number(document.getElementById("searchDistance").value);
  const shifts = compactChoices(readCheckedValues("searchShift"));
  const availability = compactChoices(readCheckedValues("searchAvailability"));
  const contracts = Array.from(document.querySelectorAll('input[name="intakeContract"]:checked')).map((input) => input.value);
  const notes = document.getElementById("searchNotes").value.trim();
  const origin = validCoordinates(state.searchOrigin);

  const requiredFields = [
    [role, "il profilo professionale", "searchRole"],
    [distance, "la distanza massima", "searchDistance"],
    [shifts.length, "l'organizzazione dei turni", "searchShift"],
    [availability.length, "la disponibilità", "searchAvailability"]
  ];
  const missingField = requiredFields.find(([value]) => !value);
  if (missingField) {
    showToast(`Completa ${missingField[1]}`);
    document.getElementById(missingField[2])?.focus();
    document.querySelector(`input[name="${missingField[2]}"]`)?.focus();
    return;
  }

  if (!origin && distance < 9999) {
    showToast("Attendi o autorizza la posizione per calcolare il raggio");
    document.querySelector('[data-action="locate-search"]')?.focus();
    return;
  }

  state.searchProfile = {
    role,
    distance,
    origin: origin ? { ...origin, label: state.searchOrigin.label } : null,
    shifts,
    availability,
    contracts,
    notes
  };
  state.searchCompleted = true;
  state.searchQuery = resultsSummaryForProfile();
  state.localProfile = { role: searchRoleLabels[role], area: "Ricerca per distanza" };
  writeLocalJson(LOCAL_STORAGE_KEYS.profile, state.localProfile);
  syncResultControlsFromSearch();
  document.getElementById("resultsSummary").textContent = resultsSummaryForProfile();
  navigate("results");
  window.requestAnimationFrame(() => {
    document.getElementById("resultDeckIntro")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("offerReviewForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const rawText = offerReviewInput.value.trim();
  if (!rawText) {
    showToast("Incolla un link o il testo dell'offerta");
    offerReviewInput.focus();
    return;
  }
  const result = analyzeOfferReview(rawText);
  state.lastReviewPrompt = result.prompt;
  renderOfferReview(result);
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
    const filter = chip.dataset.filter;
    if (state.quickFilters.has(filter)) {
      state.quickFilters.delete(filter);
    } else {
      state.quickFilters.add(filter);
    }
  });
});

document.getElementById("showAllJobs")?.addEventListener("click", () => navigate("results"));
document.getElementById("applyFilters").addEventListener("click", applyJobFilters);
document.getElementById("sortJobs").addEventListener("change", applyJobFilters);
document.querySelectorAll('input[name="shiftFilter"], input[name="availabilityFilter"]').forEach((input) => {
  input.addEventListener("change", applyJobFilters);
});
document.getElementById("categoryFilter").addEventListener("change", (event) => {
  selectCategory(event.target.value);
  applyJobFilters();
});

function resetFilters() {
  if (!state.searchCompleted) {
    navigate("home");
    return;
  }
  syncResultControlsFromSearch();
  applyJobFilters();
}

document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("emptyReset").addEventListener("click", () => navigate("home"));
document.getElementById("italyMap")?.addEventListener("click", setSearchOriginFromMapEvent);

setupSearchVerticalFlow();
renderCoverageDashboard();
renderSourceRegistry();
renderRateMarket();
renderLocalRegistries();
applyJobFilters();
renderApplicationsList();
updateCounts();
updateLiveSourceCounters(window.RADAR_DATA?.searchSnapshot?.sourcesUsed);
void hydrateLiveOfferIndex();
