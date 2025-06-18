import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  base: '.', // Set a path prefix
  site: 'https://example.com',
  // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [
    sitemap(), 
    react(), 
      sentry({
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      sourceMapsUploadOptions: {
        project: 'proyecto-ejemplo',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercel()
})