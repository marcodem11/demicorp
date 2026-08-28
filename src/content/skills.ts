import type { Locale } from "@/i18n/config";

export type SkillGroup = {
  label: Record<Locale, string>;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: { it: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue"],
  },
  {
    label: { it: "Backend", en: "Backend" },
    items: ["Node", "Laravel / PHP", "Prisma", "PostgreSQL", "Supabase", "SQLite"],
  },
  {
    label: { it: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo", "Flutter"],
  },
  {
    label: { it: "AI & Automazione", en: "AI & Automation" },
    items: ["Claude Code", "AI Agents", "Claude / OpenAI API", "n8n"],
  },
  {
    label: { it: "DevOps & Tooling", en: "DevOps & Tooling" },
    items: ["Vercel", "Git", "Stripe", "RevenueCat", "Obsidian"],
  },
];
