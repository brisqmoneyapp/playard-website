import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games Lounge in Peterborough | Playard",
  description:
    "Enjoy the Playard Games Lounge in Peterborough. Board games, card games, cornhole, table football, party games, food, drinks and social gaming under one roof.",
};

const reasonsText =
  "FREE SOCIAL GAMES • FOOD • DRINKS • GROUPS • FAMILIES • DATE NIGHTS";

const gameTypes = [
  "Board Games",
  "Card Games",
  "Cornhole",
  "Table Football",
  "Party Games",
  "Social Gaming",
];

const perfectFor = [
  "Friends Nights Out",
  "Families",
  "First Dates",
  "Birthday Parties",
  "Work Socials",
  "Waiting For Your Next Activity",
];

const faqs = [
  {
    question: "Do I need to bring my own games?",
    answer:
      "No. Playard provides a selection of board games, card games, cornhole and table football for guests to enjoy.",
  },
  {
    question: "Are board games suitable for families?",
    answer:
      "Yes. Board games are one of the most family friendly activities available at Playard.",
  },
  {
    question: "Can adults book board games for a night out?",
    answer:
      "Absolutely. Board games are perfect for relaxed evenings with friends, drinks and food.",
  },
  {
    question: "Do I need to pay separately for cornhole or table football?",
    answer:
      "No. Cornhole and table football are part of the Games Lounge experience and can be enjoyed alongside a food or drink purchase.",
  },
  {
    question: "Can board games be combined with other activities?",
    answer:
      "Yes. Many guests enjoy the Games Lounge before or after darts, pool, shuffleboard, curling, VR and other Playard activities.",
  },
];

const cardColors = ["#ff2bd6", "#00d4ff", "#f59e0b", "#00b86b"];

export default function BoardGamesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - text */}
          <div className="space-y-8">
            <h1 className="font-extrabold uppercase text-[5rem] leading-[1.05] tracking-tight bg-gradient-to-r from-[#ff2bd6] via-[#00d4ff] via-[#f59e0b] to-[#00b86b] bg-clip-text text-transparent">
              NO RULES.<br />JUST GAMES.
            </h1>
            <p className="text-xl md:text-2xl max-w-xl text-white/90 font-semibold">
              Board games, card games, cornhole, table football, food, drinks and good times. The Games Lounge is where people stay longer than they planned.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="#visit-games-lounge"
                className="rounded-md bg-gradient-to-r from-[#ff2bd6] via-[#00d4ff] to-[#f59e0b] px-8 py-4 font-extrabold uppercase tracking-wide text-black shadow-lg hover:brightness-110 transition"
              >
                Visit Games Lounge
              </Link>
              <Link
                href="/food-and-drinks"
                className="rounded-md bg-gradient-to-r from-[#00b86b] via-[#f59e0b] to-[#ff2bd6] px-8 py-4 font-extrabold uppercase tracking-wide text-black shadow-lg hover:brightness-110 transition"
              >
                Food & Drinks
              </Link>
              <Link
                href="/activities"
                className="rounded-md border-4 border-white px-8 py-4 font-extrabold uppercase tracking-wide text-white hover:bg-white hover:text-black transition"
              >
                All Activities
              </Link>
            </div>
          </div>
          {/* Right side - tilted panel */}
          <div className="relative">
            <div
              className="rotate-6 rounded-3xl border-8 border-[#ff2bd6] bg-gradient-to-tr from-[#ff2bd6] via-[#00d4ff] via-[#f59e0b] to-[#00b86b] p-12 shadow-2xl text-white font-extrabold uppercase text-3xl md:text-4xl grid gap-6"
              style={{ transformOrigin: "center" }}
            >
              <div className="border-b-4 border-white pb-3">Board Games</div>
              <div className="border-b-4 border-white pb-3">Card Games</div>
              <div className="border-b-4 border-white pb-3">Cornhole</div>
              <div className="border-b-4 border-white pb-3">Table Football</div>
              <div>Social Gaming</div>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS - multicolour strip */}
      <section className="bg-gradient-to-r from-[#ff2bd6] via-[#00d4ff] via-[#f59e0b] to-[#00b86b] py-4">
        <div className="mx-auto max-w-7xl px-6 text-center font-extrabold uppercase text-white tracking-widest text-lg md:text-xl select-none">
          {reasonsText}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-tight text-center">
            PICK A GAME.<br />START AN ARGUMENT.
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {gameTypes.map((type, i) => (
              <div
                key={type}
                className="rounded-3xl p-10 text-white font-extrabold uppercase text-3xl text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-1deg]"
                style={{ backgroundColor: cardColors[i % cardColors.length] }}
              >
                <div>
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR... */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-tight text-center text-black">
            PERFECT FOR...
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {perfectFor.map((item, i) => (
              <div
                key={item}
                className="rounded-3xl p-8 font-extrabold uppercase text-2xl text-center cursor-pointer text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-1deg]"
                style={{ backgroundColor: cardColors[i % cardColors.length] }}
              >
                <div>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section
        id="visit-games-lounge"
        className="border-4 border-black bg-white shadow-2xl mx-6 my-24 rounded-3xl p-12 max-w-7xl mx-auto"
      >
        <h2 className="mb-8 text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-tight text-center text-black leading-tight">
          DROP IN.<br />GRAB A DRINK.<br />PLAY.
        </h2>
        <p className="mb-12 max-w-3xl mx-auto text-center text-lg font-semibold text-zinc-900">
          The Games Lounge is your vibrant social hub for board games, card games, cornhole, table football, and more. Enjoy alongside delicious food, refreshing drinks, and great company.
        </p>
        <div className="rounded-3xl bg-gradient-to-tr from-[#ff2bd6] via-[#00d4ff] via-[#f59e0b] to-[#00b86b] p-20 text-center font-extrabold uppercase text-4xl text-white shadow-lg select-none">
          Games Lounge Photos & Video Area
        </div>
      </section>

      {/* MAKE IT A FULL PLAYARD NIGHT */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-12 text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-tight text-white">
            MAKE IT A FULL PLAYARD NIGHT.
          </h2>
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <Link
              href="/interactive-darts-peterborough"
              className="rounded-3xl bg-red-600 px-12 py-20 text-white font-extrabold uppercase text-4xl shadow-lg hover:scale-105 transition-transform"
            >
              Interactive Darts
            </Link>
            <Link
              href="/food-and-drinks"
              className="rounded-3xl bg-amber-400 px-12 py-20 text-black font-extrabold uppercase text-4xl shadow-lg hover:scale-105 transition-transform"
            >
              Food & Drinks
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-tight text-center text-black">
            GAMES LOUNGE QUESTIONS.
          </h2>
          <div className="grid gap-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border-4 border-black bg-white p-8"
              >
                <h3 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-black">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}