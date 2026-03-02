# Demicorp — Portfolio of Marco De Michele

Modern single-page portfolio built with Next.js 16, React 19, and Tailwind CSS v4. It highlights AI-driven engineering work, automation projects, and end-to-end product delivery.

## Tech stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (native `@import "tailwindcss"`)
- TypeScript

## Structure
- `app/page.tsx` — main portfolio page with hero, projects, experience, skills, and contact sections.
- `app/layout.tsx` — global metadata and font setup.
- `app/globals.css` — theme tokens, gradients, and glassmorphism styles.
- `public/cv/` — CV downloads (`marco-de-michele-cv-en.pdf`, `marco-de-michele-cv-it.pdf`).

## Running locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Customizing content
- Update project/experience/skills copy in `app/page.tsx`.
- Swap colors or gradients in `app/globals.css` (`--accent`, `--accent-strong`, etc.).
- Replace CV files in `public/cv/` with newer versions using the same filenames.

## Deployment
Standard Next.js deployment works on Vercel or any Node environment:
```bash
npm run build
npm start
```
