import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Playard Peterborough",
  description:
    "Frequently asked questions about Playard Peterborough including activities, bookings, parties, food, drinks, tournaments and corporate events.",
};

const faqs = [
  {
    question: "Where is Playard located?",
    answer:
      "Playard is located at 26 Hereward Cross, Peterborough, PE1 1TE in Peterborough city centre.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
      "Advance booking is recommended, particularly during weekends, school holidays and busy periods. Walk ins are welcome subject to availability.",
  },
  {
    question: "What activities do you offer?",
    answer:
      "Playard offers VR experiences, interactive darts, shuffleboard, pool, street curling, table tennis, SimShooting and a games lounge.",
  },
  {
    question: "Do you serve food and drinks?",
    answer:
      "Yes. Playard offers food, soft drinks and alcoholic beverages for guests visiting the venue.",
  },
  {
    question: "Can I book a birthday party?",
    answer:
      "Yes. We offer kids parties, teen parties, adult birthdays and group celebration packages.",
  },
  {
    question: "Do you host corporate events?",
    answer:
      "Yes. Playard hosts team building events, work socials, client entertainment and corporate celebrations.",
  },
  {
    question: "Is Playard suitable for families?",
    answer:
      "Yes. Many of our activities are suitable for families, children and mixed age groups.",
  },
  {
    question: "Do you run tournaments?",
    answer:
      "Yes. We run and plan to expand tournaments across darts, pool, table tennis, VR and other activities.",
  },
  {
    question: "Is there parking nearby?",
    answer:
      "Yes. There are several city centre parking options close to Playard. See our Parking & Directions page for details.",
  },
  {
    question: "How do I contact Playard?",
    answer:
      "You can email info@playard.co.uk or call 01733 641062.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.35),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_70%_80%,rgba(215,25,32,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Help Centre
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            GOT A
            <br />
            QUESTION?
            <br />
            START HERE.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Everything you need to know about Playard, activities, parties, food and drinks, bookings, tournaments and corporate events.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h2 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {faq.question}
                </h2>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Still need help?
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Still stuck?
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-8 text-zinc-300">
                If you cannot find the answer you're looking for, contact the Playard team and we will be happy to help.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Contact Us
              </Link>

              <Link
                href="/parking-and-directions"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Parking & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            POPULAR QUESTIONS.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/birthday-parties-peterborough" className="border-4 border-black bg-[#ff2bd6] p-8 text-white transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">Birthday Parties</h3>
              <p className="font-bold">Party packages, food and activities.</p>
            </Link>

            <Link href="/corporate-events" className="border-4 border-black bg-[#00d4ff] p-8 text-black transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">Corporate Events</h3>
              <p className="font-bold">Team building and work socials.</p>
            </Link>

            <Link href="/activities" className="border-4 border-black bg-[#f59e0b] p-8 text-black transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">Activities</h3>
              <p className="font-bold">Explore everything Playard offers.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}