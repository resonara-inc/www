/**
 * Firebase Analytics (Google Analytics 4), loaded after the page is idle so it never delays rendering.
 *
 * It runs only on the production hosts in config/firebase.ts. To try it locally, start the dev server with
 * PUBLIC_ANALYTICS_DEBUG=true; hits then go to the real property, so use that sparingly.
 * Page views are recorded automatically on every page load. Use track() for anything else.
 */
import type { Analytics } from "firebase/analytics";
import { ANALYTICS_HOSTS, FIREBASE_CONFIG } from "../config/firebase";

let analytics: Promise<Analytics | null> | undefined;

function enabled(): boolean {
  if (import.meta.env.PUBLIC_ANALYTICS_DEBUG === "true") return true;
  return import.meta.env.PROD && ANALYTICS_HOSTS.includes(location.hostname);
}

function load(): Promise<Analytics | null> {
  analytics ??= (async () => {
    if (!enabled()) return null;
    const [{ initializeApp }, { getAnalytics, isSupported }] = await Promise.all([import("firebase/app"), import("firebase/analytics")]);
    // Not supported where cookies or IndexedDB are unavailable, e.g. some private windows.
    if (!(await isSupported())) return null;
    return getAnalytics(initializeApp(FIREBASE_CONFIG));
  })().catch(() => null);
  return analytics;
}

/** Starts analytics once the browser is idle. Called from SiteLayout on every page. */
export function initAnalytics(): void {
  const start = () => void load();
  if ("requestIdleCallback" in window) requestIdleCallback(start, { timeout: 4000 });
  else setTimeout(start, 1500);
}

/** Records a custom event. Does nothing where analytics is disabled or blocked. */
export async function track(name: string, params?: Record<string, string | number | boolean>): Promise<void> {
  try {
    const instance = await load();
    if (!instance) return;
    const { logEvent } = await import("firebase/analytics");
    logEvent(instance, name, params);
  } catch {
    // Analytics must never break the page.
  }
}
