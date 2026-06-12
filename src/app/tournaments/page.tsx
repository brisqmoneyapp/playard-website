import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tournaments | Playard Peterborough",
  description:
    "Join competitive tournaments at Playard Peterborough including darts, pool, VR, table tennis, shuffleboard and special gaming events.",
};

const tournaments = [
  {
    title: "Interactive Darts Leagues",
    description:
      "Weekly and monthly competitions using our Dartsee interactive darts system.",
  },
  {
    title: "Pool Tournaments",
    description:
      "Singles and doubles competitions for casual and experienced players.",
  },
  {
    title: "Table Tennis Championships",
    description:
      "Fast paced knockout competitions and league events.",
  },
  {
    title: "VR Competitions",
    description:
      "Compete against friends and other players in immersive virtual reality challenges.",
  },
  {
    title: "Shuffleboard Events",
    description:
      "Friendly competitions and seasonal tournaments.",
  },
  {
    title: "Special Events",
    description:
      "One off themed competitions, charity events and major tournament nights.",
  },
];

export default function TournamentsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.42),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.28),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Coming Soon
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            TOURNAMENTS.
            <br />
            LEAGUES.
            <br />
            RANKINGS.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Competitive gaming is coming to Playard. Join future darts leagues, pool tournaments, VR competitions, table tennis championships, shuffleboard events and venue wide leaderboards.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#d71920] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {['Live Rankings','Season Leagues','Knockout Events','Prizes & Rewards'].map((item) => (
            <div key={item} className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="section-label mb-5">Upcoming Competitions</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              What's Coming To Playard.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tournaments.map((tournament) => (
              <div
                key={tournament.title}
                className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {tournament.title}
                </h3>
                <p className="font-bold leading-8 text-zinc-700">{tournament.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
            Live Tournament System
          </p>

          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            COMING SOON.
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-zinc-700">
            Playard is developing a dedicated tournament and leaderboard platform that will support live brackets, rankings, league tables, player profiles, season standings, achievements and venue wide competitions.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@playard.co.uk?subject=Tournament Enquiry"
              className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              Join The Waitlist
            </a>

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
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            EXPECT.
            <br />
            COMPETITION.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#d71920] p-8 text-white"><h3 className="text-3xl font-black uppercase">Darts</h3></div>
            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Pool</h3></div>
            <div className="border-4 border-black bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Shuffleboard</h3></div>
            <div className="border-4 border-black bg-[#7c3cff] p-8 text-white"><h3 className="text-3xl font-black uppercase">VR</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}