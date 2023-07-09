import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	// base: '.', // Set a path prefix
	site: 'https://example.com', // Use to generate your sitemap and canonical URLs in your final build.
	integrations: [sitemap()]
})
