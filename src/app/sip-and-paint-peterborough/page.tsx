import type { Metadata } from "next";
import Link from "next/link";
import EventbriteWidget from "@/components/EventbriteWidget";

export const metadata: Metadata = {
  title: "Sip & Paint Peterborough | Playard",
  description:
    "Join Playard Peterborough for Sip & Paint on Friday 31 July 2026, with two hours of painting followed by one hour of DJ and social time.",
};

const eventDetails = [
  { label: "Date", value: "Friday 31 July 2026" },
  { label: "Time", value: "7pm to 10pm" },
  { label: "Includes", value: "2 hours painting + 1 hour DJ" },
  { label: "Venue", value: "Playard Peterborough" },
];

const whatToExpect = [
  "A relaxed Sip & Paint session with guided painting for the first two hours",
  "All the creative setup you need to get started and enjoy the session",
  "Drinks available from the Playard bar throughout the evening",
  "One hour of DJ and social time to finish the night",
  "A fun, social atmosphere in Peterborough city centre",
];

const whoItIsFor = [
  "Date nights",
  "Friends nights out",
  "Birthday celebrations",
  "Work socials",
  "Creative beginners",
  "Groups looking for something different",
];

const faqs = [
  {
    question: "Do I need painting experience?",
    answer:
      "No. Sip & Paint is designed to be relaxed and social. The session is suitable for beginners as well as people who simply want a fun creative night out.",
  },
  {
    question: "What is included in the ticket?",
    answer:
      "Your booking includes two hours of guided painting followed by one hour of DJ and social time at Playard Peterborough.",
  },
  {
    question: "Can I book for a group?",
    answer:
      "Yes. Sip & Paint works well for couples, friends and group bookings. Contact us with your group size and we will help arrange your place.",
  },
  {
    question: "Will food and drinks be available?",
    answer:
      "Yes. Playard has a licensed bar with food and drinks available during the event.",
  },
  {
    question: "Where is the event held?",
    answer:
      "Sip & Paint takes place at Playard Peterborough, 26 Hereward Cross, Peterborough, PE1 1TE.",
  },
];

export default function SipAndPaintPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(255,43,214,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(0,212,255,0.22),transparent_22rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Sip &amp; Paint Peterborough
          </div>

          <h1 className="mb-8 max-w-5xl text-[4rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[8rem]">
            PAINT.
            <br />
            SIP.
            <br />
            DANCE.
          </h1>

          <p className="mb-10 max-w-4xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
            Join us at Playard for a relaxed Sip &amp; Paint night with two hours of guided painting followed by one hour of DJ and social time.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map((item) => (
              <div
                key={item.label}
                className="border-4 border-white bg-black/70 p-5 shadow-2xl backdrop-blur"
              >
                <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-[#00d4ff]">
                  {item.label}
                </p>
                <p className="text-lg font-bold leading-7 text-white sm:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-base font-black uppercase tracking-[-0.03em] text-black sm:text-xl">
          <span>Guided Painting</span>
          <span>•</span>
          <span>Drinks</span>
          <span>•</span>
          <span>DJ</span>
          <span>•</span>
          <span>Social Time</span>
          <span>•</span>
          <span>Peterborough City Centre</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="border-4 border-black bg-white p-8 shadow-2xl md:p-10">
            <p className="section-label mb-5">What To Expect</p>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
              A creative night out.
            </h2>
            <ul className="space-y-4 text-lg font-bold leading-8 text-black">
              {whatToExpect.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-black text-[#d71920]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white shadow-2xl md:p-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-white/80">
              Who It Is For
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
              Bring your group.
            </h2>
            <ul className="space-y-4 text-lg font-bold leading-8">
              {whoItIsFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-black text-[#00d4ff]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-4xl border-4 border-black bg-white p-8 shadow-2xl md:p-12">
          <p className="section-label mb-5">Tickets</p>
          <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.06em] text-black md:text-5xl">
            Book Your Ticket
          </h2>
          <p className="mb-8 text-lg font-bold leading-8 text-black">
            Complete your Sip &amp; Paint booking securely through Eventbrite without leaving the Playard website.
          </p>

          <EventbriteWidget
            eventId="1992528618736"
            containerId="eventbrite-widget-container-1992528618736"
            height={600}
          />
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
            Sip &amp; Paint Questions
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-white bg-[#111111] p-7 shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-[#00d4ff]">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-200">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-label mb-5">Contact</p>
              <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
                Book Your Place
              </h2>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                Email info@playard.co.uk or call 01733 641062 to enquire about Sip &amp; Paint on Friday 31 July 2026.
              </p>
              <p className="text-lg font-bold leading-8 text-black">
                26 Hereward Cross, Peterborough, PE1 1TE
              </p>
            </div>

            <div className="grid gap-4">
              <Link
                href="/contact"
                className="border-4 border-black px-8 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                Contact Playard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
