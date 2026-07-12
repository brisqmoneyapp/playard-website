"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackFatsomaBookingClick } from "@/lib/analytics";
import { VIBE_DISTRICT_BOOKING_URL } from "@/lib/events";

type FatsomaBookingButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  source: string;
  href?: string;
};

export default function FatsomaBookingButton({
  source,
  href = VIBE_DISTRICT_BOOKING_URL,
  onClick,
  children,
  className = "",
  ...props
}: FatsomaBookingButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(event) => {
        trackFatsomaBookingClick(source);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
