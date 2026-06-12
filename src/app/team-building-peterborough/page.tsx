import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Building Activities Peterborough | Playard",
  description:
    "Team building activities in Peterborough including interactive darts, VR, shuffleboard, pool, street curling, food and drinks at Playard.",
};

const activities = [
  "Interactive Darts",
  "VR Experiences",
  "Shuffleboard",
  "Pool",
  "Street Curling",
  "SimShooting",
  "Table Tennis",
  "Games Lounge",
];

const benefits = [
  "Encourages teamwork",
  "Suitable for mixed abilities",
  "Food and drinks available",
  "Central Peterborough location",
];

const eventTypes = [
  {
    title: "Department Socials",
    copy: "Reward your team with a fun and engaging experience outside the office.",
  },
  {
    title: "Company Celebrations",
    copy: "Celebrate milestones, achievements and team successes together.",
  },
  {
    title: "Client Entertainment",
    copy: "Build stronger business relationships in a relaxed environment.",
  },
  {
    title: "Team Away Days",
    copy: "A memorable alternative to traditional meeting room events.",
  },
];

const faqs = [
  {
    question: "Why is Playard good for team building?",
    answer:
      "Playard combines multiple activities under one roof, allowing teams to compete, collaborate and socialise in a relaxed environment.",
  },
  {
    question: "Can food and drinks be included?",
    answer:
      "Yes. Team building packages can include food, drinks and multiple activities.",
  },
  {
    question: "How many people can attend?",
    answer:
      "We can accommodate both small teams and larger corporate groups. Contact us with your expected numbers.",
  },
  {
    question: "Can we combine different activities?",
    answer:
      "Absolutely. Many groups combine darts, shuffleboard, pool, VR and other experiences into one event.",
  },
];

export default function TeamBuildingPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.35),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.35),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Team Building Peterborough
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            BUILD.
            <br />
            COMPETE.
            <br />
            CONNECT.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Swap awkward icebreakers and meeting rooms for interactive games, food, drinks and experiences that bring teams together naturally.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {benefits.map((item) => (
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
            <p className="section-label mb-5">Activities</p>
            <h2 className="text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
              One venue. Endless team battles.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <div
                key={activity}
                className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
                  {activity}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Event Types</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              The work event people actually enjoy.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((item) => (
              <div
                key={item.title}
                className="border-4 border-white bg-[#111111] p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="font-bold leading-8 text-zinc-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#d71920]">
                Team Building Enquiries
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                LET'S BUILD YOUR TEAM DAY.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Tell us your group size, preferred date and objectives and we'll
                help create a memorable team building experience.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@playard.co.uk?subject=Team Building Enquiry"
                className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Enquire Now
              </a>

              <Link
                href="/corporate-events"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Corporate Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            TEAM BUILDING QUESTIONS.
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

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            PERFECT FOR.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-white bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Department Days</h3></div>
            <div className="border-4 border-white bg-[#d71920] p-8"><h3 className="text-3xl font-black uppercase">Work Socials</h3></div>
            <div className="border-4 border-white bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Client Events</h3></div>
            <div className="border-4 border-white bg-[#ff2bd6] p-8"><h3 className="text-3xl font-black uppercase">Company Celebrations</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}