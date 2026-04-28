'use client';

import { motion } from 'framer-motion';

const stats = [
  { k: '5+', l: 'anni di sviluppo' },
  { k: '3+', l: 'anni in produzione' },
  { k: '20+', l: 'progetti consegnati' },
  { k: '4', l: 'aziende & team' },
];

const traits = [
  'Product-minded',
  'Performance-first',
  'AI & automation',
  'Cross-functional',
  'Agile / Scrum',
  'Remote-ready',
];

export default function About() {
  return (
    <section id="about" className="relative px-6 lg:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <p className="eyebrow">[ 02 — Profilo ]</p>
          <p className="eyebrow hidden md:block">Bari · Italia</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="headline text-chalk text-4xl md:text-5xl lg:text-6xl"
            >
              Sviluppatore Full Stack con orientamento al prodotto.
              <br />
              <span className="text-mute">
                Costruisco software che fa sembrare semplice ciò che semplice non è.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-5 text-bone text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Più di 5 anni nello sviluppo software e oltre 3 in ambito
                professionale, costruendo applicazioni web, mobile e
                piattaforme SaaS scalabili. Mi occupo di tutto il ciclo di
                vita del prodotto — progettazione, architettura, sviluppo,
                deploy e monitoraggio.
              </p>
              <p>
                Mi muovo tra <span className="text-chalk">React</span>,{' '}
                <span className="text-chalk">Next.js</span>,{' '}
                <span className="text-chalk">Laravel</span> e{' '}
                <span className="text-chalk">Flutter</span>, con un debole per
                tutto ciò che è <span className="text-accent">AI</span>,
                automazione e workflow intelligenti. Ho esperienza in HealthTech,
                EdTech e tooling interno aziendale.
              </p>
              <p className="text-mute">
                Disponibile per opportunità remote e internazionali.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {traits.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 border border-line rounded-full text-xs font-mono text-bone"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
            <div className="grid grid-cols-2 gap-px bg-line">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="bg-ink p-6 lg:p-8"
                >
                  <p className="headline text-chalk text-5xl lg:text-6xl mb-2">
                    {s.k}
                  </p>
                  <p className="text-xs font-mono text-mute uppercase tracking-wider">
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute font-mono">Formazione</span>
                <span className="text-chalk text-right">
                  Informatica
                  <br />
                  <span className="text-mute text-xs">Università di Bari</span>
                </span>
              </div>
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute font-mono">Bootcamp</span>
                <span className="text-chalk text-right">
                  Boolean Coding
                  <br />
                  <span className="text-mute text-xs">Full Stack · 2021</span>
                </span>
              </div>
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute font-mono">Lingue</span>
                <span className="text-chalk text-right">
                  IT · EN · ES
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute font-mono">Base</span>
                <span className="text-chalk">Puglia, Italia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
