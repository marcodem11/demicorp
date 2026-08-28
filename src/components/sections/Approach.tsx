import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Approach({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).approach;

  return (
    <Section id="approach" index={t.index}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl lg:text-5xl">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.lead}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {t.items.map((it, i) => (
              <Reveal key={it.k} delay={i * 0.06} className="bg-paper">
                <div className="flex h-full flex-col gap-3 p-6 md:p-7">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-accent">{it.k}</span>
                  <h3 className="font-display text-lg font-semibold text-ink">{it.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
