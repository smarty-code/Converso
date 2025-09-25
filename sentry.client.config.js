import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e77eea167a92430eb0118813de5c2d40@o4510081677262848.ingest.us.sentry.io/4510081679097856",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});