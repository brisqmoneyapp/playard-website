import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Street Curling in Peterborough | Playard",
  description:
    "Book indoor street curling at Playard Peterborough. Curling without the ice, perfect for families, groups, birthdays, team building and corporate events.",
};

const reasons = [
  "No experience required",
  "Great for groups",
  "Perfect for team building",
  "Curling without the ice",
];

const bestFor = [
  "Families",
  "Corporate events",
  "Team building",
  "Birthday groups",
  "Mixed age groups",
  "Friends night out",
];

const faqs = [
  {
    question: "What is indoor street curling?",
    answer:
      "Indoor street curling brings the fun and strategy of curling into a venue environment without the need for ice. Players slide stones towards the target and compete for the highest score.",
  },
  {
    question: "Do I need curling experience?",
    answer:
      "No. Most players learn the basics within a few minutes, making it one of the easiest activities for mixed groups.",
  },
  {
    question: "Is street curling good for corporate events?",
    answer:
      "Yes. It is ideal for team building because everyone can participate regardless of age, fitness level or previous experience.",
  },
  {
    question: "Can we combine curling with other activities?",
    answer:
      "Absolutely. Many groups combine curling with darts, shuffleboard, pool, food and drinks to create a complete Playard experience.",
  },
];

export default function StreetCurlingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/curling.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(158,234,255,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.25),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,255,255,0.15),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#9EEAFF] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
              Street Curling
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Curl.
              <br />
              Score.
              <br />
              Celebrate.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              All the fun, strategy and competition of curling without the ice. Perfect for families, birthdays, work socials and team events.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#book-curling" className="bg-[#9EEAFF] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[-2deg] hover:scale-[1.03]">
                Book Curling
              </Link>
              <Link href="/activities" className="bg-[#00d4ff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[2deg] hover:scale-[1.03]">
                All Games
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-3">
                {['No experience needed','Family friendly','Team building favourite','Easy to learn','Competitive fun'].map((item) => (
                  <div key={item} className="border border-white/20 bg-white/10 px-5 py-4 text-2xl font-black uppercase tracking-[-0.04em]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#9EEAFF] py-5 text-black">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Curling</span><span>•</span><span>Families</span><span>•</span><span>Groups</span><span>•</span><span>Birthdays</span><span>•</span><span>Team Building</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-5">Why book curling?</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Simple. Social. Surprisingly Competitive.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              Street curling is one of Playard's most accessible activities.
              Everyone can get involved within minutes, yet the strategy and
              competition keep groups coming back for more.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item) => (
              <div
                key={item}
                className="bg-[#9EEAFF] p-7 text-black shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="section-label mb-5">How it works</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Slide. Score. Win.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#111111] p-7 shadow-2xl transition hover:-translate-y-2">
              <h3 className="mb-4 text-3xl font-black">Choose your slot</h3>
              <p className="text-zinc-300 font-bold">
                Reserve your lane and arrive ready to play.
              </p>
            </div>

            <div className="bg-[#111111] p-7 shadow-2xl transition hover:-translate-y-2">
              <h3 className="mb-4 text-3xl font-black">Learn in minutes</h3>
              <p className="text-zinc-300 font-bold">
                The rules are simple and suitable for all ages.
              </p>
            </div>

            <div className="bg-[#111111] p-7 shadow-2xl transition hover:-translate-y-2">
              <h3 className="mb-4 text-3xl font-black">Compete together</h3>
              <p className="text-zinc-300 font-bold">
                Play casually or create a competitive challenge between teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book-curling" className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Book street curling
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Ready to play?
              </h2>
              <p className="mb-8 text-lg leading-8 text-zinc-700">
                Book your street curling lane directly below. Choose your preferred date, time and group size, then lock in your Playard curling session.
              </p>
            </div>

            <div className="flex min-h-[320px] items-center justify-center border-4 border-black bg-[#fff3dd] p-10 text-center shadow-xl sm:p-12">
              <FunbutlerBookingModal
                bookingFormId="69eb6a14cd2df222cf4ba485"
                buttonText="Book Curling Now"
                title="Book Street Curling"
                subtitle="Choose your date, time and group size, then lock in your Playard street curling session."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Link
            href="/food-and-drinks"
            className="bg-[#f59e0b] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
          >
            <h3 className="mb-4 text-4xl font-black">Food & Drinks</h3>
            <p className="text-zinc-400">
              Add burgers, loaded fries and drinks to your curling session.
            </p>
          </Link>

          <Link
            href="/corporate-events"
            className="bg-[#7c3cff] p-8 text-white shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
          >
            <h3 className="mb-4 text-4xl font-black">Corporate Events</h3>
            <p className="text-zinc-400">
              Street curling is one of our most popular team building activities.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            Street curling questions.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7"
              >
                <h3 className="mb-3 text-2xl font-black">{faq.question}</h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}