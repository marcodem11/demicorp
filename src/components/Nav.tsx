"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitch } from "./LocaleSwitch";

export function Nav({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}#work`, label: t.work },
    { href: `/${locale}#experience`, label: t.experience },
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}#contact`, label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6 md:px-10 lg:px-12">
        <Link href={`/${locale}`} className="font-display text-sm font-semibold tracking-tightest text-ink">
          Marco De Michele<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LocaleSwitch current={locale} />
          <div className="hidden h-4 w-px bg-line sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
