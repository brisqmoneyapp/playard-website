"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import TrackedLink from "@/components/TrackedLink";
import type { AnalyticsEvent } from "@/lib/analytics";

type NavLinkProps = {
  href: string;
  className: string;
  trackEvent?: AnalyticsEvent;
  children: ReactNode;
};

export default function NavLink({
  href,
  className,
  trackEvent,
  children,
}: NavLinkProps) {
  if (trackEvent) {
    return (
      <TrackedLink href={href} eventName={trackEvent} className={className}>
        {children}
      </TrackedLink>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
