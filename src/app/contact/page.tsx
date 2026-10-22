import type { Metadata } from "next";
import Link from "next/link";
import { OrnamentalDivider, StampBadge, AnchorIcon, TradStar, HeartIcon } from "@/components/Decorations";
import { business } from "@/data/business";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact & Directions | Historic Tattoo — Portland, OR",
  description: `Contact Historic Tattoo at ${business.phone}. Visit us at ${business.address.full}. Open daily ${business.hours.short}. Walk-ins welcome. Traditional American tattoo shop in SE Portland.`,
  openGraph: {
    title: "Contact Historic Tattoo — Portland, OR",
    description: `Call ${business.phone} or visit ${business.address.full}. Open daily ${business.hours.short}. Walk-ins welcome.`,
    url: `${business.url}/contact`,
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Historic Tattoo — Portland, OR",
    description: `Call ${business.phone}. Open daily ${business.hours.short}. Walk-ins welcome.`,
  },
  alternates: {
    canonical: `${business.url}/contact`,
  },
};

const schemas = [
  contactPageSchema(),
  breadcrumbSchema([
    { name: "Home", url: business.url },
    { name: "Contact", url: `${business.url}/contact` },
  ]),
];

export default function ContactPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">Walk-Ins Welcome</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Contact & Location
            <span className="sr-only"> — Historic Tattoo Portland, OR</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Stop by, give us a call, or send us an email. We&apos;re in the heart of SE Portland and we&apos;d love to hear from you.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Google Maps */}
          <div className="mb-16 rounded-md overflow-hidden border-2 border-ht-red/20">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Historic+Tattoo,2001+SE+50th+Ave,Portland,OR+97215&zoom=15`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Historic Tattoo location on Google Maps"
              className="w-full"
            />
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="parchment-card p-8">
              <AnchorIcon className="w-8 h-8 text-ht-red mb-4" />
              <h2 className="font-display text-lg uppercase tracking-wider text-ht-cream mb-4">Address</h2>
              <address className="not-italic font-body text-ht-cream/80 text-sm leading-relaxed mb-4">
                {business.address.street}<br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </address>
              <p className="font-body text-xs text-ht-cream/40 mb-6">{business.address.neighborhood}</p>
              <a
                href={business.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-6 text-xs"
              >
                Get Directions
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </a>
            </div>

            {/* Hours */}
            <div className="parchment-card p-8">
              <TradStar className="w-8 h-8 text-ht-red mb-4" />
              <h2 className="font-display text-lg uppercase tracking-wider text-ht-cream mb-4">Hours</h2>
              <div className="font-body text-sm text-ht-cream/80 space-y-2">
                <p className="text-ht-cream font-medium text-lg">{business.hours.display}</p>
                <p className="text-ht-cream/40 text-xs mt-4">Walk-ins always welcome — no appointment needed</p>
              </div>
              <div className="mt-6 space-y-2">
                <p className="font-display text-xs tracking-widest uppercase text-ht-gold">Getting Here</p>
                <p className="font-body text-xs text-ht-cream/50">Free street parking available on SE 50th Ave</p>
                <p className="font-body text-xs text-ht-cream/50">Near SE Division St in the Foster-Powell neighborhood</p>
                <p className="font-body text-xs text-ht-cream/50">TriMet bus lines 4 and 14 stop nearby</p>
              </div>
            </div>

            {/* Contact */}
            <div className="parchment-card p-8">
              <HeartIcon className="w-8 h-8 text-ht-red mb-4" />
              <h2 className="font-display text-lg uppercase tracking-wider text-ht-cream mb-4">Contact</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-1">Phone</p>
                  <a href={business.phoneHref} className="font-body text-ht-cream/80 text-lg hover:text-ht-red transition-colors">
                    {business.phone}
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-1">Email</p>
                  <a href={`mailto:${business.email}`} className="font-body text-ht-cream/80 text-sm hover:text-ht-red transition-colors break-all">
                    {business.email}
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-1">Instagram</p>
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="font-body text-ht-cream/80 text-sm hover:text-ht-red transition-colors">
                    {business.social.instagramHandle}
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-1">Payment</p>
                  <p className="font-body text-ht-cream/60 text-xs">Cash, Visa, Mastercard, Amex, Apple Pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <a
              href={business.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Before You Visit</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-8">
            First time getting a tattoo? Check out our <Link href="/faq" className="text-ht-red hover:text-ht-red-light transition-colors underline">FAQ</Link> or
            read our <Link href="/aftercare" className="text-ht-red hover:text-ht-red-light transition-colors underline">aftercare guide</Link> to know what to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="btn-secondary">
              Read FAQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/aftercare" className="btn-secondary">
              Aftercare Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
