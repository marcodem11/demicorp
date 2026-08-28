import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/content/experience";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).experience;

  return (
    <Section id="experience" index={t.index} title={t.title} subtitle={t.subtitle}>
      <ol className="mt-4">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company} delay={i * 0.05}>
            <div className="group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-3">
                <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                  {role.period[locale]}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {role.mode[locale]}
                </p>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {role.company}
                  </h3>
                  <span className="text-muted">— {role.title[locale]}</span>
                </div>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {role.description[locale]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
