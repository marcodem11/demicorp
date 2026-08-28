import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;
type LArr = Record<Locale, string[]>;

export type Project = {
  slug: string;
  name: string;
  tagline: L;
  category: L;
  role: L;
  year: string;
  status: L;
  stack: string[];
  context: L;
  solution: LArr;
  results: LArr;
  links: { live?: string; repo?: string };
  /** true = i dati/link sono da confermare prima della pubblicazione */
  draft?: boolean;
  accent?: string; // optional per-project tint (unused by default)
};

export const projects: Project[] = [
  {
    slug: "padel-bottega",
    name: "Padel Bottega",
    tagline: {
      it: "Da advisor per racchette da padel a marketplace full-stack curato.",
      en: "From a padel racket advisor to a curated full-stack marketplace.",
    },
    category: { it: "Marketplace / E-commerce", en: "Marketplace / E-commerce" },
    role: { it: "Solo developer · full-stack, end-to-end", en: "Solo developer · full-stack, end-to-end" },
    year: "2025 — 2026",
    status: { it: "In sviluppo attivo", en: "Actively developed" },
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe Connect", "Vercel"],
    context: {
      it: "Scegliere una racchetta da padel è difficile: troppa offerta, poca guida. Il progetto nasce come advisor — un quiz che consiglia il modello giusto — e cresce in un marketplace con catalogo curato e area admin.",
      en: "Choosing a padel racket is hard: too much choice, little guidance. It started as an advisor — a quiz that recommends the right model — and grew into a marketplace with a curated catalogue and admin area.",
    },
    solution: {
      it: [
        "Quiz interattivo che produce una raccomandazione personalizzata.",
        "Catalogo curato con schede dettagliate delle racchette.",
        "Area admin per gestire modelli, ordini e fatturazione.",
        "Stripe Connect con split commissioni (95/5) predisposto per i negozi partner.",
        "Pipeline dati: scraping e validazione di 500+ racchette con rimozione automatica dello sfondo.",
      ],
      en: [
        "Interactive quiz producing a personalised recommendation.",
        "Curated catalogue with detailed racket pages.",
        "Admin area to manage models, orders and billing.",
        "Stripe Connect with commission split (95/5) wired for partner stores.",
        "Data pipeline: scraping and validation of 500+ rackets with automatic background removal.",
      ],
    },
    results: {
      it: [
        "500+ racchette processate tramite pipeline dati dedicata.",
        "Primo negozio partner confermato. [da confermare per pubblicazione]",
        "Online su padelbottega.it.",
      ],
      en: [
        "500+ rackets processed via a dedicated data pipeline.",
        "First partner store confirmed. [to confirm before publishing]",
        "Live at padelbottega.it.",
      ],
    },
    links: { live: "https://www.padelbottega.it/" },
  },
  {
    slug: "mdm-enterprises",
    name: "MDM Enterprises",
    tagline: {
      it: "Un ufficio virtuale che orchestra i miei agenti AI e automazioni.",
      en: "A virtual office orchestrating my AI agents and automations.",
    },
    category: { it: "AI Tooling / Automazione", en: "AI Tooling / Automation" },
    role: { it: "Solo developer · ideazione e architettura", en: "Solo developer · concept and architecture" },
    year: "2026",
    status: { it: "In sviluppo attivo", en: "Actively developed" },
    stack: ["Next.js 16", "TypeScript", "SQLite", "WebSocket", "n8n", "Claude API"],
    context: {
      it: "Gestire più agenti AI e automazioni sparse — script, n8n, API — è caotico. Serviva un unico posto da cui vedere e comandare tutti gli automatismi in tempo reale.",
      en: "Managing multiple AI agents and scattered automations — scripts, n8n, APIs — is chaotic. I needed a single place to see and command every automation in real time.",
    },
    solution: {
      it: [
        "Motore data-driven: ogni agente riporta stato, task e log via API su SQLite.",
        "Due viste dello stesso motore: una console tabellare e un ufficio pixel-art 'vivo' top-down.",
        "Terminale reale integrato nell'app (xterm.js ↔ node-pty) e pannello per le API key.",
        "Architettura espandibile: nuovi reparti/automazioni senza refactoring pesante.",
      ],
      en: [
        "Data-driven engine: every agent reports status, tasks and logs via API to SQLite.",
        "Two views on the same engine: a tabular console and a living top-down pixel-art office.",
        "Real terminal embedded in the app (xterm.js ↔ node-pty) and an API-key panel.",
        "Extensible architecture: new departments/automations without heavy refactoring.",
      ],
    },
    results: {
      it: [
        "Dimostra concretamente l'orchestrazione di agenti AI e l'automazione di flussi reali.",
        "Uso interno — presentato tramite screenshot e video. [asset da preparare]",
      ],
      en: [
        "A concrete demonstration of AI-agent orchestration and real workflow automation.",
        "Internal tool — presented via screenshots and video. [assets to prepare]",
      ],
    },
    links: {},
    draft: true,
  },
  {
    slug: "extra",
    name: "eXtra",
    tagline: {
      it: "Marketplace geolocalizzato che collega ristoranti e camerieri per turni extra.",
      en: "A location-based marketplace connecting restaurants and waiters for extra shifts.",
    },
    category: { it: "Marketplace / Mobile", en: "Marketplace / Mobile" },
    role: { it: "Solo developer · mobile, web e backend", en: "Solo developer · mobile, web and backend" },
    year: "2026",
    status: { it: "In sviluppo attivo", en: "Actively developed" },
    stack: ["Expo", "React Native", "Supabase", "RevenueCat", "Next.js", "Vercel"],
    context: {
      it: "I ristoranti hanno bisogno di personale all'ultimo momento (weekend, serate, sostituzioni); i camerieri cercano turni flessibili. Mancava un ponte rapido e locale tra domanda e offerta.",
      en: "Restaurants need staff at the last minute (weekends, evenings, replacements); waiters look for flexible shifts. A fast, local bridge between supply and demand was missing.",
    },
    solution: {
      it: [
        "App mobile che matcha domanda e offerta su base geografica.",
        "Guest browsing: esplori prima di registrarti.",
        "Abbonamenti gestiti con RevenueCat (in-app purchase).",
        "Sito web companion per la parte pubblica.",
      ],
      en: [
        "Mobile app matching supply and demand on a geographic basis.",
        "Guest browsing: explore before signing up.",
        "Subscriptions handled with RevenueCat (in-app purchase).",
        "Companion website for the public-facing part.",
      ],
    },
    results: {
      it: ["Flusso di sottoscrizione in test end-to-end.", "Metriche di utilizzo. [da confermare]"],
      en: ["Subscription flow in end-to-end testing.", "Usage metrics. [to confirm]"],
    },
    links: {},
    draft: true,
  },
  {
    slug: "trading-bot",
    name: "Trading Bot",
    tagline: {
      it: "Bot di trading algoritmico forex, multi-strategia, con adattamento al regime di mercato.",
      en: "Algorithmic forex trading bot, multi-strategy, adapting to the market regime.",
    },
    category: { it: "Algo-trading / Automazione", en: "Algo-trading / Automation" },
    role: { it: "Solo developer", en: "Solo developer" },
    year: "2026",
    status: { it: "In esecuzione (demo live)", en: "Running (live demo)" },
    stack: ["Python", "MetaApi", "MetaTrader 5", "loguru"],
    context: {
      it: "Il day-trading manuale è lento e soggetto a emotività. L'obiettivo era automatizzare l'esecuzione con strategie capaci di adattarsi alle condizioni di mercato — un esercizio di ingegneria e automazione, non una promessa di profitto.",
      en: "Manual day-trading is slow and emotion-driven. The goal was to automate execution with strategies that adapt to market conditions — an engineering and automation exercise, not a profit promise.",
    },
    solution: {
      it: [
        "Connessione a MetaTrader 5 via MetaApi su conto demo.",
        "Architettura multi-strategia con adattamento al regime di mercato.",
        "Esecuzione live su timeframe 15m con logging strutturato.",
        "Modulo di backtest separato per validare le strategie.",
      ],
      en: [
        "Connection to MetaTrader 5 via MetaApi on a demo account.",
        "Multi-strategy architecture adapting to the market regime.",
        "Live execution on a 15m timeframe with structured logging.",
        "Separate backtesting module to validate strategies.",
      ],
    },
    results: {
      it: ["Presentato come progetto di ingegneria e automazione (nessun claim di performance)."],
      en: ["Presented as an engineering and automation project (no performance claims)."],
    },
    links: {},
    draft: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
