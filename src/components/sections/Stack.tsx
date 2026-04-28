'use client';

import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Linguaggi',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Laravel', 'REST APIs'],
  },
  {
    label: 'Mobile',
    items: ['Flutter', 'React Native'],
  },
  {
    label: 'AI & Automation',
    items: ['OpenAI', 'Chatbot dev', 'Workflow', 'n8n'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'CI/CD', 'Envoyer', 'Sentry', 'Git'],
  },
  {
    label: 'Database',
    items: ['SQL', 'MySQL'],
  },
];

const marquee = [
  'TypeScript',
  'React',
  'Next.js',
  'Laravel',
  'Flutter',
  'Node.js',
  'OpenAI',
  'Tailwind',
  'PHP',
  'Vue',
  'Docker',
  'n8n',
  'GitHub',
  'GitLab',
  'MySQL',
  'Sentry',
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-baseline justify-between mb-16">
          <p className="eyebrow">[ 04 — Stack ]</p>
          <p className="eyebrow hidden md:block">Daily drivers</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="headline text-chalk text-4xl md:text-5xl lg:text-6xl mb-20 max-w-4xl"
        >
          Strumenti che uso ogni giorno.
          <br />
          <span className="text-mute">Niente hype, solo cose che funzionano.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              className="bg-ink p-7 lg:p-8 flex flex-col gap-4 group hover:bg-carbon transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <p className="eyebrow !text-bone group-hover:!text-chalk transition-colors">
                  {g.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm text-chalk border-b border-transparent group-hover:border-line transition-colors pb-px"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 marquee-mask overflow-hidden border-y border-line py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marquee, ...marquee].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="headline text-mute hover:text-accent transition-colors text-4xl md:text-6xl px-8 inline-flex items-center gap-8"
            >
              {word}
              <span className="text-accent text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
