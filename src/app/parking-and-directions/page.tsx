import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/parking-and-directions");

const options = [
  "Hereward Cross Car Park",
  "Queensgate Car Parks",
  "Peterborough Station",
  "City Centre Buses",
];

const parkingOptions = [
  {
    title: "Closest Parking",
    name: "Hereward Cross Car Park",
    detail:
      "A nearby city centre parking option on Broadway, Peterborough. Ideal if you want to park close to Playard and walk over to the venue.",
    colour: "#d71920",
  },
  {
    title: "Large Car Park Choice",
    name: "Queensgate Shopping Centre",
    detail:
      "Queensgate has multiple dedicated car parks and is a convenient city centre option when visiting shops, restaurants and Playard.",
    colour: "#00d4ff",
  },
  {
    title: "Train Access",
    name: "Peterborough Station",
    detail:
      "Peterborough station is a major rail hub with onward bus, taxi and walking options into the city centre.",
    colour: "#f59e0b",
  },
];

const directionCards = [
  {
    title: "Arriving By Car",
    copy:
      "Use PE1 1TE for Playard or search for Playard Peterborough in your maps app. For parking, look for nearby city centre car parks including Hereward Cross and Queensgate options.",
  },
  {
    title: "Walking From Queensgate",
    copy:
      "Playard is in Peterborough city centre at Hereward Cross, making it convenient if you are already shopping, eating or parking around Queensgate.",
  },
  {
    title: "Arriving By Train",
    copy:
      "From Peterborough station, head towards the city centre and Queensgate area, then continue towards Hereward Cross. You can also use a taxi for a short city centre journey.",
  },
  {
    title: "Arriving By Bus",
    copy:
      "Peterborough city centre bus services bring visitors close to Queensgate and the main shopping area, a convenient starting point for walking to Playard.",
  },
];

const faqs = [
  {
    question: "Where is Playard located?",
    answer:
      "Playard is located at 26 Hereward Cross, Peterborough, PE1 1TE in Peterborough city centre.",
  },
  {
    question: "Is there parking nearby?",
    answer:
      "Yes. There are nearby city centre parking options including Hereward Cross and Queensgate car parks. Always check signs, opening times and tariffs before parking.",
  },
  {
    question: "Can I walk from Peterborough train station?",
    answer:
      "Yes. Playard is accessible from Peterborough station via the city centre. Use Google Maps or Apple Maps for the most accurate live walking route.",
  },
  {
    question: "Can I use public transport?",
    answer:
      "Yes. Peterborough city centre has train and bus links, with Queensgate and the surrounding city centre area close to Playard.",
  },
];

export default function ParkingAndDirectionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.42),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.28),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Find Playard
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            PARK.
            <br />
            WALK.
            <br />
            PLAY.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Find Playard at 26 Hereward Cross, Peterborough, PE1 1TE. We are based in Peterborough city centre, close to parking, shops, restaurants, buses and the train station.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6 text-black">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {options.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-4 border-black bg-white p-8 shadow-2xl md:p-12">
            <p className="section-label mb-4">Address</p>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
              Playard Peterborough
            </h2>
            <p className="text-xl font-bold leading-9 text-zinc-700">
              26 Hereward Cross
              <br />
              Peterborough
              <br />
              PE1 1TE
            </p>

            <div className="mt-8 grid gap-3 text-lg font-bold text-zinc-700">
              <a href="tel:01733641062" className="hover:text-[#d71920]">
                Phone: 01733 641062
              </a>
              <a href="mailto:info@playard.co.uk" className="hover:text-[#d71920]">
                Email: info@playard.co.uk
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="https://www.google.com/maps/search/?api=1&query=26%20Hereward%20Cross%2C%20Peterborough%20PE1%201TE"
                target="_blank"
                rel="noreferrer"
                className="bg-[#d71920] px-7 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
              >
                Open In Google Maps
              </a>
              <Link
                href="/contact"
                className="bg-[#00d4ff] px-7 py-4 text-center font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl md:p-12">
            <p className="section-label mb-4">Map</p>
            <div className="overflow-hidden border-4 border-white bg-white shadow-2xl">
              <div className="border-b-4 border-black bg-[#d71920] p-4 text-center text-white">
                <p className="text-sm font-black uppercase tracking-[0.22em]">
                  Find Us
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.732524255821!2d-0.2430829233155558!3d52.574448172075506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f15e2b991e1b%3A0x6b698f7afe8b3f30!2sPLAYARD%20Peterborough!5e0!3m2!1sen!2suk!4v1781546119754!5m2!1sen!2suk"
                className="h-[500px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-5xl">
            <p className="section-label mb-5">Parking Options</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Park close. Play more.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {parkingOptions.map((option) => (
              <div
                key={option.title}
                className="min-h-[360px] border-4 border-white p-8 shadow-2xl transition hover:-translate-y-3 hover:rotate-[-1deg]"
                style={{ backgroundColor: option.colour }}
              >
                <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-black/70">
                  {option.title}
                </p>
                <h3 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-black">
                  {option.name}
                </h3>
                <p className="text-lg font-bold leading-8 text-black/80">{option.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm font-bold leading-7 text-zinc-400">
            Parking details, charges and opening times can change. Please check the relevant car park website, signage and payment machines before leaving your vehicle.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Directions</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
              Getting to Playard.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {directionCards.map((card, index) => (
              <div
                key={card.title}
                className={`border-4 border-black p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg] ${
                  index % 4 === 0
                    ? "bg-white"
                    : index % 4 === 1
                      ? "bg-[#00d4ff]"
                      : index % 4 === 2
                        ? "bg-[#f59e0b]"
                        : "bg-[#ff2bd6] text-white"
                }`}
              >
                <h3 className="mb-4 text-4xl font-black uppercase tracking-[-0.05em]">
                  {card.title}
                </h3>
                <p className="text-lg font-bold leading-8">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black p-8 shadow-2xl md:p-14">
          <h2 className="mb-8 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            BEFORE YOU SET OFF.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-4 border-black bg-[#00d4ff] p-8">
              <h3 className="text-3xl font-black uppercase">Use PE1 1TE</h3>
            </div>
            <div className="border-4 border-black bg-[#f59e0b] p-8">
              <h3 className="text-3xl font-black uppercase">Check Parking Tariffs</h3>
            </div>
            <div className="border-4 border-black bg-[#ff2bd6] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Allow Walk Time</h3>
            </div>
            <div className="border-4 border-black bg-[#d71920] p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Book Your Game</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
            DIRECTIONS & PARKING QUESTIONS.
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.04em]">
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