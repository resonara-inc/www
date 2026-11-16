// TEMPORARY, remove after the check: proves that Cloudflare serves a stale copy when the origin fails.
// Answers 200 in even minutes and 503 in odd ones, with the same cache headers the pages use (shorter times).
export default async () => {
  if (Math.floor(Date.now() / 60000) % 2 === 1) {
    return new Response("simulated origin error", { status: 503, headers: { "Content-Type": "text/plain" } });
  }
  return new Response(`ok ${new Date().toISOString()}`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Cloudflare-CDN-Cache-Control": "max-age=10, stale-if-error=600",
    },
  });
};

export const config = { path: "/cache-test/" };
