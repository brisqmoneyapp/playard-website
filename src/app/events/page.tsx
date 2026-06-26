import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What's On at Playard | Playard Peterborough",
  description:
    "Discover what's on at Playard Peterborough, from Sip & Paint and PLNTD to music-led socials, collaborations and culture in Peterborough city centre.",
};

const events = [
  {
    title: "PLNTD AT PLAYARD",
    subtitle: "Sip & Paint",
    date: "Friday 31 July 2026",
    time: "7pm to 10pm",
    description:
      "Two hours of painting followed by one hour of DJ and social time.",
    href: "/sip-and-paint-peterborough",
    colour: "bg-[#d71920] text-white",
    labelClass: "text-white/80",
    copyClass: "text-white/90",
    cta: "Book Now",
  },
  {
    title: "VIBE DISTRICT AT PLAYARD",
    subtitle: "Presented by Crowd Culture",
    date: "Saturday 1 August 2026",
    time: "6pm to 1am",
    description:
      "Afrobeats, Amapiano, Afrohouse, games, drinks and culture inside Playard Peterborough.",
    href: "/events",
    colour: "bg-[#00d4ff] text-black",
    labelClass: "text-black/70",
    copyClass: "text-black/80",
    cta: "Coming Soon",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[65vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.40),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(255,43,214,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(0,212,255,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Playard Events
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-[7rem] lg:text-[8rem]">
            What&apos;s On
            <br />
            At Playard.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            From creative nights to music-led socials, Playard is becoming a home for events, collaborations and culture in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#ff2bd6] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-base font-black uppercase tracking-[-0.03em] sm:text-xl">
          <span>Sip &amp; Paint</span>
          <span>•</span>
          <span>Social Nights</span>
          <span>•</span>
          <span>Drinks</span>
          <span>•</span>
          <span>DJ</span>
          <span>•</span>
          <span>City Centre</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Upcoming Events</p>
            <h2 className="text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
              What&apos;s On
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {events.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className={`${event.colour} block border-4 border-black p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[1deg] md:p-10`}
              >
                <p className={`mb-5 text-sm font-black uppercase tracking-[0.22em] ${event.labelClass}`}>
                  {event.subtitle}
                </p>

                <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
                  {event.title}
                </h3>

                <div className="mb-6 space-y-3 border-t-4 border-current/20 pt-6">
                  <p className="text-lg font-bold leading-7">
                    <span className="font-black uppercase tracking-[0.12em]">Date: </span>
                    {event.date}
                  </p>
                  <p className="text-lg font-bold leading-7">
                    <span className="font-black uppercase tracking-[0.12em]">Time: </span>
                    {event.time}
                  </p>
                </div>

                <p className={`mb-8 text-lg font-bold leading-8 sm:text-xl ${event.copyClass}`}>
                  {event.description}
                </p>

                <span className="inline-flex border-4 border-current px-6 py-4 text-sm font-black uppercase tracking-wide">
                  {event.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
            Want To Host Something At Playard?
          </h2>
          <p className="mb-8 text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            Are you an event company, artist, DJ, host, creative, promoter or local organiser looking to collaborate? Speak to us about using Playard for weekly, monthly or one off events in Peterborough city centre.
          </p>
          <a
            href="mailto:info@playard.co.uk?subject=Event%20Collaboration%20Enquiry"
            className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
          >
            Email Now
          </a>
        </div>
      </section>
    </main>
  );
}
