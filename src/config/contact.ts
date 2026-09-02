/**
 * Contact details used by the floating WhatsApp button.
 * Tweak the number or the pre-filled inquiry message here.
 */

/** WhatsApp number in international format, digits only (no "+", spaces or dashes). */
export const WHATSAPP_NUMBER = "6594524937";

/** Human-readable version, used for tooltips / aria labels. */
export const WHATSAPP_DISPLAY_NUMBER = "+65 9452 4937";

/** Pre-filled message the visitor sends when they tap the button. */
export const WHATSAPP_INQUIRY_MESSAGE =
  "Hello Resonara, I came across your website and would like to know more about your sound therapy offering. Could you share the details?";

/** Builds the wa.me deep link with the inquiry message pre-filled. */
export function whatsappLink(message: string = WHATSAPP_INQUIRY_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
