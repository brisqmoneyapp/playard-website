import JsonLd from "@/components/JsonLd";
import { activityBreadcrumbs, breadcrumbListJsonLd } from "@/lib/seo";

type ActivityStructuredDataProps = {
  name: string;
  path: string;
};

export default function ActivityStructuredData({
  name,
  path,
}: ActivityStructuredDataProps) {
  return <JsonLd data={breadcrumbListJsonLd(activityBreadcrumbs(name, path))} />;
}
