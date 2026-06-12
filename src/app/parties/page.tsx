import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parties in Peterborough | Playard",
  description:
    "Birthday parties, teen parties, work socials, celebrations and group events at Playard Peterborough.",
};

const partyTypes = [
  {
    title: "Kids Parties",
    href: "/kids-parties-peterborough",
    description: "VR experiences, games and food packages for younger guests.",
  },
  {
    title: "Teen Parties",
    href: "/teen-parties-peterborough",
    description: "Competitive gaming, VR and social experiences for teenagers.",
  },
  {
    title: "Adult Birthdays",
    href: "/birthday-parties-peterborough",
    description: "Darts, shuffleboard, pool, food and drinks for memorable celebrations.",
  },
  {
    title: "Corporate Events",
    href: "/corporate-events",
    description: "Team building, work socials and client entertainment packages.",
  },
];

const highlights = [
  "Food & Drinks Available",
  "Multiple Activities",
  "City Centre Venue",
  "Large Group Friendly",
];

export default function PartiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Parties & Celebrations
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            PARTY.
            <br />
            PLAY.
            <br />
            REPEAT.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Kids birthdays, teen parties, adult celebrations, work socials and unforgettable group events in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#ff2bd6] px-6 py-6">
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

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="section-label mb-5">Choose Your Party</p>
            <h2 className="text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
              Choose your celebration.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partyTypes.map((party) => (
              <Link
                key={party.title}
                href={party.href}
                className="flex min-h-[350px] flex-col border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {party.title}
                </h3>
                <p className="mb-8 font-bold leading-8 text-zinc-700">{party.description}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-[#d71920]">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#00d4ff]">
                Ready to celebrate?
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                LET'S BUILD YOUR PERFECT PARTY.
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-8 text-zinc-300">
                Tell us your date, group size and preferred activities and we'll
                help create a memorable celebration.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@playard.co.uk?subject=Party Enquiry"
                className="bg-[#ff2bd6] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Enquire Now
              </a>

              <Link
                href="/book"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Book Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            EVERY PARTY. ONE VENUE.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white"><h3 className="text-3xl font-black uppercase">Kids 🎉</h3></div>
            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Teens 🎮</h3></div>
            <div className="border-4 border-black bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Adults 🍻</h3></div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white"><h3 className="text-3xl font-black uppercase">Corporate 🏆</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}