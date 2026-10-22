import Link from "next/link";
import { OrnamentalDivider } from "./Decorations";

export default function Footer() {
  return (
    <footer className="bg-ht-gray border-t-2 border-ht-red/30 mt-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Ornamental top divider */}
        <OrnamentalDivider className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold tracking-widest text-ht-cream uppercase mb-2">
              Historic Tattoo
            </h3>
            <p className="font-display text-[10px] tracking-[0.3em] text-ht-gold uppercase mb-4">
              Portland, Oregon · Est. 2008
            </p>
            <p className="text-ht-cream/60 text-sm font-body leading-relaxed">
              Portland&apos;s home of traditional American tattooing since 2008.
              Thousands of hand-painted designs plus custom work.
            </p>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-ht-gold mb-4">
              Hours & Contact
            </h4>
            <ul className="space-y-2 text-sm font-body text-ht-cream/80">
              <li>Open Daily</li>
              <li className="text-ht-cream font-medium">11am – 7pm</li>
              <li className="mt-4">
                <a href="tel:5032363440" className="hover:text-ht-red transition-colors">
                  (503) 236-3440
                </a>
              </li>
              <li>
                <a
                  href="mailto:historictattoo@gmail.com"
                  className="hover:text-ht-red transition-colors break-all"
                >
                  historictattoo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Links */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-ht-gold mb-4">
              Find Us
            </h4>
            <address className="not-italic text-sm font-body text-ht-cream/80 leading-relaxed mb-6">
              2001 SE 50th Ave
              <br />
              Portland, OR 97215
            </address>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/historictattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Historic Tattoo on Instagram"
                className="font-display text-xs tracking-widest uppercase text-ht-cream/60 hover:text-ht-red transition-colors"
              >
                Instagram
              </a>
              <span className="text-ht-red/40" aria-hidden="true">|</span>
              <a
                href="https://www.yelp.com/biz/historic-tattoo-portland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Historic Tattoo on Yelp"
                className="font-display text-xs tracking-widest uppercase text-ht-cream/60 hover:text-ht-red transition-colors"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ht-red/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-ht-cream/30 font-body tracking-widest uppercase space-y-1">
            <p>&copy; {new Date().getFullYear()} Historic Tattoo. All rights reserved.</p>
            <p className="text-ht-cream/20">Must be 18+ with valid photo ID. Oregon state law.</p>
          </div>
          <nav className="flex gap-6">
            {[
              { href: "/about", label: "About" },
              { href: "/artists", label: "Artists" },
              { href: "/gallery", label: "Gallery" },
              { href: "/get-what-you-get", label: "GWYG" },
              { href: "/contact", label: "Contact" },
              { href: "/faq", label: "FAQ" },
              { href: "/aftercare", label: "Aftercare" },
              { href: "/privacy", label: "Privacy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest uppercase text-ht-cream/40 hover:text-ht-red transition-colors font-display"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
