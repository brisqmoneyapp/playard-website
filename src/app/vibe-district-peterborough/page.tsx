import Link from "next/link";
import EventCountdown from "@/components/EventCountdown";
import FatsomaBookingButton from "@/components/FatsomaBookingButton";
import JsonLd from "@/components/JsonLd";
import { VIBE_DISTRICT_BOOKING_URL, VIBE_DISTRICT_EVENT } from "@/lib/events";
import {
  breadcrumbListJsonLd,
  eventJsonLd,
  faqPageJsonLd,
  getPageMetadata,
} from "@/lib/seo";

export const metadata = getPageMetadata("/vibe-district-peterborough");

const eventDetails = [
  { label: "Date", value: VIBE_DISTRICT_EVENT.dateDisplay },
  { label: "Time", value: VIBE_DISTRICT_EVENT.timeDisplay },
  { label: "Music", value: "Afrobeats, Amapiano & Afrohouse" },
  { label: "Venue", value: "Playard Peterborough" },
];

const whatToExpect = [
  "Afrobeats, Amapiano and Afrohouse from start to finish",
  "A high-energy social atmosphere inside Playard Peterborough",
  "Games, drinks and culture under one roof in the city centre",
  "A late-night event running until 1:00 AM",
  "The full Playard experience with food and drinks available throughout",
];

const whoItIsFor = [
  "Music lovers",
  "Friends nights out",
  "Birthday celebrations",
  "Work socials",
  "Culture-led crowds",
  "Groups looking for something different in Peterborough",
];

const faqs = [
  {
    question: "What kind of music will be played?",
    answer:
      "Vibe District features Afrobeats, Amapiano and Afrohouse throughout the night, presented by Crowd Culture at Playard Peterborough.",
  },
  {
    question: "What time does the event start and finish?",
    answer:
      "Vibe District runs from 6:00 PM until 1:00 AM on Saturday 1 August 2026 at Playard Peterborough.",
  },
  {
    question: "Can I book tickets for a group?",
    answer:
      "Yes. Vibe District works well for groups of friends and celebrations. Book your tickets through Fatsoma and contact us if you need help with a larger group.",
  },
  {
    question: "Will food and drinks be available?",
    answer:
      "Yes. Playard has a licensed bar with food and drinks available throughout the event.",
  },
  {
    question: "Where is the event held?",
    answer:
      "Vibe District takes place at Playard Peterborough, 26 Hereward Cross, Peterborough, PE1 1TE.",
  },
];

export default function VibeDistrictPeterboroughPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <JsonLd
        data={[
          breadcrumbListJsonLd([
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Vibe District", path: VIBE_DISTRICT_EVENT.path },
          ]),
          eventJsonLd({
            name: "VIBE DISTRICT AT PLAYARD — Where Culture Meets Play",
            description:
              "Afrobeats, Amapiano, Afrohouse, games, drinks and culture inside Playard Peterborough on Saturday 1 August 2026.",
            path: VIBE_DISTRICT_EVENT.path,
            startDate: VIBE_DISTRICT_EVENT.startDate,
            endDate: VIBE_DISTRICT_EVENT.endDate,
            organizerName: "Crowd Culture",
            offersUrl: VIBE_DISTRICT_BOOKING_URL,
          }),
          faqPageJsonLd(faqs),
        ]}
      />

      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(0,212,255,0.40),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(255,43,214,0.28),transparent_22rem),radial-gradient(circle_at_70%_82%,rgba(215,25,32,0.22),transparent_22rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Vibe District Peterborough
          </div>

          <h1 className="mb-8 max-w-5xl text-[4rem] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[7rem] lg:text-[8rem]">
            VIBE.
            <br />
            CULTURE.
            <br />
            PLAY.
          </h1>

          <p className="mb-10 max-w-4xl bg-black/55 p-5 text-xl font-bold leading-8 text-white backdrop-blur md:text-2xl md:leading-10">
            {VIBE_DISTRICT_EVENT.subtitle}. Afrobeats, Amapiano, Afrohouse, games, drinks and culture inside Playard Peterborough.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map((item) => (
              <div
                key={item.label}
                className="border-4 border-white bg-black/70 p-5 shadow-2xl backdrop-blur"
              >
                <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-[#00d4ff]">
                  {item.label}
                </p>
                <p className="text-lg font-bold leading-7 text-white sm:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <FatsomaBookingButton
            source="vibe_district_hero"
            className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white shadow-xl transition hover:rotate-[-2deg] hover:scale-[1.03] hover:bg-[#ef233c]"
          >
            Book Now
          </FatsomaBookingButton>
        </div>
      </section>

      <EventCountdown
        eventTime={VIBE_DISTRICT_EVENT.startDate}
        title="Vibe District"
        dateLine={`${VIBE_DISTRICT_EVENT.dateDisplay} · ${VIBE_DISTRICT_EVENT.timeDisplay}`}
        description="Afrobeats, Amapiano and Afrohouse with games, drinks and culture at Playard Peterborough."
      />

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-base font-black uppercase tracking-[-0.03em] text-black sm:text-xl">
          <span>Afrobeats</span>
          <span>•</span>
          <span>Amapiano</span>
          <span>•</span>
          <span>Afrohouse</span>
          <span>•</span>
          <span>Games</span>
          <span>•</span>
          <span>Drinks</span>
          <span>•</span>
          <span>Culture</span>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="border-4 border-black bg-white p-8 shadow-2xl md:p-10">
            <p className="section-label mb-5">What To Expect</p>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
              Where culture meets play.
            </h2>
            <ul className="space-y-4 text-lg font-bold leading-8 text-black">
              {whatToExpect.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-black text-[#d71920]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-black bg-black p-8 text-white shadow-2xl md:p-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#00d4ff]">
              Who It Is For
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
              Bring your crowd.
            </h2>
            <ul className="space-y-4 text-lg font-bold leading-8">
              {whoItIsFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-black text-[#ff2bd6]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-4xl border-4 border-black bg-white p-8 shadow-2xl md:p-12">
          <p className="section-label mb-5">Tickets</p>
          <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.06em] text-black md:text-5xl">
            Book Your Ticket
          </h2>
          <p className="mb-8 text-lg font-bold leading-8 text-black">
            Secure your place at Vibe District through Fatsoma. Tickets open in a new tab so you can complete your booking and return to Playard.
          </p>

          <FatsomaBookingButton
            source="vibe_district_tickets"
            className="inline-flex bg-[#d71920] px-8 py-5 text-lg font-black uppercase tracking-wide text-white shadow-xl transition hover:rotate-[-2deg] hover:scale-[1.03] hover:bg-[#ef233c]"
          >
            Book Now
          </FatsomaBookingButton>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">FAQs</p>
          <h2 className="mb-10 text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
            Vibe District Questions
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-white bg-[#111111] p-7 shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-[#00d4ff]">
                  {faq.question}
                </h3>
                <p className="text-lg font-bold leading-8 text-zinc-200">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-label mb-5">Contact</p>
              <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-6xl">
                Book Your Place
              </h2>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                Email info@playard.co.uk or call 01733 641062 to enquire about Vibe District on {VIBE_DISTRICT_EVENT.dateDisplay}.
              </p>
              <p className="text-lg font-bold leading-8 text-black">
                26 Hereward Cross, Peterborough, PE1 1TE
              </p>
            </div>

            <div className="grid gap-4">
              <FatsomaBookingButton
                source="vibe_district_contact_fatsoma"
                className="border-4 border-black bg-[#00d4ff] px-8 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                Book Tickets on Fatsoma
              </FatsomaBookingButton>
              <Link
                href="/events"
                className="border-4 border-black px-8 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                View All Events
              </Link>
              <Link
                href="/contact"
                className="border-4 border-black px-8 py-5 text-center text-lg font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                Contact Playard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
