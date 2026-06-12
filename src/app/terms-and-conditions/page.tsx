import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Playard",
  description:
    "Terms and Conditions for Playard Peterborough including bookings, activities, events and website usage.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.40),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Legal Information
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem]">
            TERMS &
            <br />
            CONDITIONS.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Information about bookings, activities, events, venue usage and the Playard website.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">About Playard</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Playard is an entertainment and competitive social gaming venue
              located at 26 Hereward Cross, Peterborough, PE1 1TE.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Bookings</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              All bookings are subject to availability. Playard reserves the
              right to refuse or cancel bookings where necessary for operational,
              safety or legal reasons.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Payments</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Payments made through our booking systems must be completed using
              valid payment methods. Prices are subject to change without notice,
              although confirmed bookings will be honoured at the agreed price.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Cancellations & Refunds</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Cancellation and refund policies may vary depending on the type of
              booking, event or promotion. Details will be provided during the
              booking process or on request.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Activities & Safety</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Guests must follow all safety instructions provided by Playard
              staff. Participation in activities is at the guest's own risk.
              Playard reserves the right to remove any guest whose behaviour may
              impact safety, enjoyment or the operation of the venue.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Children & Young People</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Certain activities may have age restrictions or supervision
              requirements. Parents and guardians remain responsible for children
              attending the venue.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Food & Drink</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Food and drink purchased at Playard must be consumed responsibly.
              Challenge 25 and other licensing policies may apply where alcohol
              is served.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Corporate Events & Parties</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Special terms may apply to corporate bookings, private events,
              birthday parties and exclusive hire arrangements. These will be
              agreed separately where relevant.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Website Usage</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Website content is provided for general information purposes only.
              We make reasonable efforts to ensure accuracy but cannot guarantee
              that all information is complete, current or error free.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Limitation of Liability</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Nothing in these Terms and Conditions excludes liability where it
              cannot legally be excluded. Subject to applicable law, Playard's
              liability is limited to the maximum extent permitted.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Contact Us</h2>
            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black shadow-xl">
              <p className="mb-2 font-bold">Playard Peterborough</p>
              <p>26 Hereward Cross</p>
              <p>Peterborough</p>
              <p>PE1 1TE</p>
              <p className="mt-4">Email: info@playard.co.uk</p>
              <p>Phone: 01733 641062</p>
            </div>
          </div>

          <div className="border-4 border-black bg-[#d71920] p-6 text-center text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.22em]">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl border-4 border-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-6 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            QUESTIONS?
          </h2>

          <p className="mb-8 max-w-3xl text-xl font-bold leading-9 text-zinc-300">
            If you have any questions regarding bookings, activities, events, refunds or venue policies, please contact the Playard team.
          </p>

          <a
            href="mailto:info@playard.co.uk?subject=Terms and Conditions Enquiry"
            className="inline-block bg-[#d71920] px-8 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
          >
            Contact Playard
          </a>
        </div>
      </section>
    </main>
  );
}