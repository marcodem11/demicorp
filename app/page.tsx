'use client';

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Locale = "en" | "it";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

type Project = {
  title: string;
  desc: string;
  tech: string[];
  highlight: string;
};

type LocaleContent = {
  nav: { about: string; projects: string; experience: string; skills: string; contact: string };
  top: { portfolio: string; cta: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    viewWork: string;
    stats: { label: string; value: string }[];
    current: string;
    currentRole: string;
    currentMeta: string;
    strengths: string;
    strengthsLabel: string;
    recentFocus: string;
    recentFocusLabel: string;
    availability: string;
    availabilityLabel: string;
  };
  about: {
    title: string;
    body: string;
    languages: string;
    education: string;
  };
  section: {
    projectsEyebrow: string;
    projectsTitle: string;
    experienceEyebrow: string;
    experienceTitle: string;
    skillsEyebrow: string;
    skillsTitle: string;
    contactEyebrow: string;
    contactTitle: string;
  };
  contact: {
    availability: string;
    availabilityTitle: string;
    availabilityBody: string;
    whatYouGet: string;
    bullets: string[];
    startConversation: string;
    email: string;
    phone: string;
    website: string;
    location: string;
  };
  projects: Project[];
  experiences: Experience[];
  skills: { name: string; items: string[] }[];
  languages: { label: string; level: string }[];
};

const contactInfo = {
  name: "Marco De Michele",
  title: "Full-Stack Engineer | Web, Mobile, Product",
  location: "Puglia, Italy",
  phone: "+39 342 523 2258",
  email: "marcodemicheleta01@outlook.it",
  website: "https://www.demicorp.it",
};

const techRows = [
  ["TypeScript", "React", "Next.js", "Node.js", "Laravel", "PHP", "Flutter", "React Native", "Angular", "Vue", "Tailwind"],
  ["OpenAI", "n8n", "CI/CD", "Docker", "SaaS", "Automation", "MySQL", "REST APIs", "Chatbots", "Sentry", "Envoyer"],
];

const cvLinks = [
  { label: "CV (EN)", href: "/cv/marco-de-michele-cv-en.pdf" },
  { label: "CV (IT)", href: "/cv/marco-de-michele-cv-it.pdf" },
];

const content: Record<Locale, LocaleContent> = {
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", skills: "Skills", contact: "Contact" },
    top: { portfolio: "Portfolio", cta: "Get in touch" },
    hero: {
      badge: "Demicorp | Modern engineering",
      title: "Building resilient products across web, mobile, and backend.",
      subtitle:
        "Full-stack engineer with strong product ownership and delivery mindset. I design and ship web and mobile platforms end-to-end - from architecture to deployment - with a pragmatic focus on performance and iteration.",
      viewWork: "View work",
      stats: [
        { label: "Years building software", value: "5+" },
        { label: "Professional track record", value: "3+ yrs" },
        { label: "Focus", value: "Web / Mobile / Backend" },
      ],
      current: "Currently",
      currentRole: "Full Stack Developer (Senior)",
      currentMeta: "Corsi.it | Remote | Oct 2025 - Mar 2026",
      strengths: "Product delivery, automation, high-velocity execution",
      strengthsLabel: "Strengths",
      recentFocus: "Performance, UX polish, rapid iterations",
      recentFocusLabel: "Recent focus",
      availability: "Remote | International collaborations",
      availabilityLabel: "Availability",
    },
    about: {
      title: "Product-minded engineer",
      body:
        "I build resilient systems that pair pragmatic engineering with thoughtful UX. From workflow automation to complex dashboards and mobile apps, my goal is to ship fast, measure, and refine - without sacrificing maintainability.",
      languages: "Languages",
      education:
        "Education: Bachelor's Degree in Computer Science (ongoing), University of Bari | Boolean Coding Bootcamp (Full Stack Web Development, 2021)",
    },
    section: {
      projectsEyebrow: "Selected work",
      projectsTitle: "Product builds & automation",
      experienceEyebrow: "Experience",
      experienceTitle: "Where I've delivered",
      skillsEyebrow: "Toolbox",
      skillsTitle: "Stacks I work with",
      contactEyebrow: "Collaborate",
      contactTitle: "Let's build the next thing",
    },
    contact: {
      availability: "Availability",
      availabilityTitle: "Open for remote & international roles",
      availabilityBody: "Web, mobile, backend, and automation builds",
      whatYouGet: "What you get",
      bullets: [
        "Product-focused engineering: I balance shipping speed with maintainability and observability.",
        "Strong integration mindset: APIs, orchestration, and automation used where they create leverage.",
        "Full lifecycle ownership: architecture, implementation, delivery, and continuous improvement.",
      ],
      startConversation: "Start a conversation",
      email: "Email",
      phone: "Phone",
      website: "Website",
      location: "Location",
    },
    projects: [
      {
        title: "AI Website Generator",
        desc: "Full-stack platform that turns minimal inputs into production-ready websites with automated configuration, deployment, and infrastructure setup.",
        tech: ["TypeScript", "Next.js", "Node.js", "CI/CD", "SaaS"],
        highlight: "Built for scale and speed - single-click deployments with opinionated defaults.",
      },
      {
        title: "Batcomputer AI Assistant",
        desc: "Personal AI workspace inspired by the Batman universe. Conversational automation for notes, tasks, and workflow routing.",
        tech: ["LLM", "Chat automation", "React", "Node.js"],
        highlight: "Context-aware prompts + automation to manage daily ops without friction.",
      },
      {
        title: "AI Video Automation Workflow",
        desc: "End-to-end video pipeline orchestrated in n8n: from Telegram message to scripted, generated, edited, and published video.",
        tech: ["n8n", "OpenAI", "Creatomate", "API orchestration"],
        highlight: "Reduced manual production time with chained AI services and resilient retries.",
      },
    ],
    experiences: [
      {
        role: "Full Stack Software Developer (Senior)",
        company: "Corsi.it",
        location: "Remote",
        period: "Oct 2025 - Mar 2026",
        points: [
          "Shipped at high velocity across a large daily ticket flow while keeping quality high.",
          "Partnered with product, design, and engineering in agile rituals to keep delivery predictable.",
          "Owned performance and UX improvements on scalable web applications.",
        ],
      },
      {
        role: "Full Stack Software Developer",
        company: "Loomnia",
        location: "On-site",
        period: "Mar 2025 - Oct 2025",
        points: [
          "Designed and delivered enterprise dashboards, automation tools, and chatbot-led platforms.",
          "Contributed to system architecture, technical design, and end-to-end product development.",
          "Built scalable web and mobile apps with modern frontend and backend stacks.",
        ],
      },
      {
        role: "Full Stack Software Developer",
        company: "SMED",
        location: "On-site",
        period: "Feb 2024 - Apr 2025",
        points: [
          "Developed health-tech web and mobile solutions for cardiology and telemedicine.",
          "Used React, Vue, PHP, and Flutter to support clinicians with secure, scalable tools.",
          "Collaborated on ML initiatives using medical datasets to automate workflows.",
        ],
      },
      {
        role: "Frontend Developer Intern",
        company: "Sistemi e Soluzioni",
        location: "Remote",
        period: "May 2023 - Nov 2023",
        points: [
          "Built responsive user interfaces and learned modern frontend practices in agile teams.",
          "Improved teamwork and communication while shipping user-focused features.",
        ],
      },
    ],
    skills: [
      { name: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind"] },
      { name: "Backend", items: ["Node.js", "Laravel", "PHP", "REST APIs"] },
      { name: "Mobile", items: ["Flutter", "React Native"] },
      { name: "AI & Automation", items: ["OpenAI", "Chatbots", "Workflow orchestration", "n8n"] },
      { name: "DevOps", items: ["Docker", "CI/CD", "Deployment automation", "Envoyer", "Sentry"] },
      { name: "Data", items: ["SQL", "MySQL"] },
      { name: "Collaboration", items: ["Git", "GitHub", "GitLab", "Product thinking"] },
    ],
    languages: [
      { label: "Italian", level: "Native" },
      { label: "English", level: "Professional working proficiency" },
      { label: "Spanish", level: "Intermediate" },
    ],
  },
  it: {
    nav: { about: "Profilo", projects: "Progetti", experience: "Esperienza", skills: "Competenze", contact: "Contatti" },
    top: { portfolio: "Portfolio", cta: "Contattami" },
    hero: {
      badge: "Demicorp | Ingegneria moderna",
      title: "Costruisco prodotti solidi per web, mobile e backend.",
      subtitle:
        "Sviluppatore full-stack con forte orientamento al prodotto e alla delivery. Progetto e realizzo piattaforme web e mobile end-to-end - dall'architettura al deploy - con focus pragmatico su performance e iterazione rapida.",
      viewWork: "Vedi lavori",
      stats: [
        { label: "Anni nello sviluppo software", value: "5+" },
        { label: "Esperienza professionale", value: "3+ anni" },
        { label: "Focus", value: "Web / Mobile / Backend" },
      ],
      current: "Attualmente",
      currentRole: "Full Stack Developer (Senior)",
      currentMeta: "Corsi.it | Remote | Ott 2025 - Mar 2026",
      strengths: "Delivery prodotto, automazione, esecuzione ad alta velocita",
      strengthsLabel: "Punti di forza",
      recentFocus: "Performance, UX, iterazioni rapide",
      recentFocusLabel: "Focus recente",
      availability: "Remote | Collaborazioni internazionali",
      availabilityLabel: "Disponibilita",
    },
    about: {
      title: "Ingegnere orientato al prodotto",
      body:
        "Costruisco sistemi solidi unendo ingegneria pragmatica e UX curata. Dall'automazione dei workflow a dashboard complesse e app mobile, il mio obiettivo e consegnare rapidamente, misurare e migliorare - senza sacrificare la manutenibilita.",
      languages: "Lingue",
      education:
        "Formazione: Laurea Triennale in Informatica (in corso), Universita degli Studi di Bari | Boolean Coding Bootcamp (Full Stack Web Development, 2021)",
    },
    section: {
      projectsEyebrow: "Lavori selezionati",
      projectsTitle: "Prodotti digitali e automazione",
      experienceEyebrow: "Esperienza",
      experienceTitle: "Dove ho lavorato",
      skillsEyebrow: "Stack",
      skillsTitle: "Tecnologie con cui lavoro",
      contactEyebrow: "Collaboriamo",
      contactTitle: "Costruiamo il prossimo progetto",
    },
    contact: {
      availability: "Disponibilita",
      availabilityTitle: "Disponibile per ruoli remote e internazionali",
      availabilityBody: "Sviluppo web, mobile, backend e automazione",
      whatYouGet: "Cosa porto",
      bullets: [
        "Ingegneria orientata al prodotto: velocita di rilascio bilanciata con manutenibilita e osservabilita.",
        "Forte approccio all'integrazione: API, orchestrazione e automazione usate dove generano valore.",
        "Ownership completa del ciclo: architettura, sviluppo, delivery e miglioramento continuo.",
      ],
      startConversation: "Iniziamo a parlarne",
      email: "Email",
      phone: "Telefono",
      website: "Sito",
      location: "Posizione",
    },
    projects: [
      {
        title: "AI Website Generator",
        desc: "Piattaforma full-stack che genera e pubblica siti web pronti per la produzione partendo da input minimi, con setup automatico di configurazione, deploy e infrastruttura.",
        tech: ["TypeScript", "Next.js", "Node.js", "CI/CD", "SaaS"],
        highlight: "Progettata per scalabilita e velocita - deploy in un click con standard tecnici solidi.",
      },
      {
        title: "Batcomputer AI Assistant",
        desc: "Assistente personale basato su AI, ispirato all'universo Batman, per gestione di note, task e workflow quotidiani.",
        tech: ["LLM", "Chat automation", "React", "Node.js"],
        highlight: "Automazione contestuale per organizzare operativita e produttivita in tempo reale.",
      },
      {
        title: "AI Video Automation Workflow",
        desc: "Pipeline end-to-end orchestrata con n8n: da messaggio Telegram a video scriptato, generato, editato e pubblicato automaticamente.",
        tech: ["n8n", "OpenAI", "Creatomate", "API orchestration"],
        highlight: "Riduzione drastica del lavoro manuale grazie all'orchestrazione affidabile di piu servizi AI.",
      },
    ],
    experiences: [
      {
        role: "Full Stack Software Developer (Senior)",
        company: "Corsi.it",
        location: "Remote",
        period: "Ott 2025 - Mar 2026",
        points: [
          "Lavoro in ambiente ad alta velocita con elevato volume ticket, migliorando rapidita di sviluppo e qualita delle consegne.",
          "Collaborazione con team cross-funzionali in metodologia agile tra meeting, pianificazioni e confronti tecnici.",
          "Contributo a sviluppo e manutenzione di applicazioni web scalabili con focus su performance, affidabilita ed esperienza utente.",
        ],
      },
      {
        role: "Full Stack Software Developer",
        company: "Loomnia",
        location: "On-site",
        period: "Mar 2025 - Ott 2025",
        points: [
          "Progettazione e sviluppo di soluzioni full-stack per aziende: dashboard, automazioni e piattaforme con chatbot.",
          "Partecipazione ad architettura di sistema, progettazione tecnica e sviluppo prodotto end-to-end.",
          "Realizzazione di applicazioni web e mobile scalabili con stack frontend e backend moderni.",
        ],
      },
      {
        role: "Full Stack Software Developer",
        company: "SMED",
        location: "On-site",
        period: "Feb 2024 - Apr 2025",
        points: [
          "Sviluppo di applicazioni health-tech e software medicale in ambito cardiologico e telemedicina.",
          "Sviluppo full-stack con React, Vue, PHP e Flutter per supportare flussi clinici e risultati paziente.",
          "Partecipazione a iniziative ML su dataset medici per automazione processi e supporto decisionale.",
        ],
      },
      {
        role: "Frontend Developer Intern",
        company: "Sistemi e Soluzioni",
        location: "Remote",
        period: "Mag 2023 - Nov 2023",
        points: [
          "Prima esperienza professionale frontend su tecnologie web moderne e interfacce responsive.",
          "Collaborazione in team agile, consolidando comunicazione e lavoro di gruppo su feature orientate all'utente.",
        ],
      },
    ],
    skills: [
      { name: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind"] },
      { name: "Backend", items: ["Node.js", "Laravel", "PHP", "REST APIs"] },
      { name: "Mobile", items: ["Flutter", "React Native"] },
      { name: "AI & Automazione", items: ["OpenAI", "Chatbots", "Workflow orchestration", "n8n"] },
      { name: "DevOps", items: ["Docker", "CI/CD", "Deployment automation", "Envoyer", "Sentry"] },
      { name: "Data", items: ["SQL", "MySQL"] },
      { name: "Collaborazione", items: ["Git", "GitHub", "GitLab", "Product thinking"] },
    ],
    languages: [
      { label: "Italiano", level: "Madrelingua" },
      { label: "Inglese", level: "Livello professionale completo" },
      { label: "Spagnolo", level: "Intermedio" },
    ],
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];

  useEffect(() => {
    const saved = localStorage.getItem("site_locale");
    if (saved === "en" || saved === "it") setLocale(saved);
  }, []);

  const onChangeLocale = (next: Locale) => {
    setLocale(next);
    localStorage.setItem("site_locale", next);
  };

  return (
    <main className="min-h-screen">
      <div className="grid-overlay" />
      <div className="spark two" />
      <div className="spark three" />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#06040d]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#9c7bff] via-[#7b5dff] to-[#3a0ca3] grid place-items-center text-white font-semibold tracking-tight shrink-0">D</div>
            <div className="min-w-0">
              <p className="text-sm text-white/70">{t.top.portfolio}</p>
              <p className="font-semibold text-white truncate">Demicorp | {contactInfo.name}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="link-underline">{t.nav.about}</a>
            <a href="#projects" className="link-underline">{t.nav.projects}</a>
            <a href="#experience" className="link-underline">{t.nav.experience}</a>
            <a href="#skills" className="link-underline">{t.nav.skills}</a>
            <a href="#contact" className="link-underline">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <select
              value={locale}
              onChange={(e) => onChangeLocale(e.target.value as Locale)}
              aria-label="Language selector"
              className="h-9 rounded-lg bg-white/5 border border-white/10 px-2 text-sm text-white outline-none hover:border-[#9c7bff]/60"
            >
              <option value="en" className="text-black">English</option>
              <option value="it" className="text-black">Italiano</option>
            </select>
            <Link href={`mailto:${contactInfo.email}`} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7b5dff] via-[#9c7bff] to-[#3a0ca3] text-sm font-semibold text-white shadow-lg shadow-[#3a0ca3]/30 hover:shadow-[#7b5dff]/40 transition">
              <MailIcon className="h-4 w-4" />
              {t.top.cta}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <section id="hero" className="pt-16 md:pt-24 pb-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <Reveal>
            <div className="relative">
              <div className="gradient-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
                <div className="h-2 w-2 rounded-full bg-[#9c7bff] shadow-[0_0_0_6px_rgba(156,123,255,0.18)]" />
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mt-5 text-gradient">{t.hero.title}</h1>
              <p className="text-lg text-white/75 mt-5 max-w-2xl">{t.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <PrimaryButton href="#projects" icon={<ArrowIcon />}>{t.hero.viewWork}</PrimaryButton>
                {cvLinks.map((cv) => <GhostButton key={cv.href} href={cv.href} icon={<DownloadIcon />}>{cv.label}</GhostButton>)}
              </div>
              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                {t.hero.stats.map((stat, i) => (
                  <Reveal key={stat.label} delay={80 * i}>
                    <div className="card p-4 bg-white/5 border-white/5 hover:border-[#9c7bff]/60 min-w-0">
                      <p className="text-2xl sm:text-3xl font-semibold text-white leading-tight break-words">{stat.value}</p>
                      <p className="text-sm text-white/70">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="shine" />
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7b5dff] via-[#9c7bff] to-[#3a0ca3] grid place-items-center text-xl font-semibold">M</div>
                  <div>
                    <p className="text-sm text-white/60">{t.hero.current}</p>
                    <p className="text-lg font-semibold text-white">{t.hero.currentRole}</p>
                    <p className="text-sm text-white/70">{t.hero.currentMeta}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <HighlightRow label={t.hero.strengthsLabel} value={t.hero.strengths} />
                  <HighlightRow label={t.hero.recentFocusLabel} value={t.hero.recentFocus} />
                  <HighlightRow label={t.hero.availabilityLabel} value={t.hero.availability} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AI", "Automation", "SaaS", "Web", "Mobile"].map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section aria-label="Tech stacks in motion" className="mt-6 space-y-3">
          {techRows.map((row, idx) => <TechMarquee key={idx} items={row} reverse={idx % 2 === 1} />)}
        </section>

        <section id="about" className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <Reveal>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3"><PinIcon className="h-4 w-4 text-[#9c7bff]" /><p className="text-white/80">{contactInfo.location}</p></div>
              <h2 className="text-2xl font-semibold text-white mb-3">{t.about.title}</h2>
              <p className="text-white/75">{t.about.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={contactInfo.website} className="link-underline text-sm inline-flex items-center gap-2 text-white/80"><GlobeIcon className="h-4 w-4" />demicorp.it</Link>
                <Link href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="link-underline text-sm inline-flex items-center gap-2 text-white/80"><PhoneIcon className="h-4 w-4" />{contactInfo.phone}</Link>
                <Link href={`mailto:${contactInfo.email}`} className="link-underline text-sm inline-flex items-center gap-2 text-white/80"><MailIcon className="h-4 w-4" />{contactInfo.email}</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-6">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.08em] text-white/60"><div className="h-2 w-2 rounded-full bg-[#9c7bff]" />{t.about.languages}</div>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {t.languages.map((lng, i) => (
                  <Reveal key={lng.label} delay={i * 80}>
                    <div className="glass rounded-xl p-4">
                      <p className="text-white font-semibold">{lng.label}</p>
                      <p className="text-white/70 text-sm">{lng.level}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-5 text-sm text-white/65">{t.about.education}</div>
            </div>
          </Reveal>
        </section>
        <section id="projects" className="mt-16">
          <SectionHeading eyebrow={t.section.projectsEyebrow} title={t.section.projectsTitle} />
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <article className="card p-5 bg-gradient-to-br from-[#120c23] to-[#0c0818] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 20%, rgba(156,123,255,0.16), transparent 45%)" }} />
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70 whitespace-nowrap">{project.tech.slice(0, 2).join(" | ")}</span>
                  </div>
                  <p className="text-white/75 mt-3">{project.desc}</p>
                  <p className="text-sm text-white/65 mt-3">{project.highlight}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="tag text-xs">{tag}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <SectionHeading eyebrow={t.section.experienceEyebrow} title={t.section.experienceTitle} />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 border-l border-white/10" />
            <div className="space-y-6">
              {t.experiences.map((job, i) => (
                <Reveal key={`${job.company}-${job.period}`} delay={i * 120}>
                  <div className="card p-5 pl-12 relative bg-[#0f0a1d]">
                    <div className="absolute left-2 top-6 h-3 w-3 rounded-full bg-gradient-to-br from-[#9c7bff] to-[#3a0ca3] shadow-[0_0_0_6px_rgba(156,123,255,0.2)]" />
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <span className="text-white/70">{job.company} | {job.location}</span>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{job.period}</p>
                    <ul className="mt-3 space-y-2 text-white/75 list-disc list-inside">{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mt-16">
          <SectionHeading eyebrow={t.section.skillsEyebrow} title={t.section.skillsTitle} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((group, i) => (
              <Reveal key={group.name} delay={i * 90}>
                <div className="card p-4">
                  <div className="flex items-center gap-2 mb-2"><div className="h-2 w-2 rounded-full bg-[#9c7bff]" /><p className="text-white font-semibold">{group.name}</p></div>
                  <div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="tag text-xs">{item}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <SectionHeading eyebrow={t.section.contactEyebrow} title={t.section.contactTitle} />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <Reveal>
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="shine" />
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7b5dff] via-[#9c7bff] to-[#3a0ca3] grid place-items-center text-xl font-semibold">M</div>
                  <div>
                    <p className="text-sm text-white/60">{t.contact.availability}</p>
                    <p className="text-lg font-semibold text-white">{t.contact.availabilityTitle}</p>
                    <p className="text-sm text-white/70">{t.contact.availabilityBody}</p>
                  </div>
                </div>
                <div className="mt-5 grid md:grid-cols-2 gap-3">
                  <ContactLink label={t.contact.email} value={contactInfo.email} href={`mailto:${contactInfo.email}`} icon={<MailIcon className="h-4 w-4" />} />
                  <ContactLink label={t.contact.phone} value={contactInfo.phone} href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} icon={<PhoneIcon className="h-4 w-4" />} />
                  <ContactLink label={t.contact.website} value="demicorp.it" href={contactInfo.website} icon={<GlobeIcon className="h-4 w-4" />} />
                  <ContactLink label={t.contact.location} value={contactInfo.location} icon={<PinIcon className="h-4 w-4" />} />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">{cvLinks.map((cv) => <GhostButton key={cv.href} href={cv.href} icon={<DownloadIcon />}>{cv.label}</GhostButton>)}</div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card p-6 bg-[#0f0a1d]">
                <p className="text-sm uppercase tracking-[0.08em] text-white/60 mb-3">{t.contact.whatYouGet}</p>
                <ul className="space-y-3 text-white/75">
                  {t.contact.bullets.map((bullet) => (
                    <li className="flex gap-2" key={bullet}><ArrowIcon className="h-4 w-4 mt-1 text-[#9c7bff]" />{bullet}</li>
                  ))}
                </ul>
                <div className="mt-5"><PrimaryButton href={`mailto:${contactInfo.email}`} icon={<MailIcon />}>{t.contact.startConversation}</PrimaryButton></div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <Reveal><div className="mb-5"><p className="text-xs uppercase tracking-[0.2em] text-white/60">{eyebrow}</p><h2 className="text-3xl font-semibold text-white mt-1">{title}</h2></div></Reveal>;
}

function HighlightRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start gap-3"><div className="h-2 w-2 rounded-full bg-[#9c7bff] mt-2" /><div><p className="text-sm text-white/60">{label}</p><p className="text-white">{value}</p></div></div>;
}

function PrimaryButton({ href, children, icon }: { href: string; children: ReactNode; icon?: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#7b5dff] via-[#9c7bff] to-[#3a0ca3] text-sm font-semibold text-white shadow-lg shadow-[#3a0ca3]/30 hover:shadow-[#7b5dff]/40 hover:-translate-y-0.5 transition">{icon}{children}</Link>;
}

function GhostButton({ href, children, icon }: { href: string; children: ReactNode; icon?: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-sm font-semibold text-white hover:border-[#9c7bff]/60 transition hover:-translate-y-0.5">{icon}{children}</Link>;
}

function ContactLink({ label, value, href, icon }: { label: string; value: string; href?: string; icon?: ReactNode }) {
  const content = <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8 hover:border-[#9c7bff]/60 transition min-w-0"><div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7b5dff] via-[#9c7bff] to-[#3a0ca3] grid place-items-center text-white shrink-0">{icon}</div><div className="min-w-0"><p className="text-sm text-white/60">{label}</p><p className="text-white font-semibold leading-tight break-all">{value}</p></div></div>;
  return href ? <Link href={href}>{content}</Link> : content;
}

function TechMarquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}><div className="marquee-track">{loop.map((item, i) => <span key={`${item}-${i}`} className="chip">{item}</span>)}</div></div>;
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5" /><path d="M9 5h10v10" /></svg>; }
function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v14" /><path d="m6 11 6 6 6-6" /><path d="M5 21h14" /></svg>; }
function MailIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v14H4z" /><path d="m4 7 8 5 8-5" /></svg>; }
function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2c1.5 3 3.5 5 6.5 6.5l2-3 5 2v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></svg>; }
function GlobeIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15.3 15.3 0 0 1 0 18" /><path d="M12 3a15.3 15.3 0 0 0 0 18" /></svg>; }
function PinIcon({ className = "h-4 w-4" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" /><circle cx="12" cy="11" r="2.5" /></svg>; }
