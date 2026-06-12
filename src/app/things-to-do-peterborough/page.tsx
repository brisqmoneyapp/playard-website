import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things To Do In Peterborough | Playard",
  description:
    "Looking for things to do in Peterborough? Discover VR, interactive darts, shuffleboard, pool, street curling, food, drinks, parties and corporate events at Playard.",
};

const activities = [
  {
    title: "VR Experiences",
    href: "/vr-peterborough",
    copy: "Immersive virtual reality adventures for friends, families and groups.",
  },
  {
    title: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    copy: "Digital darts with automatic scoring and exciting game modes.",
  },
  {
    title: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    copy: "One of the fastest growing social games in the UK.",
  },
  {
    title: "Pool",
    href: "/pool-peterborough",
    copy: "Classic competition with a modern social atmosphere.",
  },
  {
    title: "Street Curling",
    href: "/street-curling-peterborough",
    copy: "Curling without the ice. Easy to learn and fun for all ages.",
  },
  {
    title: "SimShooting",
    href: "/simhunt-peterborough",
    copy: "Big screen simulator experiences that offer something different.",
  },
  {
    title: "Table Tennis",
    href: "/table-tennis-peterborough",
    copy: "Fast paced fun for casual and competitive players alike.",
  },
  {
    title: "Games Lounge",
    href: "/games-lounge-peterborough",
    copy: "Board games, card games, cornhole and table football.",
  },
];

const occasions = [
  "Date Nights",
  "Family Days Out",
  "Birthday Parties",
  "Teen Parties",
  "Corporate Events",
  "Work Socials",
  "Weekend Activities",
  "Rainy Day Plans",
];

const faqs = [
  {
    question: "What are the best things to do in Peterborough?",
    answer:
      "Popular options include VR experiences, interactive darts, shuffleboard, pool, street curling, table tennis and social gaming at Playard Peterborough.",
  },
  {
    question: "What can groups do in Peterborough?",
    answer:
      "Groups can enjoy competitive social gaming, food, drinks, birthday parties, team building events and multi activity experiences at Playard.",
  },
  {
    question: "Are there indoor activities in Peterborough?",
    answer:
      "Yes. Playard offers a wide range of indoor activities suitable throughout the year regardless of weather conditions.",
  },
  {
    question: "Is Playard suitable for families?",
    answer:
      "Yes. Families can enjoy VR, games lounge activities, table tennis and a variety of group friendly experiences.",
  },
];

export default function ThingsToDoPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.40),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.30),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(215,25,32,0.22),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Peterborough Guide
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            THINGS
            <br />
            TO DO IN
            <br />
            PETERBOROUGH.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Looking for fun things to do in Peterborough? Discover VR, interactive darts, shuffleboard, pool, street curling, simulator games, food, drinks and unforgettable experiences at Playard.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {['City Centre Location','Indoor Activities','Food & Drinks','Perfect For Groups'].map((item) => (
            <div key={item} className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Popular Activities</p>
            <h2 className="text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
              One venue. Endless fun.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="flex min-h-[330px] flex-col border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {activity.title}
                </h3>
                <p className="mb-8 font-bold leading-8 text-zinc-700">{activity.copy}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-[#d71920]">
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label mb-5">Perfect For</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Perfect for every plan.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              Whether you are planning a birthday, work social, date night or a
              family day out, Playard offers activities that bring people together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {occasions.map((item) => (
              <div
                key={item}
                className="border-4 border-white bg-[#111111] p-6 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-2xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#d71920]">
            Ready To Visit?
          </p>
          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            PLAN YOUR NEXT DAY OUT.
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-zinc-700">
            Book activities online, organise a party, arrange a corporate event
            or simply drop in for food, drinks and games.
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

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            THINGS TO DO IN PETERBOROUGH.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">{faq.question}</h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            PETERBOROUGH FAVOURITES.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-white bg-[#d71920] p-8"><h3 className="text-3xl font-black uppercase">VR 🎮</h3></div>
            <div className="border-4 border-white bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Darts 🎯</h3></div>
            <div className="border-4 border-white bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Shuffleboard 🏆</h3></div>
            <div className="border-4 border-white bg-[#ff2bd6] p-8"><h3 className="text-3xl font-black uppercase">Parties 🎉</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}