"use client";

import { useEffect, useState } from "react";

const EVENT_TIME = new Date("2026-07-31T19:00:00+01:00").getTime();

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

function getTimeLeft(now: number): TimeLeft | null {
  const difference = EVENT_TIME - now;

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

function CountdownUnit({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 flex-1 border-4 border-black bg-white p-4 text-center shadow-xl sm:p-6">
      <p className="text-3xl font-black tabular-nums leading-none tracking-[-0.06em] text-black sm:text-5xl md:text-6xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-black sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function SipAndPaintCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(PLACEHOLDER_TIME);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const tick = () => {
      const next = getTimeLeft(Date.now());
      setTimeLeft(next ?? PLACEHOLDER_TIME);
      setHasStarted(next === null);
    };

    tick();
    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const displayTime = mounted ? timeLeft : PLACEHOLDER_TIME;

  return (
    <section className="border-y-4 border-black bg-black px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Next Event
            </p>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.07em] text-white sm:text-5xl md:text-6xl">
              Sip &amp; Paint
            </h2>
            <p className="mt-3 text-lg font-bold text-[#ff2bd6] sm:text-xl">
              Friday 31 July 2026 · 7pm to 10pm
            </p>
          </div>
          <p className="max-w-xl text-base font-bold leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Two hours of guided painting followed by one hour of DJ and social time at Playard Peterborough.
          </p>
        </div>

        {mounted && hasStarted ? (
          <div className="border-4 border-[#d71920] bg-[#111111] p-8 text-center shadow-2xl sm:p-10">
            <p className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
              This event has started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <CountdownUnit label="Days" value={displayTime.days} />
            <CountdownUnit label="Hours" value={displayTime.hours} />
            <CountdownUnit label="Minutes" value={displayTime.minutes} />
            <CountdownUnit label="Seconds" value={displayTime.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}
