import type { Locale } from "./config";

type Dict = {
  nav: { work: string; experience: string; about: string; contact: string; projects: string };
  hero: {
    availability: string;
    role: string;
    tagline: string;
    intro: string;
    ctaProjects: string;
    ctaCv: string;
    location: string;
    scroll: string;
  };
  approach: {
    index: string;
    title: string;
    lead: string;
    items: { k: string; title: string; body: string }[];
  };
  experience: {
    index: string;
    title: string;
    subtitle: string;
    present: string;
    highlights: string;
  };
  projects: {
    index: string;
    title: string;
    subtitle: string;
    all: string;
    viewCase: string;
    role: string;
    stack: string;
    year: string;
    status: string;
    context: string;
    solution: string;
    results: string;
    links: string;
    live: string;
    repo: string;
    back: string;
    note: string;
  };
  skills: { index: string; title: string; subtitle: string };
  about: {
    index: string;
    title: string;
    education: string;
    languages: string;
    bootcamp: string;
    university: string;
    stats: { k: string; l: string }[];
  };
  contact: {
    index: string;
    title: string;
    lead: string;
    email: string;
    elsewhere: string;
    cv: string;
    placeholder: string;
  };
  footer: { built: string; available: string; rights: string };
  meta: { title: string; description: string };
};

export const dictionaries: Record<Locale, Dict> = {
  it: {
    nav: { work: "Progetti", experience: "Esperienza", about: "Chi sono", contact: "Contatti", projects: "Progetti" },
    hero: {
      availability: "Disponibile — in cerca di nuove opportunità",
      role: "Full Stack Web Developer",
      tagline: "Costruisco prodotti web e mobile moderni.",
      intro:
        "Nell'ultimo anno ho fatto dello sviluppo AI-augmented il mio metodo: Claude Code, agenti e automazioni per lavorare più veloce, con più costanza e meno errori — e portare quel metodo dentro un team.",
      ctaProjects: "Vedi i progetti",
      ctaCv: "Scarica il CV",
      location: "Puglia, IT · Remote-first",
      scroll: "scorri",
    },
    approach: {
      index: "02 — Metodo",
      title: "Non solo full-stack. Full-stack con un moltiplicatore.",
      lead:
        "Sviluppo l'intero ciclo di vita del prodotto — dal design al deploy — con un impianto di lavoro basato su AI e automazione che accorcia i tempi e alza la qualità.",
      items: [
        {
          k: "AI",
          title: "Sviluppo AI-augmented",
          body: "Pipeline con Claude Code e agenti per generare, revisionare e testare codice: più velocità, meno bug, output costante.",
        },
        {
          k: "AUTO",
          title: "Automazione dei flussi",
          body: "n8n, script e orchestrazione di agenti per eliminare il lavoro ripetitivo e rendere i processi ripetibili.",
        },
        {
          k: "E2E",
          title: "End-to-end",
          body: "Prodotto, architettura, sviluppo, deploy e monitoraggio. Consegno cose che funzionano in produzione.",
        },
        {
          k: "NOW",
          title: "Tooling aggiornatissimo",
          body: "Framework e strumenti sempre all'ultima versione, con un occhio a performance, accessibilità e manutenibilità.",
        },
      ],
    },
    experience: {
      index: "03 — Esperienza",
      title: "Dove ho lavorato",
      subtitle: "Cinque anni di sviluppo, oltre tre in ambito professionale.",
      present: "oggi",
      highlights: "In sintesi",
    },
    projects: {
      index: "04 — Progetti",
      title: "Progetti selezionati",
      subtitle: "Prodotti reali che ho progettato e costruito da solo, end-to-end.",
      all: "Tutti i progetti",
      viewCase: "Apri il case study",
      role: "Ruolo",
      stack: "Stack",
      year: "Anno",
      status: "Stato",
      context: "Contesto",
      solution: "Soluzione",
      results: "Risultati",
      links: "Link",
      live: "Sito",
      repo: "Codice",
      back: "Torna ai progetti",
      note: "Alcuni dati sono da confermare prima della pubblicazione.",
    },
    skills: { index: "05 — Stack", title: "Strumenti", subtitle: "Con cosa costruisco, per area." },
    about: {
      index: "01 — Chi sono",
      title: "Chi sono",
      education: "Formazione",
      languages: "Lingue",
      bootcamp: "Bootcamp Full Stack",
      university: "Informatica · Università di Bari",
      stats: [
        { k: "5+", l: "anni di sviluppo" },
        { k: "3+", l: "anni in produzione" },
        { k: "20+", l: "progetti consegnati" },
        { k: "4", l: "aziende & team" },
      ],
    },
    contact: {
      index: "06 — Contatti",
      title: "Parliamone",
      lead: "Disponibile per opportunità remote e internazionali. Il modo più rapido per raggiungermi è via email.",
      email: "Scrivimi",
      elsewhere: "Altrove",
      cv: "Curriculum (PDF)",
      placeholder: "da aggiungere",
    },
    footer: {
      built: "Costruito con Next.js · Editorial design",
      available: "Disponibile per nuovi progetti",
      rights: "Tutti i diritti riservati",
    },
    meta: {
      title: "Marco De Michele — Full Stack Web Developer",
      description:
        "Full Stack Web Developer. Costruisco prodotti web e mobile moderni con uno sviluppo AI-augmented: più veloce, più costante, con meno errori.",
    },
  },
  en: {
    nav: { work: "Work", experience: "Experience", about: "About", contact: "Contact", projects: "Projects" },
    hero: {
      availability: "Available — open to new opportunities",
      role: "Full Stack Web Developer",
      tagline: "I build modern web and mobile products.",
      intro:
        "Over the past year I've made AI-augmented development my method: Claude Code, agents and automation to ship faster, more consistently and with fewer bugs — and to bring that method into a team.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      location: "Puglia, IT · Remote-first",
      scroll: "scroll",
    },
    approach: {
      index: "02 — Method",
      title: "Not just full-stack. Full-stack with a multiplier.",
      lead:
        "I develop the whole product lifecycle — from design to deploy — on top of an AI- and automation-driven workflow that cuts time and raises quality.",
      items: [
        {
          k: "AI",
          title: "AI-augmented development",
          body: "Pipelines with Claude Code and agents to generate, review and test code: more speed, fewer bugs, consistent output.",
        },
        {
          k: "AUTO",
          title: "Workflow automation",
          body: "n8n, scripts and agent orchestration to remove repetitive work and make processes repeatable.",
        },
        {
          k: "E2E",
          title: "End-to-end",
          body: "Product, architecture, development, deploy and monitoring. I ship things that work in production.",
        },
        {
          k: "NOW",
          title: "Bleeding-edge tooling",
          body: "Frameworks and tools always on the latest version, with an eye on performance, accessibility and maintainability.",
        },
      ],
    },
    experience: {
      index: "03 — Experience",
      title: "Where I've worked",
      subtitle: "Five years of development, over three of them professional.",
      present: "present",
      highlights: "Highlights",
    },
    projects: {
      index: "04 — Work",
      title: "Selected projects",
      subtitle: "Real products I designed and built solo, end-to-end.",
      all: "All projects",
      viewCase: "Open case study",
      role: "Role",
      stack: "Stack",
      year: "Year",
      status: "Status",
      context: "Context",
      solution: "Solution",
      results: "Results",
      links: "Links",
      live: "Live",
      repo: "Code",
      back: "Back to projects",
      note: "Some data is to be confirmed before publishing.",
    },
    skills: { index: "05 — Stack", title: "Tools", subtitle: "What I build with, by area." },
    about: {
      index: "01 — About",
      title: "About",
      education: "Education",
      languages: "Languages",
      bootcamp: "Full Stack Bootcamp",
      university: "Computer Science · University of Bari",
      stats: [
        { k: "5+", l: "years developing" },
        { k: "3+", l: "years in production" },
        { k: "20+", l: "projects shipped" },
        { k: "4", l: "companies & teams" },
      ],
    },
    contact: {
      index: "06 — Contact",
      title: "Let's talk",
      lead: "Available for remote and international opportunities. The fastest way to reach me is by email.",
      email: "Email me",
      elsewhere: "Elsewhere",
      cv: "Résumé (PDF)",
      placeholder: "to be added",
    },
    footer: {
      built: "Built with Next.js · Editorial design",
      available: "Available for new projects",
      rights: "All rights reserved",
    },
    meta: {
      title: "Marco De Michele — Full Stack Web Developer",
      description:
        "Full Stack Web Developer. I build modern web and mobile products with AI-augmented development: faster, more consistent, with fewer bugs.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
