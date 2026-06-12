import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food & Drinks Peterborough | Playard",
  description:
    "Food, drinks, cocktails, beer and social gaming under one roof at Playard Peterborough.",
};

const highlights = [
  "Bar & Social Gaming",
  "Cocktails & Spirits",
  "Beer & Cider",
  "Food for Groups",
];

const menuSections = [
  {
    title: "Burgers",
    copy: "Stacked burgers perfect for gaming sessions, parties and group nights out.",
  },
  {
    title: "Loaded Fries",
    copy: "Sharers and sides designed for social groups and events.",
  },
  {
    title: "Bar Snacks",
    copy: "Quick bites to keep the competition going.",
  },
  {
    title: "Cocktails",
    copy: "Classic favourites and venue specials.",
  },
  {
    title: "Beer & Cider",
    copy: "Refreshing options to enjoy alongside activities.",
  },
  {
    title: "Soft Drinks",
    copy: "Family friendly options for all ages.",
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

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            EAT.
            <br />
            DRINK.
            <br />
            PLAY.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Burgers, loaded fries, cocktails, beers, soft drinks and social gaming all under one roof in Peterborough city centre.
          </p>
        </div>
      </section>

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

      <section className="bg-[#fff3dd] px-6 py-24">
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
      </section>

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

      <section className="bg-[#fff3dd] px-6 py-24">
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
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            COME HUNGRY.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#f59e0b] p-8">
              <h3 className="text-3xl font-black uppercase">Burgers 🍔</h3>
            </div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Loaded Fries 🍟</h3>
            </div>
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Cocktails 🍹</h3>
            </div>
            <div className="border-4 border-black bg-[#00d4ff] p-8">
              <h3 className="text-3xl font-black uppercase">Beer 🍺</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}