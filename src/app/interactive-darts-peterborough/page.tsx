import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

import ActivityStructuredData from "@/components/ActivityStructuredData";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/interactive-darts-peterborough");

const dartGames = [
  {
    name: "X01",
    detail: "301, 501 and 701",
    players: "1 to 6 players",
    difficulty: "Classic",
    rounds: "Fast competitive rounds",
    copy: "Race down to zero, avoid the bust and try not to blame your mate for putting you off.",
  },
  {
    name: "Moon Landing",
    detail: "Beginner friendly",
    players: "1 to 6 players",
    difficulty: "Easy",
    rounds: "Great first game",
    copy: "Start at 200 and land on zero. Easy to understand, hard to resist another go.",
  },
  {
    name: "Cricket",
    detail: "Tactical chaos",
    players: "1 to 6 players",
    difficulty: "Tactical",
    rounds: "Best for rivalries",
    copy: "Close numbers, score points and make the whole group nervous when you hit the right target.",
  },
  {
    name: "Killer",
    detail: "Knockout mode",
    players: "2 to 10 players",
    difficulty: "Social",
    rounds: "Great for groups",
    copy: "Claim your number, become the killer and start taking your friends out of the game.",
  },
  {
    name: "Shanghai",
    detail: "Pressure darts",
    players: "1 to 12 players",
    difficulty: "Party mode",
    rounds: "Big scoring moments",
    copy: "Hit the right number at the right time. Big scoring moments. Bigger reactions.",
  },
  {
    name: "Party Modes",
    detail: "Football, Golf, Radar and more",
    players: "2 to 10 players",
    difficulty: "Mixed",
    rounds: "Ask staff for all modes",
    copy: "Try playful digital modes built for laughs, quick rematches and proper bar energy.",
  },
];

const bestFor = [
  "Date nights",
  "Adult birthdays",
  "Work socials",
  "Team building",
  "Mates nights",
  "Stag and hen groups",
];

const faqs = [
  {
    question: "Do I need to be good at darts?",
    answer:
      "No. Dartsee interactive darts works for beginners, casual players and confident darts players.",
  },
  {
    question: "Is interactive darts good for groups?",
    answer:
      "Yes. It is ideal for friends, birthdays, dates, work socials, team building and private events.",
  },
  {
    question: "Can we order food and drinks while playing?",
    answer:
      "Yes. Playard has food and drinks available so your darts session can become a full night out.",
  },
  {
    question: "Can we book darts for a party or corporate event?",
    answer:
      "Yes. Interactive darts can be included in party bookings, corporate events and team socials.",
  },
];

export default function InteractiveDartsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <ActivityStructuredData name="Interactive Darts" path="/interactive-darts-peterborough" />
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/darts.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,43,214,0.20),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Dartsee interactive darts
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Aim.
              <br />
              Throw.
              <br />
              Brag.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Interactive darts in Peterborough with digital scoring, animated
              game modes, food, drinks and enough rivalry to keep the group chat alive.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href="#book-darts"
                eventName="darts_booking_clicked"
                className="bg-[#00d4ff] px-5 py-4 text-center text-base sm:px-9 sm:py-5 sm:text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[-2deg] hover:scale-[1.03]"
              >
                Book Darts
              </TrackedLink>
              <Link
                href="/activities"
                className="bg-[#d71920] px-5 py-4 text-center text-base sm:px-9 sm:py-5 sm:text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:scale-[1.03]"
              >
                All Games
              </Link>
              <Link
                href="/food-and-drinks"
                className="border-2 border-white px-5 py-4 text-center text-base sm:px-9 sm:py-5 sm:text-lg font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Food & Drinks
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
                Why play darts?
              </p>
              <div className="grid gap-3">
                {[
                  "Automatic scoring",
                  "Digital game modes",
                  "Great for groups",
                  "Food and drinks nearby",
                  "Beginner friendly",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/20 bg-white/10 px-5 py-4 text-2xl font-black uppercase tracking-[-0.04em]"
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
          <span>Digital scoring</span>
          <span>•</span>
          <span>Dartsee</span>
          <span>•</span>
          <span>Food</span>
          <span>•</span>
          <span>Drinks</span>
          <span>•</span>
          <span>Group nights</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Why book darts?
            </p>
            <h2 className="mb-8 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Not just darts. A game show on a board.
            </h2>
            <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
              Dartsee turns darts into a social experience with animated games,
              automatic scoring and formats for beginners, casual players and competitive groups.
            </p>
            <TrackedLink
              href="#book-darts"
              eventName="darts_booking_clicked"
              className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
            >
              Book Interactive Darts
            </TrackedLink>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item, index) => (
              <div
                key={item}
                className={`min-h-[190px] p-7 text-white shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 3 === 0
                    ? "bg-[#d71920]"
                    : index % 3 === 1
                      ? "bg-[#00d4ff] text-black"
                      : "bg-[#ff2bd6]"
                }`}
              >
                <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] opacity-80">
                  Good for
                </p>
                <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.06em]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-5xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
            
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Popular darts modes.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-zinc-300">
              
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dartGames.map((game, index) => (
              <div
                key={game.name}
                className="group overflow-hidden bg-[#111111] text-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <div
                  className={`flex h-48 items-end p-5 ${
                    index % 3 === 0
                      ? "bg-[#d71920]"
                      : index % 3 === 1
                        ? "bg-[#00d4ff] text-black"
                        : "bg-[#ff2bd6]"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.25em]">
                    {game.detail}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                    {game.name}
                  </h3>
                  <p className="mb-6 text-base font-bold leading-7 text-zinc-300">
                    {game.copy}
                  </p>

                  <div className="grid gap-2 border-t border-white/10 pt-5 text-sm font-bold text-zinc-300">
                    <p>{game.players}</p>
                    <p>Difficulty: {game.difficulty}</p>
                    <p>{game.rounds}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-darts" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
                Book interactive darts
              </p>
              <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
                Ready to throw?
              </h2>
              <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
                Tap the button to open the full screen booking form. Choose your date, time and group size, then lock in your Playard darts session.
              </p>
              <Link
                href="/book"
                className="inline-flex bg-black px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
              >
                View All Packages
              </Link>
            </div>

            <div className="flex min-h-[320px] items-center justify-center border-4 border-black bg-[#fff3dd] p-10 text-center shadow-xl sm:p-12">
              <FunbutlerBookingModal
                bookingFormId="674cfe6da4deae77bd1f44bc"
                buttonText="Book Darts Now"
                title="Book Interactive Darts"
                subtitle="Choose your date, time and group size, then lock in your Playard darts session."
                trackEvent="darts_booking_clicked"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Add more
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em]">
              Make it a full Playard night.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <Link
              href="/food-and-drinks"
              className="bg-[#f59e0b] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                Food & Drinks
              </h3>
              <p className="text-lg font-bold leading-8">
                Add burgers, loaded fries, drinks and bar service to your darts session.
              </p>
            </Link>

            <Link
              href="/corporate-events"
              className="bg-[#7c3cff] p-8 text-white shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
            >
              <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                Work Socials
              </h3>
              <p className="text-lg font-bold leading-8 text-white/90">
                Build darts into a team social, work night or private venue hire.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
            FAQs
          </p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            Darts questions.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-4 border-black bg-white p-7">
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}