/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      colors: {
        sand: {
          50: "#faf7f2",
          100: "#f4efe7",
          200: "#e8dfd3",
          300: "#d9cbb9",
          400: "#c6b29d"
        }
      }
    }
  },
  plugins: []
};
