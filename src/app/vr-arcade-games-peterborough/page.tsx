import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "VR Arcade Games in Peterborough | Playard",
  description:
    "Play VR arcade games at Playard Peterborough, including sports, shooters, rhythm games, puzzles, family games and multiplayer VR experiences.",
};

const accentColors = ["#7c3cff", "#00d4ff", "#ff2bd6", "#ff7a00"] as const;

const featuredGames = [
  {
    name: "All In One Sports VR",
    age: "7+",
    players: "1 to 8 players",
    type: "Sports",
    difficulty: "Easy",
    description:
      "Pick up and play baseball, tennis, golf, bowling and more in one fast VR sports collection.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Angry Birds VR: Isle of Pigs",
    age: "7+",
    players: "1 to 4 players",
    type: "Family Puzzle",
    difficulty: "Easy",
    description:
      "Launch birds, smash structures and solve playful physics puzzles across colourful island levels.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Arizona Sunshine 2",
    age: "13+",
    players: "1 to 4 players",
    type: "Zombie Shooter",
    difficulty: "Medium",
    description:
      "Fight through the apocalypse with co-op missions, intense gunplay and survival-focused action.",
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "Blaston",
    age: "7+",
    players: "1 to 2 players",
    type: "Competitive",
    difficulty: "Medium",
    description:
      "Dodge, aim and outmanoeuvre opponents in a futuristic duel built on movement and reactions.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Clash of Chefs VR",
    age: "7+",
    players: "1 to 4 players",
    type: "Party Cooking",
    difficulty: "Easy",
    description:
      "Race against the clock in chaotic kitchens and compete to serve the fastest orders.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Cowbots and Aliens",
    age: "10+",
    players: "2 to 10 players",
    type: "Multiplayer Shooter",
    difficulty: "Medium",
    description:
      "Team up or go solo in wild western sci-fi shootouts with fast arcade-style battles.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "Crisis Brigade 2 Reloaded",
    age: "13+",
    players: "1 to 4 players",
    type: "Tactical Shooter",
    difficulty: "Hard",
    description:
      "Clear rooms, reload under pressure and push through intense mission-based combat scenarios.",
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "Elven Assassin",
    age: "7+",
    players: "1 to 4 players",
    type: "Archery Defense",
    difficulty: "Medium",
    description:
      "Defend your tower with bows, magic and precision shots against waves of incoming enemies.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Fruit Ninja VR",
    age: "7+",
    players: "1 to 2 players",
    type: "Arcade",
    difficulty: "Easy",
    description:
      "Slice fruit, dodge bombs and chase high scores in one of the most instantly fun VR arcade games.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Hyper Dash",
    age: "7+",
    players: "1 to 8 players",
    type: "Racing",
    difficulty: "Medium",
    description:
      "Sprint, jump and boost through neon tracks in a high speed competitive movement racer.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "I Expect You To Die",
    age: "10+",
    players: "1 player",
    type: "Puzzle",
    difficulty: "Medium",
    description:
      "Think like a spy, solve escape room style puzzles and survive deadly secret agent scenarios.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Pistol Whip",
    age: "13+",
    players: "1 player",
    type: "Rhythm Shooter",
    difficulty: "Medium",
    description:
      "Dodge bullets, shoot on beat and flow through stylish action set to pulsing music tracks.",
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
  {
    name: "Ragnarock",
    age: "7+",
    players: "1 player",
    type: "Rhythm",
    difficulty: "Medium",
    description:
      "Drum to epic Viking metal tracks, hit the rhythm and chase leaderboard scores with power.",
    colour: "from-[#7c3cff] to-black",
    accent: "#7c3cff",
  },
  {
    name: "SUPERHOT VR",
    age: "13+",
    players: "1 player",
    type: "Action Puzzle",
    difficulty: "Hard",
    description:
      "Time moves only when you move. Plan every punch, grab and dodge in cinematic slow-motion combat.",
    colour: "from-[#ff2bd6] to-black",
    accent: "#ff2bd6",
  },
  {
    name: "Walkabout Mini Golf",
    age: "7+",
    players: "1 to 4 players",
    type: "Sports",
    difficulty: "Easy",
    description:
      "Explore beautiful mini golf courses around the world with relaxed gameplay for all ages.",
    colour: "from-[#00d4ff] to-black",
    accent: "#00d4ff",
  },
  {
    name: "Zombie Training Simulator",
    age: "13+",
    players: "1 to 4 players",
    type: "Shooter Training",
    difficulty: "Medium",
    description:
      "Train your aim, reload quickly and survive escalating zombie waves in arcade shooting drills.",
    colour: "from-[#ff7a00] to-black",
    accent: "#ff7a00",
  },
];

const moreGames = [
  "A Fisherman's Tale",
  "After The Fall",
  "ARK and ADE",
  "BAAM Squad",
  "Battle Bows",
  "Blade and Sorcery",
  "Cook Out: A Sandwich Tale",
  "Creed: Rise to Glory",
  "Dick Wilde 2",
  "Epic Roller Coasters",
  "Evasion",
  "Google Earth VR",
  "Guns'n'Stories",
  "Kayak VR: Mirage",
  "Maestro",
  "Private Property",
  "Racket: Nx",
  "Raw Data Arcade",
  "Rhythmatic 2",
  "Shooty Fruity Arcade",
  "Snow Fortress 2",
  "Space Pirate Trainer",
  "Synth Riders",
  "The Brookhaven Experiment",
  "theBlu",
  "Tower Tag",
  "Until You Fall",
  "Westworld Awakening",
];

const bookingModalProps = {
  bookingFormId: "VR_ARCADE_BOOKING_ID_HERE",
  buttonText: "Book VR Arcade",
  title: "Book VR Arcade",
  subtitle:
    "Choose your date, time and group size, then lock in your Playard VR arcade session.",
};

export default function VRArcadeGamesPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,60,255,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,122,0,0.22),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#7c3cff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              VR Arcade Games Peterborough
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-[7rem] lg:text-[9rem]">
              Play.
              <br />
              Shoot.
              <br />
              React.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Jump into a huge library of VR arcade games, from family friendly favourites and rhythm games to zombie shooters, sports challenges, puzzle adventures and multiplayer battles.
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
              className="rotate-[3deg] border-4 border-[#ff7a00] bg-black/80 p-8 shadow-2xl backdrop-blur"
              style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.45)" }}
            >
              <h2 className="mb-6 text-center text-2xl font-black uppercase tracking-[0.18em] text-[#ff2bd6]">
                VR Arcade
              </h2>
              <div className="grid gap-3">
                {[
                  "Sports",
                  "Shooters",
                  "Rhythm games",
                  "Family titles",
                  "Multiplayer VR",
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

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#ff7a00] py-5 text-black">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Family Games</span>
          <span>•</span>
          <span>Shooters</span>
          <span>•</span>
          <span>Sports</span>
          <span>•</span>
          <span>Rhythm Games</span>
          <span>•</span>
          <span>Multiplayer VR</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Featured VR Arcade Games
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-7xl">
              Featured VR Arcade Games.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Start with our most popular VR arcade titles. Our team can help you choose the best games for your age group, confidence level and session length.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredGames.map((game) => (
              <div
                key={game.name}
                className={`group overflow-hidden border-4 border-black bg-gradient-to-br ${game.colour} shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]`}
                style={{ boxShadow: `0 0 24px ${game.accent}33` }}
              >
                <div className="border-b-4 border-black bg-black/40 p-5 backdrop-blur-sm">
                  <h3 className="text-xl font-black uppercase leading-none tracking-[-0.05em] sm:text-2xl">
                    {game.name}
                  </h3>
                </div>

                <div className="space-y-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-black/50 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {game.age}
                    </span>
                    <span className="bg-[#00d4ff] px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
                      {game.players}
                    </span>
                    <span className="bg-[#7c3cff] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                      {game.type}
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

      <section className="border-t-4 border-black bg-[#111111] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              Additional Games
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-white md:text-7xl">
              More VR Games Available.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-400 sm:text-xl sm:leading-9">
              Our VR arcade library includes many more experiences. Availability may vary by headset and session type.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {moreGames.map((game, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <div
                  key={game}
                  className="border-4 border-black px-4 py-4 text-center shadow-xl transition hover:-translate-y-1 hover:rotate-[-1deg]"
                  style={{
                    backgroundColor: accent,
                    color: accent === "#00d4ff" ? "#000000" : "#ffffff",
                    boxShadow: `0 0 18px ${accent}44`,
                  }}
                >
                  <p className="text-sm font-black uppercase leading-snug tracking-[-0.03em] sm:text-base">
                    {game}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="book-vr-arcade" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7c3cff]">
                Book VR Arcade
              </p>
              <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">
                Ready To Play?
              </h2>
              <p className="mb-8 text-lg font-bold leading-8 text-zinc-700">
                Book your VR Arcade session and choose from sports, shooters, rhythm games, puzzles and multiplayer experiences when you arrive.
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
