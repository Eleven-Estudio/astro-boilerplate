import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import prefetch from '@astrojs/prefetch'
import { astroImageTools } from 'astro-imagetools'

// https://astro.build/config
export default defineConfig({
  base: '.', // Set a path prefix
  site: 'https://example.com',
  // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [sitemap(), tailwind(), react(), prefetch(), astroImageTools],
  output: 'server',
  adapter: vercel()
})
