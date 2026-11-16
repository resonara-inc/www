/**
 * A rough guess at where the visitor is, from their time zone. Nothing leaves the browser.
 * Used to show the Singapore booking links, the US regulatory notice, and to preselect a country in forms.
 */
export type Visitor = "sg" | "us" | "other";

export function guessVisitor(): Visitor {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz === "Asia/Singapore") return "sg";
    if (tz.startsWith("America/") || tz.startsWith("US/") || tz === "Pacific/Honolulu") return "us";
  } catch {
    // Fall through: an unknown visitor sees the default content.
  }
  return "other";
}

export const VISITOR_COUNTRY: Partial<Record<Visitor, string>> = { sg: "Singapore", us: "United States" };

/** Reveals `.only-sg` / `.only-us` elements, which are rendered with the `hidden` attribute. */
export function applyVisitor(visitor: Visitor = guessVisitor()): void {
  document.querySelectorAll<HTMLElement>(".only-sg").forEach((el) => (el.hidden = visitor !== "sg"));
  document.querySelectorAll<HTMLElement>(".only-us").forEach((el) => (el.hidden = visitor !== "us"));
}
