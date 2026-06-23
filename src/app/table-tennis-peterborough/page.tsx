import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Table Tennis in Peterborough | Playard",
  description:
    "Book table tennis at Playard Peterborough. Fast paced fun for friends, families, work socials, parties and competitive nights out.",
};

const bestFor = [
  "Friends night out",
  "Families",
  "Work socials",
  "Teen groups",
  "Birthday parties",
  "Competitive players",
];

const playStyles = [
  {
    title: "Quick rallies",
    copy: "Fast games, loud reactions and easy rematches when someone claims they were warming up.",
  },
  {
    title: "Casual knockabout",
    copy: "Perfect for families, friends and groups who want something easy to pick up.",
  },
  {
    title: "Mini tournaments",
    copy: "Create your own knockout, winner stays on or team challenge format.",
  },
  {
    title: "Party add on",
    copy: "Add table tennis to birthdays, teen parties or mixed activity bookings.",
  },
  {
    title: "Work social mode",
    copy: "A relaxed competitive activity for colleagues who want something more fun than another meal out.",
  },
  {
    title: "Big group energy",
    copy: "Keep people rotating, watching, laughing and chasing the next point.",
  },
];

const faqs = [
  {
    question: "Do I need table tennis experience?",
    answer:
      "No. Table tennis is easy to pick up and enjoyable for complete beginners as well as experienced players.",
  },
  {
    question: "Can children play table tennis?",
    answer:
      "Yes. Table tennis is suitable for families, children and mixed age groups.",
  },
  {
    question: "Can we book table tennis for a group?",
    answer:
      "Absolutely. It is ideal for birthdays, team socials, family outings and group events.",
  },
  {
    question: "Can we combine table tennis with other activities?",
    answer:
      "Yes. Many guests combine table tennis with darts, shuffleboard, pool, curling, food and drinks.",
  },
];

export default function TableTennisPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/table-tennis.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,43,214,0.48),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(124,60,255,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(0,212,255,0.18),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Table tennis at Playard
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Serve.
              <br />
              Rally.
              <br />
              Win.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Fast rallies, loud reactions and quick-fire competition. Table tennis at Playard is perfect for friends, families, teens, birthdays and work socials.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href="#book-table-tennis"
                eventName="table_tennis_booking_clicked"
                className="bg-[#ff2bd6] px-5 py-4 text-center text-base sm:px-9 sm:py-5 sm:text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
              >
                Book Table Tennis
              </TrackedLink>
              <Link
                href="/activities"
                className="bg-[#00d4ff] px-5 py-4 text-center text-base sm:px-9 sm:py-5 sm:text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[2deg] hover:scale-[1.03]"
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
              <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
                Why play table tennis?
              </p>
              <div className="grid gap-3">
                {[
                  "Fast paced gameplay",
                  "Easy to learn",
                  "Great for groups",
                  "Perfect for all ages",
                  "Instant rematches",
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

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#ff2bd6] py-5 text-white">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Table Tennis</span><span>•</span><span>Fast Rallies</span><span>•</span><span>Groups</span><span>•</span><span>Teens</span><span>•</span><span>Birthdays</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
              Why book table tennis?
            </p>
            <h2 className="mb-8 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Fast, social and seriously addictive.
            </h2>
            <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
              Table tennis is easy to understand, quick to play and perfect for keeping people moving, laughing and chasing one more point.
            </p>
            <TrackedLink
              href="#book-table-tennis"
              eventName="table_tennis_booking_clicked"
              className="inline-flex bg-[#ff2bd6] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
            >
              Book Table Tennis
            </TrackedLink>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item, index) => (
              <div
                key={item}
                className={`min-h-[190px] p-7 text-white shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 3 === 0
                    ? "bg-[#ff2bd6]"
                    : index % 3 === 1
                      ? "bg-[#7c3cff]"
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
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
              Play styles
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Quick games. Loud points. Big rematches.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {playStyles.map((style, index) => (
              <div
                key={style.title}
                className="group overflow-hidden bg-[#111111] text-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <div
                  className={`flex h-48 items-end p-5 ${
                    index % 3 === 0
                      ? "bg-[#ff2bd6]"
                      : index % 3 === 1
                        ? "bg-[#7c3cff]"
                        : "bg-[#00d4ff] text-black"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.25em]">
                    Table mode
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                    {style.title}
                  </h3>
                  <p className="text-base font-bold leading-7 text-zinc-300">
                    {style.copy}
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
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
              How it works
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em]">
              Serve. Rally. Win.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
            {[
              {
                title: "Book your slot",
                copy: "Reserve a table and arrive ready to play.",
              },
              {
                title: "Pick up a bat",
                copy: "Get started immediately with simple rules and quick games.",
              },
              {
                title: "Challenge your group",
                copy: "Create mini tournaments, winner stays on or one more rematch.",
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

      <section id="book-table-tennis" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#ff2bd6]">
                Book table tennis
              </p>
              <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
                Ready to rally?
              </h2>
              <p className="mb-8 text-xl font-bold leading-9 text-zinc-800">
  Book your table tennis session directly below. Choose your preferred date, time and group size, then lock in your Playard table tennis booking.
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
                bookingFormId="6a2f2d58384a64c73dd94150"
                buttonText="Book Table Tennis Now"
                title="Book Table Tennis"
                subtitle="Choose your date, time and group size, then lock in your Playard table tennis session."
                trackEvent="table_tennis_booking_clicked"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
              Add more
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em]">
              Keep the rally going.
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
                Add food and drinks to make it a complete Playard session.
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
                Combine table tennis with interactive darts for bigger group bookings.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ff2bd6]">
            FAQs
          </p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            Table tennis questions.
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