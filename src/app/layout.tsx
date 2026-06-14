import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playard.co.uk"),
  title: {
    default: "Playard Peterborough | Play Hard. Stay Late.",
    template: "%s | Playard Peterborough",
  },
  description:
    "Playard Peterborough is a city centre games bar with interactive darts, VR, shuffleboard, pool, street curling, table tennis, SimShooting, food, drinks, parties, team building and corporate events.",
  keywords: [
    "Playard Peterborough",
    "Things to do in Peterborough",
    "Indoor activities Peterborough",
    "Interactive darts Peterborough",
    "VR Peterborough",
    "Shuffleboard Peterborough",
    "Pool Peterborough",
    "Street Curling Peterborough",
    "Team Building Peterborough",
    "Corporate Events Peterborough",
    "Birthday Parties Peterborough",
  ],
  openGraph: {
    title: "Playard Peterborough | Play Hard. Stay Late.",
    description:
      "A city centre games bar with darts, pool, shuffleboard, VR, street curling, food, drinks, birthdays, work socials and big group nights out.",
    url: "https://www.playard.co.uk",
    siteName: "Playard Peterborough",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Playard Peterborough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playard Peterborough | Play Hard. Stay Late.",
    description:
      "Games bar, food, drinks, parties and big group nights out in Peterborough city centre.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.playard.co.uk",
  },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Games" },
  { href: "/food-and-drinks", label: "Food & Drinks" },
  { href: "/parties", label: "Parties" },
  { href: "/corporate-events", label: "Corporate" },
  { href: "/offers", label: "Offers" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/contact", label: "Find Us" },
];

const footerGameLinks = [
  { href: "/interactive-darts-peterborough", label: "Interactive Darts" },
  { href: "/pool-peterborough", label: "Pool" },
  { href: "/shuffleboard-peterborough", label: "Shuffleboard" },
  { href: "/vr-peterborough", label: "VR" },
  { href: "/street-curling-peterborough", label: "Street Curling" },
  { href: "/games-lounge-peterborough", label: "Games Lounge" },
];

const topTickerItems = [
  "Games Bar",
  "Food & Drinks",
  "Interactive Darts",
  "Pool Tables",
  "Shuffleboard",
  "VR",
  "Parties",
  "Gift Cards",
  "Work Socials",
  "Tournaments",
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
        <header className="sticky top-0 z-50 bg-black text-white">
          <div className="red-stripe border-b border-red-950 px-6 py-2 text-black">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white md:justify-between">
              <span>Peterborough games bar</span>
              <span className="hidden md:inline">Food • Drinks • Darts • Pool • Parties</span>
              <span>26 Hereward Cross</span>
            </div>
          </div>

          <div className="border-b-4 border-playard-red bg-[#080202]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
              <Link
                href="/"
                className="shrink-0 text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-4xl"
              >
                Playard
              </Link>

              <nav className="hidden items-center gap-5 text-xs font-black uppercase tracking-[0.12em] text-zinc-300 xl:flex">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-playard-red after:transition-all hover:after:w-full ${
                      index % 2 === 0 ? "hover:rotate-[-2deg]" : "hover:rotate-[2deg]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <a
                  href="tel:01733641062"
                  className="hidden border-2 border-white px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:border-playard-red hover:bg-playard-red lg:inline-flex"
                >
                  Call
                </a>
                <Link
                  href="/book"
                  className="bg-playard-red px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:rotate-[-3deg] hover:bg-[#ef233c] sm:px-5 sm:text-sm playard-glow"
                >
                  Quick Book
                </Link>
                <Link
                  href="/activities"
                  className="border-2 border-white px-4 py-3 text-xs font-black uppercase tracking-wide text-white sm:hidden"
                >
                  Games
                </Link>
              </div>
            </div>

            <div className="border-t border-red-950/60 px-6 py-2 xl:hidden">
              <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1 text-[0.7rem] font-black uppercase tracking-wide text-zinc-300 sm:gap-3 sm:text-xs">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="shrink-0 border border-zinc-800 bg-black px-3 py-2 hover:border-playard-red hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="relative overflow-hidden border-t-4 border-playard-red bg-[#080202] px-6 py-16 text-white">
          <div className="noise-overlay" />
          <div className="absolute -left-20 top-24 h-56 w-56 rotate-45 border-[32px] border-playard-red/15" />
          <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 rotate-[1deg] border-y-4 border-playard-red bg-white py-4 text-black">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 text-base font-black uppercase tracking-[-0.03em] sm:text-lg md:text-2xl">
                {topTickerItems.map((item) => (
                  <span key={item}>{item} •</span>
                ))}
              </div>
            </div>

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
                <Link
                  href="/book"
                  className="bg-playard-red px-7 py-4 text-center font-black uppercase tracking-wide text-white transition hover:rotate-[-2deg] hover:bg-[#ef233c]"
                >
                  Quick Book
                </Link>
                <Link
                  href="/parking-and-directions"
                  className="border-2 border-white px-7 py-4 text-center font-black uppercase tracking-wide text-white transition hover:rotate-[2deg] hover:border-playard-red hover:bg-playard-red"
                >
                  Parking & Directions
                </Link>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <h3 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.08em] sm:text-5xl">
                  PLAYARD
                </h3>
                <p className="max-w-xl text-lg leading-8 text-zinc-400">
                  Peterborough city centre games bar for darts, pool, shuffleboard,
                  VR, street curling, food, drinks, birthdays, work socials and loud group nights out.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase tracking-wide text-black">
                  <span className="rotate-[-2deg] bg-white px-3 py-2">Games</span>
                  <span className="rotate-[2deg] bg-playard-red px-3 py-2 text-white">Drinks</span>
                  <span className="rotate-[-1deg] bg-white px-3 py-2">Food</span>
                  <span className="rotate-[1deg] bg-playard-red px-3 py-2 text-white">Parties</span>
                  <span className="rotate-[-2deg] bg-white px-3 py-2">Chaos</span>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-black uppercase tracking-[0.18em] text-playard-red">Explore</h3>
                <div className="flex flex-col gap-2 text-zinc-400">
                  {navItems.map((item) => (
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
                  <Link href="/gift-cards" className="hover:text-white">Gift Cards</Link>
                  <Link href="/investment-and-sponsorship" className="hover:text-white">
                    Investment & Sponsorship
                  </Link>
                  <Link href="/faq" className="hover:text-white">FAQ</Link>
                  <Link href="/parking-and-directions" className="hover:text-white">Parking & Directions</Link>
                  <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
                  <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                  <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                  <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 text-zinc-400 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="font-bold text-white">Find us</p>
                <p>26 Hereward Cross, Peterborough, PE1 1TE</p>
              </div>
              <div className="flex flex-col gap-2 lg:items-end">
                <a href="mailto:info@playard.co.uk" className="hover:text-white">info@playard.co.uk</a>
                <a href="tel:01733641062" className="hover:text-white">01733 641062</a>
              </div>
            </div>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
