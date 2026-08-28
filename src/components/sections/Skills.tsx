import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/content/skills";

export function Skills({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).skills;

  return (
    <Section id="skills" index={t.index} title={t.title} subtitle={t.subtitle}>
      <dl className="mt-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label[locale]} delay={i * 0.05}>
            <div className="grid gap-4 border-t border-line py-7 md:grid-cols-12 md:gap-8">
              <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted md:col-span-3">
                {group.label[locale]}
              </dt>
              <dd className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
