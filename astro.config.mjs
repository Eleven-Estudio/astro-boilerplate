import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: '.', // Set a path prefix
  site: 'https://example.com',
  // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    prefetch()],
  output: 'server',
  adapter: vercel()
})
