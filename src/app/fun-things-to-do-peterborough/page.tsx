import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/fun-things-to-do-peterborough");

const activities = [
  { title: "Interactive Darts", href: "/interactive-darts-peterborough", colour: "#d71920" },
  { title: "VR Experiences", href: "/vr-peterborough", colour: "#7c3cff" },
  { title: "Shuffleboard", href: "/shuffleboard-peterborough", colour: "#f59e0b" },
  { title: "Pool", href: "/pool-peterborough", colour: "#00b86b" },
  { title: "Street Curling", href: "/street-curling-peterborough", colour: "#9EEAFF" },
  { title: "SimShooting", href: "/simhunt-peterborough", colour: "#ff7a00" },
  { title: "Table Tennis", href: "/table-tennis-peterborough", colour: "#ff2bd6" },
  { title: "Games Lounge", href: "/games-lounge-peterborough", colour: "#00d4ff" },
];

const reasons = [
  "City centre location",
  "Perfect for groups",
  "Food and drinks available",
  "Activities under one roof",
];

const perfectFor = [
  "Friends Nights Out",
  "Birthday Parties",
  "Date Nights",
  "Family Days Out",
  "Corporate Events",
  "Team Building",
  "Group Celebrations",
  "Rainy Days",
];

const faqs = [
  {
    question: "What are the most fun things to do in Peterborough?",
    answer:
      "Popular activities include interactive darts, VR experiences, shuffleboard, pool, street curling, table tennis and social gaming at Playard Peterborough.",
  },
  {
    question: "What can groups do in Peterborough?",
    answer:
      "Groups can enjoy competitive social gaming, birthday parties, corporate events, food, drinks and multi activity experiences at Playard.",
  },
  {
    question: "Are there indoor activities in Peterborough?",
    answer:
      "Yes. Playard offers a wide range of indoor activities suitable for all weather conditions throughout the year.",
  },
  {
    question: "Can families visit Playard?",
    answer:
      "Yes. Families can enjoy VR, table tennis, games lounge activities and a range of group friendly experiences.",
  },
];

export default function FunThingsToDoPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.38),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.28),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(215,25,32,0.26),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Peterborough Guide
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            FUN
            <br />
            STARTS
            <br />
            HERE.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Looking for fun things to do in Peterborough? Playard brings together games, food, drinks, birthdays, family days out, date nights and group activities in one city centre venue.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6 text-black">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item}
              className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Activities</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Everything in one venue.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="min-h-[230px] border-4 border-black p-8 text-black shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
                style={{ backgroundColor: activity.colour }}
              >
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                  {activity.title}
                </h3>
                <p className="mt-8 text-sm font-black uppercase tracking-wide">
                  Explore
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="section-label mb-5">Why Choose Playard?</p>
            <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              More than just one activity.
            </h2>
            <p className="text-xl font-bold leading-9 text-zinc-300">
              Unlike venues that offer only one experience, Playard combines VR, darts, shuffleboard, pool, curling, table tennis, simulators, food and drinks in one location. That means your group can stay longer, play more and make a proper day or night of it.
            </p>
          </div>

          <div className="border-4 border-white bg-[#111111] p-10 shadow-2xl">
            <h3 className="mb-8 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
              Perfect For:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {perfectFor.map((item, index) => (
                <div
                  key={item}
                  className={`p-5 text-lg font-black uppercase ${
                    index % 4 === 0
                      ? "bg-[#ff2bd6] text-white"
                      : index % 4 === 1
                        ? "bg-[#00d4ff] text-black"
                        : index % 4 === 2
                          ? "bg-[#f59e0b] text-black"
                          : "bg-[#d71920] text-white"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#d71920]">
            Ready To Visit?
          </p>
          <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            Plan your next day or night out.
          </h2>
          <p className="mb-8 max-w-3xl text-xl font-bold leading-9 text-zinc-700">
            Explore activities, book online or contact the Playard team for parties, group bookings and corporate events.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              Book Now
            </Link>

            <Link
              href="/activities"
              className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
            >
              View Activities
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            FUN THINGS TO DO IN PETERBOROUGH.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}