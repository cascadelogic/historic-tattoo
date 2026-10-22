import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  OrnamentalDivider,
  StampBadge,
  AnchorIcon,
  RoseIcon,
  EagleIcon,
  HeartIcon,
  TradStar,
} from "@/components/Decorations";
import { artists as allArtists } from "@/data/artists";
import { business } from "@/data/business";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

/* ── Metadata — keyword-rich for Google Ads QS ────────────────────── */
export const metadata: Metadata = {
  title:
    "Tattoo Shop Portland OR | Walk-In Tattoo Shops Near Me | Historic Tattoo",
  description:
    "Looking for the best tattoo shop in Portland? Historic Tattoo is Portland's top-rated walk-in tattoo shop — 9 artists, 18+ years, 395+ five-star reviews. Traditional American tattoos, flash, and custom work. Open daily 11am–7pm. No appointment needed.",
  keywords: [
    "tattoo shop Portland",
    "tattoo shops near me",
    "walk in tattoo shops near me",
    "best tattoo shops near me",
    "tattoo places near me",
    "tattoo near me",
    "traditional tattoo Portland",
    "Portland Oregon tattoos",
    "walk-in tattoo Portland",
    "flash tattoo Portland",
    "tattoo places",
    "best tattoo shop Portland",
  ],
  alternates: {
    canonical: "https://historictattoo.com/tattoo-shop-portland",
  },
  openGraph: {
    title: "Best Walk-In Tattoo Shop in Portland | Historic Tattoo",
    description:
      "Portland's top-rated traditional American tattoo shop. Walk-ins welcome 7 days a week. 9 artists, 395+ reviews, 18+ years. Call (503) 236-3440.",
    url: "https://historictattoo.com/tattoo-shop-portland",
    siteName: "Historic Tattoo",
    type: "website",
    locale: "en_US",
  },
};

/* ── Data ──────────────────────────────────────────────────────────── */
const homeArtists = allArtists.filter((a) => a.photo !== null);

const cdnUrl = (src: string, fmt: string) =>
  src.startsWith("/") ? src : `${src}?format=${fmt}`;

const portfolioImages = [
  {
    src: "/portfolio/craig-brown/01.jpg",
    alt: "Traditional American eagle tattoo by Craig Brown at Historic Tattoo Portland Oregon",
  },
  {
    src: "/hero/abbie-ladyhead.jpg",
    alt: "Classic lady head tattoo by Abbie Fitzpatrick at walk-in tattoo shop Portland",
  },
  {
    src: "/portfolio/adam-defiglio/01.jpg",
    alt: "Bold traditional flash tattoo by Adam DeFiglio at tattoo shop near me Portland",
  },
  {
    src: "/portfolio/tony-vyeda/03.jpg",
    alt: "Traditional snake tattoo by Tony Vyeda at best tattoo shop Portland Oregon",
  },
  {
    src: "/portfolio/brad-delay/02.jpg",
    alt: "Traditional American tattoo by Brad Delay at Historic Tattoo walk-in tattoo shop Portland",
  },
  {
    src: "/hero/krystian-heartdagger.jpg",
    alt: "Bold heart and dagger tattoo by Krystian Schneider at tattoo shop Portland OR",
  },
];

const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Got a walk-in traditional rose from Craig and it's the best tattoo I own. The shop has incredible energy — everyone is welcoming and professional. Will be back.",
    source: "Google",
  },
  {
    author: "Jake T.",
    rating: 5,
    text: "Did the Get What You Get on a whim and got an anchor. Couldn't be happier. The whole experience is just fun — these guys clearly love what they do.",
    source: "Yelp",
  },
  {
    author: "Megan R.",
    rating: 5,
    text: "Historic Tattoo is a Portland institution. I've gotten three tattoos here and every single one is exactly what traditional American tattooing should look like. Go here.",
    source: "Google",
  },
];

const faqs = [
  {
    question:
      "Do I need an appointment at Historic Tattoo, or can I just walk in?",
    answer:
      "No appointment needed! Historic Tattoo is a walk-in tattoo shop open 7 days a week from 11am to 7pm. Just come in and one of our 9 artists will take care of you. We're one of the few tattoo shops near Portland that welcomes walk-ins every single day.",
  },
  {
    question: "Where is the best tattoo shop in Portland, Oregon?",
    answer:
      "Historic Tattoo is Portland's top-rated traditional American tattoo shop, located at 2001 SE 50th Ave in SE Portland near SE Division. With a 4.8-star rating on Google from 309+ reviews and 18+ years in business, we're consistently rated one of the best tattoo shops in Portland.",
  },
  {
    question: "What styles of tattoos do you offer?",
    answer:
      "We specialize in traditional American tattoos — bold lines, solid color, and timeless imagery built to last a lifetime. Our 9 artists bring 109 years of combined experience in traditional flash, custom traditional designs, Japanese-inspired work, and black & grey. We also offer unique experiences like Get What You Get ($100) and Tattoo Plinko ($200).",
  },
  {
    question: "How much do tattoos cost at Historic Tattoo?",
    answer:
      "Pricing varies by size and complexity. Our Get What You Get tattoos start at $100, and the GWYG Deluxe and Tattoo Plinko experiences are $200 each. Custom and flash tattoos are priced during your consultation. Walk in or call (503) 236-3440 for a quote.",
  },
  {
    question:
      "Are there walk-in tattoo shops near me in Portland open every day?",
    answer:
      "Yes! Historic Tattoo is open daily from 11am to 7pm, 7 days a week — including weekends. We're located at 2001 SE 50th Ave in SE Portland and always welcome walk-ins. No appointment needed. We're one of the few tattoo places near Portland that's open every day with 9 artists on rotation.",
  },
];

/* ── JSON-LD Schemas ──────────────────────────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: business.name,
  description:
    "Portland's top-rated walk-in tattoo shop specializing in traditional American tattoos. 9 artists, 18+ years in business, 395+ five-star reviews. Open daily 11am–7pm.",
  url: "https://historictattoo.com/tattoo-shop-portland",
  telephone: business.phoneRaw,
  email: business.email,
  foundingDate: "2008",
  image: "https://historictattoo.com/portfolio/craig-brown/01.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: business.hours.days.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens: business.hours.open,
    closes: business.hours.close,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.reviews.google.rating,
    reviewCount: business.reviews.total,
    bestRating: 5,
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Portland",
    containedInPlace: {
      "@type": "State",
      name: "Oregon",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Walk-In Flash Tattoo",
          description: "Choose from thousands of hand-painted flash designs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Traditional Tattoo",
          description: "Custom traditional American tattoo design and application",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Get What You Get",
          description: "Surprise traditional tattoo experience for $100",
        },
        price: "100",
        priceCurrency: "USD",
      },
    ],
  },
  sameAs: [business.social.instagram, business.social.yelp],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 9 },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://historictattoo.com" },
  {
    name: "Tattoo Shop Portland",
    url: "https://historictattoo.com/tattoo-shop-portland",
  },
]);

const faqSchema = faqPageSchema(faqs);

/* ── Page Component ───────────────────────────────────────────────── */
export default function TattooShopPortlandLP() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbs, faqSchema]),
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Mobile: portfolio background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/portfolio/craig-brown/01.jpg"
            alt="Traditional American tattoo at Historic Tattoo Portland Oregon"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ht-black/85 via-ht-black/75 to-ht-black/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] sm:min-h-[90vh]">
            {/* Left: copy + CTAs */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20 sm:py-16 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-5">
                <StampBadge>Est. 2008 · Portland, OR</StampBadge>
              </div>

              <h1 className="font-display font-bold uppercase leading-none mb-5">
                <span className="block text-4xl sm:text-6xl lg:text-7xl text-ht-cream tracking-wide">
                  Best Tattoo Shop
                </span>
                <span className="block text-4xl sm:text-6xl lg:text-7xl text-ht-red tracking-wide">
                  in Portland, Oregon
                </span>
              </h1>

              <p className="font-body text-ht-cream/80 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4">
                Historic Tattoo is Portland&apos;s top-rated{" "}
                <strong className="text-ht-cream">walk-in tattoo shop</strong>{" "}
                near SE Division — specializing in traditional American tattoos
                since 2008. No appointment needed.{" "}
                <strong className="text-ht-cream">Open 7 days a week.</strong>
              </p>

              {/* CTAs — above reviews on mobile for above-fold visibility */}
              <div className="flex flex-col gap-3 justify-center lg:justify-start mb-6 max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:flex-row">
                <a
                  href={business.phoneHref}
                  className="btn-primary"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (503) 236-3440
                </a>
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full lg:w-auto"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Review stars — below CTAs so mobile users see action buttons first */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                  ))}
                </div>
                <span className="font-display text-sm text-ht-gold">
                  {business.reviews.google.rating} Stars
                </span>
                <span className="text-ht-cream/40">·</span>
                <span className="font-body text-sm text-ht-cream/60">
                  {business.reviews.total}+ Reviews
                </span>
              </div>

              <p className="font-body text-xs text-ht-cream/40 tracking-widest uppercase">
                {business.address.full} · Open Daily {business.hours.short} ·
                Walk-Ins Welcome
              </p>
            </div>

            {/* Right: portfolio collage (desktop only) */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-3 gap-1.5 p-4 my-8 mr-8">
              {portfolioImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden bg-ht-gray ${i === 0 ? "rounded-tl-lg" : ""} ${i === 1 ? "rounded-tr-lg" : ""} ${i === 4 ? "rounded-bl-lg" : ""} ${i === 5 ? "rounded-br-lg" : ""}`}
                >
                  <Image
                    src={cdnUrl(img.src, "500w")}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 border border-ht-gold/10 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-ht-gold/90 via-ht-gold to-ht-gold/90 py-6 px-4 border-y-2 border-ht-gold/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "18+", label: "Years in Business", Icon: AnchorIcon },
            { num: "9", label: "Artists on Staff", Icon: EagleIcon },
            {
              num: `${business.reviews.total}+`,
              label: "5-Star Reviews",
              Icon: RoseIcon,
            },
            { num: "7", label: "Days a Week", Icon: HeartIcon },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.Icon className="w-5 h-5 text-ht-black/60 mb-1" />
              <p className="font-display text-2xl sm:text-3xl font-bold text-ht-black">
                {s.num}
              </p>
              <p className="font-display text-[10px] sm:text-xs tracking-widest uppercase text-ht-black/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Historic Tattoo ─────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Why Portland Chooses Us
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ht-cream mb-4 leading-tight">
              Portland&apos;s Walk-In Tattoo Shop
            </h2>
            <p className="font-body text-ht-cream/60 max-w-2xl mx-auto">
              Looking for a{" "}
              <strong className="text-ht-cream/80">tattoo shop near you</strong>{" "}
              in Portland? Historic Tattoo has been the home of traditional
              American tattooing in SE Portland since 2008. Walk in any day — no
              appointment needed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: AnchorIcon,
                title: "Walk-Ins Welcome Every Day",
                desc: "No appointment needed at our tattoo shop. Just walk in any day between 11am and 7pm — we're open 7 days a week with 9 artists on rotation.",
              },
              {
                Icon: EagleIcon,
                title: "18+ Years in Portland",
                desc: "Established in 2008, Historic Tattoo is one of Portland's longest-running traditional American tattoo shops. 109 years of combined artist experience.",
              },
              {
                Icon: RoseIcon,
                title: "Traditional American Specialists",
                desc: "Bold lines, solid color, timeless imagery. We specialize in the style that started it all — traditional American tattooing done right.",
              },
              {
                Icon: HeartIcon,
                title: "395+ Five-Star Reviews",
                desc: `Rated ${business.reviews.google.rating} stars on Google with ${business.reviews.google.count}+ reviews. One of the best-rated tattoo shops in Portland, Oregon.`,
              },
              {
                Icon: AnchorIcon,
                title: "Thousands of Flash Designs",
                desc: "Don't have a design in mind? Choose from thousands of hand-painted flash tattoo designs on our walls, or try our famous Get What You Get experience.",
              },
              {
                Icon: EagleIcon,
                title: "Custom Tattoo Work",
                desc: "Want something unique? Our artists create custom traditional designs tailored to you. Walk in to consult with an artist or call to discuss your idea.",
              },
            ].map((f) => (
              <div key={f.title} className="parchment-card p-6">
                <f.Icon className="w-7 h-7 text-ht-red mb-3" />
                <h3 className="font-display text-sm uppercase tracking-wider text-ht-cream mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-ht-cream/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream">
              Traditional Tattoos Done Right
            </h2>
            <OrnamentalDivider className="mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 mb-8">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden bg-ht-black warm-glow"
              >
                <Image
                  src={cdnUrl(img.src, "500w")}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 border border-ht-gold/10 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Artists ─────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              109 Years Combined Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream">
              Meet Our Tattoo Artists
            </h2>
            <OrnamentalDivider className="mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
            {homeArtists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/artists/${artist.slug}`}
                className="flash-card parchment-card p-3 text-center group"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-[3px] border-ht-red group-hover:border-ht-gold transition-colors">
                  <Image
                    src={cdnUrl(artist.photo!, "300w")}
                    alt={`${artist.name} — tattoo artist at Historic Tattoo Portland`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <h3 className="font-display text-[11px] uppercase tracking-wider text-ht-cream mb-0.5 group-hover:text-ht-red transition-colors leading-tight">
                  {artist.name}
                </h3>
                <p className="font-body text-[10px] text-ht-cream/40">
                  {artist.days}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-center font-body text-sm text-ht-cream/50">
            All artists specialize in traditional American tattooing. Walk in or
            call to see who&apos;s working today.
          </p>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Portland&apos;s Most-Loved Tattoo Shop
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream mb-4">
              {business.reviews.total}+ Five-Star Reviews
            </h2>
          </div>

          {/* Rating badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={business.reviews.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="parchment-card px-5 py-3 flex items-center gap-3 hover:border-ht-gold/40 transition-colors"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-display text-sm text-ht-cream">
                  {business.reviews.google.rating} on Google
                </p>
                <p className="font-body text-xs text-ht-cream/40">
                  {business.reviews.google.count} reviews
                </p>
              </div>
              <span className="font-display text-[10px] tracking-widest uppercase text-ht-green border border-ht-green/30 px-2 py-0.5 rounded-sm ml-1">
                Verified
              </span>
            </a>
            <a
              href={business.reviews.yelp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="parchment-card px-5 py-3 flex items-center gap-3 hover:border-ht-gold/40 transition-colors"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <TradStar
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "text-ht-gold" : "text-ht-gold/30"}`}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-display text-sm text-ht-cream">
                  {business.reviews.yelp.rating} on Yelp
                </p>
                <p className="font-body text-xs text-ht-cream/40">
                  {business.reviews.yelp.count} reviews
                </p>
              </div>
              <span className="font-display text-[10px] tracking-widest uppercase text-ht-green border border-ht-green/30 px-2 py-0.5 rounded-sm ml-1">
                Verified
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.author} className="parchment-card p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                  ))}
                </div>
                <p className="font-body text-ht-cream/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs tracking-widest uppercase text-ht-cream/50">
                    {r.author}
                  </span>
                  <span className="font-display text-[10px] tracking-widest uppercase text-ht-red border border-ht-red/30 px-2 py-0.5 rounded-sm">
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream">
              Tattoo Shop FAQ
            </h2>
            <OrnamentalDivider className="mt-3" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="parchment-card p-6">
                <h3 className="font-display text-base uppercase tracking-wider text-ht-cream mb-3">
                  {faq.question}
                </h3>
                <p className="font-body text-sm text-ht-cream/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Contact CTA ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-ht-gray border-t-2 border-ht-red/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Visit Our Tattoo Shop
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream mb-3">
              Walk In Today
            </h2>
            <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
              Located in SE Portland near SE Division. No appointment needed —
              just walk in between 11am and 7pm any day of the week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-ht-gold/15">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Historic+Tattoo,2001+SE+50th+Ave,Portland,OR+97215&zoom=15`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Historic Tattoo Portland location map"
                className="w-full"
              />
            </div>

            {/* Contact info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">
                    Address
                  </p>
                  <p className="font-body text-ht-cream text-lg">
                    {business.address.street}
                  </p>
                  <p className="font-body text-ht-cream text-lg">
                    {business.address.city}, {business.address.state}{" "}
                    {business.address.zip}
                  </p>
                  <p className="font-body text-ht-cream/40 text-sm mt-1">
                    {business.address.neighborhood}
                  </p>
                </div>

                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">
                    Hours
                  </p>
                  <p className="font-body text-ht-cream text-lg">
                    Open Every Day
                  </p>
                  <p className="font-body text-ht-cream text-lg font-medium">
                    {business.hours.short}
                  </p>
                  <p className="font-body text-ht-cream/40 text-sm mt-1">
                    Walk-ins always welcome — no appointment needed
                  </p>
                </div>

                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">
                    Phone
                  </p>
                  <a
                    href={business.phoneHref}
                    className="font-body text-ht-cream text-lg hover:text-ht-red transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={business.phoneHref} className="btn-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
