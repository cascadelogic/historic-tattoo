import type { Metadata } from "next";
import Link from "next/link";
import {
  BannerRibbon,
  OrnamentalDivider,
  StampBadge,
  AnchorIcon,
  RoseIcon,
  HeartIcon,
} from "@/components/Decorations";

export const metadata: Metadata = {
  title: "About Historic Tattoo — Portland's Traditional Tattoo Shop Since 2008",
  description:
    "Historic Tattoo has been Portland's home of traditional American tattooing since 2008. Located in SE Portland's Foster-Powell neighborhood at 2001 SE 50th Ave. Walk-ins welcome daily.",
  openGraph: {
    title: "About Historic Tattoo — Portland's Traditional Tattoo Shop Since 2008",
    description:
      "Portland's home of traditional American tattooing since 2008. 8 artists, 109 years combined experience, walk-ins welcome daily 11am–7pm.",
    url: "https://historictattoo.com/about",
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Historic Tattoo — Portland, OR",
    description:
      "Portland's home of traditional American tattooing since 2008. Walk-ins welcome daily 11am–7pm.",
  },
  alternates: {
    canonical: "https://historictattoo.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">Est. 2008</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mt-4">
            About Historic Tattoo
            <span className="sr-only"> — Portland&apos;s Traditional Tattoo Shop</span>
          </h1>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <BannerRibbon className="w-56 sm:w-72 h-12 mb-8">
            Our Story
          </BannerRibbon>
          <div className="space-y-6 font-body text-ht-cream/80 leading-relaxed text-lg mt-8">
            <p>
              Historic Tattoo opened its doors in Portland, Oregon in 2008 with one mission: keep
              traditional American tattooing alive and thriving. We&apos;re a shop built on a deep
              respect for the craft — bold lines, solid color, and classic imagery that stands the
              test of time.
            </p>
            <p>
              Located in the heart of SE Portland at 2001 SE 50th Ave, we&apos;ve spent nearly two
              decades building a family of artists who share a commitment to quality and authenticity.
              From flash off the wall to fully custom work, every tattoo that leaves our shop
              represents the best of the American tradition.
            </p>
            <p>
              We&apos;re also the home of Portland&apos;s most beloved tattoo experience: Get What
              You Get. Buy a token, take your chances, and walk away with a hand-painted traditional
              tattoo. Every spin is a winner.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream">
              What We Stand For
            </h2>
            <OrnamentalDivider className="mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                Icon: AnchorIcon,
                title: "The Tradition",
                body: "We honor the lineage of traditional American tattooing — the sailors, the carnies, the old-school artists who built this art form.",
              },
              {
                Icon: RoseIcon,
                title: "The Craft",
                body: "Bold lines that hold, colors that last, and designs that look as good in 20 years as they do on day one. No shortcuts.",
              },
              {
                Icon: HeartIcon,
                title: "The Community",
                body: "Historic Tattoo is a Portland institution. We're proud to be part of this city's culture and to welcome artists and collectors from everywhere.",
              },
            ].map((v) => (
              <div key={v.title} className="parchment-card p-6 border-t-2 border-ht-red">
                <v.Icon className="w-8 h-8 text-ht-red mb-4" />
                <h3 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-ht-cream/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit info */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <BannerRibbon className="w-48 sm:w-64 h-12 mb-8">
            Visit Us
          </BannerRibbon>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-body text-ht-cream/80 mt-8">
            <div className="parchment-card p-6">
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Location
              </p>
              <address className="not-italic leading-relaxed">
                2001 SE 50th Ave<br />
                Portland, OR 97215
              </address>
            </div>
            <div className="parchment-card p-6">
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Hours
              </p>
              <p>Open daily, 11am – 7pm</p>
              <p className="mt-2 text-ht-cream/50 text-sm">Walk-ins always welcome.</p>
            </div>
            <div className="parchment-card p-6">
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Phone
              </p>
              <a href="tel:5032363440" className="hover:text-ht-red transition-colors">
                (503) 236-3440
              </a>
            </div>
            <div className="parchment-card p-6">
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Email
              </p>
              <a
                href="mailto:historictattoo@gmail.com"
                className="hover:text-ht-red transition-colors break-all"
              >
                historictattoo@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/artists"
              className="stamp-btn px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors text-center"
            >
              Meet the Artists
            </Link>
            <Link
              href="/get-what-you-get"
              className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors text-center"
            >
              Get What You Get
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
