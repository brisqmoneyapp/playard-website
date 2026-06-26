import Image from "next/image";
import Link from "next/link";
import FunbutlerGiftCardModal from "@/components/FunbutlerGiftCardModal";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/gift-cards");

const giftIdeas = [
  {
    title: "Birthdays",
    colour: "bg-[#ff2bd6] text-white",
    copy: "A brilliant gift for kids, teens, adults and group celebrations.",
  },
  {
    title: "Family Treats",
    colour: "bg-[#00d4ff] text-black",
    copy: "Give the family something they can actually enjoy together.",
  },
  {
    title: "Staff Rewards",
    colour: "bg-[#f59e0b] text-black",
    copy: "Reward your team with games, food and a proper social experience.",
  },
  {
    title: "Christmas Gifts",
    colour: "bg-[#d71920] text-white",
    copy: "Perfect for festive gifting, secret Santa upgrades and group treats.",
  },
];

const experiences = [
  "Interactive Darts",
  "Pool",
  "Shuffleboard",
  "Street Curling",
  "VR Experiences",
  "Table Tennis",
  "SimShooting",
  "Food & Drinks",
];

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 md:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(255,43,214,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(0,212,255,0.22),transparent_24rem)]" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white shadow-2xl sm:text-sm">
              Playard Gift Cards
            </div>

            <h1 className="mb-6 text-[4.2rem] font-black uppercase leading-[0.78] tracking-[-0.1em] text-white sm:text-[5.8rem] md:text-[8rem] lg:text-[9.5rem]">
              Give
              <br />
              The Gift
              <br />
              Of Games.
            </h1>

            <p className="mb-8 max-w-3xl bg-black/55 p-5 text-lg font-bold leading-8 text-white backdrop-blur sm:text-xl md:text-2xl md:leading-10">
              Playard gift cards are perfect for birthdays, families, staff rewards, Christmas presents and anyone who deserves games, food and good times in Peterborough city centre.
            </p>

            <FunbutlerGiftCardModal
              buttonText="Buy Gift Card"
              title="Buy Gift Card"
              subtitle="Choose your gift card amount and complete your purchase securely."
              className="bg-[#00d4ff] px-8 py-5 text-black shadow-xl hover:bg-[#00d4ff] hover:text-black"
            />
          </div>

          <div className="relative">
            <div className="rotate-[2deg] border-4 border-white bg-[#111111] p-4 shadow-2xl sm:p-6">
              <Image
                src="/images/gift-cards/gift-card-hero.jpeg"
                alt="Playard Gift Card"
                width={1400}
                height={900}
                priority
                className="h-auto w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#d71920] px-4 py-5 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-base font-black uppercase tracking-[-0.03em] sm:text-xl md:text-2xl">
          <span>Games</span>
          <span>•</span>
          <span>Food</span>
          <span>•</span>
          <span>Parties</span>
          <span>•</span>
          <span>Good Times</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Why buy a Playard gift card?
            </p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Better than another boring present.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {giftIdeas.map((item) => (
              <div
                key={item.title}
                className={`min-h-[290px] border-4 border-black p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${item.colour}`}
              >
                <h3 className="mb-4 text-4xl font-black uppercase leading-none tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="text-lg font-bold leading-8">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              What can they use it for?
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Let them choose the fun.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Gift cards can be used towards Playard experiences, including games, parties, group visits and food and drink purchases where supported by the booking system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experiences.map((item, index) => (
              <div
                key={item}
                className={`border-4 border-white p-6 text-2xl font-black uppercase leading-none tracking-[-0.04em] shadow-xl ${
                  index % 4 === 0
                    ? "bg-[#d71920] text-white"
                    : index % 4 === 1
                      ? "bg-[#00d4ff] text-black"
                      : index % 4 === 2
                        ? "bg-[#f59e0b] text-black"
                        : "bg-[#ff2bd6] text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="buy-gift-card" className="bg-[#fff3dd] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-6 shadow-2xl sm:p-8 md:p-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Buy Online
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Buy a Playard gift card.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-700 sm:text-xl sm:leading-9">
              Choose the value, complete your purchase online and give someone a gift they can use for games, food and good times at Playard.
            </p>
            <FunbutlerGiftCardModal
              buttonText="Buy Gift Card"
              title="Buy Gift Card"
              subtitle="Choose your gift card amount and complete your purchase securely."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#00d4ff] px-4 py-16 text-black sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-black/70">
              Gift more than a voucher
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Give them a reason to play.
            </h2>
            <p className="max-w-3xl text-lg font-bold leading-8 text-black/80 sm:text-xl sm:leading-9">
              Gift cards are ideal for family treats, birthdays, rewards, thank you gifts and group celebrations.
            </p>
          </div>

          <div className="grid gap-3">
            <FunbutlerGiftCardModal
              buttonText="Buy Gift Card"
              title="Buy Gift Card"
              subtitle="Choose your gift card amount and complete your purchase securely."
              className="w-full"
            />
            <Link
              href="/activities"
              className="border-2 border-black px-8 py-5 text-center font-black uppercase tracking-wide text-black hover:bg-black hover:text-white"
            >
              View Activities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}