"use client";

import { useEffect, useId, useRef } from "react";

const FACEBOOK_URL = "https://www.facebook.com/804074306133481/";
const EMAIL = "info@playard.co.uk";

export default function MaintenanceNotice() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const container = dialogRef.current;
    if (!container) {
      return;
    }

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const focusTimer = window.setTimeout(() => {
      firstElement.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
      aria-hidden={false}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="w-full max-w-[650px] border-4 border-black bg-[#fff3dd] text-black shadow-2xl"
      >
        <div className="border-b-4 border-black bg-black px-5 py-6 text-white sm:px-8 sm:py-8">
          <p className="mb-3 inline-flex bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
            Playard Update
          </p>
          <h1
            id={headingId}
            className="text-3xl font-black uppercase leading-none tracking-[-0.06em] sm:text-4xl md:text-5xl"
          >
            Playard Is Currently Closed
          </h1>
        </div>

        <div id={descriptionId} className="space-y-5 px-5 py-6 sm:space-y-6 sm:px-8 sm:py-8">
          <div className="space-y-4 text-base font-bold leading-8 text-zinc-800 sm:text-lg sm:leading-9">
            <p>Thank you for visiting Playard.</p>
            <p>
              We are currently closed while plans for the future of the venue are being finalised.
            </p>
            <p>
              We appreciate all of the amazing support from our customers and community, and we hope to share further updates in due course.
            </p>
            <p>We apologise for any inconvenience and thank you for your patience.</p>
          </div>

          <div className="border-4 border-black bg-white p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-black uppercase tracking-[0.08em] text-black sm:text-xl">
              Need to contact us?
            </h2>
            <p className="text-base font-bold leading-7 text-zinc-800 sm:text-lg">
              Email:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-black text-[#d71920] underline decoration-2 underline-offset-4 transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2"
              >
                {EMAIL}
              </a>
            </p>
          </div>

          <p className="text-base font-bold leading-7 text-zinc-800 sm:text-lg">
            Follow our social media channels for future updates.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-[44px] items-center justify-center border-4 border-black bg-[#d71920] px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff3dd] sm:text-base"
            >
              Contact Us
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center border-4 border-black bg-black px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#1877F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff3dd] sm:text-base"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
