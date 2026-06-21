import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "VR Escape Rooms in Peterborough | Playard",
  description:
    "Play VR escape rooms at Playard Peterborough. Work together, solve puzzles and complete immersive missions with your group.",
};

const accentColors = ["#7c3cff", "#00d4ff", "#ff2bd6", "#ff7a00"] as const;

const escapeRooms = [
  {
    name: "Alice in Wonderland",
    type: "Fantasy Adventure",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Follow the rabbit, decode Wonderland logic and escape before the Queen catches your team.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Chernobyl",
    type: "Survival Horror",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Navigate a radioactive zone, restore power systems and escape before the facility locks down.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "Christmas Story",
    type: "Seasonal Family",
    players: "2 to 6 players",
    difficulty: "Easy",
    copy: "Solve festive puzzles, recover lost holiday magic and save Christmas before the clock strikes midnight.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#d71920] to-black",
    accent: "#d71920",
  },
  {
    name: "Cyberpunk",
    type: "Sci-Fi Heist",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Hack neon city systems, bypass security and extract the data before corporate agents close in.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Dream Hackers",
    type: "Mind Puzzle",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Enter layered dream worlds, decode hidden signals and break out before your minds get trapped.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Dream Hackers II",
    type: "Mind Puzzle",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Return to the dream network with tougher puzzles, deeper layers and a tighter escape window.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Escape the Worlds",
    type: "Multi-World",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Jump between shifting environments, connect clues across worlds and find the exit route home.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "House of Fear",
    type: "Horror Escape",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Explore a haunted house, uncover dark secrets and escape before fear slows your team down.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "House of Fear 2",
    type: "Horror Escape",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Return to the nightmare with new rooms, scarier puzzles and less time to make it out alive.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "House of Fear 3",
    type: "Horror Escape",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Face the final chapter of the haunted house saga with the toughest clues and highest pressure yet.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Jungle Quest",
    type: "Adventure",
    players: "2 to 6 players",
    difficulty: "Easy",
    copy: "Search ancient ruins, solve tribal riddles and escape the jungle temple before traps activate.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Mission Sigma",
    type: "Military Ops",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Complete a classified operation, disable threats and extract your squad from a hostile compound.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "Prison",
    type: "Breakout",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Plan the breakout, steal keys, avoid guards and get your whole team out of the cell block.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Sanctum",
    type: "Mystery",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Investigate a hidden sanctuary, unlock sacred mechanisms and escape with the relic intact.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Signal Lost",
    type: "Sci-Fi Survival",
    players: "2 to 6 players",
    difficulty: "Medium",
    copy: "Restore communications on a stranded station, repair systems and escape before oxygen runs out.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Survival",
    type: "Post-Apocalyptic",
    players: "2 to 6 players",
    difficulty: "Hard",
    copy: "Scavenge supplies, solve survival puzzles and reach the safe zone before the zone collapses.",
    record: { team: "Record Not Set", time: "Be The First", date: "Coming Soon" },
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
];

const bookingModalProps = {
  bookingFormId: "6a37281a1406c5a5f774ec7e",
  buttonText: "Book VR Escape Room",
  title: "Book VR Escape Room",
  subtitle:
    "Choose your date, time and group size, then lock in your Playard VR escape room session.",
};

export default function VREscapeRoomsPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,60,255,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,43,214,0.22),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#7c3cff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              VR Escape Rooms Peterborough
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-[7rem] lg:text-[9rem]">
              Solve.
              <br />
              Escape.
              <br />
              Brag.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Step inside immersive VR escape rooms where your group works together to solve puzzles, uncover clues and complete missions before time runs out.
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
              className="rotate-[3deg] border-4 border-[#ff2bd6] bg-black/80 p-8 shadow-2xl backdrop-blur"
              style={{ boxShadow: "0 0 30px rgba(255, 43, 214, 0.45)" }}
            >
              <h2 className="mb-6 text-center text-2xl font-black uppercase tracking-[0.18em] text-[#00d4ff]">
                VR Escape Rooms
              </h2>
              <div className="grid gap-3">
                {[
                  "Team puzzles",
                  "Immersive worlds",
                  "2 to 6 players",
                  "Beat the record",
                  "Group missions",
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

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#ff2bd6] py-5 text-black">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Team Puzzles</span>
          <span>•</span>
          <span>Escape Challenges</span>
          <span>•</span>
          <span>Immersive Worlds</span>
          <span>•</span>
          <span>Beat The Record</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Escape Room Leaderboards
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-7xl">
              Beat The Room Record.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Every VR escape room has a fastest team. Finish quicker, take the top spot and claim bragging rights.
            </p>
          </div>

          <div className="mb-12 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              VR Escape Rooms
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-white md:text-7xl">
              Choose Your Escape Room.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Pick your mission, gather your team and see if you can beat the current room record.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {escapeRooms.map((room, index) => (
              <div
                key={room.name}
                className={`group overflow-hidden border-4 border-black bg-gradient-to-br ${room.colour} shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]`}
                style={{ boxShadow: `0 0 24px ${room.accent}33` }}
              >
                <div className="border-b-4 border-black bg-black/40 p-5 backdrop-blur-sm">
                  <h3 className="text-xl font-black uppercase leading-none tracking-[-0.05em] sm:text-2xl">
                    {room.name}
                  </h3>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#7c3cff] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {room.type}
                    </span>
                    <span className="bg-[#ff2bd6] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {room.difficulty}
                    </span>
                    <span className="bg-[#00d4ff] px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
                      {room.players}
                    </span>
                  </div>

                  <p className="text-sm font-bold leading-6 text-zinc-200 sm:text-base sm:leading-7">
                    {room.copy}
                  </p>

                  <div
                    className="border-4 border-black bg-black/60 p-4"
                    style={{
                      boxShadow: `0 0 16px ${accentColors[index % accentColors.length]}33`,
                    }}
                  >
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#ff7a00]">
                      Fastest Escape
                    </p>
                    <p className="text-sm font-bold leading-6 text-zinc-200">
                      Team: {room.record.team}
                    </p>
                    <p className="text-sm font-bold leading-6 text-zinc-200">
                      Time: {room.record.time}
                    </p>
                    <p className="text-sm font-bold leading-6 text-zinc-200">
                      Set: {room.record.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-vr-escape-room" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7c3cff]">
                Book VR Escape Room
              </p>
              <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">
                Ready To Escape?
              </h2>
              <p className="mb-8 text-lg font-bold leading-8 text-zinc-700">
                Book your VR escape room session and see if your team can take the top spot on the leaderboard.
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
