import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Pool Tables in Peterborough | Playard",
  description:
    "Book pool tables at Playard Peterborough. Perfect for casual games, date nights, group bookings, parties, work socials, food and drinks.",
};

const reasons = [
  "Classic social game",
  "Great for groups",
  "Perfect with drinks",
  "Easy to add to a night out",
];

const bestFor = [
  "Friends night out",
  "Date nights",
  "Walk ins and casual games",
  "Birthday groups",
  "Work socials",
  "Pre drinks and late sessions",
];

const faqs = [
  {
    question: "Can I book a pool table in advance?",
    answer:
      "Yes. You can book a pool table in advance directly through the booking form on this page.",
  },
  {
    question: "Is pool suitable for beginners?",
    answer:
      "Yes. Pool is one of the easiest Playard activities to enjoy casually, whether you are competitive or just playing for fun.",
  },
  {
    question: "Can we order food and drinks while playing pool?",
    answer:
      "Yes. Playard has a bar with food and drinks, so your pool session can become part of a bigger night out.",
  },
  {
    question: "Is pool good for parties or work socials?",
    answer:
      "Yes. Pool works well alongside darts, shuffleboard, curling, VR and food packages for group bookings, parties and corporate events.",
  },
];

export default function PoolPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/pool.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(0,184,107,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.22),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(245,158,11,0.18),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00b86b] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Pool at Playard
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Break.
              <br />
              Pot.
              <br />
              Repeat.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              Pool tables in Peterborough for date nights, group nights, birthdays, work socials and relaxed competitive fun.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#book-pool" className="bg-[#00b86b] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]">
                Book Pool
              </Link>
              <Link href="/activities" className="bg-[#00d4ff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[2deg] hover:scale-[1.03]">
                All Games
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-3">
                {['Easy to learn','Perfect with drinks','Great for dates','Group friendly','Competitive fun'].map((item) => (
                  <div key={item} className="border border-white/20 bg-white/10 px-5 py-4 text-2xl font-black uppercase tracking-[-0.04em]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#00b86b] py-5 text-white">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Pool</span><span>•</span><span>Date Nights</span><span>•</span><span>Groups</span><span>•</span><span>Food</span><span>•</span><span>Drinks</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Why book pool?</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Simple. Social. Competitive.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              Pool is easy to start, social by nature and perfect for groups who
              want something relaxed but still competitive. Add drinks, food and
              other Playard games to turn it into a full night out.
            </p>
            <Link
              href="#book-pool"
              className="inline-flex rounded-md bg-white px-7 py-4 font-black uppercase tracking-wide text-black hover:bg-zinc-200"
            >
              Book Pool Table
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item) => (
              <div
                key={item}
                className="bg-[#00b86b] p-7 text-white shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="section-label mb-5">How it works</p>
            <h2 className="text-5xl font-black tracking-tight">
              Book. Break. Battle.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
            {[
              {
                title: "Choose your slot",
                copy: "Pick a time that works for your group and reserve your table.",
              },
              {
                title: "Arrive and play",
                copy: "Check in, grab cues, order drinks and get straight into the game.",
              },
              {
                title: "Add more games",
                copy: "Pair pool with darts, shuffleboard, curling, VR or food packages.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-[#111111] p-7 shadow-2xl transition hover:-translate-y-2"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {step.title}
                </h3>
                <p className="leading-7 text-zinc-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-pool" className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Book pool
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Ready to book a pool table?
              </h2>
              <p className="mb-8 text-lg leading-8 text-zinc-700">
                Book your pool table directly below. Choose your preferred date, time and group size, then lock in your Playard pool session.
              </p>
              <Link
                href="/book"
                className="inline-flex rounded-md bg-black px-8 py-4 font-black uppercase tracking-wide text-white hover:bg-zinc-800"
              >
                View All Packages
              </Link>
            </div>

            <div className="flex min-h-[320px] items-center justify-center border-4 border-black bg-[#fff3dd] p-10 text-center shadow-xl sm:p-12">
              <FunbutlerBookingModal
                bookingFormId="69ebfb29e8c635906752f869"
                buttonText="Book Pool Now"
                title="Book Pool"
                subtitle="Choose your date, time and group size, then lock in your Playard pool session."
                trackEvent="pool_booking_clicked"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="section-label mb-5">Add more to your booking</p>
            <h2 className="text-5xl font-black tracking-tight">
              Turn pool into a full night out.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <Link
              href="/food-and-drinks"
              className="bg-[#f59e0b] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <h3 className="mb-4 text-4xl font-black tracking-tight">
                Food & Drinks
              </h3>
              <p className="text-zinc-400">
                Add burgers, loaded fries, drinks and bar service to your pool
                session.
              </p>
            </Link>

            <Link
              href="/interactive-darts-peterborough"
              className="bg-[#d71920] p-8 text-white shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
            >
              <h3 className="mb-4 text-4xl font-black tracking-tight">
                Add Darts
              </h3>
              <p className="text-zinc-400">
                Pair pool with Dartsee interactive darts for a stronger group
                booking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24 text-black">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            Pool questions.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7"
              >
                <h3 className="mb-3 text-2xl font-black tracking-tight">
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
