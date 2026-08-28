import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Approach locale={locale} />
      <Experience locale={locale} />
      <Work locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
