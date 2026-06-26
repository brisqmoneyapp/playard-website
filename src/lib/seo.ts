import type { Metadata } from "next";
import {
  BUSINESS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config";
import { getPageSeoEntry, type PageSeoEntry } from "@/lib/pages-seo";

export type PageMetadataOptions = Partial<PageSeoEntry> & {
  path: string;
  robots?: Metadata["robots"];
};

export function absoluteUrl(path: string) {
  if (path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const base = getPageSeoEntry(options.path);
  const title = options.title ?? base.title;
  const description = options.description ?? base.description;
  const keywords = options.keywords ?? base.keywords;
  const category = options.category ?? base.category;
  const ogImage = options.ogImage ?? base.ogImage ?? DEFAULT_OG_IMAGE;
  const canonicalPath = options.path;
  const url = absoluteUrl(canonicalPath);

  return {
    title: { absolute: title },
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category,
    robots: options.robots ?? {
      index: options.noindex ? false : true,
      follow: true,
      googleBot: {
        index: options.noindex ? false : true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getPageMetadata(path: string): Metadata {
  return createPageMetadata({ path });
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function siteOrganizationJsonLd() {
  const { address, geo, sameAs, telephone, email, name, description } = BUSINESS;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name,
        description,
        url: SITE_URL,
        telephone,
        email,
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        priceRange: BUSINESS.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        sameAs,
      },
      {
        "@type": "SportsActivityLocation",
        "@id": `${SITE_URL}/#sportsactivitylocation`,
        name,
        url: SITE_URL,
        description,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
      },
      {
        "@type": "Restaurant",
        "@id": `${SITE_URL}/#restaurant`,
        name,
        url: absoluteUrl("/food-and-drinks"),
        description:
          "Food and drinks at Playard Peterborough including hot dogs, chicken, snacks, beer, cocktails and bar refreshments.",
        servesCuisine: "Bar food",
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
      },
    ],
  };
}

export type EventSchemaInput = {
  name: string;
  description: string;
  path: string;
  startDate: string;
  endDate: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  organizerName?: string;
  offersUrl?: string;
};

export function eventJsonLd(event: EventSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: event.eventStatus ?? "https://schema.org/EventScheduled",
    eventAttendanceMode:
      event.eventAttendanceMode ?? "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: BUSINESS.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.streetAddress,
        addressLocality: BUSINESS.address.addressLocality,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.organizerName ?? SITE_NAME,
      url: SITE_URL,
    },
    image: [absoluteUrl(DEFAULT_OG_IMAGE)],
    url: absoluteUrl(event.path),
    offers: event.offersUrl
      ? {
          "@type": "Offer",
          url: event.offersUrl,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

export type ItemListEvent = {
  name: string;
  description: string;
  path: string;
};

export function eventsItemListJsonLd(events: ItemListEvent[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "What's On at Playard Peterborough",
    itemListElement: events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: event.name,
      url: absoluteUrl(event.path),
      description: event.description,
    })),
  };
}

export function activityBreadcrumbs(activityName: string, path: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: activityName, path },
  ];
}
