export const GA_MEASUREMENT_ID = "G-X3BD5Z3Z7T";
export const CLARITY_PROJECT_ID = "xa9bq9x6oy";
export const META_PIXEL_ID = "1053011354069237";

export type AnalyticsEvent =
  | "quick_book_clicked"
  | "darts_booking_clicked"
  | "pool_booking_clicked"
  | "shuffleboard_booking_clicked"
  | "curling_booking_clicked"
  | "vr_booking_clicked"
  | "free_roam_booking_clicked"
  | "vr_arcade_booking_clicked"
  | "vr_escape_booking_clicked"
  | "simshooting_booking_clicked"
  | "table_tennis_booking_clicked"
  | "group_booking_clicked"
  | "combo_package_clicked"
  | "all_you_can_play_clicked"
  | "gift_card_clicked"
  | "corporate_enquiry_clicked"
  | "offers_clicked"
  | "activities_clicked"
  | "events_page_viewed"
  | "event_page_viewed"
  | "book_button_clicked"
  | "email_enquiry_clicked"
  | "telephone_clicked"
  | "funbutler_booking_clicked"
  | "eventbrite_booking_clicked";

const META_CUSTOM_EVENTS = new Set<AnalyticsEvent>([
  "quick_book_clicked",
  "gift_card_clicked",
  "vr_booking_clicked",
  "darts_booking_clicked",
  "pool_booking_clicked",
  "shuffleboard_booking_clicked",
  "curling_booking_clicked",
  "simshooting_booking_clicked",
  "table_tennis_booking_clicked",
  "group_booking_clicked",
  "combo_package_clicked",
  "all_you_can_play_clicked",
  "corporate_enquiry_clicked",
  "funbutler_booking_clicked",
  "eventbrite_booking_clicked",
  "book_button_clicked",
]);

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function isAnalyticsEnabled() {
  return process.env.NODE_ENV === "production";
}

export function trackMetaPageView() {
  if (!isAnalyticsEnabled()) {
    return;
  }

  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", "PageView");
}

export function trackMetaCustomEvent(eventName: AnalyticsEvent) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  if (!META_CUSTOM_EVENTS.has(eventName)) {
    return;
  }

  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("trackCustom", eventName);
}

export function trackEvent(eventName: AnalyticsEvent, params?: EventParams) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: "engagement",
      ...params,
    });
  }

  trackMetaCustomEvent(eventName);
}

export function trackGaPageView(path: string) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });

  window.gtag("event", "page_view", {
    page_path: path,
  });

  if (path === "/events") {
    trackEvent("events_page_viewed", { page_path: path });
  }

  if (path.startsWith("/sip-and-paint") || path.startsWith("/events")) {
    trackEvent("event_page_viewed", { page_path: path });
  }
}

export function trackBookButtonClick(source: string) {
  trackEvent("book_button_clicked", { source });
}

export function trackFunbutlerBookingClick(source: string) {
  trackEvent("funbutler_booking_clicked", { source });
  trackEvent("book_button_clicked", { source, booking_provider: "funbutler" });
}

export function trackEventbriteBookingClick(source: string) {
  trackEvent("eventbrite_booking_clicked", { source });
  trackEvent("book_button_clicked", { source, booking_provider: "eventbrite" });
}

export function trackEmailEnquiryClick(source: string) {
  trackEvent("email_enquiry_clicked", { source });
}

export function trackTelephoneClick(source: string) {
  trackEvent("telephone_clicked", { source });
}
