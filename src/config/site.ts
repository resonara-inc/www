/** Site-wide constants shared by the layout, header, footer and forms. */

export const SITE_NAME = "Resonara";
export const SITE_TAGLINE = "A live sound bath, on demand";
export const LEGAL_NAME = "Resonara Wellness Pte. Ltd.";
export const CONTACT_EMAIL = "care@resonara.com";

/** Feature flags. Flip a value and rebuild. */
export const FEATURES = {
  /** Floating WhatsApp inquiry button in the bottom-right corner of every page. */
  floatingWhatsApp: false,
} as const;

/** Venue types offered in the waitlist form. Keys are also the `?seg=` values. */
export const SEGMENTS = {
  studio: "Yoga studio",
  workplace: "Workplace",
  spa: "Spa or wellness resort",
  other: "Other",
} as const;

export type Segment = keyof typeof SEGMENTS;

/** Header navigation. `key` is matched against the `nav` prop a page passes to SiteLayout. */
export const NAV_LINKS = [
  { key: "how-it-works", href: "/how-it-works/", label: "How it works" },
  { key: "research", href: "/research/", label: "The research" },
] as const;

export const NAV_LINKS_AFTER = [
  { key: "about", href: "/about/", label: "About" },
  { key: "faq", href: "/faq/", label: "FAQ" },
] as const;

export const SOLUTIONS = [
  { href: "/studios/", label: "Yoga studios", note: "A class no studio nearby can offer" },
  { href: "/workplaces/", label: "Workplaces", note: "A reset for teams that never stop" },
  { href: "/spas/", label: "Spas & wellness resorts", note: "Calm the mind while you care for the body" },
] as const;
