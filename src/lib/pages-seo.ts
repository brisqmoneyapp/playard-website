import type { MetadataRoute } from "next";

export type PageSeoEntry = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  category?: string;
  ogImage?: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
  noindex?: boolean;
};

export const PAGE_SEO_ENTRIES: PageSeoEntry[] = [
  {
    path: "/",
    title: "Playard Peterborough | Play Hard. Stay Late.",
    description:
      "Playard Peterborough is a city centre games bar with interactive darts, VR, shuffleboard, pool, street curling, food, drinks, events, parties and corporate bookings.",
    keywords: [
      "Playard Peterborough",
      "things to do Peterborough",
      "games bar Peterborough",
      "indoor activities Peterborough",
      "city centre entertainment Peterborough",
    ],
    category: "Entertainment",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/book",
    title: "Book Playard Peterborough | Activities, Parties & Packages",
    description:
      "Book Playard Peterborough online for darts, pool, shuffleboard, VR, street curling, table tennis, SimShooting, parties, group bookings and packages.",
    keywords: ["book Playard", "Playard booking", "activities booking Peterborough", "party booking Peterborough"],
    category: "Booking",
    changeFrequency: "weekly",
    priority: 0.98,
  },
  {
    path: "/activities",
    title: "Activities in Peterborough | Playard",
    description:
      "Explore Playard activities in Peterborough including interactive darts, shuffleboard, pool, street curling, VR, table tennis, SimShooting and the games lounge.",
    keywords: ["activities Peterborough", "Playard activities", "indoor games Peterborough", "group activities Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/food-and-drinks",
    title: "Food & Drinks Peterborough | Playard",
    description:
      "Enjoy food and drinks at Playard Peterborough. Hot dogs, chicken, snacks, beer, cocktails, soft drinks and bar food while you play in the city centre.",
    keywords: ["food and drinks Peterborough", "games bar food", "Playard menu", "drinks Peterborough city centre"],
    category: "Food & Drink",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/events",
    title: "What's On at Playard | Events in Peterborough",
    description:
      "See what's on at Playard Peterborough including Sip & Paint, Vibe District, music-led socials, DJ nights and cultural events in Peterborough city centre.",
    keywords: ["Playard events", "events Peterborough", "Sip and Paint Peterborough", "Vibe District Playard", "what's on Peterborough"],
    category: "Events",
    changeFrequency: "weekly",
    priority: 0.92,
    ogImage: "/images/venue/hero-poster.jpg",
  },
  {
    path: "/sip-and-paint-peterborough",
    title: "Sip & Paint Peterborough | PLNTD at Playard",
    description:
      "Book Sip & Paint at Playard Peterborough on Friday 31 July 2026. Two hours of guided painting plus DJ and social time in Peterborough city centre.",
    keywords: ["Sip and Paint Peterborough", "PLNTD Playard", "paint and sip Peterborough", "creative events Peterborough", "date night Peterborough"],
    category: "Events",
    changeFrequency: "weekly",
    priority: 0.92,
  },
  {
    path: "/parties",
    title: "Parties in Peterborough | Playard",
    description:
      "Birthday parties, teen parties, adult celebrations and group events at Playard Peterborough with games, food, drinks and private party options.",
    keywords: ["parties Peterborough", "birthday party venue Peterborough", "group celebrations Peterborough"],
    category: "Parties",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/birthday-parties-peterborough",
    title: "Birthday Parties in Peterborough | Playard",
    description:
      "Book birthday parties at Playard Peterborough with VR, darts, pool, games, food, drinks and packages for kids, teens and adults in the city centre.",
    keywords: ["birthday parties Peterborough", "kids birthday party Peterborough", "adult birthday Peterborough"],
    category: "Parties",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/kids-parties-peterborough",
    title: "Kids Parties Peterborough | Playard",
    description:
      "Kids birthday parties in Peterborough with VR, games, food and group activities at Playard Peterborough city centre.",
    keywords: ["kids parties Peterborough", "children's party Peterborough", "kids VR party Peterborough"],
    category: "Parties",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/teen-parties-peterborough",
    title: "Teen Parties Peterborough | Playard",
    description:
      "Teen birthday parties in Peterborough with VR, interactive darts, pool, table tennis, SimShooting, food and drinks at Playard.",
    keywords: ["teen parties Peterborough", "teenage birthday party Peterborough"],
    category: "Parties",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/corporate-events",
    title: "Corporate Events Peterborough | Team Building | Playard",
    description:
      "Corporate events, team building, work socials, Christmas parties and client entertainment at Playard Peterborough with games, food and drinks.",
    keywords: ["corporate events Peterborough", "team building Peterborough", "work social Peterborough"],
    category: "Corporate",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/team-building-peterborough",
    title: "Team Building Activities Peterborough | Playard",
    description:
      "Team building activities in Peterborough at Playard with interactive darts, VR, shuffleboard, pool, street curling, food and drinks for work groups.",
    keywords: ["team building Peterborough", "team building activities Peterborough", "corporate team building"],
    category: "Corporate",
    changeFrequency: "weekly",
    priority: 0.92,
  },
  {
    path: "/offers",
    title: "Offers & Promotions | Playard Peterborough",
    description:
      "Discover Playard Peterborough offers, group deals, family promotions, student discounts and seasonal specials in Peterborough city centre.",
    keywords: ["Playard offers", "Peterborough deals", "games bar promotions Peterborough"],
    category: "Offers",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/gift-cards",
    title: "Gift Cards | Playard Peterborough",
    description:
      "Buy Playard gift cards for birthdays, Christmas, staff rewards and unforgettable games, food and drinks in Peterborough.",
    keywords: ["Playard gift cards", "experience gift Peterborough", "games bar gift voucher"],
    category: "Gift Cards",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/contact",
    title: "Contact Playard Peterborough | Find Us",
    description:
      "Contact Playard Peterborough for bookings, parties, corporate events and general enquiries. 26 Hereward Cross, PE1 1TE.",
    keywords: ["contact Playard", "Playard Peterborough address", "find Playard Peterborough"],
    category: "Contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/parking-and-directions",
    title: "Parking & Directions | Playard Peterborough",
    description:
      "Find Playard Peterborough at 26 Hereward Cross, PE1 1TE. Parking, walking directions, train station access and city centre directions.",
    keywords: ["Playard parking", "Playard directions", "Peterborough city centre parking"],
    category: "Contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/interactive-darts-peterborough",
    title: "Interactive Darts in Peterborough | Playard",
    description:
      "Book interactive darts at Playard Peterborough. Digital darts, automatic scoring, group games, food, drinks, parties and work socials.",
    keywords: ["interactive darts Peterborough", "darts bar Peterborough", "digital darts Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/pool-peterborough",
    title: "Pool Tables in Peterborough | Playard",
    description:
      "Book pool tables at Playard Peterborough for casual games, date nights, group bookings, parties, work socials, food and drinks.",
    keywords: ["pool Peterborough", "pool tables Peterborough", "pool bar Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/shuffleboard-peterborough",
    title: "Shuffleboard in Peterborough | Playard",
    description:
      "Book shuffleboard at Playard Peterborough for dates, groups, work socials, parties, food and drinks in the city centre.",
    keywords: ["shuffleboard Peterborough", "shuffleboard bar Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/street-curling-peterborough",
    title: "Street Curling in Peterborough | Playard",
    description:
      "Book indoor street curling at Playard Peterborough. Curling without ice for families, groups, birthdays, team building and corporate events.",
    keywords: ["street curling Peterborough", "indoor curling Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/vr-peterborough",
    title: "VR Experiences in Peterborough | Playard",
    description:
      "Book virtual reality experiences at Playard Peterborough for families, kids parties, teenagers, corporate events and group gaming sessions.",
    keywords: ["VR Peterborough", "virtual reality Peterborough", "VR arcade Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    path: "/vr-arcade-games-peterborough",
    title: "VR Arcade Games in Peterborough | Playard",
    description:
      "Play VR arcade games at Playard Peterborough including sports, shooters, rhythm games, puzzles, family games and multiplayer VR.",
    keywords: ["VR arcade Peterborough", "VR games Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    path: "/vr-escape-rooms-peterborough",
    title: "VR Escape Rooms in Peterborough | Playard",
    description:
      "Play VR escape rooms at Playard Peterborough. Work together, solve puzzles and complete immersive missions with your group.",
    keywords: ["VR escape room Peterborough", "virtual escape room Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    path: "/free-roam-vr-peterborough",
    title: "Free Roam VR in Peterborough | Playard",
    description:
      "Play Free Roam VR at Playard Peterborough. Walk, move, battle and play together in shared multiplayer VR worlds for 2 to 4 players.",
    keywords: ["free roam VR Peterborough", "multiplayer VR Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    path: "/simhunt-peterborough",
    title: "SimShooting in Peterborough | Playard",
    description:
      "Book SimWay SimShooting at Playard Peterborough. A big screen simulator experience for groups, parties, work socials and competitive nights.",
    keywords: ["SimShooting Peterborough", "shooting simulator Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/table-tennis-peterborough",
    title: "Table Tennis in Peterborough | Playard",
    description:
      "Book table tennis at Playard Peterborough for friends, families, work socials, parties and competitive nights out with food and drinks.",
    keywords: ["table tennis Peterborough", "ping pong Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/games-lounge-peterborough",
    title: "Games Lounge in Peterborough | Playard",
    description:
      "Enjoy the Playard Games Lounge in Peterborough with board games, card games, cornhole, table football, party games, food and drinks.",
    keywords: ["games lounge Peterborough", "board games bar Peterborough"],
    category: "Activities",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/things-to-do-peterborough",
    title: "Things To Do In Peterborough | Playard",
    description:
      "Looking for things to do in Peterborough? Discover VR, interactive darts, shuffleboard, pool, street curling, food, drinks, parties and events at Playard.",
    keywords: ["things to do Peterborough", "Peterborough days out", "Peterborough entertainment"],
    category: "Local SEO",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/fun-things-to-do-peterborough",
    title: "Fun Things To Do In Peterborough | Playard",
    description:
      "Looking for fun things to do in Peterborough? Discover VR, interactive darts, shuffleboard, pool, street curling, food, drinks and group activities at Playard.",
    keywords: ["fun things to do Peterborough", "fun days out Peterborough"],
    category: "Local SEO",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/indoor-activities-peterborough",
    title: "Indoor Activities in Peterborough | Playard",
    description:
      "Indoor activities in Peterborough at Playard with VR, interactive darts, shuffleboard, pool, street curling, table tennis, SimShooting, food and drinks.",
    keywords: ["indoor activities Peterborough", "rainy day activities Peterborough"],
    category: "Local SEO",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/blog",
    title: "Playard Blog | Things To Do in Peterborough",
    description:
      "Guides and inspiration for things to do in Peterborough, indoor activities, birthday parties, date nights, team building and group days out.",
    keywords: ["Playard blog", "Peterborough guides", "things to do blog Peterborough"],
    category: "Blog",
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    path: "/tournaments",
    title: "Tournaments | Playard Peterborough",
    description:
      "Join competitive tournaments at Playard Peterborough including darts, pool, VR, table tennis, shuffleboard and special gaming events.",
    keywords: ["tournaments Peterborough", "darts tournament Peterborough", "pool tournament Peterborough"],
    category: "Events",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/about",
    title: "About Playard | Peterborough Entertainment Venue",
    description:
      "Learn about Playard Peterborough, a competitive social gaming venue with VR, interactive darts, shuffleboard, pool, street curling, food, drinks and events.",
    keywords: ["about Playard", "Playard Peterborough venue", "Peterborough games bar"],
    category: "About",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions | Playard Peterborough",
    description:
      "FAQs about Playard Peterborough including activities, bookings, parties, food, drinks, events, tournaments and corporate events.",
    keywords: ["Playard FAQ", "Playard questions", "Peterborough venue FAQ"],
    category: "FAQ",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/investment-and-sponsorship",
    title: "Investment & Sponsorship | Playard Peterborough",
    description:
      "Investment opportunities, sponsorship partnerships and venue branding opportunities at Playard Peterborough.",
    keywords: ["Playard sponsorship", "Playard investment", "venue sponsorship Peterborough"],
    category: "Business",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/accessibility",
    title: "Accessibility | Playard Peterborough",
    description:
      "Accessibility information for Playard Peterborough including venue access, support needs, website accessibility and contact before visiting.",
    keywords: ["Playard accessibility", "accessible venue Peterborough"],
    category: "Legal",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Playard",
    description:
      "Read Playard Peterborough's Privacy Policy and learn how we collect, use and protect personal information.",
    keywords: ["Playard privacy policy"],
    category: "Legal",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy | Playard",
    description:
      "Learn how Playard Peterborough uses cookies and similar technologies on its website.",
    keywords: ["Playard cookie policy"],
    category: "Legal",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Playard",
    description:
      "Terms and Conditions for Playard Peterborough including bookings, activities, events and website usage.",
    keywords: ["Playard terms and conditions"],
    category: "Legal",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

const PAGE_SEO_MAP = new Map(PAGE_SEO_ENTRIES.map((entry) => [entry.path, entry]));

export function getPageSeoEntry(path: string): PageSeoEntry {
  const entry = PAGE_SEO_MAP.get(path);

  if (!entry) {
    throw new Error(`Missing SEO config for path: ${path}`);
  }

  return entry;
}
