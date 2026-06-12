

"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type CookieChoice = "accepted" | "rejected" | null;

const COOKIE_STORAGE_KEY = "playard_cookie_consent";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function CookieBanner() {
  const [choice, setChoice] = useState<CookieChoice>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(
      COOKIE_STORAGE_KEY,
    ) as CookieChoice;

    if (storedChoice === "accepted" || storedChoice === "rejected") {
      setChoice(storedChoice);
    }

    setHasLoaded(true);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    setChoice("accepted");
  };

  const rejectCookies = () => {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "rejected");
    setChoice("rejected");
  };

  const hasAcceptedCookies = choice === "accepted";
  const shouldShowBanner = hasLoaded && choice === null;

  return (
    <>
      {hasAcceptedCookies && googleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="playard-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      ) : null}

      {hasAcceptedCookies && metaPixelId ? (
        <>
          <Script id="playard-meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      ) : null}

      {shouldShowBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-black/95 px-6 py-5 text-white shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-[#00d4ff]">
                Cookies
              </p>
              <p className="text-sm leading-6 text-zinc-300 md:text-base">
                Playard uses essential cookies to run this website. With your
                consent, we also use analytics and marketing cookies to understand
                website performance and improve our advertising.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <button
                type="button"
                onClick={rejectCookies}
                className="rounded-md border-2 border-white bg-black px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-[#00d4ff] hover:text-[#00d4ff]"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={acceptCookies}
                className="rounded-md bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#ef233c]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}