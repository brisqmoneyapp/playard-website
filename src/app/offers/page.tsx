import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offers & Promotions | Playard Peterborough",
  description:
    "Discover the latest Playard offers, group deals, family promotions, student discounts and seasonal specials in Peterborough.",
};

const offers = [
  {
    title: "Midweek Socials",
    description:
      "Beat the crowds and enjoy discounted gaming sessions during selected weekdays.",
    status: "Available Now",
  },
  {
    title: "Family Activity Deals",
    description:
      "More activities, more laughs and better value for families visiting together.",
    status: "Available Now",
  },
  {
    title: "Student Offers",
    description:
      "Affordable gaming, competitions and social nights designed for students.",
    status: "Seasonal",
  },
  {
    title: "Group Booking Savings",
    description:
      "Bring the whole group and unlock exclusive savings and added extras.",
    status: "Available Now",
  },
  {
    title: "Birthday Bonuses",
    description:
      "Celebrate in style with bonus extras available on selected birthday bookings.",
    status: "Available Now",
  },
  {
    title: "Corporate Packages",
    description:
      "Competitive team experiences with activities, food and drinks included.",
    status: "Available Now",
  },
  {
    title: "Gift Cards",
    description:
      "Treat friends, family, colleagues or staff to games, food and good times with a Playard gift card.",
    status: "Available Now",
  },
];

const reasons = [
  "Save on activities",
  "Group friendly offers",
  "Family value deals",
  "Seasonal promotions",
  "Gift cards available",
];

export default function OffersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#f59e0b] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Playard Deals
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            DEALS.
            <br />
            OFFERS.
            <br />
            MORE FUN.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Student nights, group deals, birthday bonuses, family offers and seasonal promotions designed to get everyone playing.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#f59e0b] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
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
          <div className="mb-12">
            <p className="section-label mb-5">Current Offers</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Big deals. Bigger nights out.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="border-4 border-black bg-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
              >
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#d71920]">
                  {offer.status}
                </p>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">
                  {offer.title}
                </h3>
                <p className="font-bold leading-8 text-zinc-700">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-[#fff3dd] p-8 shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#d71920]">
                Gift Cards
              </p>
              <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
                Give The Gift Of Games.
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-8 text-zinc-700">
                Looking for a birthday present, Christmas gift, thank you reward or staff incentive? A Playard gift card lets them choose their own adventure.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/gift-cards"
                className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Buy Gift Card
              </Link>

              <Link
                href="/gift-cards"
                className="bg-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-600">
                Special Pricing
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Need a custom package?
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-8 text-zinc-300">
                Planning a birthday, corporate event or large group booking? Get
                in touch and we can discuss available offers and packages.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@playard.co.uk?subject=Playard Offer Enquiry"
                className="bg-[#d71920] px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Contact Us
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
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            FAN FAVOURITES.
          </h2>

          <div className="grid gap-6 md:grid-cols-5">
            <div className="border-4 border-black bg-[#f59e0b] p-8"><h3 className="text-3xl font-black uppercase">Student Nights 🎓</h3></div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white"><h3 className="text-3xl font-black uppercase">Group Deals 👥</h3></div>
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white"><h3 className="text-3xl font-black uppercase">Birthday Extras 🎉</h3></div>
            <div className="border-4 border-black bg-[#00d4ff] p-8"><h3 className="text-3xl font-black uppercase">Family Offers 👨‍👩‍👧‍👦</h3></div>
            <div className="border-4 border-black bg-[#111111] p-8 text-white"><h3 className="text-3xl font-black uppercase">Gift Cards 🎁</h3></div>
          </div>
        </div>
      </section>
    </main>
  );
}