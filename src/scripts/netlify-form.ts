/**
 * Submits a form to Netlify Forms without leaving the page.
 * The form must carry `data-netlify="true"`, a `name`, and a hidden `form-name` input so Netlify registers it at deploy time.
 * Resolves on success and rejects on any non-2xx response or network error.
 */
export async function submitNetlifyForm(form: HTMLFormElement): Promise<void> {
  const body = new URLSearchParams();
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
}
