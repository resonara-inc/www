import { defineConfig } from "astro/config";

export default defineConfig({
  // Used for canonical URLs, Open Graph tags and structured data.
  site: "https://resonara.com",
  output: "static",
  // Fetch a page as soon as the visitor hovers or focuses its link, so the click feels instant.
  // Only the HTML is fetched; scripts on the target page do not run until it is opened.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  image: {
    // Sharp is the default — converts to WebP, resizes, compresses at build time
    quality: 75,
  },
});
