import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Playard",
  description:
    "Learn how Playard uses cookies and similar technologies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[65vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.30),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.30),transparent_24rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#00d4ff] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-2xl">
            Cookie Policy
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-[7rem] lg:text-[8rem]">
            COOKIES.
            <br />
            BUT NOT
            <br />
            THE EDIBLE KIND.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            This page explains how Playard uses cookies and similar technologies to improve website performance, understand visitor behaviour and provide a better experience.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">What Are Cookies?</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Cookies are small text files stored on your device when you visit a
              website. They help websites function correctly, remember your
              preferences and understand how visitors use the site.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">How We Use Cookies</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Playard uses cookies to improve website performance, remember your
              preferences, understand visitor behaviour and help us improve the
              customer experience.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Essential Cookies</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Essential cookies are required for the website to function
              correctly. These cookies cannot be disabled because they are needed
              for security, navigation and basic website functionality.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Analytics Cookies</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              We may use analytics tools such as Google Analytics to understand
              how visitors use our website. This helps us improve content,
              navigation and overall user experience.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Advertising Cookies</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              Where consent has been provided, advertising technologies such as
              Meta Pixel may be used to measure marketing performance and improve
              advertising relevance.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Managing Cookies</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              You can manage or delete cookies through your browser settings.
              Most browsers allow you to refuse cookies, delete existing cookies
              or receive notifications when cookies are being used.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">Contact Us</h2>
            <p className="text-lg font-bold leading-8 text-zinc-700">
              If you have any questions about this Cookie Policy, please contact:
            </p>

            <div className="mt-6 border-4 border-black bg-[#00d4ff] p-8 text-black shadow-xl">
              <p className="mb-2 font-bold">Playard Peterborough</p>
              <p>26 Hereward Cross</p>
              <p>Peterborough</p>
              <p>PE1 1TE</p>
              <p className="mt-4">Email: info@playard.co.uk</p>
              <p>Phone: 01733 641062</p>
            </div>
          </div>

          <div className="border-4 border-black bg-black p-6 text-center text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.22em]">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            QUESTIONS ABOUT PRIVACY OR COOKIES?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl font-bold leading-9 text-zinc-300">
            If you have any questions about how Playard uses cookies, analytics or website technologies, please contact us.
          </p>

          <a
            href="mailto:info@playard.co.uk?subject=Cookie Policy Enquiry"
            className="inline-flex bg-[#d71920] px-8 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
          >
            Contact Playard
          </a>
        </div>
      </section>
    </main>
  );
}