"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
const AW_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();

// Initialize dataLayer + gtag stub immediately so custom events queue
// before the async gtag.js script loads (fixes race condition with useEffect)
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
}

const PHONE_CLICK_LABEL = "GvL7CPKy44McEMK28_RA";
const DIRECTIONS_CLICK_LABEL = "N_pTCPWy44McEMK28_RA";
const CONTACT_PAGE_LABEL = "_mdqCNmI7IMcEMK28_RA";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track client-side route changes in GA4
  useEffect(() => {
    if (!GA_ID) return;
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  // Contact Page View — GA4 key event + Google Ads conversion
  useEffect(() => {
    if (pathname !== "/contact") return;
    if (AW_ID) {
      window.gtag?.("event", "conversion", {
        send_to: `${AW_ID}/${CONTACT_PAGE_LABEL}`,
        value: 5.0,
        currency: "USD",
      });
    }
    window.gtag?.("event", "contact_page_view");
  }, [pathname]);

  // Artist page view — track which artists get the most interest
  useEffect(() => {
    const match = pathname.match(/^\/artists\/(.+)$/);
    if (!match) return;
    window.gtag?.("event", "artist_page_view", {
      artist_slug: match[1],
    });
  }, [pathname]);

  // Gallery view — high-intent page
  useEffect(() => {
    if (pathname !== "/gallery") return;
    window.gtag?.("event", "gallery_view");
  }, [pathname]);

  // Delegated click tracking for phone calls, directions, and Instagram
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const isMobileCTA = !!link.closest("[data-mobile-cta]");

      if (href.startsWith("tel:")) {
        if (AW_ID) {
          window.gtag?.("event", "conversion", {
            send_to: `${AW_ID}/${PHONE_CLICK_LABEL}`,
            value: 10.0,
            currency: "USD",
          });
        }
        window.gtag?.("event", "phone_click", {
          event_category: "engagement",
          link_url: href,
          cta_location: isMobileCTA ? "mobile_cta" : "page",
        });
        if (isMobileCTA) {
          window.gtag?.("event", "mobile_cta_call");
        }
      } else if (
        href.includes("maps.google.com") ||
        href.includes("goo.gl/maps")
      ) {
        if (AW_ID) {
          window.gtag?.("event", "conversion", {
            send_to: `${AW_ID}/${DIRECTIONS_CLICK_LABEL}`,
            value: 10.0,
            currency: "USD",
          });
        }
        window.gtag?.("event", "get_directions", {
          event_category: "engagement",
          link_url: href,
          cta_location: isMobileCTA ? "mobile_cta" : "page",
        });
        if (isMobileCTA) {
          window.gtag?.("event", "mobile_cta_directions");
        }
      } else if (href.includes("instagram.com")) {
        window.gtag?.("event", "instagram_click", {
          link_url: href,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!GA_ID && !AW_ID) return null;

  const primaryId = GA_ID || AW_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname });` : ""}
          ${AW_ID ? `gtag('config', '${AW_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
