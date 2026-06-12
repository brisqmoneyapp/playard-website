import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities in Peterborough",
  description:
    "Explore Playard's activities in Peterborough including interactive darts, shuffleboard, pool, indoor street curling, VR, table tennis and SimHunt.",
};

const activities = [
  {
    name: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    label: "Digital darts. Big reactions.",
    summary:
      "Interactive darts with digital scoring, group games and a competitive social feel built for nights out, birthdays and work socials.",
    bestFor: "Friends, dates, work socials, adult parties",
    cta: "Book Darts",
  },
  {
    name: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    label: "Slide. Score. Settle it.",
    summary:
      "A smooth, tactical game that works brilliantly with drinks, conversation and a bit of friendly rivalry.",
    bestFor: "Couples, groups, team nights, relaxed socials",
    cta: "Book Shuffleboard",
  },
  {
    name: "Pool",
    href: "/pool-peterborough",
    label: "Classic games never miss.",
    summary:
      "Pool tables for casual games, competitive nights, date nights and relaxed group sessions in Peterborough city centre.",
    bestFor: "Casual games, friends, dates, walk ins",
    cta: "Book Pool",
  },
  {
    name: "Indoor Street Curling",
    href: "/street-curling-peterborough",
    label: "Curling without the ice.",
    summary:
      "Easy to learn, surprisingly competitive and brilliant for groups who want something different from the usual night out.",
    bestFor: "Families, teams, corporate events, mixed groups",
    cta: "Book Curling",
  },
  {
    name: "VR Experiences",
    href: "/vr-peterborough",
    label: "Step inside the game.",
    summary:
      "Immersive VR experiences for kids parties, teenagers, families and groups looking for something high energy.",
    bestFor: "Kids parties, teenagers, families, gaming groups",
    cta: "Book VR",
  },
  {
    name: "Table Tennis",
    href: "/table-tennis-peterborough",
    label: "Fast rallies. No excuses.",
    summary:
      "Quick games, big reactions and competitive rallies for groups who want something simple, physical and fun.",
    bestFor: "Friends, families, work socials, quick games",
    cta: "Book Table Tennis",
  },
  {
    name: "SimHunt",
    href: "/simhunt-peterborough",
    label: "Big screen simulator action.",
    summary:
      "A big screen simulator experience for groups looking for something different, social and easy to enjoy together.",
    bestFor: "Groups, parties, simulator fans, mixed ability teams",
    cta: "Book SimHunt",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_70%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Playard Activities
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            Pick Your
            <br />
            Battle.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Darts, shuffleboard, pool, VR, curling, table tennis, simulator experiences, food, drinks and unforgettable nights out in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Link
              key={activity.href}
              href={activity.href}
              className="group flex min-h-[560px] flex-col overflow-hidden border-4 border-black bg-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
            >
              <div
                className="mb-6 flex h-64 items-end p-5 text-white"
                style={{
                  background:
                    activity.name === 'Interactive Darts'
                      ? '#d71920'
                      : activity.name === 'Shuffleboard'
                      ? '#f59e0b'
                      : activity.name === 'Pool'
                      ? '#00b86b'
                      : activity.name === 'Indoor Street Curling'
                      ? '#9EEAFF'
                      : activity.name === 'VR Experiences'
                      ? '#7c3cff'
                      : activity.name === 'Table Tennis'
                      ? '#ff2bd6'
                      : '#ff7a00',
                }}
              >
                <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  View Activity
                </span>
              </div>

              <div className="flex flex-1 flex-col">
                <p className="section-label mb-3">{activity.label}</p>
                <h2 className="mb-4 text-4xl font-black tracking-tight">
                  {activity.name}
                </h2>
                <p className="mb-6 text-lg font-bold leading-8 text-zinc-700">
                  {activity.summary}
                </p>

                <div className="mb-8 border-2 border-black bg-[#fff3dd] p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                    Best for
                  </p>
                  <p className="font-bold text-zinc-700">{activity.bestFor}</p>
                </div>

                <span className="mt-auto text-lg font-black uppercase tracking-wide text-[#d71920]">
                  {activity.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Groups, parties and work socials
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Too Many Good Choices?
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Tell us who's coming, how many people are in your group and what sort of experience you're after. We'll help build the perfect Playard session.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/parties"
                className="rounded-md bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Party Options
              </Link>
              <Link
                href="/corporate-events"
                className="rounded-md bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Corporate Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}