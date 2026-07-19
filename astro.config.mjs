import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  image: {
    // Sharp is the default — converts to WebP, resizes, compresses at build time
    quality: 75,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
