import { MetadataRoute } from "next";
import { PAGE_SEO_ENTRIES } from "@/lib/pages-seo";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_SEO_ENTRIES.filter((entry) => !entry.noindex).map((entry) => ({
    url: entry.path === "/" ? SITE_URL : `${SITE_URL}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency ?? "monthly",
    priority: entry.priority ?? 0.5,
  }));
}
