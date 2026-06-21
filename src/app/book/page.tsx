import type { Metadata } from "next";
import Link from "next/link";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

export const metadata: Metadata = {
  title: "Book Playard Peterborough | Activities, Parties & Packages",
  description:
    "Book Playard Peterborough activities, parties, packages, darts, pool, shuffleboard, VR, curling, table tennis, SimShooting and group bookings.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Book Playard
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            PICK.
            <br />
            YOUR.
            <br />
            BATTLE.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Ready to book? Open the Playard booking system and choose your activity, date, time and group size in seconds.
          </p>

          <div className="mt-8">
            <FunbutlerBookingModal
              bookingFormId="673706716dbb45cccad59994"
              buttonText="Quick Book"
              title="Book Playard"
              subtitle="Activities, parties, group bookings and Playard packages."
              trackEvent="quick_book_clicked"
            />
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-4 py-6 text-black sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-base font-black uppercase tracking-[-0.03em] sm:text-xl md:text-2xl">
          <span>Activities</span>
          <span>•</span>
          <span>Parties</span>
          <span>•</span>
          <span>Packages</span>
          <span>•</span>
          <span>Gift Cards</span>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            ONE VENUE.
            <br />
            ENDLESS WAYS TO PLAY.
          </h2>

          <p className="mx-auto max-w-4xl text-xl font-bold leading-9 text-zinc-300">
            Whether you&apos;re planning a date night, birthday, family day out, work social or spontaneous night with friends, Playard brings together multiple activities under one roof.
          </p>
        </div>
      </section>
    </main>
  );
}