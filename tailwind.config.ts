import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        demicorp: {
          black: "#0a0a0a",
          darker: "#111111",
          dark: "#1a1a2e",
          purple: "#6c2bd9",
          violet: "#8b5cf6",
          cyan: "#06d6a0",
          blue: "#4361ee",
          pink: "#ff006e",
          white: "#f0f0f0",
          gray: "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
