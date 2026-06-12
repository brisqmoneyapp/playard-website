

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Playard",
  description:
    "Read Playard's Privacy Policy and learn how we collect, use and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white">
      <section className="border-b border-zinc-800 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-5">Legal</p>
          <h1 className="big-heading mb-8 text-6xl md:text-8xl">
            Privacy Policy.
          </h1>
          <p className="max-w-3xl text-xl leading-8 text-zinc-300">
            This Privacy Policy explains how Playard collects, uses, stores and
            protects personal information when you use our website, contact us or
            make an enquiry.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="mb-4 text-4xl font-black">Who We Are</h2>
            <p className="leading-8 text-zinc-300">
              Playard is a competitive social gaming and entertainment venue in
              Peterborough. Our address is 26 Hereward Cross, Peterborough, PE1
              1TE.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Information We Collect</h2>
            <p className="mb-4 leading-8 text-zinc-300">
              We may collect personal information when you contact us, make a
              booking, enquire about a party or corporate event, subscribe to
              updates or interact with our website.
            </p>
            <p className="leading-8 text-zinc-300">
              This may include your name, email address, phone number, booking
              details, enquiry details, group size, event preferences and any
              information you choose to provide to us.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">How We Use Your Information</h2>
            <p className="leading-8 text-zinc-300">
              We use your information to respond to enquiries, manage bookings,
              organise parties and events, provide customer support, improve our
              services, send relevant updates where permitted and meet legal or
              operational requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Bookings and Third Party Services</h2>
            <p className="leading-8 text-zinc-300">
              Where bookings are made through a booking platform or payment
              provider, those services may process your information in accordance
              with their own privacy policies. We only use trusted providers where
              needed to operate the venue and manage customer bookings.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Marketing and Analytics</h2>
            <p className="leading-8 text-zinc-300">
              We may use website analytics and marketing tools to understand how
              visitors use our website and to improve our advertising. Where
              required by law, we will ask for consent before using non essential
              cookies or similar technologies.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">How We Store and Protect Information</h2>
            <p className="leading-8 text-zinc-300">
              We take reasonable steps to protect personal information from
              unauthorised access, loss, misuse or disclosure. Access to personal
              information is limited to those who need it for business purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">How Long We Keep Information</h2>
            <p className="leading-8 text-zinc-300">
              We keep personal information only for as long as needed for the
              purpose it was collected, including booking administration, customer
              service, legal, accounting and operational requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Sharing Your Information</h2>
            <p className="leading-8 text-zinc-300">
              We do not sell personal information. We may share information with
              trusted service providers where needed to manage bookings, payments,
              communications, website analytics, marketing or legal compliance.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Your Rights</h2>
            <p className="leading-8 text-zinc-300">
              You may have rights to access, correct, delete, restrict or object
              to the use of your personal information. You may also have the right
              to withdraw consent where processing is based on consent.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-black">Contact Us</h2>
            <p className="leading-8 text-zinc-300">
              If you have any questions about this Privacy Policy or how we use
              personal information, please contact us:
            </p>

            <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <p className="mb-2 font-bold">Playard Peterborough</p>
              <p>26 Hereward Cross</p>
              <p>Peterborough</p>
              <p>PE1 1TE</p>
              <p className="mt-4">Email: info@playard.co.uk</p>
              <p>Phone: 01733 641062</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Last updated: June 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}