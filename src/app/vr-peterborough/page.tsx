import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";

import ActivityStructuredData from "@/components/ActivityStructuredData";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/vr-peterborough");

const featureCards = [
  "Multiplayer VR",
  "Zombie Games",
  "Family Adventures",
  "Team Challenges",
  "Birthday Parties",
];

const reasonsStrip = [
  "VR",
  "MULTIPLAYER",
  "ZOMBIES",
  "ADVENTURES",
  "PARTIES",
  "TEAM BUILDING",
];

const experiences = [
  "Family VR Adventures",
  "Kids Party Experiences",
  "Teen Gaming Sessions",
  "Cooperative Missions",
  "Competitive Challenges",
  "Corporate VR Events",
];

const chooseRealityCards = [
  "Zombie Survival",
  "Escape Rooms",
  "Team Missions",
  "Family Adventures",
  "Arcade Challenges",
  "Competitive Battles",
];

const howItWorksCards = [
  {
    title: "Choose Your Experience",
    description:
      "Select the perfect VR adventure tailored to your group’s interests and skill level.",
  },
  {
    title: "Gear Up",
    description:
      "Get fitted with the latest VR gear and controls to ensure an immersive experience.",
  },
  {
    title: "Enter The Game",
    description:
      "Step inside the virtual world and compete, explore, and enjoy with friends.",
  },
];

const faqs = [
  {
    question: "Do I need prior VR experience?",
    answer:
      "No experience necessary! Our team will guide you through the basics to get you started quickly.",
  },
  {
    question: "Is VR safe for all ages?",
    answer:
      "Yes, we have age-appropriate experiences suitable for kids, teens, and adults.",
  },
  {
    question: "Can large groups participate together?",
    answer:
      "Absolutely! Many of our VR experiences support multiplayer modes ideal for groups.",
  },
  {
    question: "Can I combine VR with other activities?",
    answer:
      "Yes! Guests often combine VR with food, drinks, and other games for a full day of fun.",
  },
];

const neonColors = ["#7c3cff", "#00d4ff", "#ff2bd6"];

const vrCatalogueCards = [
  {
    title: "Arcade Games",
    href: "/vr-arcade-games-peterborough",
    color: "#7c3cff",
    text: "Sports, shooters, rhythm games, puzzles, family favourites and multiplayer VR arcade experiences.",
    button: "View Arcade Games",
    textClass: "text-white",
    buttonClass: "bg-black text-white hover:bg-white hover:text-black",
  },
  {
    title: "Escape Rooms",
    href: "/vr-escape-rooms-peterborough",
    color: "#00d4ff",
    text: "Work together to solve puzzles, complete missions and see if your team can beat the room record.",
    button: "View Escape Rooms",
    textClass: "text-black",
    buttonClass: "bg-black text-white hover:bg-white hover:text-black",
  },
  {
    title: "Free Roam VR",
    href: "/free-roam-vr-peterborough",
    color: "#ff2bd6",
    text: "Move freely inside shared virtual worlds with action, adventure and multiplayer experiences for groups.",
    button: "View Free Roam VR",
    textClass: "text-white",
    buttonClass: "bg-black text-white hover:bg-white hover:text-black",
  },
];

export default function VRPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <ActivityStructuredData name="VR Experiences" path="/vr-peterborough" />
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center bg-black px-6 py-24 lg:py-48 overflow-hidden">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="big-heading text-[4.5rem] md:text-[6rem] leading-[1] uppercase font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] mb-8 select-none">
            STEP.<br />
            INTO.<br />
            ANOTHER WORLD.
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-2xl font-semibold text-[#00d4ff] mb-10 leading-relaxed">
            Battle zombies, escape virtual worlds, compete with friends and experience gaming like you've never seen before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
            <TrackedLink
              href="#book-vr"
              eventName="vr_booking_clicked"
              className="rounded-md bg-[#7c3cff] px-8 py-4 text-center font-black uppercase tracking-wide text-white shadow-neon hover:shadow-neon-lg transition-shadow duration-300"
            >
              Book VR
            </TrackedLink>
            <Link
              href="/activities"
              className="rounded-md border-4 border-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-colors duration-300"
            >
              All Games
            </Link>
            <Link
              href="/food-and-drinks"
              className="rounded-md border-4 border-[#ff2bd6] px-8 py-4 text-center font-black uppercase tracking-wide text-[#ff2bd6] hover:bg-[#ff2bd6] hover:text-black transition-colors duration-300"
            >
              Food & Drinks
            </Link>
          </div>
        </div>

        {/* Neon Tilted Feature Card */}
        <div className="lg:w-1/2 flex justify-center relative z-0">
          <div
            className="bg-black bg-opacity-90 border border-[#7c3cff] rounded-3xl p-10 max-w-sm rotate-[-10deg] shadow-[0_0_20px_#7c3cff] select-none"
            style={{ filter: "drop-shadow(0 0 10px #7c3cff)" }}
          >
            <h2 className="text-[#ff2bd6] uppercase font-black text-4xl mb-6 tracking-widest text-center">
              Featured
            </h2>
            <ul className="space-y-4 text-white font-extrabold text-xl">
              {featureCards.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-r before:from-[#7c3cff] before:via-[#00d4ff] before:to-[#ff2bd6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] opacity-20 blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* Reasons Strip */}
      <section className="bg-[#00d4ff] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-black font-extrabold uppercase text-center text-lg md:text-2xl tracking-widest select-none">
            {reasonsStrip.join(" • ")}
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="uppercase font-black text-5xl md:text-7xl mb-16 tracking-tight text-center">
          Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {experiences.map((item, i) => {
            const color = neonColors[i % neonColors.length];
            return (
              <div
                key={item}
                className="rounded-3xl p-10 text-white uppercase font-black text-3xl text-center cursor-pointer shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, #000000 100%)`,
                  boxShadow: `0 0 20px ${color}`,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Book VR Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="uppercase font-black text-5xl md:text-7xl mb-10 tracking-tight text-center">
          The closest thing to stepping inside a video game.
        </h2>
        <p className="text-center max-w-3xl mx-auto text-lg font-semibold leading-relaxed text-[#7c3cff]">
          Virtual reality delivers experiences that simply cannot be recreated anywhere else. Explore, compete and collaborate in immersive worlds designed for unforgettable group experiences.
        </p>
      </section>

      {/* Choose Your Reality Dark Neon Section */}
      <section className="bg-black py-24 px-6">
        <h2 className="uppercase font-black text-5xl md:text-7xl mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] tracking-tight">
          Choose Your Reality
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {chooseRealityCards.map((card) => (
            <div
              key={card}
              className="bg-gradient-to-tr from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] rounded-3xl p-12 text-black uppercase font-black text-4xl text-center cursor-pointer shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300"
              style={{
                filter: "drop-shadow(0 0 15px #00d4ff)",
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Cream Section */}
      <section className="bg-[#fff3dd] py-24 px-6 max-w-7xl mx-auto">
        <h2 className="uppercase font-black text-5xl md:text-7xl mb-16 text-center tracking-tight text-[#7c3cff]">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {howItWorksCards.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-10 text-center cursor-pointer font-black uppercase text-3xl text-[#7c3cff] shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300"
              style={{
                boxShadow: "0 0 20px #7c3cff",
              }}
            >
              <h3 className="mb-6">{title}</h3>
              <p className="text-lg font-semibold leading-relaxed text-black">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VR Games Catalogue */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl text-center lg:mx-auto">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#00d4ff]">
              VR Games Catalogue
            </p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.07em] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] md:text-7xl">
              Choose Your VR Experience.
            </h2>
            <p className="text-lg font-semibold leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Explore our VR Arcade Games, VR Escape Rooms and Free Roam VR experiences before you book. Each page shows the games available and what to expect.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {vrCatalogueCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex min-h-[420px] flex-col justify-between border-4 border-black p-8 shadow-2xl transition duration-300 hover:-translate-y-3 hover:rotate-[-1deg] hover:scale-[1.02] sm:min-h-[460px] sm:p-10"
                style={{
                  background: `linear-gradient(160deg, ${card.color} 0%, #000000 72%)`,
                  boxShadow: `0 0 30px ${card.color}44`,
                }}
              >
                <div>
                  <h3
                    className={`mb-6 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl ${card.textClass}`}
                  >
                    {card.title}
                  </h3>
                  <p className={`text-lg font-bold leading-8 ${card.textClass === "text-black" ? "text-black/80" : "text-white/90"}`}>
                    {card.text}
                  </p>
                </div>
                <span
                  className={`mt-8 inline-flex w-full items-center justify-center px-6 py-4 text-center text-base font-black uppercase tracking-wide transition duration-300 group-hover:scale-[1.03] ${card.buttonClass}`}
                >
                  {card.button}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="book-vr"
        className="px-6 py-24 max-w-7xl mx-auto border-4 border-black rounded-[2rem] bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7c3cff]">
              Book VR
            </p>
            <h2 className="mb-6 uppercase font-black text-5xl md:text-7xl tracking-tight text-black">
              Ready To Enter The Game?
            </h2>
            <p className="mb-8 text-lg leading-8 text-black font-semibold">
              Book your VR experience directly below. Choose your preferred date, time and group size, then lock in your Playard virtual reality session.
            </p>
          </div>
          <div className="flex min-h-[320px] items-center justify-center border-4 border-black bg-[#fff3dd] p-10 text-center shadow-xl sm:p-12">
            <FunbutlerBookingModal
              bookingFormId="67370655544d4641942dfeb3"
              buttonText="Book VR Now"
              title="Book VR"
              subtitle="Choose your date, time and group size, then lock in your Playard VR session."
              trackEvent="vr_booking_clicked"
            />
          </div>
        </div>
      </section>

      {/* Lower Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Link
          href="/parties"
          className="rounded-3xl p-12 cursor-pointer shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300 flex flex-col justify-center items-center bg-[#ff2bd6] text-black font-black uppercase text-4xl text-center"
        >
          Kids & Teen Parties
        </Link>
        <Link
          href="/corporate-events"
          className="rounded-3xl p-12 cursor-pointer shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300 flex flex-col justify-center items-center bg-[#00d4ff] text-black font-black uppercase text-4xl text-center"
        >
          Corporate VR Events
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fff3dd] px-6 py-24 max-w-7xl mx-auto">
        <p className="section-label mb-5 uppercase font-black tracking-[0.22em] text-[#7c3cff] text-center text-lg md:text-xl">
          FAQs
        </p>
        <h2 className="mb-10 uppercase font-black tracking-tight text-5xl md:text-7xl text-center text-[#7c3cff]">
          VR QUESTIONS.
        </h2>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="bg-white border-4 border-black rounded-3xl p-8 cursor-pointer shadow-neon hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300"
            >
              <h3 className="mb-4 uppercase font-black text-2xl text-[#7c3cff] tracking-wide">
                {question}
              </h3>
              <p className="text-black font-semibold leading-relaxed text-lg">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}