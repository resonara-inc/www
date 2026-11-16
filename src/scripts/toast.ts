let timer: ReturnType<typeof setTimeout> | undefined;

/** Shows a short status message in the layout's #toast element. */
export function toast(message: string): void {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  clearTimeout(timer);
  timer = setTimeout(() => (el.hidden = true), 3200);
}
