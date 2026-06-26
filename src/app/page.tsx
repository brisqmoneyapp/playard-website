import HomePageClient from "@/components/HomePageClient";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/");

export default function HomePage() {
  return <HomePageClient />;
}
