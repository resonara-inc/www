/**
 * WhatsApp contact details, used for the Singapore "book a session" links and the optional floating inquiry button.
 * Tweak the number or the pre-filled message here.
 */

/** WhatsApp number in international format, digits only (no "+", spaces or dashes). */
export const WHATSAPP_NUMBER = "6589934867";

/** Human-readable version, shown as link text. */
export const WHATSAPP_DISPLAY_NUMBER = "+65 8993 4867";

/** Pre-filled message the visitor sends when they tap a booking link. */
export const WHATSAPP_BOOKING_MESSAGE = "Hi, I am keen to book a session at Resonara Sanctuary at Akshaya Yoga";

/** Pre-filled message for the floating inquiry button (see FEATURES.floatingWhatsApp in site.ts). */
export const WHATSAPP_INQUIRY_MESSAGE =
  "Hello Resonara, I came across your website and would like to know more about your sound therapy offering. Could you share the details?";

/** Builds the wa.me deep link with the message pre-filled. */
export function whatsappLink(message: string = WHATSAPP_BOOKING_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
