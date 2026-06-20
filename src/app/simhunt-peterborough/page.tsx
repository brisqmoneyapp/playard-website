import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "SimShooting in Peterborough | Playard",
  description:
    "Book SimWay SimShooting at Playard Peterborough. A big screen simulator experience for groups, parties, work socials and competitive nights out.",
};

const bestFor = [
  "Friends night out",
  "Corporate socials",
  "Adult birthdays",
  "Team building",
  "Competitive groups",
  "Something different",
];

const experienceModes = [
  {
    title: "Target Practice",
    copy: "Simple aiming challenges that are easy to understand and good for first time players.",
  },
  {
    title: "Arcade Challenges",
    copy: "Big screen competitive games designed for fun, scores and group energy.",
  },
  {
    title: "Moving Targets",
    copy: "Fast reactions, changing targets and plenty of pressure when the group is watching.",
  },
  {
    title: "Head To Head",
    copy: "Compete with friends, colleagues or family and see who handles the pressure best.",
  },
  {
    title: "Party Add On",
    copy: "Add SimShooting to birthdays, private events or multi activity Playard packages.",
  },
  {
    title: "Work Social Mode",
    copy: "A different team activity for groups who want something beyond the usual meal out.",
  },
];

const faqs = [
  {
    question: "What is SimShooting?",
    answer:
      "SimShooting is a big screen simulator experience designed as a controlled indoor activity for groups, parties and competitive social sessions.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. The simulator format makes it easy for beginners to get involved while still giving competitive players a proper challenge.",
  },
  {
    question: "Is it a real firearm activity?",
    answer:
      "No. At Playard this is an indoor simulator experience for entertainment, using simulator equipment rather than live firing.",
  },
  {
    question: "Can SimShooting be added to a corporate event?",
    answer:
      "Yes. It works well as part of team building, work socials, private hire and multi activity packages.",
  },
];

export default function SimHuntPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/simhunt.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,122,0,0.48),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.26),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(0,212,255,0.16),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff7a00] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              SimWay SimShooting
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Aim.
              <br />
              React.
              <br />
              Compete.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              A big screen simulator experience for groups who want something different: target challenges, scores, reactions and competitive Playard energy.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#book-simhunt"
                className="bg-[#ff7a00] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
              >
                Book SimShooting
              </Link>
              <Link
                href="/activities"
                className="bg-[#00d4ff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[2deg] hover:scale-[1.03]"
              >
                All Games
              </Link>
              <Link
                href="/food-and-drinks"
                className="border-2 border-white px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Food & Drinks
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
                Why play SimShooting?
              </p>
              <div className="grid gap-3">
                {[
                  "Big screen simulator",
                  "Competitive group play",
                  "Great for parties",
                  "Different night out",
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

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#ff7a00] py-5 text-white">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Big Screen</span><span>•</span><span>Simulator</span><span>•</span><span>Targets</span><span>•</span><span>Groups</span><span>•</span><span>Scores</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              Why book SimShooting?
            </p>
            <h2 className="mb-8 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              A big screen experience with real competitive energy.
            </h2>
            <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
              SimShooting is a controlled indoor simulator activity for groups who want something different from darts, pool or shuffleboard.
            </p>
            <Link
              href="#book-simhunt"
              className="inline-flex bg-[#ff7a00] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
            >
              Book SimShooting
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item, index) => (
              <div
                key={item}
                className={`min-h-[190px] p-7 text-white shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 3 === 0
                    ? "bg-[#ff7a00]"
                    : index % 3 === 1
                      ? "bg-[#f59e0b] text-black"
                      : "bg-[#00d4ff] text-black"
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
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              Simulator experience
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Aim, compete and chase the high score.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceModes.map((mode, index) => (
              <div
                key={mode.title}
                className="group overflow-hidden bg-[#111111] text-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <div
                  className={`flex h-48 items-end p-5 ${
                    index % 3 === 0
                      ? "bg-[#ff7a00]"
                      : index % 3 === 1
                        ? "bg-[#f59e0b] text-black"
                        : "bg-[#00d4ff] text-black"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.25em]">
                    Simulator mode
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                    {mode.title}
                  </h3>
                  <p className="text-base font-bold leading-7 text-zinc-300">
                    {mode.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              How it works
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em]">
              Book. Aim. Compete.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
            {[
              {
                title: "Choose your slot",
                copy: "Reserve your SimShooting session for your group.",
              },
              {
                title: "Get set up",
                copy: "Our team explains the simulator controls and how the activity works.",
              },
              {
                title: "Chase the score",
                copy: "Compete across targets, challenges and group friendly simulator modes.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2"
              >
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-simhunt" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#ff7a00]">
                Book SimShooting
              </p>
              <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
                Ready to aim?
              </h2>
              <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
                Book your SimShooting session directly below. Choose your preferred date, time and group size, then lock in your Playard simulator experience.
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
                bookingFormId="69ec0033288ba631d5ed0106"
                buttonText="Book SimShooting Now"
                title="Book SimShooting"
                subtitle="Choose your date, time and group size, then lock in your Playard SimShooting session."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
              Add more
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em]">
              Build a bigger Playard session.
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
                Add burgers, loaded fries, drinks and bar service to your SimShooting session.
              </p>
            </Link>

            <Link
              href="/interactive-darts-peterborough"
              className="bg-[#d71920] p-8 text-white shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
            >
              <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                Add Darts
              </h3>
              <p className="text-lg font-bold leading-8 text-white/90">
                Pair SimShooting with interactive darts for a stronger group booking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff7a00]">
            FAQs
          </p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            SimShooting questions.
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