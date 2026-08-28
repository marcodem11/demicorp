import type { Locale } from "@/i18n/config";

export type Role = {
  company: string;
  title: Record<Locale, string>;
  period: Record<Locale, string>;
  mode: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Corsi.it",
    title: { it: "Senior Full Stack Developer", en: "Senior Full Stack Developer" },
    period: { it: "Ott 2025 — Mar 2026", en: "Oct 2025 — Mar 2026" },
    mode: { it: "Remote", en: "Remote" },
    description: {
      it: "Ambiente ad alta velocità con elevato volume di ticket giornalieri. Sviluppo e manutenzione di applicazioni web scalabili, con focus su performance, affidabilità ed esperienza utente.",
      en: "High-velocity environment with a high daily ticket volume. Building and maintaining scalable web applications, focused on performance, reliability and user experience.",
    },
    highlights: {
      it: [
        "Risoluzione di problemi complessi in produzione",
        "Pianificazione, prioritizzazione e delivery in metodologia agile",
        "Collaborazione con team cross-funzionali",
      ],
      en: [
        "Solving complex problems in production",
        "Planning, prioritising and delivering in an agile methodology",
        "Collaboration with cross-functional teams",
      ],
    },
    stack: ["React", "TypeScript", "Node", "Laravel"],
  },
  {
    company: "Loomnia",
    title: { it: "Full Stack Developer", en: "Full Stack Developer" },
    period: { it: "Mar 2025 — Ott 2025", en: "Mar 2025 — Oct 2025" },
    mode: { it: "On-site", en: "On-site" },
    description: {
      it: "Soluzioni software full stack per aziende: dashboard gestionali, strumenti di automazione e piattaforme basate su chatbot. Progettazione, architettura e relazione diretta con i clienti.",
      en: "Full stack software solutions for businesses: management dashboards, automation tools and chatbot-based platforms. Design, architecture and direct client relationships.",
    },
    highlights: {
      it: [
        "Workflow automatizzati e funzionalità basate su AI",
        "Architettura tecnica e ciclo di sviluppo completo",
        "Applicazioni web e mobile scalabili per il business",
      ],
      en: [
        "Automated workflows and AI-based features",
        "Technical architecture and full development cycle",
        "Scalable web and mobile applications for business",
      ],
    },
    stack: ["React", "Next.js", "Node", "OpenAI", "n8n"],
  },
  {
    company: "SMED",
    title: { it: "Full Stack Developer · HealthTech", en: "Full Stack Developer · HealthTech" },
    period: { it: "Feb 2024 — Apr 2025", en: "Feb 2024 — Apr 2025" },
    mode: { it: "On-site", en: "On-site" },
    description: {
      it: "Software medicale in ambito cardiologico e telemedicina. Soluzioni web e mobile a supporto dei flussi clinici, conformi ai requisiti di sicurezza del settore sanitario.",
      en: "Medical software in cardiology and telemedicine. Web and mobile solutions supporting clinical workflows, compliant with healthcare security requirements.",
    },
    highlights: {
      it: [
        "Progetti di Machine Learning su dataset medici",
        "Piattaforme sicure e scalabili per la telemedicina",
        "Stack full: React, Vue, PHP e Flutter",
      ],
      en: [
        "Machine Learning projects on medical datasets",
        "Secure and scalable telemedicine platforms",
        "Full stack: React, Vue, PHP and Flutter",
      ],
    },
    stack: ["React", "Vue", "PHP", "Flutter", "ML"],
  },
  {
    company: "Sistemi e Soluzioni",
    title: { it: "Frontend Developer · Stage", en: "Frontend Developer · Internship" },
    period: { it: "Mag 2023 — Nov 2023", en: "May 2023 — Nov 2023" },
    mode: { it: "Remote", en: "Remote" },
    description: {
      it: "Prima esperienza professionale in ambito frontend con tecnologie web moderne. Lavoro in team agile su interfacce responsive e orientate all'utente.",
      en: "First professional experience in frontend with modern web technologies. Working in an agile team on responsive, user-oriented interfaces.",
    },
    highlights: {
      it: [
        "Interfacce responsive e mobile-first",
        "Metodologia agile e pratiche di team",
        "Solide basi su HTML/CSS/JS moderno",
      ],
      en: [
        "Responsive, mobile-first interfaces",
        "Agile methodology and team practices",
        "Solid foundations in modern HTML/CSS/JS",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript", "Git"],
  },
];
