"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";
import NavLink from "@/components/NavLink";
import Link from "next/link";

const foodDrinksCarouselImages = [
  {
    src: "/images/venue/food-drinks.jpeg",
    alt: "Food and snacks at Playard Peterborough",
  },
  {
    src: "/images/venue/drinks.jpeg",
    alt: "Drinks at Playard Peterborough",
  },
];

const games = [
  {
    name: "Interactive Darts",
    href: "/interactive-darts-peterborough",
    image: "/images/activities/darts.jpeg",
    colour: "bg-[#d71920] text-white",
    note: "Digital darts. Automatic scoring. Massive reactions.",
    trackEvent: "darts_booking_clicked" as const,
  },
  {
    name: "Pool",
    href: "/pool-peterborough",
    image: "/images/activities/pool.jpeg",
    colour: "bg-[#00b86b] text-white",
    note: "Classic games. Friendly rivalries. One more frame.",
    trackEvent: "pool_booking_clicked" as const,
  },
  {
    name: "Shuffleboard",
    href: "/shuffleboard-peterborough",
    image: "/images/activities/shuffleboard.jpeg",
    colour: "bg-[#f59e0b] text-black",
    note: "Slide first. Talk later. Perfect with drinks.",
    trackEvent: "shuffleboard_booking_clicked" as const,
  },
  {
    name: "Street Curling",
    href: "/street-curling-peterborough",
    image: "/images/activities/curling.jpeg",
    colour: "bg-[#9eeaff] text-black",
    note: "Curling without the ice. Easy to learn. Hard to master.",
    trackEvent: "curling_booking_clicked" as const,
  },
  {
    name: "VR",
    href: "/vr-peterborough",
    image: "/images/activities/vr.jpeg",
    colour: "bg-[#7c3cff] text-white",
    note: "Step in. Switch worlds. Battle, escape and compete.",
    trackEvent: "vr_booking_clicked" as const,
  },
  {
    name: "SimShooting",
    href: "/simhunt-peterborough",
    image: "/images/activities/simhunt.jpeg",
    colour: "bg-[#ff7a00] text-white",
    note: "Big screen simulator action for groups who want something different.",
    trackEvent: "simshooting_booking_clicked" as const,
  },
  {
    name: "Table Tennis",
    href: "/table-tennis-peterborough",
    image: "/images/activities/table-tennis.jpeg",
    colour: "bg-[#ff2bd6] text-white",
    note: "Fast rallies, quick rematches and loud reactions.",
    trackEvent: "table_tennis_booking_clicked" as const,
  },
  {
    name: "Games Lounge",
    href: "/games-lounge-peterborough",
    image: "/images/activities/games-lounge.jpg",
    colour: "bg-[#00d4ff] text-black",
    note: "Cornhole, table football, board games and social chaos.",
    trackEvent: "activities_clicked" as const,
  },
];

const quickLinks = [
  { title: "Gift Cards", href: "/gift-cards", colour: "bg-[#111111] text-white", trackEvent: "gift_card_clicked" as const },
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

const eventsExperiences = [
  {
    title: "Sip & Paint",
    text: "Paint, sip, laugh and create something worth taking home.",
    colour: "bg-[#d71920] text-white",
    labelClass: "text-white/80",
    copyClass: "text-white/90",
  },
  {
    title: "Open Mic Night",
    text: "Music, comedy, spoken word and local talent in a relaxed games bar setting.",
    colour: "bg-[#00d4ff] text-black",
    labelClass: "text-black/70",
    copyClass: "text-black/80",
  },
  {
    title: "Games Night",
    text: "Board games, card games, casual competitions and social nights with food and drinks.",
    colour: "bg-[#ff2bd6] text-white",
    labelClass: "text-white/80",
    copyClass: "text-white/90",
  },
  {
    title: "Tournaments",
    text: "Darts, pool, table tennis and shuffleboard competitions for bragging rights and prizes.",
    colour: "bg-[#ff7a00] text-white",
    labelClass: "text-white/80",
    copyClass: "text-white/90",
  },
];


function FoodDrinksCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = Math.max(0, Math.min(index, foodDrinksCarouselImages.length - 1));
    container.scrollTo({
      left: container.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.clientWidth === 0) return;

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(nextIndex);
  }, []);

  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-2xl border-4 border-[#f59e0b] shadow-2xl sm:min-h-[360px] lg:min-h-[420px]">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {foodDrinksCarouselImages.map((image, index) => (
          <div
            key={image.src}
            className="relative min-h-[260px] w-full shrink-0 snap-center snap-always sm:min-h-[360px] lg:min-h-[420px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous food and drinks photo"
        onClick={() => scrollToIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
        className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/75 text-2xl font-black leading-none text-white transition hover:border-[#f59e0b] hover:bg-[#d71920] disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next food and drinks photo"
        onClick={() => scrollToIndex(activeIndex + 1)}
        disabled={activeIndex === foodDrinksCarouselImages.length - 1}
        className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/75 text-2xl font-black leading-none text-white transition hover:border-[#f59e0b] hover:bg-[#d71920] disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        ›
      </button>
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-[#111111]">
      <div className="relative isolate overflow-hidden bg-black">
        <video
          className="absolute inset-0 -z-30 h-full w-full bg-black object-cover object-center opacity-100 lg:hidden"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/playard-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-black/45 lg:bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.28),transparent_24rem),radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.16),transparent_24rem),#050505]" />

        <section className="relative flex min-h-[100vh] items-center overflow-hidden px-4 py-20 text-white sm:px-6 md:py-24 lg:min-h-[92vh]">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rotate-[-3deg] bg-[#d71920] px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl sm:text-sm">
                Peterborough games bar
              </div>

              <h1 className="mb-6 max-w-4xl text-[3.35rem] font-black uppercase leading-[0.82] tracking-[-0.08em] text-white sm:text-[4.4rem] md:text-[5.8rem] lg:text-[6.6rem]">
                Play.
                <br />
                Connect.
                <br />
                Compete.
              </h1>

              <p className="mb-8 hidden max-w-2xl bg-black/45 p-4 text-base font-bold leading-7 text-white backdrop-blur sm:block sm:p-5 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                Darts, pool, shuffleboard, VR, street curling, food, parties,
                birthdays, work socials and big group days and nights out in Peterborough city centre.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="rotate-[1.5deg] border-4 border-white bg-black p-3 shadow-2xl lg:min-h-[720px]">
                <video
                  className="h-[720px] w-full bg-black object-cover object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/playard-hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>

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
            <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  trackEvent={"trackEvent" in item ? item.trackEvent : undefined}
                  className={`border-4 border-black p-6 text-center text-2xl font-black uppercase tracking-[-0.04em] shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${item.colour}`}
                >
                  {item.title}
                </NavLink>
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
                <NavLink
                  key={game.name}
                  href={game.href}
                  trackEvent={game.trackEvent}
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
                    <span
                      className={`${
                        game.name === "Games Lounge"
                          ? "bg-[#d71920] text-white"
                          : game.colour
                      } px-3 py-3 text-center text-xs font-black uppercase tracking-wide sm:px-4 sm:py-4 sm:text-sm`}
                    >
                      {game.name === "Games Lounge"
                        ? "Free With Food & Drinks"
                        : "Book Now"}
                    </span>
                    <span className="bg-zinc-900 px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-white sm:px-4 sm:py-4 sm:text-sm">
                      Learn More
                    </span>
                  </div>

                  <p className="px-4 pb-5 text-left text-sm font-bold leading-6 text-zinc-300 sm:px-5 sm:pb-6">
                    {game.note}
                  </p>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
            Events & Experiences
          </p>
          <h2 className="mb-5 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
            More Reasons To Come Out.
          </h2>
          <p className="mx-auto mb-10 max-w-4xl text-lg font-bold leading-8 text-zinc-300 sm:text-xl md:text-2xl md:leading-9">
            From sip and paint nights to open mic sessions, games nights and tournaments, Playard is building a calendar of social experiences in Peterborough.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {eventsExperiences.map((item) => (
              <div
                key={item.title}
                className={`${item.colour} min-h-[280px] p-7 text-left shadow-2xl transition hover:-translate-y-3 hover:rotate-[1deg] sm:min-h-[330px] sm:p-8`}
              >
                <p className={`mb-5 text-sm font-black uppercase tracking-[0.22em] ${item.labelClass}`}>
                  Coming Soon
                </p>
                <h3
                  className={`mb-5 font-black uppercase leading-none tracking-[-0.06em] ${
                    item.title === "Tournaments"
                      ? "text-3xl md:text-4xl"
                      : "text-4xl sm:text-5xl"
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`text-lg font-bold leading-8 sm:text-xl ${item.copyClass}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FoodDrinksCarousel />
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              Food & Drink
            </p>
            <div className="mb-5 inline-flex rotate-[2deg] border-2 border-[#f59e0b] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Full menu coming soon
            </div>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Come Hungry. Leave Competitive.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Drinks, hot dogs, chicken, snacks and easy food options while you play. Our full menu is being finalised and will be available soon.
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
              Midweek games, student nights, group booking savings, birthday extras and limited time offers.
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

          <div className="overflow-hidden border-4 border-black bg-black shadow-2xl">
            <div className="border-b-4 border-black bg-[#d71920] p-4 text-center text-white">
              <p className="text-sm font-black uppercase tracking-[0.3em]">
                How To Find Us
              </p>
            </div>

            <video
              className="h-[300px] w-full object-cover sm:h-[420px]"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/videos/playard-find-us.mp4" type="video/mp4" />
            </video>
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
            <FunbutlerBookingModal
              bookingFormId="673706716dbb45cccad59994"
              buttonText="Book Now"
              title="Book Playard"
              subtitle="Activities, parties, group bookings and Playard packages."
              className="w-full bg-[#d71920] px-8 py-5 text-white"
              trackEvent="quick_book_clicked"
            />
            <NavLink
              href="/activities"
              trackEvent="activities_clicked"
              className="border-2 border-black px-8 py-5 text-center font-black uppercase tracking-wide text-black hover:bg-black hover:text-white"
            >
              View Activities
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}