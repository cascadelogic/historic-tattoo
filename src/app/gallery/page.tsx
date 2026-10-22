import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import PortfolioGrid from "@/components/PortfolioGrid";
import { artists, getArtistsWithPortfolios } from "@/data/artists";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Historic Tattoo — Portland, OR",
  description:
    "Browse traditional American tattoo work by all 9 artists at Historic Tattoo in Portland, OR. Eagles, roses, anchors, skulls, and more. Best tattoo shop near me — walk-ins welcome daily 11am–7pm.",
  openGraph: {
    title: "Tattoo Gallery — Historic Tattoo Portland, OR",
    description:
      "Traditional American tattoo portfolio from 8 artists with 109 years combined experience. Walk-ins welcome daily in SE Portland.",
    url: `${business.url}/gallery`,
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Gallery — Historic Tattoo Portland, OR",
    description: "Browse traditional American tattoo work from Portland's Historic Tattoo.",
  },
  alternates: {
    canonical: `${business.url}/gallery`,
  },
};

const crumbSchema = breadcrumbSchema([
  { name: "Home", url: business.url },
  { name: "Gallery", url: `${business.url}/gallery` },
]);

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Historic Tattoo Portfolio Gallery",
  description: "Traditional American tattoo work by the 9 artists at Historic Tattoo in Portland, Oregon.",
  url: `${business.url}/gallery`,
  numberOfItems: artists.reduce((acc, a) => acc + a.portfolio.length, 0),
};

const artistsWithWork = getArtistsWithPortfolios();
const cdnUrl = (src: string, fmt: string) => src.startsWith("/") ? src : `${src}?format=${fmt}`;

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">The Work</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Tattoo Gallery
            <span className="sr-only"> — Portland, OR Traditional Tattoo Portfolio</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Bold lines, solid color, timeless imagery. Browse traditional American tattoo work from all of our Portland artists.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* Artist navigation pills */}
      <section className="py-4 px-4 bg-ht-black/95 backdrop-blur-sm border-b-2 border-ht-red/20 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto flex flex-nowrap overflow-x-auto gap-2 sm:flex-wrap sm:justify-center scrollbar-hide">
          {artistsWithWork.map((artist) => (
            <a
              key={artist.slug}
              href={`#${artist.slug}`}
              className="font-display text-xs tracking-widest uppercase text-ht-cream hover:text-white whitespace-nowrap bg-ht-red/10 hover:bg-ht-red border border-ht-red/30 hover:border-ht-red px-5 py-2.5 rounded-md transition-all min-h-[40px] flex items-center flex-shrink-0"
            >
              {artist.name}
            </a>
          ))}
        </div>
      </section>

      {/* Artist sections */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {artistsWithWork.map((artist) => (
            <div key={artist.slug} id={artist.slug} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Small avatar */}
                  {artist.photo && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ht-red flex-shrink-0">
                      <Image
                        src={cdnUrl(artist.photo!, "200w")}
                        alt={`${artist.name} at Historic Tattoo Portland`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream">{artist.name}</h2>
                    <p className="font-body text-xs text-ht-cream/40">{artist.specialty} · {artist.days}</p>
                  </div>
                </div>
                <Link
                  href={`/artists/${artist.slug}`}
                  className="hidden sm:inline-flex btn-tertiary text-xs"
                >
                  View Profile
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              <div className="grunge-border p-2 sm:p-3">
                <PortfolioGrid images={artist.portfolio} />
              </div>

              <div className="mt-4 sm:hidden text-center">
                <Link href={`/artists/${artist.slug}`} className="btn-tertiary text-xs">
                  View {artist.name}&apos;s Profile
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Like What You See?</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-8">
            Walk in any day between 11am and 7pm, or call to book with your favorite artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <Link href="/artists" className="btn-secondary">
              Meet the Artists
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
