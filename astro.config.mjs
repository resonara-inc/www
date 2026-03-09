import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
