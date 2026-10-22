"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

/** Generate a unique event ID for deduplication between Pixel and CAPI */
function genEventId(): string {
  return `ht-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/** Fire-and-forget CAPI call via our API route */
function sendServerEvent(
  eventName: string,
  eventId: string,
  sourceUrl: string,
  customData?: Record<string, unknown>
) {
  fetch("/api/meta-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventName, eventId, sourceUrl, customData }),
    keepalive: true,
  }).catch(() => {});
}

/** Construct _fbc from fbclid URL param if cookie is missing */
function ensureFbc() {
  if (typeof document === "undefined") return;
  if (document.cookie.includes("_fbc=")) return;
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get("fbclid");
  if (fbclid) {
    const fbc = `fb.1.${Date.now()}.${fbclid}`;
    document.cookie = `_fbc=${fbc}; path=/; max-age=${90 * 86400}; SameSite=Lax`;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  const trackEvent = useCallback(
    (eventName: string, customData?: Record<string, unknown>) => {
      if (!PIXEL_ID) return;
      const eventId = genEventId();
      const url = window.location.href;

      // Browser pixel
      window.fbq?.("track", eventName, customData || {}, { eventID: eventId });

      // Server CAPI (deduplicates via matching eventId)
      sendServerEvent(eventName, eventId, url, customData);
    },
    []
  );

  // Construct _fbc from fbclid on initial load
  useEffect(() => {
    ensureFbc();
  }, []);

  // PageView on every route change
  useEffect(() => {
    if (!PIXEL_ID) return;
    const eventId = genEventId();
    const url = `https://historictattoo.com${pathname}`;

    window.fbq?.("track", "PageView", {}, { eventID: eventId });
    sendServerEvent("PageView", eventId, url);
  }, [pathname]);

  // ViewContent — artist pages, gallery, GWYG, tattoo-shop-portland LP
  useEffect(() => {
    const artistMatch = pathname.match(/^\/artists\/(.+)$/);
    if (artistMatch) {
      trackEvent("ViewContent", {
        content_name: artistMatch[1],
        content_category: "artist_portfolio",
        content_type: "product",
      });
      return;
    }
    if (pathname === "/gallery") {
      trackEvent("ViewContent", {
        content_name: "Gallery",
        content_category: "portfolio",
      });
    } else if (pathname === "/get-what-you-get") {
      trackEvent("ViewContent", {
        content_name: "Get What You Get",
        content_category: "service",
        value: 100.0,
        currency: "USD",
      });
    } else if (pathname === "/tattoo-shop-portland") {
      trackEvent("ViewContent", {
        content_name: "Tattoo Shop Portland",
        content_category: "landing_page",
      });
    }
  }, [pathname, trackEvent]);

  // Contact — contact page view (high intent for walk-in shop)
  useEffect(() => {
    if (pathname === "/contact") {
      trackEvent("Contact", {
        content_name: "Contact Page",
      });
    }
  }, [pathname, trackEvent]);

  // Delegated click tracking for phone calls and directions
  useEffect(() => {
    if (!PIXEL_ID) return;

    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      // Phone click → Lead event (highest intent action for walk-in shop)
      if (href.startsWith("tel:")) {
        const eventId = genEventId();
        const url = window.location.href;
        window.fbq?.("track", "Lead", { content_name: "Phone Call", value: 10.0, currency: "USD" }, { eventID: eventId });
        sendServerEvent("Lead", eventId, url, { content_name: "Phone Call", value: 10.0, currency: "USD" });
      }

      // Get Directions click → FindLocation event
      if (href.includes("maps.google.com") || href.includes("goo.gl/maps")) {
        const eventId = genEventId();
        const url = window.location.href;
        window.fbq?.("track", "FindLocation", { content_name: "Get Directions" }, { eventID: eventId });
        sendServerEvent("FindLocation", eventId, url, { content_name: "Get Directions" });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
