import Link from "next/link";

export const metadata = {
  title: "Investment & Sponsorship | Playard Peterborough",
  description:
    "Learn about investment opportunities, sponsorship partnerships and venue branding opportunities at Playard Peterborough.",
};

const sponsorOptions = [
  {
    title: "Sponsor a Darts Lane",
    copy: "Put your brand around one of our interactive darts lanes, with visibility during social bookings, birthday groups, corporate events and tournament nights.",
  },
  {
    title: "Sponsor a Pool Table",
    copy: "Associate your business with one of the most recognisable social games in the venue through table area branding and promotional visibility.",
  },
  {
    title: "Sponsor a Shuffleboard Table",
    copy: "Promote your brand around a high dwell time activity where customers spend time playing, drinking, watching and socialising.",
  },
  {
    title: "Sponsor a Street Curling Lane",
    copy: "Support one of Playard's most unique activities and reach families, groups, work socials and customers looking for something different.",
  },
  {
    title: "Sponsor a Tournament",
    copy: "Back darts, pool, table tennis, shuffleboard or special competition nights with brand exposure linked to prizes, fixtures, winners and event promotion.",
  },
  {
    title: "Sponsor a Leaderboard",
    copy: "Feature your brand around rankings, challenges, high scores, league tables and customer competitions as Playard expands its competitive games platform.",
  },
  {
    title: "Digital Screen Advertising",
    copy: "Advertise your business across selected venue screens, event screens, tournament displays and future scoreboard content.",
  },
  {
    title: "Corporate Partnership Packages",
    copy: "Create partnership packages for staff rewards, customer perks, networking events, corporate socials and regular business group bookings.",
  },
  {
    title: "Investor Enquiries",
    copy: "Speak to us about investment, strategic growth, venue improvements, future expansion and commercial partnership opportunities. We are always open to conversations with investors and strategic partners who can help accelerate growth, improve facilities, introduce new experiences or support future expansion opportunities.",
  },
];

const whySponsor = [
  "Reach customers during social, family, birthday and corporate visits.",
  "Place your brand in an environment where people spend time, play and talk.",
  "Support a growing Peterborough city centre venue with strong community potential.",
  "Connect your business with fun, competition, events and memorable nights out.",
];

export default function InvestmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white md:py-32">
        <div className="noise-overlay" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex rotate-[-2deg] bg-playard-red px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
              Investment & Sponsorship
            </div>

            <h1 className="mb-8 whitespace-pre-line text-6xl font-black uppercase leading-none tracking-[-0.08em] md:text-8xl lg:text-9xl">
              INVEST.
              GROW.
              BUILD THE FUTURE.
            </h1>

            <p className="max-w-4xl text-xl leading-9 text-zinc-300 md:text-2xl">
              Playard is one of Peterborough's newest competitive social gaming venues. We are continually investing in new activities, experiences and venue improvements and welcome conversations with investors, sponsors, commercial partners and businesses looking to grow alongside us.
            </p>
          </div>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#d71920] px-6 py-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            'Peterborough City Centre',
            'Multiple Activities',
            'Families, Adults & Businesses',
            'Growth & Expansion Plans',
          ].map((item) => (
            <div key={item} className="bg-white p-5 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-10 shadow-2xl md:p-16">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-playard-red">
            Why Playard?
          </p>

          <h2 className="mb-8 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            Built for Peterborough.
          </h2>

          <div className="space-y-6 text-xl font-bold leading-9 text-zinc-700">
            <p>
              Playard was created to help bring more life back into Peterborough city centre.
            </p>

            <p>
              We wanted to create a venue where children, teenagers, adults, families and businesses could all enjoy themselves together.
            </p>

            <p>
              Unlike many entertainment venues that focus on a single activity, Playard combines multiple social experiences under one roof, creating more reasons for customers to visit, stay longer and return.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-playard-red">
              Why Sponsor Playard?
            </p>

            <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
              Your brand in the middle of the action.
            </h2>

            <p className="text-lg leading-8 text-zinc-300">
              Playard brings together games, food, drinks, birthdays, work socials,
              family visits, tournaments and group nights out in Peterborough city centre.
              Sponsorship gives local and regional businesses a chance to place their brand
              inside a venue where people are actively playing, socialising and creating memories.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whySponsor.map((item) => (
              <div
                key={item}
                className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <p className="text-xl font-black leading-8 text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-playard-red">
              Sponsorship Opportunities
            </p>

            <h2 className="text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
              Sponsor the games people remember.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorOptions.map((item) => (
              <div
                key={item.title}
                className="border-4 border-white bg-[#111111] p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-4 text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="leading-8 text-zinc-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-playard-red">
            Where Sponsorship Could Appear
          </p>

          <h2 className="mb-10 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            Your brand where people engage.
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {[
              'Interactive Darts',
              'Pool Tables',
              'Shuffleboard',
              'Street Curling',
              'Tournament Screens',
              'TV Displays',
              'Leaderboards',
              'Social Media',
              'Customer Emails',
            ].map((item) => (
              <div key={item} className="border-4 border-black bg-white p-8 shadow-xl">
                <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-4 border-playard-red bg-white px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-red-700">
              Advertising In Peterborough
            </p>

            <h2 className="mb-8 text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">
              Looking to advertise your business in Peterborough?
            </h2>

            <p className="text-xl font-bold leading-9 text-zinc-800">
              Your brand could be displayed on activity areas, scoreboards,
              tournament screens, venue signage, event materials and customer communications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Activity Area Branding",
              "Scoreboards",
              "Tournament Screens",
              "Venue Signage",
              "Event Materials",
              "Customer Emails",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-[150px] items-end border-4 border-black bg-playard-red p-6 text-white"
              >
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-4 border-black bg-white p-10 text-black shadow-2xl md:p-16">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Get In Touch
        </p>

        <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
          Let's Talk.
        </h2>

        <p className="mb-10 text-xl leading-9 text-zinc-700">
          If you are interested in investment opportunities, sponsorship packages,
          advertising your business, branding a game area or building a strategic partnership,
          we'd love to hear from you.
        </p>

        <a
          href="mailto:info@playard.co.uk?subject=Playard Investment, Sponsorship and Advertising Enquiry&body=Hi Playard,%0D%0A%0D%0AI would like to enquire about investment, sponsorship or advertising opportunities.%0D%0A%0D%0AName:%0D%0ABusiness:%0D%0APhone:%0D%0AInterested in:%0D%0A%0D%0AThanks"
          className="inline-flex bg-playard-red px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:bg-[#ef233c]"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}