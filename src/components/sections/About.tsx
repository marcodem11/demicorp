import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const bio: Record<Locale, string[]> = {
  it: [
    "Più di 5 anni nello sviluppo software e oltre 3 in ambito professionale, costruendo applicazioni web, mobile e piattaforme SaaS scalabili. Mi occupo di tutto il ciclo di vita del prodotto — progettazione, architettura, sviluppo, deploy e monitoraggio.",
    "Mi muovo tra React, Next.js, Laravel e Flutter, con un debole per tutto ciò che è AI, automazione e workflow intelligenti. Ho esperienza in HealthTech, EdTech e tooling interno aziendale. In parallelo sto ancora studiando Informatica all'Università di Bari.",
    "Disponibile per opportunità remote e internazionali.",
  ],
  en: [
    "More than 5 years in software development and over 3 professionally, building scalable web apps, mobile apps and SaaS platforms. I handle the whole product lifecycle — design, architecture, development, deploy and monitoring.",
    "I move between React, Next.js, Laravel and Flutter, with a soft spot for everything AI, automation and smart workflows. I have experience in HealthTech, EdTech and internal business tooling. In parallel I'm still studying Computer Science at the University of Bari.",
    "Available for remote and international opportunities.",
  ],
};

const headline: Record<Locale, { a: string; b: string }> = {
  it: {
    a: "Sviluppatore Full Stack con orientamento al prodotto.",
    b: "Costruisco software che fa sembrare semplice ciò che semplice non è.",
  },
  en: {
    a: "Product-minded Full Stack developer.",
    b: "I build software that makes the hard things look simple.",
  },
};

export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;

  return (
    <Section id="about" index={t.index}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <Reveal>
            <figure className="relative overflow-hidden rounded-xl border border-line">
              <Image
                src="/marco.jpg"
                alt="Marco De Michele"
                width={1000}
                height={1777}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[3/4] w-full object-cover object-[center_18%]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent p-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/90">
                <span>Marco De Michele</span>
                <span>Puglia, IT</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Text */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-ink md:text-4xl lg:text-[2.75rem]">
              {headline[locale].a}
              <br />
              <span className="text-muted">{headline[locale].b}</span>
            </h2>
          </Reveal>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {bio[locale].map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className={i === bio[locale].length - 1 ? "text-faint" : ""}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.l} className="bg-paper p-5">
                  <p className="font-display text-3xl font-semibold tracking-tightest text-ink lg:text-4xl">
                    {s.k}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="font-mono text-muted">{t.education}</dt>
                <dd className="text-right text-ink">{t.university}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="font-mono text-muted">{t.bootcamp}</dt>
                <dd className="text-right text-ink">
                  Boolean Coding
                  <br />
                  <span className="text-xs text-faint">2021</span>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="font-mono text-muted">{t.languages}</dt>
                <dd className="text-right text-ink">IT · EN · ES</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
