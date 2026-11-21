import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import sentry from "@sentry/astro/integration";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";
import business from "./business.json" with { type: "json" };

export default defineConfig({
  // Single source of truth: the production URL lives in business.json
  site: business.site,
  output: "server",
  adapter: vercel(),
  integrations: [
    sitemap(),
    react(),
    sentry({
      // Runtime options (DSN, sample rates...) live in sentry.client.config.ts
      // and sentry.server.config.ts. Only build-time options go here.
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      sourcemaps: {
        disable: !process.env.SENTRY_AUTH_TOKEN,
      },
      telemetry: false,
    }),
  ],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      PUBLIC_SENTRY_DSN: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
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
