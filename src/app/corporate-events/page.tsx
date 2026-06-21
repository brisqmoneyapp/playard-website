import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Events Peterborough | Team Building | Playard",
  description:
    "Corporate events, team building, work socials, Christmas parties, networking events, client entertainment and venue hire in Peterborough at Playard.",
};

const eventTypes = [
  {
    title: "Team Building",
    colour: "#d71920",
    copy: "Competitive games and shared experiences that bring teams together without the awkward icebreakers.",
  },
  {
    title: "Work Socials",
    colour: "#00d4ff",
    copy: "A better alternative to another restaurant booking, office drinks or forgettable team meal.",
  },
  {
    title: "Christmas Parties",
    colour: "#f59e0b",
    copy: "Food, drinks, games and festive competition in one city centre venue.",
  },
  {
    title: "Networking Events",
    colour: "#7c3cff",
    copy: "A more relaxed way to bring people together, start conversations and keep the room moving.",
  },
  {
    title: "Client Entertainment",
    colour: "#00b86b",
    copy: "Impress clients with an experience they will remember after the meeting ends.",
  },
  {
    title: "Company Celebrations",
    colour: "#ff2bd6",
    copy: "Celebrate milestones, launches, targets and staff wins with games, food and drinks.",
  },
];

const reasons = [
  "Multiple activities under one roof",
  "Food and drinks available",
  "Flexible group sizes",
  "City centre location",
  "Competitive team experiences",
  "Private hire options",
];

const activities = [
  { name: "Interactive Darts", colour: "#d71920" },
  { name: "Shuffleboard", colour: "#f59e0b" },
  { name: "Pool", colour: "#00b86b" },
  { name: "Street Curling", colour: "#9EEAFF" },
  { name: "VR Experiences", colour: "#7c3cff" },
  { name: "SimShooting", colour: "#ff7a00" },
  { name: "Table Tennis", colour: "#ff2bd6" },
  { name: "Games Lounge", colour: "#00d4ff" },
];

const perfectFor = [
  "Small Teams",
  "Large Teams",
  "Department Days",
  "Client Events",
  "Staff Rewards",
  "Christmas Parties",
];

const faqs = [
  {
    question: "How many people can Playard host?",
    answer:
      "We can accommodate small teams, department events and larger corporate bookings. Contact us with your expected numbers and requirements.",
  },
  {
    question: "Can food and drinks be included?",
    answer:
      "Yes. Corporate bookings can include food, drinks and activity packages tailored to your group.",
  },
  {
    question: "Can we hire the venue exclusively?",
    answer:
      "Exclusive and semi exclusive venue hire options may be available depending on the date, time and group size.",
  },
  {
    question: "How do we enquire?",
    answer:
      "Simply email Playard with your preferred date, group size and requirements and our team will help build the right package.",
  },
];

export default function CorporateEventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.20),transparent_24rem)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
              Corporate Events Peterborough
            </div>

            <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
              TEAMS.
              <br />
              COMPETE.
              <br />
              TOGETHER.
            </h1>

            <p className="mb-8 max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
              Forget another restaurant booking or boring meeting room. Playard brings together interactive games, food, drinks and team experiences that people actually talk about afterwards.
            </p>

            <p className="mb-10 max-w-4xl bg-white p-6 text-lg font-black leading-8 text-black shadow-2xl">
              Playard was built around friendly competition. Whether you're bringing 10 colleagues or 100 guests, we can create an experience that combines games, food, drinks and social interaction in a way that traditional team building venues simply cannot.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@playard.co.uk?subject=Corporate Event Enquiry"
                className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Enquire Now
              </a>

              <Link
                href="/activities"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                View Activities
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#f59e0b]">
                Corporate packages
              </p>
              <div className="grid gap-3">
                {[
                  "Team building",
                  "Work socials",
                  "Christmas parties",
                  "Private hire",
                  "Client events",
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

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6 text-black">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-5 gap-y-2 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
          <span>Team Building</span>
          <span>•</span>
          <span>Work Socials</span>
          <span>•</span>
          <span>Christmas Parties</span>
          <span>•</span>
          <span>Venue Hire</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Corporate Event Types</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Not your usual work event.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((item) => (
              <div
                key={item.title}
                className="min-h-[330px] border-4 border-black p-8 text-white shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
                style={{ backgroundColor: item.colour }}
              >
                <h3 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="text-lg font-bold leading-8 text-white/90">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-5xl">
            <p className="section-label mb-5">Why companies choose Playard</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Built for teams who want more than small talk.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className={`border-4 border-white p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 3 === 0
                    ? "bg-[#111111]"
                    : index % 3 === 1
                      ? "bg-[#d71920]"
                      : "bg-[#00d4ff] text-black"
                }`}
              >
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {reason}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label mb-5">Activities</p>
            <h2 className="mb-6 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Build your event around the games.
            </h2>
            <p className="text-xl font-bold leading-9 text-zinc-700">
              Choose one activity or combine several together to create a unique corporate event experience.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="border-4 border-black p-6 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
                style={{ backgroundColor: activity.colour }}
              >
                <h3 className="text-2xl font-black uppercase text-black">
                  {activity.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            PERFECT FOR...
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perfectFor.map((item, index) => (
              <div
                key={item}
                className={`border-4 border-black p-8 text-center shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 3 === 0
                    ? "bg-[#ff2bd6] text-white"
                    : index % 3 === 1
                      ? "bg-[#00d4ff] text-black"
                      : "bg-[#f59e0b] text-black"
                }`}
              >
                <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.05em]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[350px] overflow-hidden border-4 border-black shadow-2xl md:min-h-[500px]">
            <img
              src="/images/activities/corporate.jpeg"
              alt="Corporate events at Playard Peterborough"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative flex min-h-[350px] items-end justify-center px-6 pb-10 pt-16 md:min-h-[500px] md:pb-14">
              <a
                href="mailto:info@playard.co.uk?subject=Corporate%20Event%20Enquiry"
                className="inline-flex bg-[#d71920] px-8 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Email Corporate Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-label mb-5">Make it bigger</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              MAKE IT A NIGHT TO REMEMBER.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/food-and-drinks"
              className="bg-[#f59e0b] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                Food & Drinks
              </h3>
              <p className="text-lg font-bold leading-8">
                Add food, drinks and bar service to your corporate event package.
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-[#00d4ff] p-8 text-black shadow-2xl transition hover:-translate-y-2 hover:rotate-[1deg]"
            >
              <h3 className="mb-4 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                Private Venue Hire
              </h3>
              <p className="text-lg font-bold leading-8">
                Ask about exclusive or semi exclusive venue hire for larger events.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            CORPORATE EVENT QUESTIONS.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl"
              >
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}