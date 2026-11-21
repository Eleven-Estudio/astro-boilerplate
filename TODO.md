# **TO DO's to change for each project**

- [ ] Create branches
  - [ ] Branch Preview
  - [ ] Branch Develop

- [ ] Change Favicons
  - [ ] icon.svg (**Add light and dark mode if possible**)
  - [ ] Favicon.ico
  - [ ] Favicon-16x16.png
  - [ ] Favicon-32x32.png
  - [ ] Apple-Touch-Icon.png
  - [ ] Android-Chrome-192x192.png
  - [ ] Android-Chrome-512x512.png
  - [ ] manifest.webmanifest
    - [ ] Change name
    - [ ] Change short_name
    - [ ] Change theme_color
    - [ ] Change background_color
- [ ] Adapt business data in [`business.json`](./business.json) (also sets the site URL used by `astro.config.mjs`)
  - [ ] Change `site`
  - [ ] Change `openGraph` default image (1200x630)
  - [ ] Change `googleTagManager.id`
  - [ ] Configure `settings.emailSender` (must be a domain verified in Resend)
- [ ] Copy `.env.example` to `.env` and fill the variables
- [ ] Minify Scripts
- [ ] Minify Styles
- [ ] Optimize Images
- [ ] Optimize Fonts
  - [ ] Is a font variable?
  - [ ] Link preload
  - [ ] Add fallback font (<https://screenspan.net/fallback>) (<https://web.dev/css-size-adjust/>)

## **Resources**

- More info of [Favicon](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
- More info of [Open Graph](https://simplified.com/blog/design/open-graph-image-everything-you-need-to-know/)
- More info of [Schema.org](https://schema.org/docs/gs.html)
  - <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=es>
  - <https://www.iebschool.com/blog/que-es-schema-org-seo-sem/>
- More info of [Astro images](https://docs.astro.build/en/guides/images/)
- More info of [Astro prefetch](https://docs.astro.build/en/guides/prefetch/)
- More info of [astro-sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- More info of [Fonts Optimization](https://www.youtube.com/watch?v=G0cOQ79WKZE)
  - <https://www.zachleat.com/web/glyphhanger/>
  - <https://www.sarasoueidan.com/blog/glyphhanger/>
  - <https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/>
