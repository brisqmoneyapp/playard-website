import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/teen-parties-peterborough");

const features = [
  "VR & Gaming Activities",
  "Food & Drinks Available",
  "Great For Groups",
  "City Centre Venue",
];

const activities = [
  {
    title: "VR Experiences",
    href: "/vr-peterborough",
    copy: "Dive into epic VR battles and immersive worlds that'll blow your mind and amp up the party vibe.",
  },
  {
    title: "Pool",
    href: "/pool-peterborough",
    copy: "Show off your skills and challenge friends in fast-paced, competitive pool games that never get old.",
  },
  {
    title: "Table Tennis",
    href: "/table-tennis-peterborough",
    copy: "Smash, spin, and rally your way through energetic matches packed with laughs and fierce competition.",
  },
  {
    title: "SimShooting",
    href: "/simhunt-peterborough",
    copy: "Step into the action with adrenaline-pumping simulator games that bring excitement to the next level.",
  },
  {
    title: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    copy: "Hit the bullseye with digital darts and squad challenges that keep the energy high and the fun nonstop.",
  },
  {
    title: "Games Lounge",
    href: "/games-lounge-peterborough",
    copy: "Chill out with friends over board games, cards, cornhole, and table football for laid-back social vibes.",
  },
];

const faqs = [
  {
    question: "What activities are best for teen parties?",
    answer:
      "Teen parties usually work well with VR, pool, table tennis, SimShooting, Games Lounge activities and selected competitive social games.",
  },
  {
    question: "Can food and drinks be included?",
    answer:
      "Yes. Food and drinks can be added to teen party bookings to keep the full group together at Playard.",
  },
  {
    question: "Can parents stay at the venue?",
    answer:
      "Yes. Parents can stay on site, relax in the venue and speak to the team about the best setup for the group.",
  },
  {
    question: "How do we enquire about a teen party?",
    answer:
      "Email Playard with your preferred date, group size, age range and the activities you are interested in.",
  },
];

export default function TeenPartiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.35),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(124,60,255,0.28),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#ff2bd6] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Teen Parties Peterborough
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            LEVEL UP.
            <br />
            PARTY HARD.
            <br />
            STAY SOCIAL.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            VR battles, simulator games, pool, darts, food, music and social gaming for teenagers who want something far more exciting than a traditional party room.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#7c3cff] px-6 py-6">
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Teen party activities</p>
            <h2 className="text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
              Built for the group chat.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="flex min-h-[330px] flex-col border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
              >
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {activity.title}
                </h3>
                <p className="mb-8 font-bold leading-8 text-zinc-700">{activity.copy}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-[#7c3cff]">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border-4 border-white bg-[#111111] p-8 shadow-2xl md:p-12">
            <p className="section-label mb-5">For parents</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Stress free for parents.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              Tell us the age range, group size and preferred activities. We can
              help shape a party that keeps teenagers engaged while keeping the
              booking simple for parents.
            </p>
          </div>

          <div className="border-4 border-white bg-[#111111] p-8 shadow-2xl md:p-12">
            <p className="section-label mb-5">For teenagers</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Everything teens actually want.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              Teenagers can enjoy competitive games, immersive VR, food, drinks
              and a venue that feels more grown up than a traditional birthday
              party setup.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7c3cff]">
                Teen party enquiries
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                LET'S BUILD THE ULTIMATE TEEN PARTY.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Email us with the preferred date, group size, age range and the
                activities you are interested in.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@playard.co.uk?subject=Teen Party Enquiry&body=Hi Playard,%0D%0A%0D%0AI would like to enquire about a teen party.%0D%0A%0D%0APreferred date:%0D%0AGroup size:%0D%0AAge range:%0D%0AActivities interested in:%0D%0AFood and drinks required:%0D%0A%0D%0AThanks"
                className="bg-[#ff2bd6] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Email Enquiry
              </a>

              <Link
                href="/book"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Book Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">
            TEEN PARTY QUESTIONS.
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
            TEEN PARTY HIGHLIGHTS.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-white bg-[#7c3cff] p-8"><h3 className="text-3xl font-black uppercase">VR Battles</h3></div>
            <div className="border-4 border-white bg-[#00d4ff] p-8 text-black"><h3 className="text-3xl font-black uppercase">Group Challenges</h3></div>
            <div className="border-4 border-white bg-[#ff2bd6] p-8"><h3 className="text-3xl font-black uppercase">Social Gaming</h3></div>
            <div className="border-4 border-white bg-[#f59e0b] p-8 text-black"><h3 className="text-3xl font-black uppercase">Food & Drinks</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}