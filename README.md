# Resonara — Sound Nirvana

A minimal Astro + Tailwind CSS concept site for an early-stage project named “Resonara”. The content is intentionally calm, exploratory, and non-promotional.

## Tech Stack
- Astro (static site output)
- Tailwind CSS
- Netlify hosting with Netlify Forms

## Local Development
1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`

## Build
- `npm run build`
- Preview locally with `npm run preview`

## Netlify Deployment
1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Netlify, select **New site from Git** and connect the repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy the site.

### Netlify Forms
The contact form in [src/pages/contact.astro](src/pages/contact.astro) uses the Netlify Forms attributes:
- `data-netlify="true"`
- hidden `form-name` field

No additional backend is required.

## Project Structure
```
/src
  /components
    Header.astro
    Footer.astro
    Layout.astro
  /pages
    index.astro
    about.astro
    technology.astro
    contact.astro
```
