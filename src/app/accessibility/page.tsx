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
  "Clear navigation",
  "Readable text contrast",
  "High contrast colours",
  "Readable typography",
  "Keyboard accessibility where possible",
  "Descriptive page titles",
  "Alternative text for images",
  "Responsive design",
  "Mobile responsive layouts",
  "Ongoing accessibility improvements",
];

const activities = [
  "Interactive Darts",
  "Pool",
  "Shuffleboard",
  "Street Curling",
  "Virtual Reality",
  "SimHunt",
];

const activityConsiderations = [
  "Standing",
  "Movement",
  "Hand eye coordination",
  "Flashing lights",
  "Loud sounds",
  "Immersive screens",
  "Fast moving visual effects",
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Our Commitment</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Accessibility at Playard.
            </h2>
          </div>

          <div className="space-y-6 text-xl font-bold leading-9 text-black">
            <p>
              Playard Peterborough is committed to making the venue and website as accessible and inclusive as reasonably possible for guests, groups and visitors.
            </p>
            <p>
              We recognise that accessibility needs vary from person to person. We aim to provide clear information, helpful staff support and a welcoming environment wherever we can.
            </p>
            <p>
              Accessibility is an ongoing process. We continue to review our venue, activities, website and customer experience and make improvements where reasonably practicable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-5">Venue Accessibility</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Planning your visit.
            </h2>
          </div>

          <div className="space-y-6 text-xl font-bold leading-9 text-white">
            <p>
              Playard is located at 26 Hereward Cross, Peterborough, PE1 1TE. We want guests to feel welcome and informed before they arrive.
            </p>
            <p>
              Where available and where reasonably practicable, the venue may offer:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Step free entrance where available</li>
              <li>Accessible routes throughout the public areas where reasonably practicable</li>
              <li>Seating available throughout the venue</li>
              <li>Accessible toilet facilities where available</li>
              <li>Staff available to assist where possible</li>
              <li>Assistance dogs are welcome</li>
            </ul>
            <p>
              Customers are encouraged to contact Playard before visiting if they have specific accessibility requirements, mobility needs or questions about the venue layout. Our team can advise on suitable activities, group arrangements, quieter periods, seating options and practical considerations that may help make your visit smoother.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="section-label mb-5">Activity Accessibility</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Different activities. Different requirements.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-lg font-bold leading-8 text-black">
              <p>
                Different activities at Playard have different physical and sensory requirements. Examples include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                {activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-lg font-bold leading-8 text-black">
              <p>
                Some activities may involve:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                {activityConsiderations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                If you are unsure whether an activity is suitable for you or someone in your group, please contact Playard before booking. Our team will try to provide helpful information so you can make an informed choice.
              </p>
            </div>
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
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              Customers should contact Playard before visiting if they require:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
              <li>Wheelchair access information</li>
              <li>Quieter visit times</li>
              <li>Group assistance</li>
              <li>Sensory information</li>
              <li>Seating arrangements</li>
              <li>Support with bookings</li>
            </ul>
            <p className="mb-8 text-lg font-bold leading-8 text-black">
              Our team will always try to accommodate requests where reasonably possible.
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
            <p className="mb-8 text-lg font-bold leading-8 text-black">
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="section-label mb-5">Accessibility Feedback</p>
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              Help us improve.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-lg font-bold leading-8 text-black">
            <p>
              Playard welcomes feedback about accessibility on our website and in the venue.
            </p>
            <p>
              If you encounter any accessibility barriers, or if there is something we could do better, please let the team know. Your feedback helps us identify issues and make improvements where reasonably practicable.
            </p>
            <p>
              You can contact us by email at info@playard.co.uk or by phone on 01733 641062.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <p className="section-label mb-5">Contact</p>
          <h2 className="mb-6 text-5xl font-black tracking-tight">
            Need help before you visit?
          </h2>
          <div className="border-4 border-black bg-white p-8 text-black shadow-2xl">
            <p className="mb-2 font-bold">Playard Peterborough</p>
            <p className="font-bold">26 Hereward Cross</p>
            <p className="font-bold">Peterborough</p>
            <p className="font-bold">PE1 1TE</p>
            <p className="mt-4 font-bold">Email: info@playard.co.uk</p>
            <p className="font-bold">Phone: 01733 641062</p>
          </div>
        </div>
      </section>
    </main>
  );
}
