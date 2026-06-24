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
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              1. What Are Cookies?
            </h2>
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              Cookies are small text files placed on your device when you visit a website. Similar technologies, such as pixels, tags, local storage and session storage, may also be used for comparable purposes.
            </p>
            <p className="text-lg font-bold leading-8 text-black">
              Websites use these technologies to operate correctly, remember preferences, improve performance, understand how visitors use the site and, where permitted, support marketing and advertising. Some cookies are essential. Others are non essential and may require your consent under UK law before they are used.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              2. How Playard Uses Cookies
            </h2>
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              Playard Peterborough uses cookies and similar technologies to help:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
              <li>Operate the website</li>
              <li>Improve performance</li>
              <li>Remember preferences</li>
              <li>Analyse visitor behaviour</li>
              <li>Improve customer experience</li>
              <li>Support bookings and gift cards</li>
              <li>Measure marketing effectiveness</li>
            </ul>
            <p className="mt-4 text-lg font-bold leading-8 text-black">
              Non essential cookies are used only where applicable and, where required by law, are subject to user consent through our cookie banner or other consent mechanism.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              3. Types of Cookies We Use
            </h2>

            <div className="mb-8">
              <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-black">
                Essential Cookies
              </h3>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                Essential cookies are required for the website to function correctly. These cookies are necessary for core services and cannot be switched off in our systems in the same way as optional cookies. They are usually set in response to actions you take, such as navigating the website or using booking features.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
                <li>Website functionality</li>
                <li>Security</li>
                <li>Navigation</li>
                <li>Booking functionality</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-black">
                Performance &amp; Analytics Cookies
              </h3>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                Where applicable and, where required by law, with your consent, we use performance and analytics tools to understand how visitors use our website. These currently include Google Analytics and Microsoft Clarity.
              </p>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                These tools help us understand:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Device type and browser information</li>
                <li>General usage patterns</li>
              </ul>
              <p className="text-lg font-bold leading-8 text-black">
                This information is typically aggregated or pseudonymised and helps us improve website content, navigation, performance and customer experience.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-black">
                Advertising Cookies
              </h3>
              <p className="mb-4 text-lg font-bold leading-8 text-black">
                Where consent has been provided, we may use advertising technologies such as Meta Pixel to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
                <li>Measure advertising performance</li>
                <li>Build anonymous audiences</li>
                <li>Improve advertising relevance</li>
                <li>Understand which adverts result in website visits or bookings</li>
              </ul>
              <p className="text-lg font-bold leading-8 text-black">
                Advertising cookies and similar technologies are non essential and are used only where applicable and, where required by law, after you have given consent.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-black uppercase tracking-[-0.04em] text-black">
                Booking &amp; Third Party Services
              </h3>
              <p className="text-lg font-bold leading-8 text-black">
                When you use booking or gift card services on our website, third party providers may place cookies or use similar technologies that are necessary to process your request. This includes Funbutler, our booking and gift card platform, and payment providers involved in completing transactions. These providers process information in accordance with their own cookie and privacy policies.
              </p>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              4. Managing Cookies
            </h2>
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              When you first visit our website, you may be shown a cookie banner that allows you to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
              <li>Accept cookies, including non essential analytics and advertising cookies where applicable</li>
              <li>Reject non essential cookies</li>
            </ul>
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              You can also manage cookies through your browser settings. Most browsers allow you to block cookies, delete existing cookies or receive notifications when cookies are being placed on your device.
            </p>
            <p className="text-lg font-bold leading-8 text-black">
              Please note that disabling certain cookies may affect website functionality, booking services, gift card purchases and your overall experience on the Playard website.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              5. Updates
            </h2>
            <p className="mb-4 text-lg font-bold leading-8 text-black">
              This Cookie Policy may change from time to time to reflect changes to our website, technologies, legal requirements or business practices.
            </p>
            <p className="text-lg font-bold leading-8 text-black">
              The latest version will always appear on this page. Where changes are significant, we may provide additional notice where appropriate.
            </p>
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              6. Contact
            </h2>
            <p className="mb-6 text-lg font-bold leading-8 text-black">
              If you have any questions about this Cookie Policy or how Playard uses cookies and similar technologies, please contact us:
            </p>

            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black shadow-xl">
              <p className="mb-2 font-bold">Playard Peterborough</p>
              <p className="font-bold">26 Hereward Cross</p>
              <p className="font-bold">Peterborough</p>
              <p className="font-bold">PE1 1TE</p>
              <p className="mt-4 font-bold">Email: info@playard.co.uk</p>
              <p className="font-bold">Phone: 01733 641062</p>
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
