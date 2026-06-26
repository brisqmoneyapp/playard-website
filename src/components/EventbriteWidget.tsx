"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const EVENTBRITE_SCRIPT_ID = "eventbrite-widgets-script";
const EVENTBRITE_SCRIPT_SRC =
  "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
const DEFAULT_HEIGHT = 600;
const DEFAULT_EVENT_URL =
  "https://www.eventbrite.co.uk/e/sip-and-paint-peterborough-plntd-at-playard-peterborough-tickets-1992528618736";

const initializedContainers = new Set<string>();

type EventbriteWidgetProps = {
  eventId: string;
  containerId?: string;
  height?: number;
  buttonText?: string;
  title?: string;
  subtitle?: string;
  eventUrl?: string;
  className?: string;
};

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: Record<string, unknown>) => void;
    };
  }
}

export default function EventbriteWidget({
  eventId,
  containerId,
  height = DEFAULT_HEIGHT,
  buttonText = "Book Now",
  title = "Book Your Ticket",
  subtitle = "Complete your booking securely through Eventbrite.",
  eventUrl = DEFAULT_EVENT_URL,
  className = "",
}: EventbriteWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isHttps, setIsHttps] = useState(true);

  const widgetInitialized = useRef(false);
  const resolvedContainerId =
    containerId ?? `eventbrite-widget-container-${eventId}`;

  const resetContainer = useCallback(() => {
    initializedContainers.delete(resolvedContainerId);
    widgetInitialized.current = false;

    const container = document.getElementById(resolvedContainerId);
    if (container) {
      container.innerHTML = "";
    }
  }, [resolvedContainerId]);

  const initializeWidget = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.protocol !== "https:") {
      return;
    }

    if (!window.EBWidgets) {
      return;
    }

    if (widgetInitialized.current || initializedContainers.has(resolvedContainerId)) {
      return;
    }

    if (!document.getElementById(resolvedContainerId)) {
      return;
    }

    widgetInitialized.current = true;
    initializedContainers.add(resolvedContainerId);

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId,
      modal: false,
      iframeContainerId: resolvedContainerId,
      iframeContainerHeight: height,
      onOrderComplete: () => {
        console.log("Eventbrite order complete");
      },
    });
  }, [eventId, height, resolvedContainerId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsHttps(window.location.protocol === "https:");

    if (window.EBWidgets) {
      setScriptLoaded(true);
    }

    resetContainer();
  }, [isOpen, resetContainer]);

  useEffect(() => {
    if (!isOpen || !scriptLoaded) {
      return;
    }

    initializeWidget();
  }, [isOpen, scriptLoaded, initializeWidget]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleScriptReady = useCallback(() => {
    setScriptLoaded(true);
    initializeWidget();
  }, [initializeWidget]);

  const modal = (
    <div className="fixed inset-0 z-[99999] bg-black/90 p-0 backdrop-blur-sm sm:p-4">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden border-0 border-white bg-[#fff3dd] shadow-2xl sm:border-4">
        <div className="flex items-start justify-between gap-4 border-b-4 border-black bg-[#d71920] px-4 py-4 text-white sm:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/80">
              Eventbrite Booking
            </p>
            <h2 className="mt-1 text-2xl font-black uppercase leading-none tracking-[-0.04em] sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-white/85 sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close booking window"
            className="shrink-0 border-2 border-white bg-black px-4 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#fff3dd] p-4 sm:p-6">
          {!isHttps ? (
            <p className="mb-4 border-4 border-black bg-white p-4 text-sm font-bold leading-6 text-black sm:text-base">
              Eventbrite embedded checkout only works over HTTPS. Use the fallback button below during local development.
            </p>
          ) : null}

          <div
            id={resolvedContainerId}
            className="overflow-hidden rounded-2xl border-4 border-black bg-white"
            style={{ minHeight: isHttps ? height : 0 }}
          />

          <div className="mt-6 text-center">
            <p className="mb-4 text-sm font-bold leading-6 text-black sm:text-base">
              If the checkout does not load, open the secure Eventbrite booking page in a new tab.
            </p>
            <a
              href={eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#d71920] px-8 py-5 text-base font-black uppercase tracking-wide text-white transition hover:scale-[1.03] sm:text-lg"
            >
              Open Eventbrite Booking
            </a>
          </div>
        </div>
      </div>

      {isOpen ? (
        <Script
          id={EVENTBRITE_SCRIPT_ID}
          src={EVENTBRITE_SCRIPT_SRC}
          strategy="afterInteractive"
          onReady={handleScriptReady}
        />
      ) : null}
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center bg-[#d71920] px-8 py-5 text-center text-base font-black uppercase tracking-wide text-white shadow-xl transition hover:rotate-[-2deg] hover:scale-[1.03] hover:bg-[#ef233c] sm:text-lg ${className}`}
      >
        {buttonText}
      </button>

      {mounted && isOpen ? createPortal(modal, document.body) : null}
    </>
  );
}
