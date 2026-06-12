import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Activities in Peterborough | Playard",
  description:
    "Book VR, darts, shuffleboard, pool, street curling, table tennis and more at Playard Peterborough.",
};

const activities = [
  {
    title: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    description: "Social darts powered by Dartsee.",
  },
  {
    title: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    description: "Competitive social gaming with friends.",
  },
  {
    title: "Pool",
    href: "/pool-peterborough",
    description: "Classic pool tables in the city centre.",
  },
  {
    title: "Street Curling",
    href: "/street-curling-peterborough",
    description: "Curling fun without the ice.",
  },
  {
    title: "VR Experiences",
    href: "/vr-peterborough",
    description: "Immersive virtual reality adventures.",
  },
  {
    title: "SimShooting",
    href: "/simhunt-peterborough",
    description: "Big screen simulator experiences.",
  },
  {
    title: "Table Tennis",
    href: "/table-tennis-peterborough",
    description: "Fast paced rallies and friendly competition.",
  },
  {
    title: "Games Lounge",
    href: "/games-lounge-peterborough",
    description: "Board games, cornhole and table football.",
  },
];

export default function BookPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Book Playard
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            PICK.
            <br />
            YOUR.
            <br />
            BATTLE.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Darts, VR, shuffleboard, pool, curling, simulator experiences, table tennis, food, drinks and unforgettable nights out in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="flex min-h-[320px] flex-col border-4 border-black bg-white p-7 shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <div
                  className="mb-5 h-20 w-full"
                  style={{
                    background:
                      activity.title === 'Interactive Darts'
                        ? '#d71920'
                        : activity.title === 'Shuffleboard'
                        ? '#f59e0b'
                        : activity.title === 'Pool'
                        ? '#00b86b'
                        : activity.title === 'Street Curling'
                        ? '#9EEAFF'
                        : activity.title === 'VR Experiences'
                        ? '#7c3cff'
                        : activity.title === 'Table Tennis'
                        ? '#ff2bd6'
                        : '#ff7a00',
                  }}
                />
                <h2 className="mb-4 text-3xl font-black tracking-tight">
                  {activity.title}
                </h2>
                <p className="mb-8 font-bold leading-8 text-zinc-700">
                  {activity.description}
                </p>
                <span className="mt-auto text-lg font-black uppercase tracking-wide text-[#d71920]">
                  Book Activity
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
            Online booking
          </p>
          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            READY TO PLAY?
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-8 text-zinc-700 font-bold">
            Choose your activity, select a time and lock in your Playard experience. The booking system below will allow guests to reserve activities online in minutes.
          </p>

          <div className="flex min-h-[500px] items-center justify-center border-4 border-white bg-[#d71920] text-center text-white">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-500">
                ONLINE BOOKING
              </p>
              <p className="text-4xl font-black">
                PASTE FUNBUTLER BOOKING WIDGET HERE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          <Link href="/birthday-parties-peterborough" className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]">
            <h3 className="mb-4 text-3xl font-black">Birthday Parties 🎉</h3>
            <p className="font-bold text-zinc-700">Planning a celebration? Explore party packages.</p>
          </Link>

          <Link href="/corporate-events" className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]">
            <h3 className="mb-4 text-3xl font-black">Corporate Events 🏆</h3>
            <p className="font-bold text-zinc-700">Team building, work socials and venue hire.</p>
          </Link>

          <Link href="/activities" className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]">
            <h3 className="mb-4 text-3xl font-black">All Activities 🎯</h3>
            <p className="font-bold text-zinc-700">Browse everything available at Playard.</p>
          </Link>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            ONE VENUE.
            <br />
            ENDLESS COMPETITION.
          </h2>

          <p className="mx-auto max-w-4xl text-xl font-bold leading-9 text-zinc-300">
            Whether you're planning a date night, birthday, family day out, work social or spontaneous night with friends, Playard brings together multiple activities under one roof.
          </p>
        </div>
      </section>
    </main>
  );
}