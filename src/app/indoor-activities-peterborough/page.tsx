

import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/indoor-activities-peterborough");

const activities = [
  {
    title: "VR Experiences",
    href: "/vr-peterborough",
    copy: "Immersive gaming experiences for families, kids parties, teenagers and group bookings.",
  },
  {
    title: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    copy: "Digital darts, automatic scoring and group friendly game modes powered by Dartsee.",
  },
  {
    title: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    copy: "A relaxed but competitive game that works perfectly with drinks, dates and work socials.",
  },
  {
    title: "Pool",
    href: "/pool-peterborough",
    copy: "Classic pool tables for casual games, friend groups and relaxed nights out.",
  },
  {
    title: "Street Curling",
    href: "/street-curling-peterborough",
    copy: "Curling without the ice. Easy to learn, social and ideal for mixed groups.",
  },
  {
    title: "SimShooting",
    href: "/simhunt-peterborough",
    copy: "A big screen simulator experience for groups looking for something different.",
  },
  {
    title: "Table Tennis",
    href: "/table-tennis-peterborough",
    copy: "Fast rallies, quick games and competitive fun for friends and families.",
  },
  {
    title: "Games Lounge",
    href: "/games-lounge-peterborough",
    copy: "Board games, card games, cornhole and table football alongside food and drinks.",
  },
];

const reasons = [
  "All weather venue",
  "Great for groups",
  "Food and drinks available",
  "City centre location",
];

const occasions = [
  "Rainy day plans",
  "Cold weather activities",
  "Weekend days out",
  "Family activities",
  "Date nights",
  "Birthday parties",
  "Teen activities",
  "Corporate events",
];

const faqs = [
  {
    question: "What indoor activities are available at Playard Peterborough?",
    answer:
      "Playard offers VR experiences, interactive darts, shuffleboard, pool, street curling, SimShooting, table tennis and a Games Lounge with board games, cornhole and table football.",
  },
  {
    question: "Is Playard suitable when it is raining or cold?",
    answer:
      "Yes. Playard is an indoor venue, making it a good option for rainy days, cold evenings, school holidays and weekend plans.",
  },
  {
    question: "Can families visit Playard?",
    answer:
      "Yes. Families can enjoy VR, table tennis, Games Lounge activities and selected group friendly experiences.",
  },
  {
    question: "Can adults visit for drinks and games?",
    answer:
      "Yes. Playard is also designed for adult social nights with darts, shuffleboard, pool, food, drinks and group activities.",
  },
];

export default function IndoorActivitiesPeterboroughPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-zinc-800 px-6 py-24 md:py-32">
        <div className="noise-overlay" />

        <div className="mx-auto max-w-7xl">
          <p className="section-label mb-5">Indoor activities Peterborough</p>
          <h1 className="big-heading mb-8 text-6xl md:text-8xl">
            Indoor Activities in Peterborough.
          </h1>

          <p className="max-w-4xl text-xl leading-8 text-zinc-300 md:text-2xl">
            Looking for indoor activities in Peterborough? Playard brings together
            VR, interactive darts, shuffleboard, pool, street curling, table
            tennis, SimShooting, food and drinks in one city centre venue.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm font-black uppercase tracking-wide text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">What you can play</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Stay indoors. Still make it competitive.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="card-hover flex min-h-[330px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {activity.title}
                </h3>
                <p className="mb-8 leading-7 text-zinc-400">{activity.copy}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-zinc-300">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label mb-5">Perfect for</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Rainy days, weekends and last minute plans.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              When the weather is bad or plans fall through, Playard gives you a
              full indoor social venue with activities, food, drinks and space to
              spend time together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {occasions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-2xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-12">
            <p className="section-label mb-5">Families and teenagers</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Indoor fun without the soft play feel.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              Playard works for older children, teenagers and families who want
              something more exciting than a standard indoor activity centre.
            </p>
            <Link
              href="/birthday-parties-peterborough"
              className="inline-flex rounded-md bg-white px-7 py-4 font-black uppercase tracking-wide text-black hover:bg-zinc-200"
            >
              View Parties
            </Link>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-12">
            <p className="section-label mb-5">Adults and groups</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Games, drinks and proper social energy.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              For adults, Playard is ideal for competitive social nights,
              work socials, date nights, group bookings and celebrations.
            </p>
            <Link
              href="/food-and-drinks"
              className="inline-flex rounded-md bg-white px-7 py-4 font-black uppercase tracking-wide text-black hover:bg-zinc-200"
            >
              Food & Drinks
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-800 bg-white p-8 text-black md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Book indoor activities
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Ready to play indoors?
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Choose your activity, book online or contact Playard for parties,
                corporate events and group bookings.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/book"
                className="rounded-md bg-black px-8 py-4 text-center font-black uppercase tracking-wide text-white hover:bg-zinc-800"
              >
                Book Now
              </Link>
              <Link
                href="/activities"
                className="rounded-md border border-zinc-300 px-8 py-4 text-center font-black uppercase tracking-wide text-black hover:border-black"
              >
                View Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            Indoor activities questions.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
              >
                <h3 className="mb-3 text-2xl font-black">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}