import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids Parties Peterborough | Playard",
  description:
    "Kids birthday parties in Peterborough with VR experiences, games, food and group activities at Playard.",
};

const features = [
  "VR Party Experiences",
  "Food Packages Available",
  "City Centre Venue",
  "Stress Free Planning",
];

const activities = [
  "Virtual Reality",
  "Table Tennis",
  "Games Lounge",
  "Interactive Challenges",
  "Group Competitions",
  "Food & Drinks Packages",
];

const faqs = [
  {
    question: "What age groups are suitable?",
    answer:
      "Playard can host a range of children's parties. Contact us with the age range and we can recommend suitable activities.",
  },
  {
    question: "Can food be included?",
    answer:
      "Yes. Food and drink packages can be added to make planning easier for parents.",
  },
  {
    question: "How many children can attend?",
    answer:
      "We can accommodate both small and larger groups. Let us know your expected numbers when enquiring.",
  },
  {
    question: "How do I book a party?",
    answer:
      "Send us an enquiry with your preferred date, age range and group size and our team will help organise everything.",
  },
];

export default function KidsPartiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Kids Parties Peterborough
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            BEST.
            <br />
            BIRTHDAY.
            <br />
            EVER.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            VR adventures, games, challenges, food and unforgettable birthday celebrations for children in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#ff2bd6] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {features.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-5">What is included?</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Packed with excitement.
            </h2>
            <p className="text-xl font-bold leading-9 text-zinc-700">
              Our kids parties focus on active fun, group interaction and memorable
              experiences rather than simply providing a room and some food.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((item) => (
              <div
                key={item}
                className="border-4 border-black bg-white p-7 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Party Enquiries
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                LET'S BUILD THEIR PERFECT PARTY.
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-8 text-zinc-300">
                Tell us the date, age group and expected numbers and we will help
                build the perfect birthday experience.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@playard.co.uk?subject=Kids Party Enquiry"
                className="bg-[#ff2bd6] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Enquire Now
              </a>

              <Link
                href="/birthday-parties-peterborough"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                View All Parties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            KIDS PARTY QUESTIONS.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
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
            WHY KIDS LOVE PLAYARD.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white"><h3 className="text-3xl font-black uppercase">VR Games</h3></div>
            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Challenges</h3></div>
            <div className="border-4 border-black bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Food</h3></div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white"><h3 className="text-3xl font-black uppercase">Fun Memories</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}