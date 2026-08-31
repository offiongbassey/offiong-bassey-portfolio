# Offiong Bassey Edet — Personal Research Site

A personal academic website built with **Next.js 15 (App Router)**, **TypeScript**,
**Tailwind CSS v4**, and hand-built **shadcn/ui**-convention components
(`Button`, `Badge`, `Separator`, `Accordion`).

The design reads like a personal research journal — a classic scholarly
masthead, drop-cap biography, a bibliography-style publications list with
expandable abstracts, and a dated "News" ledger — rather than a generic
software-portfolio template.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

The site has **no external runtime dependencies** — all fonts (Newsreader,
Source Serif 4, IBM Plex Sans) are self-hosted under `src/fonts` (Open Font
License, included in `src/fonts/licenses`), so it builds and runs even
without internet access, and loads fast in production.

## What to personalize before you deploy

1. **Portrait photo** — replace `public/offiong.jpg` with a real photo
   (recommended: a 4:5 portrait, at least 800x1000px). The current file is a
   placeholder monogram.
2. **CV** — add your CV as `public/cv.pdf`. The "Download CV" button in the
   hero section links to `/cv.pdf`.
3. **Content** — everything else (bio, research interests, affiliations,
   publications, news, positions, social links, email) lives in one typed
   file: `src/data/site.ts`. Edit the plain data there; you shouldn't need to
   touch the components for routine updates.
4. **Publication links** — `href` fields in `publications` currently point at
   your Google Scholar profile / arXiv; swap in the real paper URLs (PDF,
   ACL Anthology, arXiv, DOI) as they become available.
5. **Social links** — double check the URLs in `person.social` in
   `src/data/site.ts` (GitHub, LinkedIn, X, Medium, YouTube) — a couple were
   inferred and should be verified.
6. **Metadata** — `src/app/layout.tsx` has the page `<title>`,
   description, and Open Graph tags; update if anything changes.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, page metadata
    page.tsx           Composes all homepage sections
    globals.css         Design tokens (color, type) + Tailwind v4 theme
  components/
    ui/                Hand-built shadcn-convention primitives
    site/               Page sections (Header, Hero, Publications, News, ...)
  data/
    site.ts             All editable content — bio, publications, news, etc.
  fonts/                 Self-hosted variable font files + OFL licenses
public/
  offiong.jpg            Portrait (replace this)
  cv.pdf                 CV (add this)
```

## Design system

- **Colors**: warm ivory paper, near-black ink, deep indigo accent, muted
  brass for small labels/rules — defined as CSS variables in
  `src/app/globals.css` (`--paper`, `--ink`, `--indigo`, `--brass`, `--rule`).
- **Type**: Newsreader (display serif, headings), Source Serif 4 (body copy),
  IBM Plex Sans (all-caps nav/meta labels).
- Adding a shadcn component later: since the CLI registry wasn't reachable
  when this project was set up, components were written by hand following
  shadcn's own source conventions (`cva` variants, `data-slot` attributes,
  `cn()` helper). You can still run `npx shadcn@latest add <component>`
  normally if you have network access — it will drop straight into
  `src/components/ui`.

## Deploying

Works out of the box on Vercel, Netlify, or any Node host:

```bash
vercel deploy
```
