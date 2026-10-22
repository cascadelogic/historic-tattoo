import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import { artists } from "@/data/artists";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tattoo Artists | Historic Tattoo — Portland, OR",
  description:
    "Meet the 9 traditional American tattoo artists at Historic Tattoo in SE Portland, OR. 109 years of combined experience. Walk-ins welcome daily 11am–7pm at 2001 SE 50th Ave.",
  openGraph: {
    title: "Our Tattoo Artists — Historic Tattoo Portland, OR",
    description:
      "9 traditional American tattoo artists with 109 years combined experience. Walk-ins welcome daily in SE Portland.",
    url: "https://historictattoo.com/artists",
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Artists — Historic Tattoo Portland, OR",
    description:
      "Meet our 9 traditional American tattoo artists. 109 years combined experience. Walk-ins daily 11am–7pm.",
  },
  alternates: {
    canonical: "https://historictattoo.com/artists",
  },
};

const crumbSchema = breadcrumbSchema([
  { name: "Home", url: business.url },
  { name: "Artists", url: `${business.url}/artists` },
]);
const cdnUrl = (src: string, fmt: string) => src.startsWith("/") ? src : `${src}?format=${fmt}`;

export default function ArtistsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />

      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">109 Years Combined</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Our Artists
            <span className="sr-only"> — Traditional Tattoo Artists in Portland, OR</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Nine traditional American tattoo artists at Portland&apos;s Historic Tattoo. Click any artist to view their portfolio, or message them on Instagram to book.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {artists.map((artist, idx) => (
            <div key={artist.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Artist info */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-6 mb-6">
                  {/* Ornate circular frame with decorative ring */}
                  <div className="relative w-24 h-24 rounded-full flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border-[3px] border-ht-red" />
                    <div className="absolute inset-[5px] rounded-full border border-dashed border-ht-gold/40" />
                    <div className="absolute inset-[8px] rounded-full overflow-hidden">
                      {artist.photo ? (
                        <Image
                          src={cdnUrl(artist.photo!, "300w")}
                          alt={`${artist.name} — tattoo artist at Historic Tattoo Portland`}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full bg-ht-gray flex items-center justify-center">
                          <span className="font-display text-3xl font-bold text-ht-red/40">{artist.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream">{artist.name}</h2>
                    <p className="font-body text-xs text-ht-cream/40 mt-1">{artist.specialty}</p>
                    {/* Availability stamp */}
                    <span className="inline-block mt-2 font-display text-[10px] tracking-widest uppercase text-ht-gold border border-ht-gold/30 px-2 py-0.5 rounded-sm">
                      {artist.days}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/artists/${artist.slug}`}
                    className="btn-primary !py-2 !px-6 text-xs"
                  >
                    View Portfolio
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  <a
                    href={artist.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2 !px-6 text-xs"
                  >
                    {artist.igHandle}
                  </a>
                </div>
              </div>

              {/* Portfolio grid — flash sheet style */}
              {artist.portfolio.length > 0 ? (
                <Link
                  href={`/artists/${artist.slug}`}
                  className={`grid grid-cols-2 gap-2 grunge-border p-2 group ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  {artist.portfolio.map((img, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden bg-ht-gray warm-glow">
                      <Image
                        src={cdnUrl(img.src, "500w")}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 45vw, 25vw"
                      />
                    </div>
                  ))}
                </Link>
              ) : (
                <div className="parchment-card p-12 text-center">
                  <p className="font-display text-sm tracking-widest uppercase text-ht-cream/30 mb-4">
                    Portfolio on Instagram
                  </p>
                  <a
                    href={artist.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2 !px-6 text-xs"
                  >
                    View on Instagram
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Book an Appointment or Just Walk In</h2>
          <OrnamentalDivider className="mb-4" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-6">
            Walk-ins are welcome every day, {business.hours.short}. To book with a specific artist, message them on Instagram or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {business.social.instagramHandle} on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
