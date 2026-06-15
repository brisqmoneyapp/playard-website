import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Playard Peterborough",
  description:
    "Contact Playard Peterborough for bookings, parties, corporate events and general enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.45),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.25),transparent_24rem),radial-gradient(circle_at_60%_80%,rgba(255,43,214,0.18),transparent_24rem)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Contact Playard
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[9rem]">
            LET'S
            <br />
            MAKE IT
            <br />
            HAPPEN.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Booking enquiry? Birthday party? Corporate event? Venue hire? Get in touch and the Playard team will help you plan your visit.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border-4 border-black bg-white p-8 text-black shadow-2xl md:p-12">
            <p className="section-label mb-5">Contact Details</p>

            <div className="space-y-8">
              <div>
                <h2 className="mb-3 text-3xl font-black">Address</h2>
                <p className="font-bold text-zinc-700">
                  26 Hereward Cross
                  <br />
                  Peterborough
                  <br />
                  PE1 1TE
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-3xl font-black">Phone</h2>
                <a
                  href="tel:01733641062"
                  className="font-bold text-zinc-700 hover:text-black"
                >
                  01733 641062
                </a>
              </div>

              <div>
                <h2 className="mb-3 text-3xl font-black">Email</h2>
                <a
                  href="mailto:info@playard.co.uk"
                  className="font-bold text-zinc-700 hover:text-black"
                >
                  info@playard.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-8 text-black shadow-2xl md:p-12">
            <p className="section-label mb-5">Email Us</p>

            <h2 className="mb-6 text-5xl font-black tracking-tight">
              Need help planning your visit?
            </h2>

            <p className="mb-8 text-lg leading-8 font-bold text-zinc-700">
              Whether you're organising a birthday, team event, work social, venue hire or simply have a question, send us an email and we'll get back to you as soon as possible.
            </p>

            <a
              href="mailto:info@playard.co.uk?subject=Playard Enquiry"
              className="inline-flex bg-[#d71920] px-8 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
            >
              Email Playard
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl border-4 border-white bg-[#111111] p-8 text-white shadow-2xl md:p-12">
          <p className="section-label mb-5">Find Us</p>

          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            Find The Fun.
          </h2>

          <p className="mb-10 max-w-3xl text-lg leading-8 text-zinc-300">
            You'll find Playard in Peterborough city centre at Hereward Cross. Close to parking, shops, restaurants and transport links, we're easy to reach whether you're visiting with friends, family or colleagues.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
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

            <div className="overflow-hidden border-4 border-white bg-black shadow-2xl">
              <div className="border-b-4 border-white bg-[#00d4ff] p-4 text-center text-black">
                <p className="text-sm font-black uppercase tracking-[0.22em]">
                  How To Find Us
                </p>
              </div>

              <video
                className="h-[500px] w-full object-cover"
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
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            QUICK LINKS.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <a href="mailto:info@playard.co.uk?subject=Birthday Party Enquiry" className="border-4 border-black bg-[#ff2bd6] p-8 text-white transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">Birthday Parties 🎉</h3>
              <p className="font-bold">Ask about birthday party packages.</p>
            </a>

            <a href="mailto:info@playard.co.uk?subject=Corporate Event Enquiry" className="border-4 border-black bg-[#00d4ff] p-8 text-black transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">Corporate Events 🏆</h3>
              <p className="font-bold">Work socials, networking and venue hire.</p>
            </a>

            <a href="mailto:info@playard.co.uk?subject=General Playard Enquiry" className="border-4 border-black bg-[#f59e0b] p-8 text-black transition hover:-translate-y-2 hover:rotate-[-1deg]">
              <h3 className="mb-3 text-3xl font-black uppercase">General Enquiries 📞</h3>
              <p className="font-bold">Questions about activities, bookings and visits.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}