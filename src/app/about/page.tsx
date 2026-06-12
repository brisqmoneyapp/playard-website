import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Playard | Peterborough Entertainment Venue",
  description:
    "Learn about Playard Peterborough, a competitive social gaming venue offering VR, interactive darts, shuffleboard, pool, street curling, food, drinks, parties and corporate events.",
};

const highlights = [
  "VR Experiences",
  "Interactive Darts",
  "Shuffleboard & Pool",
  "Food & Drinks",
];

const values = [
  {
    title: "Bring People Together",
    copy: "We believe the best memories are made when friends, families and colleagues laugh, compete and spend quality time together.",
  },
  {
    title: "Revive The City Centre",
    copy: "Playard was created to help bring more life, activity and reasons for people to visit Peterborough city centre.",
  },
  {
    title: "Fun For Everyone",
    copy: "Kids, teenagers, adults and families can all enjoy activities under one roof without anyone feeling left out.",
  },
  {
    title: "Affordable Entertainment",
    copy: "We wanted to create an entertainment venue that feels exciting, social and accessible without costing a fortune.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_22rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl mb-8">
            About Playard
          </div>

          <h1 className="mb-8 max-w-6xl text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            Built For
            <br />
            Fun.
            <br />
            Built For Peterborough.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Playard was created to bring people back into Peterborough city centre and give families, friends, teenagers, couples and businesses somewhere exciting to spend time together.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#d71920] px-6 py-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-5">Our Story</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              More than just an activity venue.
            </h2>
          </div>

          <div className="space-y-6 text-xl font-bold leading-9 text-zinc-700">
            <p>
              Playard was born from a simple idea: Peterborough deserved a modern entertainment venue where people could spend quality time together, have fun and create memories.
            </p>

            <p>
              We felt there was no single place where children, teenagers, adults and families could all enjoy activities together under one roof. Most venues focused on one activity or one age group. We wanted something different.
            </p>

            <p>
              Today Playard brings together interactive darts, virtual reality, shuffleboard, pool, street curling, table tennis, simulator experiences, food, drinks, parties, tournaments and corporate events in one affordable destination right in the heart of Peterborough city centre.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">What We Stand For</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Built around people.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#111111] p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {value.title}
                </h3>
                <p className="text-zinc-400">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Visit Playard
              </p>

              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Ready to see what all the fuss is about?
              </h2>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Explore activities, organise a party, book a corporate event or
                simply visit for food, drinks and games.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/book"
                className="rounded-md bg-black px-8 py-4 text-center font-black uppercase tracking-wide text-white"
              >
                Book Now
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-zinc-300 px-8 py-4 text-center font-black uppercase tracking-wide text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}