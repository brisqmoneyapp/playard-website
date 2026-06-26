"use client";

import { useEffect, useRef, useState } from "react";

const EVENTBRITE_SCRIPT_ID = "eventbrite-widgets-script";
const EVENTBRITE_SCRIPT_SRC =
  "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
const EVENT_ID = "1992528618736";
const IFRAME_CONTAINER_ID = "eventbrite-widget-container-1992528618736";
const IFRAME_CONTAINER_HEIGHT = 425;

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: Record<string, unknown>) => void;
    };
  }
}

export default function EventbriteCheckout() {
  const widgetCreated = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const createWidget = () => {
      if (widgetCreated.current || typeof window === "undefined" || !window.EBWidgets) {
        return;
      }

      if (!document.getElementById(IFRAME_CONTAINER_ID)) {
        return;
      }

      widgetCreated.current = true;

      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: EVENT_ID,
        modal: false,
        iframeContainerId: IFRAME_CONTAINER_ID,
        iframeContainerHeight: IFRAME_CONTAINER_HEIGHT,
        onOrderComplete: () => {
          console.log("Eventbrite order complete");
        },
      });

      setIsLoading(false);
      setHasError(false);
    };

    const handleScriptError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    const existingScript = document.getElementById(
      EVENTBRITE_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.EBWidgets) {
        createWidget();
      } else {
        existingScript.addEventListener("load", createWidget);
        existingScript.addEventListener("error", handleScriptError);
      }

      return () => {
        existingScript.removeEventListener("load", createWidget);
        existingScript.removeEventListener("error", handleScriptError);
      };
    }

    const script = document.createElement("script");
    script.id = EVENTBRITE_SCRIPT_ID;
    script.src = EVENTBRITE_SCRIPT_SRC;
    script.async = true;
    script.onload = createWidget;
    script.onerror = handleScriptError;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p className="mb-4 text-center text-lg font-bold leading-8 text-black">
          Loading secure Eventbrite checkout...
        </p>
      ) : null}

      {hasError ? (
        <p className="mb-4 text-center text-lg font-bold leading-8 text-[#d71920]">
          The checkout widget could not be loaded. Please use the Eventbrite link below.
        </p>
      ) : null}

      <div
        id={IFRAME_CONTAINER_ID}
        className="overflow-hidden rounded-2xl border-4 border-black bg-white"
        style={{ minHeight: IFRAME_CONTAINER_HEIGHT }}
      />
    </div>
  );
}
