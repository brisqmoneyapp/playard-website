"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type TickerEvent = {
  id: string;
  headline: string;
  label: string;
  date: string;
  time: string;
  target: string;
  expiresAt: string;
  href: string;
};

const ALL_EVENTS: TickerEvent[] = [
  {
    id: "plntd-sip-and-paint",
    headline: "PLNTD AT PLAYARD",
    label: "Sip & Paint",
    date: "Friday 31 July",
    time: "7pm–10pm",
    target: "2026-07-31T19:00:00+01:00",
    expiresAt: "2026-07-31T22:00:00+01:00",
    href: "/sip-and-paint-peterborough",
  },
  {
    id: "vibe-district",
    headline: "VIBE DISTRICT AT PLAYARD",
    label: "Crowd Culture",
    date: "Saturday 1 August",
    time: "6pm–1am",
    target: "2026-08-01T18:00:00+01:00",
    expiresAt: "2026-08-02T01:00:00+01:00",
    href: "/events",
  },
];

const COUNTDOWN_MS = 60_000;

const tickerShellClassName =
  "group block w-full overflow-hidden border-y border-black/25 bg-[#d71920] py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.18)] transition-colors hover:bg-[#ef233c] md:py-[0.45rem]";

const tickerInnerClassName =
  "mx-auto flex w-full min-w-0 max-w-7xl items-center gap-4 px-4 sm:px-6 md:gap-6 lg:px-8";

type TimeLeft = {
  days: number;
  hours: number;
};

function getActiveEvents(now: number): TickerEvent[] {
  return ALL_EVENTS.filter(
    (event) => new Date(event.expiresAt).getTime() > now,
  );
}

function getTimeLeft(targetMs: number, now: number): TimeLeft | null {
  const difference = targetMs - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  };
}

function formatCountdown(time: TimeLeft): string {
  return `Starts in ${time.days} Days`;
}

function Bullet() {
  return (
    <span aria-hidden="true" className="px-1.5 text-[0.58rem] text-white/45">
      •
    </span>
  );
}

function EventBlock({
  event,
  countdownLabel,
}: {
  event: TickerEvent;
  countdownLabel: string;
}) {
  return (
    <span
      data-event-id={event.id}
      data-event-href={event.href}
      className="inline-flex shrink-0 items-center whitespace-nowrap text-[0.58rem] sm:text-[0.62rem]"
    >
      <span className="font-black uppercase tracking-[0.03em] text-white">
        {event.headline}
      </span>
      <Bullet />
      <span className="font-bold uppercase tracking-[0.02em] text-white">
        {event.label}
      </span>
      <Bullet />
      <span className="font-semibold text-white">{event.date}</span>
      <Bullet />
      <span className="font-semibold text-white">{event.time}</span>
      <Bullet />
      <span
        className="font-black tabular-nums uppercase tracking-[0.03em] text-[#00d4ff]"
        suppressHydrationWarning
      >
        {countdownLabel}
      </span>
    </span>
  );
}

function TickerSet({
  events,
  countdowns,
}: {
  events: TickerEvent[];
  countdowns: Record<string, string>;
}) {
  return (
    <>
      {events.map((event, index) => (
        <span key={`${event.id}-${index}`} className="inline-flex shrink-0 items-center">
          <EventBlock
            event={event}
            countdownLabel={countdowns[event.id] ?? "Starts soon"}
          />
          <span aria-hidden="true" className="px-2 text-[0.58rem] text-white/50">
            •••
          </span>
        </span>
      ))}
    </>
  );
}

function FallbackBar() {
  return (
    <Link
      href="/events"
      className={tickerShellClassName}
      aria-label="What's On at Playard. View Events."
    >
      <div className={tickerInnerClassName}>
        <span className="relative z-20 flex shrink-0 items-center bg-[#d71920] text-[0.58rem] font-black uppercase leading-none tracking-[0.14em] text-white sm:text-[0.62rem]">
          What&apos;s On
        </span>
        <span className="min-w-0 flex-1 truncate text-[0.58rem] font-bold leading-none text-white/90 sm:text-[0.62rem]">
          Events, tournaments and special nights at Playard
        </span>
        <span className="relative z-20 flex shrink-0 items-center bg-[#d71920] text-[0.58rem] font-black uppercase leading-none tracking-[0.06em] text-white decoration-transparent underline-offset-2 transition group-hover:underline sm:text-[0.62rem]">
          View Details →
        </span>
      </div>
    </Link>
  );
}

export default function WhatsOnTicker() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);
  const [activeHref, setActiveHref] = useState(ALL_EVENTS[0].href);

  const viewportRef = useRef<HTMLDivElement>(null);

  const activeEvents = useMemo(
    () => (mounted ? getActiveEvents(now) : ALL_EVENTS),
    [mounted, now],
  );

  const countdowns = useMemo(() => {
    const labels: Record<string, string> = {};

    for (const event of activeEvents) {
      const targetMs = new Date(event.target).getTime();
      const timeLeft = mounted ? getTimeLeft(targetMs, now) : null;
      labels[event.id] = timeLeft
        ? formatCountdown(timeLeft)
        : mounted
          ? "Live now"
          : "Starts soon";
    }

    return labels;
  }, [activeEvents, mounted, now]);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const tick = window.setInterval(() => setNow(Date.now()), COUNTDOWN_MS);
    return () => window.clearInterval(tick);
  }, [mounted]);

  useEffect(() => {
    if (activeEvents.length === 0) {
      return;
    }

    setActiveHref(activeEvents[0].href);

    let frame = 0;

    const updateActiveHref = () => {
      const viewport = viewportRef.current;
      if (!viewport) {
        frame = window.requestAnimationFrame(updateActiveHref);
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const centerX = viewportRect.left + viewportRect.width / 2;

      let nextHref = activeEvents[0].href;
      const segments = viewport.querySelectorAll<HTMLElement>("[data-event-href]");

      for (const segment of segments) {
        const rect = segment.getBoundingClientRect();
        if (rect.left <= centerX && rect.right >= centerX) {
          nextHref = segment.dataset.eventHref ?? nextHref;
          break;
        }
      }

      setActiveHref((current) => (current === nextHref ? current : nextHref));
      frame = window.requestAnimationFrame(updateActiveHref);
    };

    frame = window.requestAnimationFrame(updateActiveHref);

    return () => window.cancelAnimationFrame(frame);
  }, [activeEvents]);

  if (mounted && activeEvents.length === 0) {
    return <FallbackBar />;
  }

  return (
    <>
      <style jsx global>{`
        @keyframes whats-on-ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .whats-on-ticker-track {
          animation: whats-on-ticker-scroll 38s linear infinite;
          will-change: transform;
        }

        @media (max-width: 767px) {
          .whats-on-ticker-track {
            animation-duration: 52s;
          }
        }
      `}</style>

      <Link
        href={activeHref}
        className={tickerShellClassName}
        aria-label="What's On at Playard. View event details."
      >
        <div className={tickerInnerClassName}>
          <span className="relative z-20 flex shrink-0 items-center bg-[#d71920] text-[0.58rem] font-black uppercase leading-none tracking-[0.14em] text-white sm:text-[0.62rem]">
            What&apos;s On
          </span>

          <div
            ref={viewportRef}
            className="relative isolate min-w-0 flex-1 self-stretch overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-6 bg-gradient-to-r from-[#d71920] via-[#d71920]/75 to-transparent md:w-7" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-6 bg-gradient-to-l from-[#d71920] via-[#d71920]/75 to-transparent md:w-7" />

            <div className="flex h-full items-center overflow-hidden">
              <div className="whats-on-ticker-track flex w-max items-center">
                <div className="flex shrink-0 items-center pr-6">
                  <TickerSet events={activeEvents} countdowns={countdowns} />
                </div>
                <div
                  className="flex shrink-0 items-center pr-6"
                  aria-hidden="true"
                >
                  <TickerSet events={activeEvents} countdowns={countdowns} />
                </div>
              </div>
            </div>
          </div>

          <span className="relative z-20 flex shrink-0 items-center bg-[#d71920] text-[0.58rem] font-black uppercase leading-none tracking-[0.06em] text-white decoration-transparent underline-offset-2 transition group-hover:underline sm:text-[0.62rem]">
            View Details →
          </span>
        </div>
      </Link>
    </>
  );
}
