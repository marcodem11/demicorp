'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative px-6 lg:px-12 pt-24 pb-10 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">// DISPONIBILE PER COLLABORAZIONI</p>
            <h2 className="headline text-5xl md:text-7xl text-chalk">
              Costruiamo<br />
              <span className="text-accent">qualcosa.</span>
            </h2>
          </div>
          <a
            href="mailto:marcodemicheleta01@outlook.it"
            className="font-mono text-sm text-bone link-underline self-start lg:self-end"
          >
            marcodemicheleta01@outlook.it
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 border-t border-line">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="text-xs font-mono text-mute tracking-wider">
              MDM · Puglia, Italia · {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { name: 'GitHub', href: 'https://github.com/marcodem11' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marco-de-michele-31a09b226/' },
              { name: 'demicorp.it', href: 'https://www.demicorp.it/' },
            ].map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-bone hover:text-accent transition-colors tracking-wider"
                whileHover={{ y: -1 }}
              >
                {s.name} ↗
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
