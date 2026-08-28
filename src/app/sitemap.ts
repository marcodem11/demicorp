import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push({ url: `${site.url}/${locale}`, changeFrequency: "monthly", priority: 1 });
    for (const p of projects) {
      entries.push({
        url: `${site.url}/${locale}/projects/${p.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return entries;
}
