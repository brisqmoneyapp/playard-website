import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import NavLink from "@/components/NavLink";
import TrackedLink from "@/components/TrackedLink";
import TrackedAnchor from "@/components/TrackedAnchor";
import SiteStructuredData from "@/components/SiteStructuredData";
import "./globals.css";
import FunbutlerBookingModal from "@/components/FunbutlerBookingModal";
import FunbutlerGiftCardModal from "@/components/FunbutlerGiftCardModal";
import WhatsOnTicker from "@/components/WhatsOnTicker";
import { BUSINESS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ICON_VERSION = "20260619";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: BUSINESS.description,
  keywords: [
    "Playard Peterborough",
    "Things to do in Peterborough",
    "Indoor activities Peterborough",
    "Interactive darts Peterborough",
    "VR Peterborough",
    "Events Peterborough",
    "Shuffleboard Peterborough",
    "Pool Peterborough",
    "Street Curling Peterborough",
    "Team Building Peterborough",
    "Corporate Events Peterborough",
    "Birthday Parties Peterborough",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "A city centre games bar with darts, pool, shuffleboard, VR, street curling, food, drinks, events, birthdays, work socials and big group nights out.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Games bar, food, drinks, events, parties and big group nights out in Peterborough city centre.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${ICON_VERSION}`, sizes: "any" },
      { url: `/favicon-16x16.png?v=${ICON_VERSION}`, sizes: "16x16", type: "image/png" },
      { url: `/favicon-32x32.png?v=${ICON_VERSION}`, sizes: "32x32", type: "image/png" },
      { url: `/icon.png?v=${ICON_VERSION}`, sizes: "512x512", type: "image/png" },
      { url: `/icon.svg?v=${ICON_VERSION}`, type: "image/svg+xml" },
    ],
    shortcut: `/favicon.ico?v=${ICON_VERSION}`,
    apple: [
      { url: `/apple-icon.png?v=${ICON_VERSION}`, sizes: "180x180", type: "image/png" },
    ],
  },
};

const footerExploreLinks = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Activities" },
  { href: "/food-and-drinks", label: "Food & Drinks" },
  { href: "/offers", label: "Offers" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Find Us" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Activities", trackEvent: "activities_clicked" as const },
  { href: "/food-and-drinks", label: "Food & Drinks" },
  { href: "/events", label: "Events" },
  { href: "/offers", label: "Offers", trackEvent: "offers_clicked" as const },
  { href: "/contact", label: "Find Us" },
];

const footerGameLinks = [
  { href: "/interactive-darts-peterborough", label: "Interactive Darts" },
  { href: "/pool-peterborough", label: "Pool" },
  { href: "/shuffleboard-peterborough", label: "Shuffleboard" },
  { href: "/street-curling-peterborough", label: "Street Curling" },
  { href: "/vr-peterborough", label: "VR" },
  { href: "/simhunt-peterborough", label: "SimShooting" },
  { href: "/table-tennis-peterborough", label: "Table Tennis" },
  { href: "/games-lounge-peterborough", label: "Games Lounge" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <SiteStructuredData />
        <header className="sticky top-0 z-[100] w-full overflow-x-hidden bg-black text-white shadow-[0_2px_16px_rgba(0,0,0,0.28)]">
          <div className="border-b-4 border-playard-red bg-[#080202]/95 backdrop-blur">
            <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-wrap items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-3 lg:py-4">
              <Link
                href="/"
                className="min-w-0 shrink text-xl font-black uppercase tracking-[-0.06em] text-white sm:text-3xl lg:text-4xl"
              >
                Playard
              </Link>

              <nav className="hidden items-center gap-5 text-xs font-black uppercase tracking-[0.12em] text-zinc-300 xl:flex">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    trackEvent={"trackEvent" in item ? item.trackEvent : undefined}
                    className={`relative transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-playard-red after:transition-all hover:after:w-full ${
                      index % 2 === 0 ? "hover:rotate-[-2deg]" : "hover:rotate-[2deg]"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex min-w-0 flex-wrap items-center justify-end gap-1.5 sm:gap-3">
                <TrackedAnchor
                  href="tel:01733641062"
                  eventName="telephone_clicked"
                  eventParams={{ source: "header" }}
                  className="hidden border-2 border-white px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:border-playard-red hover:bg-playard-red lg:inline-flex"
                >
                  Call
                </TrackedAnchor>
                <FunbutlerBookingModal
                  bookingFormId="673706716dbb45cccad59994"
                  buttonText="Quick Book"
                  title="Book Playard"
                  subtitle="Activities, parties, group bookings and Playard packages."
                  className="!px-2.5 !py-2.5 !text-[0.65rem] font-black uppercase tracking-wide playard-glow sm:!px-5 sm:!py-3 sm:!text-sm"
                  trackEvent="quick_book_clicked"
                />
                <FunbutlerGiftCardModal
                  buttonText="Gift Cards"
                  title="Buy Gift Card"
                  subtitle="Choose your gift card amount and complete your purchase securely."
                  className="border-2 border-white !bg-transparent !px-2.5 !py-2.5 !text-[0.65rem] font-black uppercase tracking-wide text-white !shadow-none transition hover:!scale-100 hover:!rotate-0 hover:border-[#d71920] hover:!bg-[#d71920] hover:text-white sm:!px-3 sm:!py-3 sm:!text-xs"
                />
              </div>
            </div>

            <div className="border-t border-red-950/60 px-3 py-1.5 xl:hidden">
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-1 text-center text-[0.58rem] font-black uppercase tracking-[0.04em] text-zinc-300 sm:grid-cols-6 sm:gap-2 sm:text-xs">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    trackEvent={"trackEvent" in item ? item.trackEvent : undefined}
                    className="min-w-0 border border-zinc-800 bg-black px-1 py-1.5 leading-tight hover:border-playard-red hover:text-white sm:px-2 sm:py-2"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <WhatsOnTicker />
        </header>

        <div className="relative z-0 overflow-x-hidden">
          {children}

          <footer className="relative overflow-hidden border-t-4 border-playard-red bg-[#080202] px-6 py-16 text-white">
          <div className="noise-overlay" />
          <div className="absolute -left-20 top-24 h-56 w-56 rotate-45 border-[32px] border-playard-red/15" />
          <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 grid gap-8 border-b border-zinc-800 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-5 inline-flex rotate-[-3deg] bg-playard-red px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                  The next round starts here
                </p>
                <h2 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.09em] sm:text-6xl md:text-8xl lg:text-9xl">
                  Play hard. Stay late.
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <FunbutlerBookingModal
  bookingFormId="673706716dbb45cccad59994"
  buttonText="Quick Book"
  title="Book Playard"
  subtitle="Activities, parties, group bookings and Playard packages."
  trackEvent="quick_book_clicked"
/>
                <Link
                  href="/parking-and-directions"
                  className="border-2 border-white px-7 py-4 text-center font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:border-playard-red hover:bg-playard-red"
                >
                  Parking & Directions
                </Link>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_0.9fr_1fr_1.35fr]">
              <div>
                <h3 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.08em] sm:text-5xl">
                  PLAYARD
                </h3>
                <p className="max-w-xl text-lg leading-8 text-zinc-400">
                  Peterborough city centre games bar for darts, pool, shuffleboard,
                  VR, street curling, food, drinks, birthdays, work socials and loud group nights out.
                </p>
                <div className="mt-6 flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap text-[0.65rem] font-black uppercase tracking-wide text-black sm:text-xs">
                  <span className="rotate-[-2deg] bg-white px-2 py-2 sm:px-3">Games</span>
                  <span className="rotate-[2deg] bg-playard-red px-2 py-2 text-white sm:px-3">Drinks</span>
                  <span className="rotate-[-1deg] bg-white px-2 py-2 sm:px-3">Food</span>
                  <span className="rotate-[1deg] bg-playard-red px-2 py-2 text-white sm:px-3">Parties</span>
                  <span className="rotate-[-2deg] bg-white px-2 py-2 sm:px-3">Good Times</span>
                </div>
                <div className="mt-8">
                  <h3 className="mb-4 font-black uppercase tracking-[0.18em] text-playard-red">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/804074306133481/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Playard Peterborough on Facebook"
                      className="group inline-flex h-12 w-12 items-center justify-center border-2 border-white bg-[#1877F2] text-white transition hover:rotate-[-3deg] hover:scale-110"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/playardpeterborough/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Playard Peterborough on Instagram"
                      className="group inline-flex h-12 w-12 items-center justify-center border-2 border-white bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition hover:rotate-[3deg] hover:scale-110"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.55a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35Z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.tiktok.com/@playardpeterborough"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Playard Peterborough on TikTok"
                      className="group inline-flex h-12 w-12 items-center justify-center border-2 border-white bg-black text-white transition hover:rotate-[-3deg] hover:scale-110"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M16.6 2c.32 2.72 1.84 4.35 4.4 4.52v3.05c-1.48.14-2.78-.34-4.3-1.25v5.7c0 7.24-7.9 9.5-11.07 4.31-2.04-3.34-.79-9.2 5.76-9.43v3.22c-.48.08-.99.2-1.46.36-1.4.47-2.2 1.35-1.98 2.9.42 2.98 5.9 3.86 5.44-1.96V2h3.21Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-black uppercase tracking-[0.18em] text-playard-red">Explore</h3>
                <div className="flex flex-col gap-2 text-zinc-400">
                  {footerExploreLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-black uppercase tracking-[0.18em] text-playard-red">Games</h3>
                <div className="flex flex-col gap-2 text-zinc-400">
                  {footerGameLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-black uppercase tracking-[0.18em] text-playard-red">Info</h3>


                <div className="flex flex-col gap-2 text-zinc-400">
                  <Link href="/about" className="hover:text-white">About</Link>
                  <Link href="/corporate-events" className="hover:text-white">Corporate Events</Link>
                  <TrackedLink href="/gift-cards" eventName="gift_card_clicked" className="hover:text-white">
                    Gift Cards
                  </TrackedLink>
                  <Link
                    href="/investment-and-sponsorship"
                    className="whitespace-nowrap hover:text-white"
                  >
                    Investment & Sponsorship
                  </Link>
                  <Link href="/faq" className="hover:text-white">FAQ</Link>
                  <Link
                    href="/parking-and-directions"
                    className="whitespace-nowrap hover:text-white"
                  >
                    Parking & Directions
                  </Link>
                  <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
                  <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                  <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                  <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 text-sm text-zinc-400 lg:grid-cols-[1fr_1.5fr_1fr]">
              <div>
                <p className="font-bold text-white">Find us</p>
                <p>26 Hereward Cross, Peterborough, PE1 1TE</p>
              </div>

              <div>
                <p className="mb-2 font-bold text-white">Opening times</p>
                <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  <div>
                    <p className="font-bold text-playard-red">Term Time</p>
                    <p>Mon &amp; Tue: Closed</p>
                    <p>Wed &amp; Thu: 2pm to 9pm</p>
                    <p>Fri: 2pm to 11pm</p>
                    <p>Sat: 10am to 11pm</p>
                    <p>Sun: 10am to 8pm</p>
                  </div>
                  <div>
                    <p className="font-bold text-playard-red">Holidays</p>
                    <p>Mon to Thu: 12pm to 9pm</p>
                    <p>Fri: 12pm to 11pm</p>
                    <p>Sat: 10am to 11pm</p>
                    <p>Sun: 10am to 8pm</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:items-end">
                <TrackedAnchor
                  href="mailto:info@playard.co.uk"
                  eventName="email_enquiry_clicked"
                  eventParams={{ source: "footer" }}
                  className="hover:text-white"
                >
                  info@playard.co.uk
                </TrackedAnchor>
                <TrackedAnchor
                  href="tel:01733641062"
                  eventName="telephone_clicked"
                  eventParams={{ source: "footer" }}
                  className="hover:text-white"
                >
                  01733 641062
                </TrackedAnchor>
              </div>
            </div>
          </div>
        </footer>
        </div>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}