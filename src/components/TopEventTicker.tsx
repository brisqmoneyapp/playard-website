"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type TickerEvent = {
  name: string;
  label: string;
  dateTime: string;
  target: string;
  href: string;
};

const TICKER_EVENTS: TickerEvent[] = [
  {
    name: "PLNTD AT PLAYARD",
    label: "Sip & Paint",
    dateTime: "Friday 31 July 2026, 7pm to 10pm",
    target: "2026-07-31T19:00:00+01:00",
    href: "/sip-and-paint-peterborough",
  },
  {
    name: "VIBE DISTRICT AT PLAYARD",
    label: "Presented by Crowd Culture",
    dateTime: "Saturday 1 August 2026, 6pm to 1am",
    target: "2026-08-01T18:00:00+01:00",
    href: "/events",
  },
];

const ROTATE_MS = 3000;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const PLACEHOLDER_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getTimeLeft(targetMs: number, now: number): TimeLeft | null {
  const difference = targetMs - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatCountdown(time: TimeLeft): string {
  if (time.days > 0) {
    return `${time.days}d ${String(time.hours).padStart(2, "0")}h ${String(time.minutes).padStart(2, "0")}m`;
  }

  return `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;
}

export default function TopEventTicker() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [now, setNow] = useState(0);

  const event = TICKER_EVENTS[activeIndex];
  const targetMs = new Date(event.target).getTime();
  const timeLeft = mounted ? getTimeLeft(targetMs, now) : null;
  const displayTime = timeLeft ?? PLACEHOLDER_TIME;
  const hasStarted = mounted && timeLeft === null;

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());

    const tick = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    const rotate = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TICKER_EVENTS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(rotate);
  }, []);

  return (
    <Link
      href={event.href}
      className="group block border-b border-[#d71920]/40 bg-black px-3 py-2 transition hover:bg-[#111111] sm:px-6"
      aria-label={`${event.name}. ${event.dateTime}. View Details`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.62rem] font-black uppercase tracking-[0.08em] sm:gap-x-4 sm:text-[0.68rem] md:justify-between md:tracking-[0.12em]">
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-0.5 md:justify-start">
          <span className="text-[#00d4ff]">Upcoming</span>
          <span className="truncate text-white">{event.name}</span>
          <span className="hidden text-[#ff2bd6] sm:inline">|</span>
          <span className="text-[#ff2bd6]">{event.label}</span>
        </div>

        <p className="hidden max-w-md text-center text-[0.6rem] font-bold normal-case tracking-normal text-zinc-400 lg:block lg:text-[0.65rem]">
          {event.dateTime}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 md:justify-end">
          <span className="text-zinc-500 lg:hidden">{event.dateTime}</span>
          <span
            className="tabular-nums text-[#00d4ff]"
            suppressHydrationWarning
          >
            {hasStarted ? "Live now" : formatCountdown(displayTime)}
          </span>
          <span className="border border-[#d71920] bg-[#d71920] px-2 py-0.5 text-[0.58rem] text-white transition group-hover:bg-white group-hover:text-black sm:px-2.5 sm:text-[0.62rem]">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
