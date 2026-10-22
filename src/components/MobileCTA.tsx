"use client";

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-ht-black/95 backdrop-blur-sm border-t border-ht-red/20 px-4 py-3 safe-bottom"
      role="complementary"
      aria-label="Quick contact actions"
      data-mobile-cta
    >
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href="tel:5032363440"
          aria-label="Call Historic Tattoo now"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-ht-red text-white font-display text-sm tracking-widest uppercase rounded-md shadow-lg shadow-ht-red/30 active:scale-95 transition-all min-h-[48px]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <a
          href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Historic Tattoo on Google Maps"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-ht-gray border-2 border-ht-cream/20 text-ht-cream font-display text-sm tracking-widest uppercase rounded-md active:scale-95 transition-all min-h-[48px]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Directions
        </a>
      </div>
    </div>
  );
}
