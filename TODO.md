# TODO

Open items from the November 2026 redesign port and site audit.

## Housekeeping

- [ ] Remove the unused old images from `src/assets`. Everything outside `src/assets/site/` (about 200 MB, 49 files) belonged to the previous design and is no longer referenced by any page.

## To verify after the first Netlify deploy

- [ ] Send a test waitlist submission and a spec-sheet request; confirm both appear under Forms and that the notification emails reach care@resonara.com.
- [ ] Check which subject the waitlist email carries: the one set by script ("Waitlist: <venue> in <city>, <country>") or the fallback in the markup ("New waitlist signup"). If it is the fallback, drop the script-set subject.
- [ ] Open the four study links that refused an automated check (two SAGE, MDPI, ScienceDirect) and confirm they load.
- [ ] Press Escape and Tab through the spec-sheet dialog by hand.
- [ ] Look at the dark theme on every page, not just home.

## Messaging

- [ ] Say plainly what Resonara is. "Played live" never says by what; the only "automate" on the site is in one founder bio. One sentence in the hero would do it.
- [ ] Give the "World's first" badge an object, e.g. "World's first automated singing-bowl instrument".
- [ ] State the commercial model (buy, lease or subscribe) and add a cost question to the FAQ.
- [ ] Add proof from the live Singapore venue: a testimonial, a real photo, a number.
- [ ] Reduce the reliance on one study. −21% and +37% come from a single 50-person trial and appear twice on the home page and twice on each venue page.
- [ ] Shorten the science section on the home page to a summary that links to the research page; today it repeats that page word for word (the home page is about 12,300 px tall on a phone).
- [ ] Update "California by the end of 2026" (FAQ and the locations card) before the year ends.
- [ ] Reconcile the support page with the rest of the site: it describes a consumer app with subscriptions and a "sound therapy protocol", while the site is venue-only and says "never a treatment".
- [ ] Have counsel review privacy and terms: they name "Resonara Ltd" and England and Wales law, while the site says Resonara Wellness Pte. Ltd.; the waitlist section in the privacy policy was added during the port.
- [ ] Pick British or American spelling and apply it everywhere (About is British, the rest American).

## Images and video

- [ ] Replace renders with photographs or footage from a real installation where possible.
- [ ] Make the product consistent across images: some show two mallets per bowl, the mallet graphic shows one; the copy says two.
- [ ] Remove the text baked into the cabinet and mallet images and set it as page text. The cabinet image says the felt "completely soundproofs the device", which contradicts the FAQ's "quiet by design".
- [ ] Open the hero film on the product, not city traffic, and remove the email address baked into its poster frame.
- [ ] Lighten the hero film (3.8 MB on every home visit): a smaller phone encode, or load it only when the visitor presses play.
- [ ] Replace the two PNG logo masks with an SVG if a vector source exists.

## Layout

- [ ] Use the empty right side of desktop sections that only fill the left 60%: the brain-rhythm scale and the forms.
- [ ] Even out the action rows on the three home venue cards (the link and button wrap on two cards, not the third).

## UX

- [ ] Shorten the waitlist form (eight fields), and hide "I'm a…" on venue pages where the answer is already known.
- [ ] Give a direct way to get in touch: the footer's "Contact" leads to the waitlist form, and the email address is only on About.
- [ ] Make the spec sheet match its promise: it confirms "on its way" but is sent by hand. Either send it automatically or offer a direct download.
- [ ] On the home page, point the "Your city" card's "Join the waitlist" link at the form just below it instead of the waitlist page.
- [ ] Decide whether the Singapore booking link in the hero should be visible to everyone, not only visitors in the Singapore time zone.
