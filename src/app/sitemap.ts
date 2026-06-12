import { MetadataRoute } from "next";

const baseUrl = "https://www.playard.co.uk";

const pages: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },

  // Main conversion pages
  {
    url: `${baseUrl}/book`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.98,
  },
  {
    url: `${baseUrl}/activities`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${baseUrl}/food-and-drinks`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/parties`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/corporate-events`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/offers`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/parking-and-directions`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  // Activity pages
  {
    url: `${baseUrl}/interactive-darts-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/pool-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/shuffleboard-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/street-curling-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/vr-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/simhunt-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/table-tennis-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/games-lounge-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Party pages
  {
    url: `${baseUrl}/birthday-parties-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/kids-parties-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${baseUrl}/teen-parties-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },

  // Local SEO pages
  {
    url: `${baseUrl}/things-to-do-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${baseUrl}/fun-things-to-do-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${baseUrl}/indoor-activities-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${baseUrl}/team-building-peterborough`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.92,
  },

  // Content and business pages
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    url: `${baseUrl}/tournaments`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/faq`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/investment-and-sponsorship`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  },

  // Legal and policy pages
  {
    url: `${baseUrl}/accessibility`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/cookie-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/terms-and-conditions`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages;
}