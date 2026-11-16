# TODO

Open items from the November 2026 redesign port and site audit, updated with the team's decisions of 16 November 2026.

## Housekeeping

- [ ] Remove the unused old images from `src/assets`. Everything outside `src/assets/site/` (about 200 MB, 49 files) belonged to the previous design and is no longer referenced by any page.

## To verify now that the site is live

- [ ] Send a test waitlist submission and a spec-sheet request; confirm both appear under Forms in Netlify and that the notification emails reach care@resonara.com.
- [ ] Check which subject the waitlist email carries: the one set by script ("Waitlist: <venue> in <city>, <country>") or the fallback in the markup ("New waitlist signup"). If it is the fallback, drop the script-set subject.
- [ ] Open the four study links that refused an automated check (two SAGE, MDPI, ScienceDirect) and confirm they load.
- [ ] Press Escape and Tab through the spec-sheet dialog by hand.
- [ ] Look at the dark theme on every page, not just home.

## Waiting for version 1 material

- [ ] Real photographs and footage of the instrument in a venue, to replace the renders.
- [ ] A hero film cut that opens on the instrument instead of city traffic, with no email address on its end frame.
- [ ] A mallet graphic that shows two mallets per bowl (confirmed correct for the shipping unit); the current one shows one per bowl.
- [ ] FAQ additions from the questions venues actually ask.
- [ ] Revisit the cabinet image's line that the felt "completely soundproofs the device" (kept for now); the FAQ says "quiet by design".
- [ ] Set the text baked into the cabinet and mallet images as page text, so it is readable on phones and by screen readers.

## Messaging

- [ ] Guest quote on the home page: confirm the wording (lightly tidied), get the guest's permission, and add a name or venue if they agree.
- [ ] "California by the end of 2026" (FAQ and the locations card) is right for now; update it once December 2026 has passed.
- [ ] Reduce the reliance on one study. −21% and +37% come from a single 50-person trial and appear twice on the home page and twice on each venue page.
- [ ] Shorten the science section on the home page to a summary that links to the research page; today it repeats that page word for word (the home page is about 12,300 px tall on a phone).
- [ ] Pick British or American spelling and apply it everywhere (About is British, the rest American).

## Legal

- [ ] Terms still say they are governed by the laws of England and Wales. The company name is now Resonara Wellness Pte. Ltd. in both privacy and terms; counsel should confirm the governing law and review the waitlist section added to the privacy policy.

## Privacy

- [ ] Analytics sets Google Analytics cookies for every visitor without asking. Decide whether visitors in the EU and UK need a consent prompt before it loads, and have counsel confirm the privacy policy covers it.

## Cloudflare caching

Set up on 16 November 2026. Part of it lives in the Cloudflare dashboard, not in this repo, so it is recorded here.

How it is set up:

- resonara.com is proxied through Cloudflare, with Netlify as the origin.
- `netlify.toml` sends `Cloudflare-CDN-Cache-Control` to tell Cloudflare how long to keep each response: 5 minutes for pages, one year for everything under `/_astro/` (video, CSS, scripts, fonts, images), one week for `/favicon.png`. Cloudflare strips this header, so browsers only see the normal `Cache-Control`.
- Cloudflare dashboard, Caching → Cache Rules: one rule makes pages eligible for cache.
  - Expression: `(http.host eq "resonara.com" and ends_with(http.request.uri.path, "/"))`
  - Cache eligibility: Eligible for cache
  - Edge TTL: "Use cache-control header if present, bypass cache if not"
  - Browser TTL: Respect origin
- Cloudflare dashboard, Caching → Tiered Cache: Smart Tiered Caching is on.
- The 5 minutes comes from the site because the free Cloudflare plan cannot set a fixed Edge TTL under 2 hours.
- Checked on the live site the same day: a page is a cache miss, then a hit, and is re-checked with Netlify once it is 5 minutes old. The video, CSS, scripts, images and favicon are cache hits; a form POST is not cached.

What to know:

- After a deploy, a page can be up to 5 minutes old. To show a change at once, use Caching → Configuration → Purge Everything in Cloudflare.
- The rule matches paths ending in `/`, so every page URL must keep its trailing slash to be cached.
- Form submissions are not cached; Cloudflare only caches page loads.
- A new file in `public/` gets the 5-minute edge lifetime unless it has its own rule in `netlify.toml`.

Open items:

- [ ] Purge Cloudflare automatically after each Netlify deploy, so a fresh deploy is never served alongside 5-minute-old pages. Needs a Cloudflare API token.
- [ ] `/sitemap.xml` is not cached by Cloudflare (not a page, not a default cached type). Harmless; add it to the Cache Rule if wanted.
- [ ] Remove the unused `/assets/*` and `/*.html` header rules from `netlify.toml` once it is confirmed nothing relies on them.

## Performance

- [ ] Lighten the hero film (3.8 MB on every home visit): a smaller phone encode, or load it only when the visitor presses play.
- [ ] Replace the two PNG logo masks with an SVG if a vector source exists.

## Layout

- [ ] Use the empty right side of desktop sections that only fill the left 60%: the brain-rhythm scale and the forms.
- [ ] Even out the action rows on the three home venue cards (the link and button wrap on two cards, not the third).

## UX

- [ ] Give a direct way to get in touch: the footer's "Contact" leads to the waitlist form, and the email address is only on About.
- [ ] Spec sheet: requests are answered by hand (two of the founders handle replies). Consider sending the PDF automatically or offering a direct download, since the page says it is "on its way".
- [ ] On the home page, point the "Your city" card's "Join the waitlist" link at the form just below it instead of the waitlist page.
- [ ] Decide whether the Singapore booking link in the hero should be visible to everyone, not only visitors in the Singapore time zone.

## Decided, no change needed

- What Resonara is: "on demand" is taken to say there is no human player; no extra sentence.
- "World's first" stays as it is.
- Pricing stays unstated.
- The waitlist form keeps all its fields; more detail filters out casual enquiries.
- The app support page is accurate as written.
