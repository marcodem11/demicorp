"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LocaleSwitch({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathFor(locale: Locale) {
    const segments = pathname.split("/");
    // segments[0] === "" , segments[1] === locale
    if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = locale;
    } else {
      return `/${locale}`;
    }
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em]">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-faint">/</span>}
          <Link
            href={pathFor(loc)}
            aria-current={loc === current ? "true" : undefined}
            className={
              loc === current
                ? "text-ink"
                : "text-faint transition-colors hover:text-ink"
            }
          >
            {loc}
          </Link>
        </span>
      ))}
    </div>
  );
}
