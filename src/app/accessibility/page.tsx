import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility | Playard Peterborough",
  description:
    "Accessibility information for Playard Peterborough, including venue access, support needs, website accessibility and how to contact us before visiting.",
};

const supportAreas = [
  "Step free access information",
  "Group booking support",
  "Quiet time enquiries",
  "Assistance before visiting",
];

const websiteCommitments = [
  "Clear page structure",
  "Readable text contrast",
  "Keyboard friendly navigation",
  "Descriptive page titles",
  "Mobile responsive layouts",
  "Ongoing improvements",
];

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.30),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.30),transparent_24rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Accessibility
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-[7rem] lg:text-[8rem]">
            Everyone
            <br />
            Should Feel
            <br />
            Welcome.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            We want Playard to be a welcoming, inclusive and enjoyable venue for as many people as possible. If you need assistance before your visit, please contact us and we will do our best to help.
          </p>
        </div>
      </section>

      <section className="rotate-[-1deg] scale-[1.02] border-y-4 border-black bg-[#00d4ff] px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {supportAreas.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-5">Venue Access</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Planning your visit.
            </h2>
          </div>

          <div className="space-y-6 text-xl font-bold leading-9 text-zinc-700">
            <p>
              Playard is located at 26 Hereward Cross, Peterborough, PE1 1TE. We
              recommend contacting us before your visit if you have specific
              access requirements, mobility needs or questions about the venue
              layout.
            </p>

            <p>
              Our team can advise on suitable activities, group arrangements,
              quieter periods, seating options and any practical considerations
              that may help make your visit smoother.
            </p>

            <p>
              Some activities may involve movement, standing, hand eye
              coordination, screens, sound or shared equipment. If you are unsure
              whether a specific activity is suitable, please contact us before
              booking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Website Accessibility</p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Designed to be clear and usable.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {websiteCommitments.map((item) => (
              <div
                key={item}
                className="bg-[#111111] p-8 shadow-2xl transition hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <h3 className="text-3xl font-black tracking-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border-4 border-black bg-white p-8 text-black shadow-2xl md:p-12">
            <p className="section-label mb-5">Before You Visit</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Tell us what you need.
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-700">
              If you or someone in your group has accessibility needs, sensory
              considerations or mobility concerns, contact us before booking and
              we will help where possible.
            </p>
            <a
              href="mailto:info@playard.co.uk?subject=Accessibility Enquiry"
              className="inline-flex bg-[#d71920] px-7 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              Email Accessibility Enquiry
            </a>
          </div>

          <div className="border-4 border-black bg-white p-8 text-black shadow-2xl md:p-12">
            <p className="section-label mb-5">Directions</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Need help finding us?
            </h2>
            <p className="mb-8 text-lg font-bold leading-8 text-zinc-700">
              Visit our Parking & Directions page for information on location,
              transport links and how to find Playard in Peterborough city centre.
            </p>
            <Link
              href="/parking-and-directions"
              className="inline-flex bg-[#00d4ff] px-7 py-4 font-black uppercase tracking-wide text-black transition hover:scale-[1.03]"
            >
              Parking & Directions
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="section-label mb-5">Contact</p>
          <h2 className="mb-6 text-5xl font-black tracking-tight">
            Need help before you visit?
          </h2>
          <div className="border-4 border-black bg-white p-8 text-zinc-700 shadow-2xl">
            <p className="mb-2 font-bold text-black">Playard Peterborough</p>
            <p>26 Hereward Cross</p>
            <p>Peterborough</p>
            <p>PE1 1TE</p>
            <p className="mt-4">Email: info@playard.co.uk</p>
            <p>Phone: 01733 641062</p>
          </div>
        </div>
      </section>
    </main>
  );
}