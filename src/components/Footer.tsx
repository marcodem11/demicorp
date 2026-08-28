import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;
  const year = "2026";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-page px-6 py-12 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tightest text-ink">
              Marco De Michele<span className="text-accent">.</span>
            </p>
            <p className="mt-2 flex items-center gap-2 font-mono text-[12px] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {t.available}
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[12px] text-muted md:items-end">
            <div className="flex gap-4">
              <a href={site.socials.github} target="_blank" rel="noreferrer" className="link-underline">
                GitHub
              </a>
              {site.socials.linkedin ? (
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="link-underline">
                  LinkedIn
                </a>
              ) : (
                <span className="text-faint">LinkedIn ⋯</span>
              )}
              <a href={`mailto:${site.email}`} className="link-underline">
                Email
              </a>
            </div>
            <p className="text-faint">
              © {year} Marco De Michele — {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
