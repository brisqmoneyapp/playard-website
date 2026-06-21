import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Shuffleboard in Peterborough | Playard",
  description:
    "Book shuffleboard at Playard Peterborough. A competitive social game for dates, groups, work socials, parties, food and drinks.",
};

const reasons = [
  "Easy to learn",
  "Great with drinks",
  "Perfect for groups",
  "Competitive without pressure",
];

const bestFor = [
  "Date nights",
  "Friends night out",
  "Work socials",
  "Adult birthdays",
  "Pre drinks",
  "Mixed ability groups",
];

const faqs = [
  {
    question: "Do you need experience to play shuffleboard?",
    answer:
      "No. Shuffleboard is very easy to learn, which makes it ideal for groups with mixed abilities.",
  },
  {
    question: "Is shuffleboard good for a date night?",
    answer:
      "Yes. It is competitive enough to be fun, but relaxed enough to enjoy with drinks and conversation.",
  },
  {
    question: "Can we book shuffleboard for a group?",
    answer:
      "Yes. Shuffleboard works well for friends, birthdays, work socials and corporate events.",
  },
  {
    question: "Can we add food and drinks?",
    answer:
      "Yes. Playard has a bar with food and drinks, so your shuffleboard booking can be part of a full night out.",
  },
];

export default function ShuffleboardPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/images/activities/shuffleboard.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.45),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(255,43,214,0.18),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(0,212,255,0.18),transparent_22rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#f59e0b] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Shuffleboard at Playard
            </div>

            <h1 className="mb-8 max-w-5xl text-[4.3rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[9rem]">
              Slide.
              <br />
              Score.
              <br />
              Settle It.
            </h1>

            <p className="mb-10 max-w-3xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
              One of the best social games for dates, drinks, birthdays, work socials and competitive nights out in Peterborough.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#book-shuffleboard" className="bg-[#f59e0b] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]">
                Book Shuffleboard
              </Link>
              <Link href="/activities" className="bg-[#00d4ff] px-9 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:rotate-[2deg] hover:scale-[1.03]">
                All Games
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-3">
                {['Easy to learn','Perfect with drinks','Date night favourite','Group friendly','Competitive fun'].map((item) => (
                  <div key={item} className="border border-white/20 bg-white/10 px-5 py-4 text-2xl font-black uppercase tracking-[-0.04em]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#f59e0b] py-5 text-white">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Shuffleboard</span><span>•</span><span>Date Nights</span><span>•</span><span>Groups</span><span>•</span><span>Food</span><span>•</span><span>Drinks</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Why book shuffleboard?</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Simple. Social. Competitive.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              Shuffleboard is one of the best social games because nobody needs
              to be an expert. It is simple enough for beginners, tactical enough
              for competitive players and relaxed enough to enjoy with food and
              drinks.
            </p>
            <Link
              href="#book-shuffleboard"
              className="inline-flex rounded-md bg-white px-7 py-4 font-black uppercase tracking-wide text-black hover:bg-zinc-200"
            >
              Book Shuffleboard
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bestFor.map((item) => (
              <div
                key={item}
                className="bg-[#f59e0b] p-7 text-white shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
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
              Slide. Score. Win the table.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
            {[
              {
                title: "Choose your slot",
                copy: "Pick your time and reserve a shuffleboard table for your group.",
              },
              {
                title: "Learn in minutes",
                copy: "The rules are simple, so everyone can get involved quickly.",
              },
              {
                title: "Keep the night moving",
                copy: "Add drinks, food or more Playard activities before or after your game.",
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

      <section id="book-shuffleboard" className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Book shuffleboard
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Ready to book shuffleboard?
              </h2>
              <p className="mb-8 text-lg leading-8 text-zinc-700">
                Book your shuffleboard table directly below. Choose your preferred date, time and group size, then lock in your Playard shuffleboard session.
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
                bookingFormId="69ebffeeb35096147267158f"
                buttonText="Book Shuffleboard Now"
                title="Book Shuffleboard"
                subtitle="Choose your date, time and group size, then lock in your Playard shuffleboard session."
                trackEvent="shuffleboard_booking_clicked"
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
              Make shuffleboard part of the full night.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <Link
              href="/food-and-drinks"
              className="bg-[#00d4ff] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <h3 className="mb-4 text-4xl font-black tracking-tight">
                Food & Drinks
              </h3>
              <p className="text-zinc-400">
                Add burgers, loaded fries, drinks and bar service to your
                shuffleboard session.
              </p>
            </Link>

            <Link
              href="/pool-peterborough"
              className="bg-[#00b86b] p-8 text-white shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
            >
              <h3 className="mb-4 text-4xl font-black tracking-tight">
                Add Pool
              </h3>
              <p className="text-zinc-400">
                Pair shuffleboard with pool for a relaxed competitive group
                booking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            Shuffleboard questions.
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