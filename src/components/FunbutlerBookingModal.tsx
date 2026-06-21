"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import type { AnalyticsEvent } from "@/lib/analytics";
import { trackEvent as trackAnalyticsEvent } from "@/lib/analytics";

type FunbutlerBookingModalProps = {
  clientId?: string;
  bookingFormId: string;
  buttonText?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  trackEvent?: AnalyticsEvent;
};

export default function FunbutlerBookingModal({
  clientId = "67360c42dd5e621cbcc0d7a5",
  bookingFormId,
  buttonText = "Book Now",
  title = "Book at Playard",
  subtitle = "Choose your date, time and group size, then complete your booking securely.",
  className = "",
  trackEvent,
}: FunbutlerBookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const srcDoc = useMemo(() => {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            html,
            body {
              margin: 0;
              padding: 0;
              min-height: 100%;
              background: #fff3dd;
              overflow-x: hidden;
              font-family: Arial, Helvetica, sans-serif;
            }

            body {
              padding: 0;
            }

            .loader-wrapper {
              min-height: 70vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
            }

            .loader-icon {
              display: inline-block;
              width: 64px;
              height: 64px;
            }

            .loader-icon.large {
              width: 110px;
              height: 110px;
            }

            .loader-icon:after {
              content: " ";
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 5px solid #111111;
              border-color: #111111 transparent #d71920 transparent;
              animation: loader-icon 1.2s linear infinite;
            }

            @keyframes loader-icon {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            booking-form {
              display: block;
              width: 100%;
              min-height: 100vh;
            }
          </style>
          <link rel="stylesheet" href="https://booking.funbutler.com/apps/public-app/styles.css" />
        </head>
        <body>
          <booking-form clientId="${clientId}" formId="${bookingFormId}">
            <div id="main-loader" class="loader-wrapper">
              <div class="loader-icon large"></div>
            </div>
          </booking-form>
          <script src="https://booking.funbutler.com/apps/public-app/runtime.js"></script>
          <script src="https://booking.funbutler.com/apps/public-app/polyfills.js"></script>
          <script src="https://booking.funbutler.com/apps/public-app/main.js"></script>
        </body>
      </html>
    `;
  }, [clientId, bookingFormId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

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

  const modal = (
    <div className="fixed inset-0 z-[99999] bg-black/90 p-0 backdrop-blur-sm sm:p-4">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden border-0 border-white bg-[#fff3dd] shadow-2xl sm:border-4">
        <div className="flex items-start justify-between gap-4 border-b-4 border-black bg-[#d71920] px-4 py-4 text-white sm:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/80">
              Playard Booking
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

        <div className="min-h-0 flex-1 bg-[#fff3dd]">
          <iframe
            title={title}
            srcDoc={srcDoc}
            className="h-full min-h-[82vh] w-full border-0 bg-[#fff3dd]"
            loading="eager"
            scrolling="yes"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (trackEvent) {
            trackAnalyticsEvent(trackEvent);
          }
          setIsOpen(true);
        }}
        className={`inline-flex items-center justify-center bg-[#d71920] px-8 py-5 text-center text-base font-black uppercase tracking-wide text-white shadow-xl transition hover:rotate-[-2deg] hover:scale-[1.03] hover:bg-[#ef233c] sm:text-lg ${className}`}
      >
        {buttonText}
      </button>

      {mounted && isOpen ? createPortal(modal, document.body) : null}
    </>
  );
}