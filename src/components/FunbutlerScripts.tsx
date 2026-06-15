

"use client";

import Script from "next/script";

export default function FunbutlerScripts() {
  return (
    <>
      <link
        rel="stylesheet"
        id="procommerca-booking-style-css"
        href="https://booking.funbutler.com/apps/public-app/styles.css"
        type="text/css"
      />

      <style jsx global>{`
        .loader-wrapper {
          text-align: center;
        }

        .loader-icon {
          display: inline-block;
          width: 64px;
          height: 64px;
        }

        .loader-icon.padded {
          margin: 15px;
        }

        .loader-icon.large {
          width: 150px;
          height: 150px;
        }

        .loader-icon.large.padded {
          margin: 50px;
        }

        .loader-icon:after {
          content: " ";
          display: block;
          width: 100%;
          height: 100%;
          margin: 1px;
          border-radius: 50%;
          border: 5px solid black;
          border-color: black transparent black transparent;
          animation: loader-icon 1.2s linear infinite;
        }

        @keyframes loader-icon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <Script
        id="funbutler-runtime"
        src="https://booking.funbutler.com/apps/public-app/runtime.js"
        strategy="afterInteractive"
      />
      <Script
        id="funbutler-polyfills"
        src="https://booking.funbutler.com/apps/public-app/polyfills.js"
        strategy="afterInteractive"
      />
      <Script
        id="funbutler-main"
        src="https://booking.funbutler.com/apps/public-app/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}