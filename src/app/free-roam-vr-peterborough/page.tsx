import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Free Roam VR in Peterborough | Playard",
  description:
    "Play Free Roam VR at Playard Peterborough. Walk, move, battle and play together in shared multiplayer VR worlds for 2 to 4 players.",
};

const games = [
  {
    name: "Arrowsong",
    type: "Fantasy Action",
    players: "2 to 4 players",
    difficulty: "Medium",
    description:
      "Draw your bow, explore enchanted landscapes and take on cooperative archery challenges together.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Cook'd Up",
    type: "Party Cooking",
    players: "2 to 4 players",
    difficulty: "Easy",
    description:
      "Run a chaotic virtual kitchen, serve orders under pressure and laugh through cooperative cooking madness.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Cops Vs Robbers",
    type: "Team Chase",
    players: "2 to 4 players",
    difficulty: "Medium",
    description:
      "Split into teams, chase through city streets and outsmart each other in fast multiplayer pursuit gameplay.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Cybershock",
    type: "Sci-Fi Combat",
    players: "2 to 4 players",
    difficulty: "Hard",
    description:
      "Fight through neon cyber worlds with reactive combat, movement and high intensity team battles.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Dead Ahead",
    type: "Zombie Survival",
    players: "2 to 4 players",
    difficulty: "Medium",
    description:
      "Move together through infected zones, hold your ground and survive wave after wave of undead pressure.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Plush Rush",
    type: "Family Adventure",
    players: "2 to 4 players",
    difficulty: "Easy",
    description:
      "A colourful plush world built for younger groups, light challenges and playful cooperative exploration.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Quantum Arena",
    type: "Competitive Arena",
    players: "2 to 4 players",
    difficulty: "Hard",
    description:
      "Enter a fast arena, dodge incoming fire and compete head to head for bragging rights and high scores.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
];

const bookingModalProps = {
  bookingFormId: "6a3727d61406c5a5f774ebd0",
  buttonText: "Book Free Roam VR",
  title: "Book Free Roam VR",
  subtitle:
    "Choose your date, time and group size, then lock in your Playard Free Roam VR session.",
  trackEvent: "free_roam_booking_clicked" as const,
};

export default function FreeRoamVRPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,60,255,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,43,214,0.22),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#7c3cff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Free Roam VR Peterborough
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-[7rem] lg:text-[9rem]">
              Walk.
              <br />
              Move.
              <br />
              Battle.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Free Roam VR lets 2 to 4 players move around together inside a shared virtual world. Explore, cooperate, compete and react in real time without being stuck in one spot.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <FunbutlerBookingModal
                {...bookingModalProps}
                className="bg-[#7c3cff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
              />
              <Link
                href="/vr-peterborough"
                className="border-4 border-[#00d4ff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-[#00d4ff] transition hover:bg-[#00d4ff] hover:text-black hover:rotate-[2deg] hover:scale-[1.03]"
              >
                Back To VR
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div
              className="rotate-[3deg] border-4 border-[#7c3cff] bg-black/80 p-8 shadow-2xl backdrop-blur"
              style={{ boxShadow: "0 0 30px rgba(124, 60, 255, 0.45)" }}
            >
              <h2 className="mb-6 text-center text-2xl font-black uppercase tracking-[0.18em] text-[#ff2bd6]">
                Free Roam VR
              </h2>
              <div className="grid gap-3">
                {[
                  "Walk freely",
                  "Shared worlds",
                  "2 to 4 players",
                  "Team battles",
                  "Real movement",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/20 bg-white/10 px-5 py-4 text-xl font-black uppercase tracking-[-0.04em]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#00d4ff] py-5 text-black">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>2 to 4 Players</span>
          <span>•</span>
          <span>Free Movement</span>
          <span>•</span>
          <span>Team Games</span>
          <span>•</span>
          <span>Shared Worlds</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Free Roam VR Games
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-7xl">
              Choose Your World.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Pick from action, family friendly adventures, cooking chaos, zombie survival and competitive arena games. Our team will help you choose the best experience for your group.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game) => (
              <div
                key={game.name}
                className={`group overflow-hidden border-4 border-black bg-gradient-to-br ${game.colour} shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]`}
                style={{ boxShadow: `0 0 24px ${game.accent}33` }}
              >
                <div className="border-b-4 border-black bg-black/40 p-5 backdrop-blur-sm">
                  <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.05em] sm:text-3xl">
                    {game.name}
                  </h3>
                </div>

                <div className="space-y-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#7c3cff] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {game.type}
                    </span>
                    <span className="bg-[#00d4ff] px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
                      {game.players}
                    </span>
                    <span className="bg-[#ff2bd6] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {game.difficulty}
                    </span>
                  </div>
                  <p className="text-sm font-bold leading-6 text-zinc-200 sm:text-base sm:leading-7">
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-free-roam-vr" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7c3cff]">
                Book Free Roam VR
              </p>
              <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">
                Ready To Step In?
              </h2>
              <p className="mb-8 text-lg font-bold leading-8 text-zinc-700">
                Book your Free Roam VR session and get ready to walk, move and play inside a shared virtual world.
              </p>
              <Link
                href="/vr-peterborough"
                className="inline-flex border-4 border-black px-8 py-4 font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                View Main VR Page
              </Link>
            </div>

            <div className="flex min-h-[320px] items-center justify-center border-4 border-black bg-[#fff3dd] p-10 text-center shadow-xl sm:p-12">
              <FunbutlerBookingModal
                {...bookingModalProps}
                className="w-full bg-[#7c3cff] px-8 py-5 text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
