import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FoodDrinksCreamSection } from "@/components/FoodDrinksPattern";

export const metadata: Metadata = {
  title: "Food & Drinks Peterborough | Playard",
  description:
    "Drinks, hot dogs, chicken, snacks and easy food options while you play at Playard Peterborough. Full menu coming soon.",
};

const highlights = [
  "Bar & Social Gaming",
  "Cocktails & Spirits",
  "Beer & Cider",
  "Food for Groups",
];

const menuSections = [
  {
    title: "Drinks",
    copy: "Beer, cocktails, soft drinks and bar favourites while you play.",
  },
  {
    title: "Hot Dogs & Chicken",
    copy: "Easy hot food options for groups, parties and long gaming sessions.",
  },
  {
    title: "Snacks",
    copy: "Bar snacks and sharers to keep the competition going.",
  },
  {
    title: "Easy Food",
    copy: "Simple food you can enjoy between games without leaving the action.",
  },
  {
    title: "Group Bookings",
    copy: "Food and drinks can be added to parties, celebrations and work socials.",
  },
  {
    title: "Full Menu",
    copy: "Our complete menu is being finalised and will be available soon.",
  },
];

const faqs = [
  {
    question: "Do I need to book an activity to visit the bar?",
    answer:
      "No. Guests are welcome to visit Playard for food and drinks even if they are not taking part in an activity.",
  },
  {
    question: "Can food and drinks be included in parties?",
    answer:
      "Yes. Food and drinks can be included in birthday parties, corporate events and group bookings.",
  },
  {
    question: "Do you serve alcohol?",
    answer:
      "Yes. Playard has a licensed bar serving beer, cider, spirits, cocktails and other refreshments.",
  },
  {
    question: "Can we eat while playing activities?",
    answer:
      "Many activities can be combined with food and drinks, making Playard ideal for social gatherings and celebrations.",
  },
];

export default function FoodAndDrinksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#f59e0b] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Food & Drinks
          </div>

          <div className="mb-8 inline-flex rotate-[2deg] border-2 border-[#f59e0b] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f59e0b]">
            Full menu coming soon
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            EAT.
            <br />
            DRINK.
            <br />
            PLAY.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Drinks, hot dogs, chicken, snacks and easy food options while you play. Our full menu is being finalised and will be available soon.
          </p>
        </div>
      </section>

      <FoodDrinksCreamSection className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            <article className="flex min-w-0 flex-col">
              <p className="section-label mb-3">At Playard</p>
              <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
                Food
              </h2>
              <p className="mb-6 max-w-xl text-lg font-bold leading-8 text-zinc-800">
                Enjoy hot dogs, snacks and food while you play.
              </p>
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-black shadow-2xl ring-4 ring-[#d71920]/20 transition duration-300 hover:-rotate-1">
                <Image
                  src="/images/venue/food-drinks.jpeg"
                  alt="Food at Playard Peterborough"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </article>

            <article className="flex min-w-0 flex-col">
              <p className="section-label mb-3">At Playard</p>
              <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
                Drinks
              </h2>
              <p className="mb-6 max-w-xl text-lg font-bold leading-8 text-zinc-800">
                Soft drinks, colourful specials and bar options available throughout your visit.
              </p>
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-black shadow-2xl ring-4 ring-[#d71920]/20 transition duration-300 hover:rotate-1">
                <Image
                  src="/images/venue/drinks.jpeg"
                  alt="Drinks at Playard Peterborough"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </article>
          </div>
        </div>
      </FoodDrinksCreamSection>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#f59e0b] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <FoodDrinksCreamSection className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Menu Highlights</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Fuel for the competition.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuSections.map((section) => (
              <div
                key={section.title}
                className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {section.title}
                </h3>
                <p className="font-bold leading-8 text-zinc-700">{section.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </FoodDrinksCreamSection>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-12">
            <p className="section-label mb-5">Parties</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Food packages for celebrations.
            </h2>
            <p className="mb-8 text-zinc-300 leading-8">
              Add food and drinks to birthday parties, family gatherings and group bookings.
            </p>
            <Link
              href="/birthday-parties-peterborough"
              className="inline-flex bg-[#d71920] px-7 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              View Parties
            </Link>
          </div>

          <div className="border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-12">
            <p className="section-label mb-5">Corporate Events</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Team socials with food and drinks.
            </h2>
            <p className="mb-8 text-zinc-300 leading-8">
              Combine gaming activities, catering and drinks into a memorable work event.
            </p>
            <Link
              href="/corporate-events"
              className="inline-flex bg-[#d71920] px-7 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              Corporate Events
            </Link>
          </div>
        </div>
      </section>

      <FoodDrinksCreamSection className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            FOOD & DRINKS QUESTIONS.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl"
              >
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">{faq.question}</h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </FoodDrinksCreamSection>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            COME HUNGRY.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#f59e0b] p-8">
              <h3 className="text-3xl font-black uppercase">Hot Dogs</h3>
            </div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Chicken</h3>
            </div>
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Snacks</h3>
            </div>
            <div className="border-4 border-black bg-[#00d4ff] p-8">
              <h3 className="text-3xl font-black uppercase">Drinks</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}