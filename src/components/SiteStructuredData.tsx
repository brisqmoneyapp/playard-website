import JsonLd from "@/components/JsonLd";
import { siteOrganizationJsonLd } from "@/lib/seo";

export default function SiteStructuredData() {
  return <JsonLd data={siteOrganizationJsonLd()} />;
}
