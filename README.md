<p align="center">
  <a href="https://elevenestudio.com">
    <img src="https://assets.elevenestudio.me/6B239B80-eleven-estudio-logo.png" width="328" height="176" alt="Eleven logo"/>
  </a>
</p>

<h1 align="center">
  Astro Template Eleven
</h1>

<p align="center">
  High-performance Astro template optimized for SEO and developer experience.
</p>

## Value You Get

- **Production-ready SEO** — Meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- **Type-safe** — TypeScript strict mode with exhaustive type checks
- **Automatic code quality** — Ultracite + Biome: linting and formatting on every commit
- **Optimized fonts** — Geist via astro/fonts with preload and automatic fallbacks
- **Dark mode from day one** — CSS variables with Tailwind v4 and dark mode ready
- **UI components** — Component system with shadcn/Base UI pattern

## Quick Start

```bash
# Clone template
npx degit elevenestudio/astro-template-eleven my-site

# Install dependencies
cd my-site
pnpm install

# Start developing
pnpm dev
```

## Initial Setup

1. Edit `business.json` — Your business data (name, contact, social, GTM)
2. Edit `astro.config.mjs` — `site` with your production URL
3. Edit `public/manifest.webmanifest` — Your site info

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Astro v6 | Web framework |
| React 19 | Interactive islands |
| Tailwind v4 | Styles with CSS variables |
| TypeScript | Static typing |
| Biome 2.4 | Linting + formatting |
| Ultracite | CI/CD pipeline |
| Vercel | Deployment |

## Commands

```bash
pnpm dev      # Dev server at localhost:4321
pnpm build    # Production build
pnpm preview  # Preview the build
pnpm check    # Lint + TypeScript
pnpm fix      # Auto-fix issues
```

## Structure

```
src/
├── assets/css/       # Tailwind + global styles
├── components/
│   ├── fundations/  # Meta, SEO, Favicons
│   ├── globals/      # Button, etc.
│   ├── icons/        # SVG icons
│   └── ui/           # shadcn-style components
├── config/           # business.ts (business data)
├── layouts/          # base-layout.astro
├── lib/              # utils.ts (cn function)
└── pages/            # Astro routes
```

## Business Configuration

`business.json` is the source of truth for:

```json
{
  "name": "Your Business",
  "site": "https://yourbusiness.com",
  "contact": { "tel": {...}, "email": "...", "whatsapp": {...} },
  "social": { "facebook": "...", "instagram": "...", "linkedin": "..." },
  "googleTagManager": { "id": "GTM-XXXXXXX" }
}
```

## Deploy to Vercel

```bash
pnpm build
```

Vercel automatically detects the adapter configuration in `astro.config.mjs`.

---

Made with ♥ by [Eleven Estudio](https://elevenestudio.com)
