import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  image: {
    // Sharp is the default — converts to WebP, resizes, compresses at build time
    quality: 75,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
