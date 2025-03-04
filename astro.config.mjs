import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  base: '.', // Set a path prefix
  site: 'https://example.com',
  // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [
    sitemap(),
    react()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercel()
})
