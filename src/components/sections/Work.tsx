import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";

export function Work({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).projects;

  return (
    <Section id="work" index={t.index} title={t.title} subtitle={t.subtitle}>
      <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06} className="bg-paper">
            <Link
              href={`/${locale}/projects/${p.slug}`}
              className="group flex h-full flex-col justify-between gap-10 p-7 transition-colors hover:bg-surface md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
                  0{i + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {p.category[locale]}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tightest text-ink md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  {p.tagline[locale]}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="font-mono text-[10px] text-faint">+{p.stack.length - 4}</span>
                  )}
                </div>

                <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink">
                  {t.viewCase}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
