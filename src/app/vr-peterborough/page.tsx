import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VR Experiences in Peterborough | Playard",
  description:
    "Book virtual reality experiences at Playard Peterborough. Perfect for families, kids parties, teenagers, corporate events and group gaming sessions.",
};

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

export default function VRPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center bg-black px-6 py-24 lg:py-48 overflow-visible">
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
            <Link
              href="#book-vr"
              className="rounded-md bg-[#7c3cff] px-8 py-4 text-center font-black uppercase tracking-wide text-white shadow-neon hover:shadow-neon-lg transition-shadow duration-300"
            >
              Book VR
            </Link>
            <Link
              href="/games"
              className="rounded-md border-4 border-[#00d4ff] px-8 py-4 text-center font-black uppercase tracking-wide text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-colors duration-300"
            >
              All Games
            </Link>
            <Link
              href="/food-drinks"
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
              Add the Funbutler VR booking widget here so customers can reserve sessions directly from this page.
            </p>
          </div>
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-gradient-to-tr from-[#7c3cff] via-[#00d4ff] to-[#ff2bd6] text-center shadow-neon">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white">
                Funbutler embed placeholder
              </p>
              <p className="text-3xl font-black text-white">
                Paste VR booking widget here.
              </p>
            </div>
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