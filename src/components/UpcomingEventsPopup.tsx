"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const SESSION_KEY = "playard-events-popup-seen";
const OPEN_DELAY_MS = 1000;

const UPCOMING_EVENTS = [
  {
    title: "PLNTD AT PLAYARD",
    label: "Sip & Paint",
    date: "Friday 31 July 2026",
    time: "7pm to 10pm",
    description: "Two hours of painting followed by one hour of DJ and social time.",
    href: "/sip-and-paint-peterborough",
    cardClass: "bg-[#d71920] text-white",
    labelClass: "text-white/80",
    copyClass: "text-white/90",
    buttonClass: "border-white bg-white text-black hover:bg-black hover:text-white",
  },
  {
    title: "VIBE DISTRICT AT PLAYARD",
    label: "Presented by Crowd Culture",
    date: "Saturday 1 August 2026",
    time: "6pm to 1am",
    description:
      "Afrobeats, Amapiano, Afrohouse, games, drinks and culture inside Playard Peterborough.",
    href: "/vibe-district-peterborough",
    cardClass: "bg-[#00d4ff] text-black",
    labelClass: "text-black/70",
    copyClass: "text-black/80",
    buttonClass: "border-black bg-black text-white hover:bg-white hover:text-black",
  },
] as const;

export default function UpcomingEventsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const headingId = useId();
  const descriptionId = useId();

  const closePopup = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, "true");
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closePopup]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/75 p-0 sm:items-center sm:p-4"
      onClick={closePopup}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="relative flex max-h-[96dvh] w-full max-w-[900px] flex-col overflow-hidden border-4 border-black bg-[#fff3dd] text-black shadow-2xl sm:max-h-[90dvh] sm:rounded-sm"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b-4 border-black bg-black px-4 py-4 text-white sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 pr-2">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#00d4ff]">
                Upcoming Events
              </p>
              <h2
                id={headingId}
                className="text-2xl font-black uppercase leading-none tracking-[-0.06em] sm:text-4xl"
              >
                What&apos;s On at Playard
              </h2>
              <p id={descriptionId} className="mt-3 max-w-2xl text-sm font-bold leading-7 text-zinc-300 sm:text-base">
                Two big nights. Two completely different experiences. Pick your event and see the full details.
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closePopup}
              aria-label="Close events popup"
              className="flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center border-2 border-white bg-transparent text-2xl font-black leading-none text-white transition hover:border-[#d71920] hover:bg-[#d71920] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {UPCOMING_EVENTS.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                onClick={closePopup}
                className={`${event.cardClass} group block min-w-0 border-4 border-black p-5 shadow-xl transition hover:-translate-y-1 hover:rotate-[0.5deg] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff3dd] sm:p-6`}
              >
                <p className={`mb-3 text-xs font-black uppercase tracking-[0.22em] sm:text-sm ${event.labelClass}`}>
                  {event.label}
                </p>

                <h3 className="mb-4 text-2xl font-black uppercase leading-none tracking-[-0.06em] sm:text-3xl">
                  {event.title}
                </h3>

                <div className="mb-4 space-y-2 border-t-4 border-current/20 pt-4">
                  <p className="text-sm font-bold leading-6 sm:text-base">
                    <span className="font-black uppercase tracking-[0.12em]">Date: </span>
                    {event.date}
                  </p>
                  <p className="text-sm font-bold leading-6 sm:text-base">
                    <span className="font-black uppercase tracking-[0.12em]">Time: </span>
                    {event.time}
                  </p>
                </div>

                <p className={`mb-5 text-sm font-bold leading-7 sm:text-base ${event.copyClass}`}>
                  {event.description}
                </p>

                <span
                  className={`inline-flex min-h-[44px] items-center border-4 px-5 py-3 text-sm font-black uppercase tracking-wide transition group-hover:scale-[1.02] ${event.buttonClass}`}
                >
                  View Event
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 border-t-4 border-black/10 pt-5 text-center sm:mt-6">
            <Link
              href="/events"
              onClick={closePopup}
              className="inline-flex min-h-[44px] items-center justify-center border-4 border-black bg-black px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#d71920] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff3dd]"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
