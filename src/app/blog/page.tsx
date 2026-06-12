import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playard Blog | Things To Do in Peterborough",
  description:
    "Ideas, guides and inspiration for things to do in Peterborough, indoor activities, birthday parties, date nights, team building and group days out.",
};

const featuredPosts = [
  {
    title: "Things To Do In Peterborough This Weekend",
    href: "/things-to-do-peterborough",
    category: "Things to do",
    excerpt:
      "A practical guide to fun indoor activities, group games, food, drinks and social experiences in Peterborough city centre.",
  },
  {
    title: "Best Indoor Activities In Peterborough",
    href: "/indoor-activities-peterborough",
    category: "Indoor activities",
    excerpt:
      "Rainy day, cold evening or last minute plans? Explore indoor games and activities that work for families, friends and groups.",
  },
  {
    title: "Team Building Activities In Peterborough",
    href: "/team-building-peterborough",
    category: "Corporate",
    excerpt:
      "Better than another sit down meal. Discover competitive social activities that bring teams together properly.",
  },
];

const articleIdeas = [
  {
    title: "Birthday Party Ideas In Peterborough",
    href: "/birthday-parties-peterborough",
    category: "Parties",
  },
  {
    title: "Fun Things To Do In Peterborough",
    href: "/fun-things-to-do-peterborough",
    category: "Local guide",
  },
  {
    title: "Interactive Darts In Peterborough",
    href: "/interactive-darts-peterborough",
    category: "Activities",
  },
  {
    title: "Shuffleboard In Peterborough",
    href: "/shuffleboard-peterborough",
    category: "Activities",
  },
  {
    title: "Pool Tables In Peterborough",
    href: "/pool-peterborough",
    category: "Activities",
  },
  {
    title: "VR Experiences In Peterborough",
    href: "/vr-peterborough",
    category: "Activities",
  },
  {
    title: "Corporate Events In Peterborough",
    href: "/corporate-events-peterborough",
    category: "Corporate",
  },
  {
    title: "Kids Party Ideas In Peterborough",
    href: "/kids-parties-peterborough",
    category: "Parties",
  },
  {
    title: "Teen Party Ideas In Peterborough",
    href: "/teen-parties-peterborough",
    category: "Parties",
  },
];

const blogCategories = [
  "Things to do",
  "Indoor activities",
  "Birthday parties",
  "Team building",
  "Date nights",
  "Family days out",
  "Group bookings",
  "Food and drinks",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,214,0.35),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_70%_80%,rgba(215,25,32,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#7c3cff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Playard Blog
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            IDEAS.
            <br />
            GUIDES.
            <br />
            GOOD TIMES.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Discover things to do in Peterborough, birthday ideas, date nights, team building activities, family days out and inspiration for your next Playard visit.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#7c3cff] px-6 py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-black shadow-xl"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Featured guides</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Start with the searches that matter.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="flex min-h-[460px] flex-col border-4 border-black bg-white p-6 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
              >
                <div className="mb-6 flex h-48 items-end bg-[#7c3cff] p-5 text-white">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                    Blog image
                  </span>
                </div>
                <p className="section-label mb-3">{post.category}</p>
                <h3 className="mb-5 text-4xl font-black tracking-tight">
                  {post.title}
                </h3>
                <p className="mb-8 font-bold leading-8 text-zinc-700">{post.excerpt}</p>
                <span className="mt-auto text-sm font-black uppercase tracking-wide text-zinc-300">
                  Read guide
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label mb-5">SEO content plan</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Local Guides People Actually Search For.
            </h2>
            <p className="text-lg font-bold leading-8 text-zinc-300">
              The blog should focus on high intent searches, not random updates.
              Every article should guide people towards booking an activity,
              party, corporate event or group session at Playard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {articleIdeas.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="border-4 border-white bg-[#111111] p-6 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  {post.category}
                </p>
                <h3 className="text-2xl font-black tracking-tight">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 text-black shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Ready to play?
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Found Something Fun?
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Explore activities, plan a birthday, organise a work social or book your next competitive night out at Playard Peterborough.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/activities"
                className="rounded-md bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                View Activities
              </Link>
              <Link
                href="/book"
                className="rounded-md bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}