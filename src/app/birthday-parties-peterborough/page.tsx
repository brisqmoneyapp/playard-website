import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birthday Parties in Peterborough",
  description:
    "Book birthday parties at Playard Peterborough. Kids VR parties, teen parties, adult birthdays, games, food, drinks and group activities in Peterborough city centre.",
};

const partyTypes = [
  {
    title: "Kids VR Parties",
    href: "/kids-parties-peterborough",
    copy: "Immersive VR sessions, games and food options for high energy daytime birthday parties.",
  },
  {
    title: "Teen Parties",
    href: "/teen-parties-peterborough",
    copy: "Gaming, VR, pool, darts, table tennis and social activities for teenagers who want something different.",
  },
  {
    title: "Adult Birthdays",
    href: "/parties",
    copy: "Darts, shuffleboard, pool, curling, drinks and food for grown up birthdays and group nights out.",
  },
  {
    title: "Group Celebrations",
    href: "/activities",
    copy: "Mix multiple activities together and create a birthday session that suits your group size and vibe.",
  },
];

const activities = [
  "VR Experiences",
  "Interactive Darts",
  "Shuffleboard",
  "Pool",
  "Street Curling",
  "Table Tennis",
  "SimShooting",
  "Games Lounge",
];

const reasons = [
  "Activities for different ages",
  "Food and drinks available",
  "City centre location",
  "Easy group booking",
];

const faqs = [
  {
    question: "What birthday parties can we book at Playard?",
    answer:
      "Playard can host kids VR parties, teen parties, adult birthdays and group celebrations using activities such as VR, darts, pool, shuffleboard, street curling, table tennis, SimShooting and the Games Lounge.",
  },
  {
    question: "Can we add food and drinks?",
    answer:
      "Yes. Food and drinks can be added to birthday bookings, making it easier to keep the full group together at the venue.",
  },
  {
    question: "Is Playard suitable for teenage birthdays?",
    answer:
      "Yes. Teenagers usually enjoy VR, pool, darts, table tennis, SimShooting and other competitive social games.",
  },
  {
    question: "Can adults book birthday parties too?",
    answer:
      "Absolutely. Adult birthdays work well with interactive darts, shuffleboard, pool, drinks, food and multi activity group bookings.",
  },
  {
    question: "How do we enquire about a party?",
    answer:
      "Use the party enquiry button or email Playard with your preferred date, group size, age range and the activities you are interested in.",
  },
];

export default function BirthdayPartiesPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Birthday Parties
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            BIRTHDAYS
            <br />
            PEOPLE
            <br />
            ACTUALLY REMEMBER.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            VR, darts, shuffleboard, pool, curling, simulator games, food, drinks and unforgettable birthday celebrations in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#ff2bd6] px-6 py-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {reasons.map((item) => (
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
            <p className="section-label mb-5">Party types</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Parties for kids, teens and grown ups.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partyTypes.map((party) => (
              <Link
                key={party.title}
                href={party.href}
                className="flex min-h-[350px] flex-col border-4 border-black bg-white p-7 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
              >
                <h3 className="mb-5 text-3xl font-black tracking-tight">
                  {party.title}
                </h3>
                <p className="mb-8 font-bold text-zinc-700">{party.copy}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-zinc-300">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Activities</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Build the party around the games.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              Choose one activity or combine several into a bigger celebration.
              Playard works well because groups can move between games, food,
              drinks and social areas without leaving the venue.
            </p>
            <Link
              href="/activities"
              className="inline-flex bg-[#00d4ff] px-7 py-4 font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
            >
              View Activities
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((item) => (
              <div
                key={item}
                className="bg-[#111111] p-7 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">How it works</p>
            <h2 className="text-5xl font-black tracking-tight">
              Tell us the group. We help shape the party.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
            {[
              {
                title: "Choose your party type",
                copy: "Kids, teens, adults or mixed family groups can all be matched with suitable activities.",
              },
              {
                title: "Pick activities and food",
                copy: "Build the booking around VR, games, food, drinks and the length of session you want.",
              },
              {
                title: "Arrive and celebrate",
                copy: "Your group arrives at Playard and enjoys a proper social birthday experience under one roof.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tight">
                  {step.title}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-700">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#ff2bd6] p-8 text-white shadow-2xl md:p-12">
            <p className="section-label mb-5">Kids and teens</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              VR, games and food without the boring party hall feel.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              For children and teenagers, Playard offers a more exciting party
              experience with VR, gaming style activities and plenty of group
              energy.
            </p>
            <Link
              href="/kids-parties-peterborough"
              className="inline-flex rounded-md bg-white px-7 py-4 font-black uppercase tracking-wide text-black hover:bg-zinc-200"
            >
              Kids Party Options
            </Link>
          </div>

          <div className="rounded-[2rem] bg-[#00d4ff] p-8 text-black shadow-2xl md:p-12">
            <p className="section-label mb-5">Adults</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Competitive games, drinks and a proper night out.
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-300">
              Adult birthdays can be built around darts, shuffleboard, pool,
              curling, food, drinks and late night social energy.
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

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Party enquiry
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Start your birthday enquiry.
              </h2>
              <p className="mb-8 text-lg leading-8 text-zinc-700">
                Tell us the date, group size, age range and activities you are
                interested in. We can help you shape the right party package.
              </p>
              <a
                href="mailto:hello@playard.co.uk?subject=Birthday Party Enquiry&body=Hi Playard,%0D%0A%0D%0AI would like to enquire about a birthday party.%0D%0A%0D%0APreferred date:%0D%0AGroup size:%0D%0AAge range:%0D%0AActivities interested in:%0D%0AFood and drinks required:%0D%0A%0D%0AThanks"
                className="inline-flex rounded-md bg-black px-8 py-4 font-black uppercase tracking-wide text-white hover:bg-zinc-800"
              >
                Email Party Enquiry
              </a>
            </div>

            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-500">
                Booking placeholder
              </p>
              <h3 className="mb-4 text-4xl font-black tracking-tight">
                Funbutler party booking or enquiry widget.
              </h3>
              <p className="leading-7 text-zinc-600">
                Add the party booking widget or enquiry flow here when ready.
                Until then, the email enquiry button gives customers a simple way
                to contact Playard without opening the site to form spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            BIRTHDAY PARTY QUESTIONS.
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