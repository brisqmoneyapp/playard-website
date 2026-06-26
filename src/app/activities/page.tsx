import NavLink from "@/components/NavLink";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd, getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/activities");

const activities = [
  {
    name: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    image: "/images/activities/darts.jpeg",
    badgeClass: "bg-[#d71920] text-white",
    label: "Digital darts. Big reactions.",
    summary:
      "Interactive darts with digital scoring, group games and a competitive social feel built for nights out, birthdays and work socials.",
    bestFor: "Friends, dates, work socials, adult parties",
    cta: "Book Darts",
    trackEvent: "darts_booking_clicked" as const,
  },
  {
    name: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    image: "/images/activities/shuffleboard.jpeg",
    badgeClass: "bg-[#f59e0b] text-black",
    label: "Slide. Score. Settle it.",
    summary:
      "A smooth, tactical game that works brilliantly with drinks, conversation and a bit of friendly rivalry.",
    bestFor: "Couples, groups, team nights, relaxed socials",
    cta: "Book Shuffleboard",
    trackEvent: "shuffleboard_booking_clicked" as const,
  },
  {
    name: "Pool",
    href: "/pool-peterborough",
    image: "/images/activities/pool.jpeg",
    badgeClass: "bg-[#00b86b] text-white",
    label: "Classic games never miss.",
    summary:
      "Pool tables for casual games, competitive nights, date nights and relaxed group sessions in Peterborough city centre.",
    bestFor: "Casual games, friends, dates, walk ins",
    cta: "Book Pool",
    trackEvent: "pool_booking_clicked" as const,
  },
  {
    name: "Indoor Street Curling",
    href: "/street-curling-peterborough",
    image: "/images/activities/curling.jpeg",
    badgeClass: "bg-[#9eeaff] text-black",
    label: "Curling without the ice.",
    summary:
      "Easy to learn, surprisingly competitive and brilliant for groups who want something different from the usual night out.",
    bestFor: "Families, teams, corporate events, mixed groups",
    cta: "Book Curling",
    trackEvent: "curling_booking_clicked" as const,
  },
  {
    name: "VR Experiences",
    href: "/vr-peterborough",
    image: "/images/activities/vr.jpeg",
    badgeClass: "bg-[#7c3cff] text-white",
    label: "Step inside the game.",
    summary:
      "Immersive VR experiences for kids parties, teenagers, families and groups looking for something high energy.",
    bestFor: "Kids parties, teenagers, families, gaming groups",
    cta: "Book VR",
    trackEvent: "vr_booking_clicked" as const,
  },
  {
    name: "Table Tennis",
    href: "/table-tennis-peterborough",
    image: "/images/activities/table-tennis.jpeg",
    badgeClass: "bg-[#ff2bd6] text-white",
    label: "Fast rallies. No excuses.",
    summary:
      "Quick games, big reactions and competitive rallies for groups who want something simple, physical and fun.",
    bestFor: "Friends, families, work socials, quick games",
    cta: "Book Table Tennis",
    trackEvent: "table_tennis_booking_clicked" as const,
  },
  {
    name: "SimHunt",
    href: "/simhunt-peterborough",
    image: "/images/activities/simhunt.jpeg",
    badgeClass: "bg-[#ff7a00] text-white",
    label: "Big screen simulator action.",
    summary:
      "A big screen simulator experience for groups looking for something different, social and easy to enjoy together.",
    bestFor: "Groups, parties, simulator fans, mixed ability teams",
    cta: "Book SimHunt",
    trackEvent: "simshooting_booking_clicked" as const,
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Activities", path: "/activities" },
        ])}
      />
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_70%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Playard Activities
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            Pick Your
            <br />
            Battle.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Darts, shuffleboard, pool, VR, curling, table tennis, simulator experiences, food, drinks and unforgettable nights out in Peterborough city centre.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <NavLink
              key={activity.href}
              href={activity.href}
              trackEvent={activity.trackEvent}
              className="group flex min-h-[560px] flex-col overflow-hidden border-4 border-black bg-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02]"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-800 sm:h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${activity.image})` }}
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 bg-black/65 p-4 backdrop-blur-sm sm:p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] ${activity.badgeClass}`}
                    >
                      View Activity
                    </span>
                  </div>
                  <h2 className="text-2xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-3xl">
                    {activity.name}
                  </h2>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <p className="section-label mb-3">{activity.label}</p>
                <p className="mb-6 text-lg font-bold leading-8 text-zinc-700">
                  {activity.summary}
                </p>

                <div className="mb-8 border-2 border-black bg-[#fff3dd] p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                    Best for
                  </p>
                  <p className="font-bold text-zinc-700">{activity.bestFor}</p>
                </div>

                <span className="mt-auto text-lg font-black uppercase tracking-wide text-[#d71920]">
                  {activity.cta}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Groups, parties and work socials
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Too Many Good Choices?
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Tell us who's coming, how many people are in your group and what sort of experience you're after. We'll help build the perfect Playard session.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/parties"
                className="rounded-md bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Party Options
              </Link>
              <Link
                href="/corporate-events"
                className="rounded-md bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Corporate Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}