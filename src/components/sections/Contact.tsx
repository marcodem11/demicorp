import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;

  const links = [
    { label: "GitHub", href: site.socials.github, external: true },
    { label: "LinkedIn", href: site.socials.linkedin, external: true },
    { label: `${t.cv} — Italiano`, href: site.cv.it, external: false },
    { label: `${t.cv} — English`, href: site.cv.en, external: false },
  ];

  return (
    <Section id="contact" index={t.index}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tightest text-ink md:text-5xl lg:text-6xl">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.lead}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-tightest text-ink md:text-3xl"
            >
              <span className="link-underline">{site.email}</span>
              <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-10">
          <Reveal>
            <p className="eyebrow mb-6">{t.elsewhere}</p>
            <ul className="space-y-px overflow-hidden rounded-lg border border-line bg-line">
              {links.map((l) => (
                <li key={l.label} className="bg-paper">
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      download={l.external ? undefined : true}
                      className="group flex items-center justify-between px-5 py-4 transition-colors hover:bg-surface"
                    >
                      <span className="text-ink">{l.label}</span>
                      <span className="text-muted transition-transform group-hover:translate-x-1">
                        {l.external ? "↗" : "↓"}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-muted">{l.label}</span>
                      <span className="font-mono text-[11px] text-faint">{t.placeholder}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
