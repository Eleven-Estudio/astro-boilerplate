import { PUBLIC_SENTRY_DSN } from "astro:env/client";
import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: PUBLIC_SENTRY_DSN,
  enabled: Boolean(PUBLIC_SENTRY_DSN),
  tracesSampleRate: 0.1,
});
