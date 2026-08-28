"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-70" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-page flex-col px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-28 lg:px-12">
        {/* top meta */}
        <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <p className="section-index">00 — Index</p>
          <p className="text-right">{t.location}</p>
        </div>

        {/* main */}
        <motion.div variants={container} initial="hidden" animate="show" className="mt-12 md:mt-16">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {t.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tightest text-ink sm:text-[10vw] md:text-8xl lg:text-9xl"
          >
            Marco
            <br />
            De Michele<span className="text-accent">.</span>
          </motion.h1>

          <motion.div variants={item} className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-ink md:col-span-4">
              {t.role}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted md:col-span-8 md:text-xl">
              <span className="text-ink">{t.tagline}</span> {t.intro}
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}#work`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {t.ctaProjects}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a
              href={site.cv[locale]}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {t.ctaCv}
              <span className="text-muted">PDF</span>
            </a>
          </motion.div>
        </motion.div>

        {/* bottom */}
        <div className="mt-auto flex items-center justify-between pt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          <span>{t.scroll} ↓</span>
          <span>Est. 2021</span>
        </div>
      </div>
    </section>
  );
}
