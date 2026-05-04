import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import sentry from "@sentry/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  base: ".",
  site: "https://example.com",
  integrations: [
    sitemap(),
    react(),
    robotsTxt(),
    sentry({
      dsn: process.env.SENTRY_DSN,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      weights: ["100 900"],
    },
  ],
});
