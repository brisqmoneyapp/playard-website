import Link from "next/link";

const games = [
  {
    name: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    image: "/images/activities/darts.jpg",
    colour: "bg-[#d71920] text-white",
    note: "Digital darts. Automatic scoring. Massive reactions.",
  },
  {
    name: "Pool",
    href: "/pool-peterborough",
    image: "/images/activities/pool.jpg",
    colour: "bg-[#00b86b] text-white",
    note: "Classic games. Friendly rivalries. One more frame.",
  },
  {
    name: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    image: "/images/activities/shuffleboard.jpg",
    colour: "bg-[#f59e0b] text-black",
    note: "Slide first. Talk later. Perfect with drinks.",
  },
  {
    name: "Street Curling",
    href: "/street-curling-peterborough",
    image: "/images/activities/curling.jpg",
    colour: "bg-[#9eeaff] text-black",
    note: "Curling without the ice. Easy to learn. Hard to master.",
  },
  {
    name: "VR",
    href: "/vr-peterborough",
    image: "/images/activities/vr.jpg",
    colour: "bg-[#7c3cff] text-white",
    note: "Step in. Switch worlds. Battle, escape and compete.",
  },
  {
    name: "SimShooting",
    href: "/simhunt-peterborough",
    image: "/images/activities/simhunt.jpg",
    colour: "bg-[#ff7a00] text-white",
    note: "Big screen simulator action for groups who want something different.",
  },
  {
    name: "Table Tennis",
    href: "/table-tennis-peterborough",
    image: "/images/activities/table-tennis.jpg",
    colour: "bg-[#ff2bd6] text-white",
    note: "Fast rallies, quick rematches and loud reactions.",
  },
  {
    name: "Games Lounge",
    href: "/games-lounge-peterborough",
    image: "/images/activities/games-lounge.jpg",
    colour: "bg-[#00d4ff] text-black",
    note: "Cornhole, table football, board games and social chaos.",
  },
];

const quickLinks = [
  { title: "Book Games", href: "/book", colour: "bg-[#d71920] text-white" },
  { title: "Gift Cards", href: "/gift-cards", colour: "bg-[#111111] text-white" },
  { title: "Food & Drinks", href: "/food-and-drinks", colour: "bg-[#f59e0b] text-black" },
  { title: "Parties", href: "/parties", colour: "bg-[#ff2bd6] text-white" },
  { title: "Corporate", href: "/corporate-events", colour: "bg-[#00d4ff] text-black" },
];

const moments = [
  {
    title: "Date Night",
    href: "/things-to-do-peterborough",
    text: "Less awkward silence. More games, drinks and laughing at each other.",
    colour: "bg-[#ff2bd6]",
  },
  {
    title: "Birthdays",
    href: "/birthday-parties-peterborough",
    text: "Kids, teens, adults and big group birthday chaos under one roof.",
    colour: "bg-[#7c3cff]",
  },
  {
    title: "Work Socials",
    href: "/corporate-events",
    text: "Swap the stiff restaurant table for games, drinks and bragging rights.",
    colour: "bg-[#d71920]",
  },
];

const whatsOn = [
  "Birthday Parties",
  "Work Socials",
  "Student Nights",
  "Group Bookings",
  "Food & Drinks",
  "Gift Cards",
  "Tournaments Coming Soon",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-[#111111]">
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 md:py-24 lg:min-h-[92vh]">
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-45 md:opacity-55"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/venue/hero-poster.jpg"
        >
          <source src="/videos/playard-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-black/62" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(215,25,32,0.42),transparent_20rem),radial-gradient(circle_at_82%_20%,rgba(0,212,255,0.26),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(255,43,214,0.24),transparent_22rem)]" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rotate-[-3deg] bg-[#d71920] px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl sm:text-sm">
              Peterborough games bar
            </div>

            <h1 className="mb-6 max-w-5xl text-[4.4rem] font-black uppercase leading-[0.76] tracking-[-0.1em] text-white sm:text-[5.7rem] md:text-[8rem] lg:text-[10.8rem]">
              Play.
              <br />
              Connect.
              <br />
              Compete.
            </h1>

            <p className="mb-8 max-w-3xl bg-black/55 p-4 text-lg font-bold leading-7 text-white backdrop-blur sm:p-5 sm:text-xl sm:leading-8 md:text-2xl md:leading-10">
              Darts, pool, shuffleboard, VR, street curling, food, parties,
              birthdays, work socials and big group days and nights out in Peterborough city centre.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <Link
                href="/book"
                className="bg-[#00d4ff] px-6 py-4 text-center text-base font-black uppercase tracking-wide text-black transition hover:rotate-[-2deg] hover:scale-[1.03] sm:px-7 sm:py-5 sm:text-lg"
              >
                Book Now
              </Link>
              <Link
                href="/activities"
                className="bg-[#d71920] px-6 py-4 text-center text-base font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:scale-[1.03] sm:px-7 sm:py-5 sm:text-lg"
              >
                Choose Game
              </Link>
              <Link
                href="/food-and-drinks"
                className="border-2 border-white px-6 py-4 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black sm:px-7 sm:py-5 sm:text-lg"
              >
                Food & Drinks
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-[3deg] border-4 border-white bg-black/70 p-8 shadow-2xl backdrop-blur">
              <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
                Tonight at Playard
              </p>
              <div className="grid gap-3">
                {whatsOn.map((item) => (
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

      <section className="rotate-[-1deg] scale-[1.03] border-y-4 border-black bg-[#00d4ff] py-4 text-black sm:py-5">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 text-base font-black uppercase tracking-[-0.03em] sm:text-xl md:text-2xl">
          <span>Games Bar</span>
          <span>•</span>
          <span>Darts</span>
          <span>•</span>
          <span>Pool</span>
          <span>•</span>
          <span>Shuffleboard</span>
          <span>•</span>
          <span>VR</span>
          <span>•</span>
          <span>Food</span>
          <span>•</span>
          <span>Gift Cards</span>
          <span>•</span>
          <span>Parties</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-4 py-16 text-black sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-4 border-black p-6 text-center text-2xl font-black uppercase tracking-[-0.04em] shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${item.colour}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-4 pb-20 text-black sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-5 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
            Choose Your Game
          </h2>
          <p className="mx-auto mb-10 max-w-4xl text-lg font-bold leading-8 sm:text-xl md:text-2xl md:leading-9">
            Pick a game, grab a drink, bring your mates and make it a proper Playard night.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="group overflow-hidden bg-black text-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.03]"
              >
                <div className="relative h-56 overflow-hidden bg-zinc-800 sm:h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${game.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/65 p-4 backdrop-blur-sm sm:p-5">
                    <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.05em] sm:text-3xl">
                      {game.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-0 p-3 sm:p-4">
                  <span className={`${game.colour} px-3 py-3 text-center text-xs font-black uppercase tracking-wide sm:px-4 sm:py-4 sm:text-sm`}>
                    Book Now
                  </span>
                  <span className="bg-zinc-900 px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-white sm:px-4 sm:py-4 sm:text-sm">
                    Learn More
                  </span>
                </div>

                <p className="px-4 pb-5 text-left text-sm font-bold leading-6 text-zinc-300 sm:px-5 sm:pb-6">
                  {game.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="min-h-[260px] bg-[url('/images/venue/food-drinks.jpg')] bg-cover bg-center shadow-2xl sm:min-h-[360px] lg:min-h-[420px]" />
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Food & Drink
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Come Hungry. Leave Competitive.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Burgers, loaded fries, bar snacks, cocktails, beer, shots and soft drinks. Come for one drink. Stay because someone wants a rematch.
            </p>
            <Link
              href="/food-and-drinks"
              className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
            >
              View Food & Drinks
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-4 py-16 text-black sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
            Pick Your Excuse
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {moments.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${item.colour} min-h-[280px] p-7 text-white shadow-2xl transition hover:-translate-y-3 hover:rotate-[1deg] sm:min-h-[330px] sm:p-8 lg:min-h-[360px]`}
              >
                <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-white/80">
                  Good for
                </p>
                <h3 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
                  {item.title}
                </h3>
                <p className="text-lg font-bold leading-8 text-white/90 sm:text-xl">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="border-2 border-white/20 p-6 sm:p-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#c8ff00]">
              What&apos;s On
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
              Bragging Rights. Prize Nights. Rematches.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-300">
              Darts leagues, pool battles, table tennis knockouts and tournament nights are coming soon.
            </p>
            <Link href="/tournaments" className="inline-flex bg-[#ff7a00] px-7 py-4 font-black uppercase tracking-wide text-white">
              Tournaments Coming Soon
            </Link>
          </div>

          <div className="border-2 border-white/20 p-6 sm:p-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Offers
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
              Deals That Wake Up The Group Chat.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-300">
              Midweek games, student nights, City Pass perks, birthday extras and limited time offers.
            </p>
            <Link href="/offers" className="inline-flex bg-[#00d4ff] px-7 py-4 font-black uppercase tracking-wide text-black">
              View Offers
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-4 py-16 text-black sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Find Us
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Playard Peterborough.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-800 sm:text-xl sm:leading-9">
              26 Hereward Cross, Peterborough, PE1 1TE. City centre games bar, close to shops, transport links and nearby car parks.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/parking-and-directions" className="bg-[#d71920] px-7 py-4 text-center font-black uppercase tracking-wide text-white">
                Parking & Directions
              </Link>
              <a href="mailto:info@playard.co.uk?subject=Playard Enquiry" className="border-2 border-black px-7 py-4 text-center font-black uppercase tracking-wide text-black hover:bg-black hover:text-white">
                Email Playard
              </a>
            </div>
          </div>

          <div className="flex min-h-[300px] items-center justify-center border-4 border-black bg-white text-center shadow-2xl sm:min-h-[420px]">
            <div className="px-6 sm:px-8">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#d71920]">
                Map
              </p>
              <p className="mb-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">
                Google Map Goes Here
              </p>
              <p className="font-bold text-zinc-700">
                Replace this with the embedded Google Map for 26 Hereward Cross.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00d4ff] px-4 py-16 text-black sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-black/70">
              The Next Round Starts Here
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Bring The Group. We&apos;ll Bring The Games.
            </h2>
            <p className="max-w-3xl text-lg font-bold leading-8 text-black/80 sm:text-xl sm:leading-9">
              Book a game, plan a party, organise a work social or walk in for food, games and good times in Peterborough city centre.
            </p>
          </div>

          <div className="grid gap-3">
            <Link href="/book" className="bg-[#d71920] px-8 py-5 text-center font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]">
              Book Now
            </Link>
            <Link href="/activities" className="border-2 border-black px-8 py-5 text-center font-black uppercase tracking-wide text-black hover:bg-black hover:text-white">
              View Activities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

      <section className="bg-white px-4 py-16 text-black sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Gift Cards
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Give The Gift Of Games.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-700 sm:text-xl sm:leading-9">
              Perfect for birthdays, Christmas gifts, family treats, staff rewards and anyone who deserves a Playard night out.
            </p>
            <Link
              href="/gift-cards"
              className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:scale-[1.03]"
            >
              Buy Gift Card
            </Link>
          </div>

          <Link
            href="/gift-cards"
            className="order-1 block rotate-[2deg] border-4 border-black bg-black p-4 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg] lg:order-2"
          >
            <div className="min-h-[260px] bg-[url('/images/gift-cards/gift-card-hero.jpeg')] bg-cover bg-center sm:min-h-[360px] lg:min-h-[420px]" />
          </Link>
        </div>
      </section>