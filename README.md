# Resonara website

The marketing site for Resonara: a static Astro site, hosted on Netlify.

## Tech stack

- Astro (static output), with `astro:assets` for responsive WebP images
- Plain CSS in one stylesheet, `src/styles/site.css`, driven by design tokens
- Self-hosted fonts via Fontsource (Marcellus, Hanken Grotesk, IBM Plex Mono)
- Netlify hosting and Netlify Forms

## Local development

```bash
pnpm install
```

```bash
pnpm dev
```

```bash
pnpm build
```

`pnpm preview` serves the built site from `dist/`.

## Project structure

```
src/
  assets/site/     Images, hero film and logo used by the current design
  components/      Header, Footer, ThemeSwitch, WaitlistForm, SpecModal, Faq, BrainRhythms, FeaturedStudy, …
  config/          site.ts (names, nav, venue types) and contact.ts (WhatsApp number)
  data/            faq.ts, team.ts, countries.ts
  layouts/         SiteLayout.astro (head tags, header, footer, spec-sheet dialog)
  pages/           One file per route
  scripts/         Small shared browser modules (forms, toast, visitor region)
  styles/site.css  All styles
public/            favicon, robots.txt, sitemap.xml
```

Add a page by creating `src/pages/<name>.astro` that wraps its content in `SiteLayout`, then add it to `public/sitemap.xml`.

## Themes

The site has a light and a dark palette that swap the same CSS tokens (top of `site.css`). It follows the visitor's system setting by default; the switch in the footer (`ThemeSwitch.astro`) stores an explicit Light or Dark choice in `localStorage` and sets `<html data-theme>`. When changing dark colours, update both dark blocks in `site.css`.

## Forms

Two forms post to Netlify Forms, submitted in the background by `src/scripts/netlify-form.ts`:

- `waitlist` (`WaitlistForm.astro`), on the home, how-it-works, venue and waitlist pages. The `source` field records which page it was sent from.
- `spec-sheet` (`SpecModal.astro`), opened by any element with `data-spec`. The spec sheet itself is emailed by the team; nothing is sent automatically.

Each form carries a hidden `subject` field, which Netlify uses as the subject of its notification email; the waitlist script fills in the venue type and place before sending. A subject set in the form markup overrides one set in the Netlify UI.

Form detection must be enabled for the site in Netlify (Forms → Enable form detection), and notifications are configured there. Submissions only work on a Netlify deploy, not on the local dev server.

## Feature flags

`FEATURES` in `src/config/site.ts` holds build-time switches. `floatingWhatsApp` (off by default) adds the floating WhatsApp inquiry button to every page; its number and message live in `src/config/contact.ts`.

## Region-specific content

`src/scripts/visitor.ts` guesses the visitor's region from their time zone, in the browser only. Elements with `only-sg` (Singapore booking links) or `only-us` (the FCC notice) are rendered hidden and revealed for that region.

## Deployment

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`, which also holds cache headers and redirects from the previous site's URLs).
