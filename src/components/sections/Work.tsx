'use client';

import { motion } from 'framer-motion';

type Role = {
  company: string;
  title: string;
  period: string;
  mode: string;
  description: string;
  highlights: string[];
  stack: string[];
};

const roles: Role[] = [
  {
    company: 'Corsi.it',
    title: 'Senior Full Stack Developer',
    period: 'Ott 2025 — Mar 2026',
    mode: 'Remote',
    description:
      'Ambiente ad alta velocità con elevato volume di ticket giornalieri. Sviluppo e manutenzione di applicazioni web scalabili, focus su performance, affidabilità ed esperienza utente.',
    highlights: [
      'Risoluzione di problemi complessi in produzione',
      'Pianificazione, prioritizzazione e delivery in metodologia agile',
      'Collaborazione con team cross-funzionali e meeting tecnici',
    ],
    stack: ['React', 'TypeScript', 'Node', 'Laravel'],
  },
  {
    company: 'Loomnia',
    title: 'Full Stack Developer',
    period: 'Mar 2025 — Ott 2025',
    mode: 'On-site',
    description:
      'Soluzioni software full stack per aziende: dashboard gestionali, strumenti di automazione e piattaforme basate su chatbot. Progettazione, architettura e relazione diretta con i clienti.',
    highlights: [
      'Workflow automatizzati e funzionalità basate su AI',
      'Architettura tecnica e ciclo di sviluppo completo',
      'Applicazioni web e mobile scalabili per il business',
    ],
    stack: ['React', 'Next.js', 'Node', 'OpenAI', 'n8n'],
  },
  {
    company: 'SMED',
    title: 'Full Stack Developer · HealthTech',
    period: 'Feb 2024 — Apr 2025',
    mode: 'On-site',
    description:
      'Software medicale in ambito cardiologico e telemedicina. Soluzioni web e mobile a supporto dei flussi clinici dei medici, conformi ai requisiti di sicurezza del settore sanitario.',
    highlights: [
      'Progetti di Machine Learning su dataset medici',
      'Piattaforme sicure e scalabili per la telemedicina',
      'Stack full: React, Vue, PHP e Flutter',
    ],
    stack: ['React', 'Vue', 'PHP', 'Flutter', 'ML'],
  },
  {
    company: 'Sistemi e Soluzioni',
    title: 'Frontend Developer Intern',
    period: 'Mag 2023 — Nov 2023',
    mode: 'Remote',
    description:
      'Prima esperienza professionale in ambito frontend con tecnologie web moderne. Lavoro in team agile su interfacce responsive e orientate all\'utente.',
    highlights: [
      'Interfacce responsive e mobile-first',
      'Metodologia agile e pratiche di team',
      'Solide basi su HTML/CSS/JS moderno',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-6 lg:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <p className="eyebrow">[ 03 — Esperienze ]</p>
          <p className="eyebrow hidden md:block">Tempo reale · 2023→Oggi</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="headline text-chalk text-4xl md:text-5xl lg:text-6xl mb-20 max-w-4xl"
        >
          Persone, prodotti, problemi reali.
          <br />
          <span className="text-mute">
            Ogni tappa ha aggiunto un pezzo allo stack.
          </span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-[28%] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-20">
            {roles.map((r, i) => (
              <motion.article
                key={r.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pl-6 md:pl-0"
              >
                <div className="absolute left-[-4px] md:left-[calc(28%-4px)] top-2 w-2 h-2 rounded-full bg-accent" />

                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-mute mb-2">
                    {r.period}
                  </p>
                  <p className="font-mono text-xs text-bone uppercase tracking-wider">
                    {r.mode}
                  </p>
                </div>

                <div className="md:col-span-9 md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <h3 className="headline text-chalk text-2xl md:text-3xl">
                      {r.company}
                    </h3>
                    <span className="text-mute">·</span>
                    <p className="text-bone text-sm md:text-base">{r.title}</p>
                  </div>

                  <p className="text-bone leading-relaxed mb-5 max-w-3xl">
                    {r.description}
                  </p>

                  <ul className="space-y-2 mb-6 max-w-3xl">
                    {r.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm text-bone leading-relaxed"
                      >
                        <span className="text-accent mt-1.5 shrink-0">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-[11px] font-mono text-mute border border-line rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
