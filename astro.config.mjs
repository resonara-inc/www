import { defineConfig } from "astro/config";

export default defineConfig({
  // Used for canonical URLs, Open Graph tags and structured data.
  site: "https://resonara.com",
  output: "static",
  image: {
    // Sharp is the default — converts to WebP, resizes, compresses at build time
    quality: 75,
  },
});
