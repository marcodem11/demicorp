import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects, getProject } from "@/content/projects";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : "it";
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Marco De Michele`,
    description: project.tagline[loc],
    alternates: { canonical: `/${loc}/projects/${slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const t = getDictionary(locale).projects;
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-16">
      {/* Hero */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <Reveal>
            <Link
              href={`/${locale}#work`}
              className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
            >
              <span>←</span> {t.back}
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="section-index mb-6">{project.category[locale]}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl font-semibold tracking-tightest text-ink md:text-7xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {project.tagline[locale]}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
              <div>
                <dt className="eyebrow mb-2">{t.role}</dt>
                <dd className="text-sm text-ink">{project.role[locale]}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">{t.year}</dt>
                <dd className="text-sm text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">{t.status}</dt>
                <dd className="text-sm text-ink">{project.status[locale]}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">{t.stack}</dt>
                <dd className="text-sm text-ink">{project.stack.length} tech</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-14 lg:col-span-8">
            <Reveal>
              <section>
                <h2 className="section-index mb-4">{t.context}</h2>
                <p className="text-lg leading-relaxed text-ink md:text-xl">{project.context[locale]}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="section-index mb-5">{t.solution}</h2>
                <ul className="space-y-4">
                  {project.solution[locale].map((s, i) => (
                    <li key={i} className="flex gap-4 border-b border-line pb-4">
                      <span className="font-mono text-[12px] text-accent">0{i + 1}</span>
                      <span className="text-[15px] leading-relaxed text-muted">{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="section-index mb-5">{t.results}</h2>
                <ul className="space-y-3">
                  {project.results[locale].map((r, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="text-accent">→</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8 rounded-xl border border-line p-6 md:p-7">
              <div>
                <p className="eyebrow mb-4">{t.stack}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {(project.links.live || project.links.repo) && (
                <div>
                  <p className="eyebrow mb-4">{t.links}</p>
                  <div className="flex flex-col gap-2">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm text-ink link-underline">
                        {t.live} <span className="text-muted">↗</span>
                      </a>
                    )}
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm text-ink link-underline">
                        {t.repo} <span className="text-muted">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {project.draft && (
                <p className="border-t border-line pt-5 font-mono text-[11px] leading-relaxed text-faint">
                  {t.note}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-line">
        <Link
          href={`/${locale}/projects/${next.slug}`}
          className="group mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-12 md:px-10 lg:px-12"
        >
          <div>
            <p className="eyebrow mb-2">Next</p>
            <p className="font-display text-2xl font-semibold tracking-tightest text-ink md:text-3xl">
              {next.name}
            </p>
          </div>
          <span className="text-2xl text-accent transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </article>
  );
}
