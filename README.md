<p align="center">
  <a href="https://elevenestudio.com">
    <img src="https://assets.elevenestudio.me/6B239B80-eleven-estudio-logo.png" width="328" height="176" alt="Eleven logo"/>
  </a>
</p>

<h1 align="center">
  Astro Template Eleven
</h1>

<p align="center">
  Plantilla de Astro para sitios web de alto rendimiento, optimizada para SEO y experiencia de desarrollo.
</p>

## Valor que te da

- **SEO listo para producción** — Meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- **Typo seguro** — TypeScript strict mode con controles de tipos exhaustivos
- **Code quality automático** — Ultracite + Biome: linting y formatting en cada commit
- **Fuentes optimizadas** — Geist via astro/fonts con preload y fallbacks automáticos
- **Dark mode desde el inicio** — CSS variables con Tailwind v4 y modo oscuro listo
- **UI components** — Sistema de componentes con shadcn/Base UI pattern

## Quick Start

```bash
# Clonar template
npx degit elevenestudio/astro-template-eleven my-site

# Instalar dependencias
cd my-site
pnpm install

# Desarrollar
pnpm dev
```

## Configuración inicial

1. Editá `business.json` — Datos de tu empresa (nombre, contacto, redes, GTM)
2. Editá `astro.config.mjs` — `site` con tu URL production
3. Editá `public/manifest.webmanifest` — Info de tu sitio

## Tech Stack

| Tecnología | Propósito |
|------------|-----------|
| Astro v6 | Framework web |
| React 19 | Islands interactivos |
| Tailwind v4 | Estilos con CSS variables |
| TypeScript | Tipado estático |
| Biome 2.4 | Linting + formatting |
| Ultracite | Pipeline de CI/CD |
| Vercel | Deployment |

## Comandos

```bash
pnpm dev      # Dev server en localhost:4321
pnpm build    # Build producción
pnpm preview  # Preview del build
pnpm check    # Lint + TypeScript
pnpm fix      # Auto-fix issues
```

## Estructura

```
src/
├── assets/css/       # Tailwind + global styles
├── components/
│   ├── fundations/  # Meta, SEO, Favicons
│   ├── globals/      # Button, etc.
│   ├── icons/        # SVG icons
│   └── ui/           # shadcn-style components
├── config/           # business.ts (datos de empresa)
├── layouts/          # base-layout.astro
├── lib/              # utils.ts (cn function)
└── pages/            # Rutas de Astro
```

## Configuración de negocio

`business.json` es la fuente de verdad para:

```json
{
  "name": "Tu Empresa",
  "site": "https://tuempresa.com",
  "contact": { "tel": {...}, "email": "...", "whatsapp": {...} },
  "social": { "facebook": "...", "instagram": "...", "linkedin": "..." },
  "googleTagManager": { "id": "GTM-XXXXXXX" }
}
```

## Deployment a Vercel

```bash
pnpm build
```

Vercel detecta automáticamente la configuración del adapter en `astro.config.mjs`.

---

Hecho con ♥ por [Eleven Estudio](https://elevenestudio.com)
