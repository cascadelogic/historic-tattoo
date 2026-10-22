/* Reusable SVG decoration components for American Traditional tattoo visual language */

interface DecorationProps {
  className?: string;
}

/* ── Banner / Ribbon ──────────────────────────────────
   Classic tattoo banner scroll that wraps around section titles.
   Usage: <BannerRibbon className="w-80">Title Text</BannerRibbon>
*/
export function BannerRibbon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 80"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Left tail */}
        <polygon points="0,20 40,20 50,0 50,80 40,60 0,60" fill="#a52422" />
        <polygon points="0,20 40,20 50,0 50,80 40,60 0,60" fill="rgba(0,0,0,0.15)" />
        {/* Center band */}
        <rect x="50" y="10" width="300" height="60" fill="#a52422" />
        {/* Right tail */}
        <polygon points="400,20 360,20 350,0 350,80 360,60 400,60" fill="#a52422" />
        <polygon points="400,20 360,20 350,0 350,80 360,60 400,60" fill="rgba(0,0,0,0.15)" />
        {/* Top/bottom highlight lines */}
        <line x1="50" y1="15" x2="350" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="50" y1="65" x2="350" y2="65" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        {/* Fold shadows */}
        <polygon points="40,20 50,10 50,20" fill="rgba(0,0,0,0.3)" />
        <polygon points="40,60 50,70 50,60" fill="rgba(0,0,0,0.3)" />
        <polygon points="360,20 350,10 350,20" fill="rgba(0,0,0,0.3)" />
        <polygon points="360,60 350,70 350,60" fill="rgba(0,0,0,0.3)" />
      </svg>
      <span className="relative z-10 font-display text-white uppercase tracking-widest text-sm px-12 py-3">
        {children}
      </span>
    </div>
  );
}

/* ── Ornamental Divider ───────────────────────────────
   Traditional motif divider with star center.
*/
export function OrnamentalDivider({ className = "" }: DecorationProps) {
  return (
    <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
      <svg width="80" height="2" aria-hidden="true">
        <line x1="0" y1="1" x2="80" y2="1" stroke="#e0b44a" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 0l2.5 7.5H20l-6 4.5 2.5 7.5L10 15l-6.5 4.5L6 12 0 7.5h7.5z"
          fill="#e0b44a"
        />
      </svg>
      <svg width="80" height="2" aria-hidden="true">
        <line x1="0" y1="1" x2="80" y2="1" stroke="#e0b44a" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
    </div>
  );
}

/* ── Traditional Star ─────────────────────────────────
   Small decorative five-point star.
*/
export function TradStar({ className = "" }: DecorationProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 0l2.5 7.5H20l-6 4.5 2.5 7.5L10 15l-6.5 4.5L6 12 0 7.5h7.5z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Anchor Icon ──────────────────────────────────────
   Classic traditional tattoo anchor motif.
*/
export function AnchorIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="12" r="6" stroke="currentColor" strokeWidth="3" />
      <line x1="32" y1="18" x2="32" y2="56" stroke="currentColor" strokeWidth="3" />
      <line x1="20" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="3" />
      <path d="M14 48c0-10 8-18 18-18s18 8 18 18" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M8 50l8-4v8z" fill="currentColor" />
      <path d="M56 50l-8-4v8z" fill="currentColor" />
    </svg>
  );
}

/* ── Rose Icon ────────────────────────────────────────
   Classic traditional tattoo rose motif.
*/
export function RoseIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="24" rx="10" ry="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M26 20c-4-6-2-14 6-14 4 0 6 3 6 6" stroke="currentColor" strokeWidth="2" />
      <path d="M38 20c4-6 2-14-6-14-4 0-6 3-6 6" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="28" cy="22" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="36" cy="22" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="36" x2="32" y2="58" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 42l-8 4" stroke="currentColor" strokeWidth="2" />
      <path d="M32 48l8 4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ── Eagle Icon ───────────────────────────────────────
   Classic traditional eagle spread wings.
*/
export function EagleIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 14l-6-8-10 12 8 2z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M32 14l6-8 10 12-8 2z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M8 20l10 8 6-2-10-10z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M56 20l-10 8-6-2 10-10z" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="22" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M30 21l2 3 2-3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 32l8 20 8-20" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="32" y1="36" x2="32" y2="52" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ── Heart Icon ───────────────────────────────────────
   Classic traditional heart motif.
*/
export function HeartIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 56L8 30c-6-8-4-20 6-22s16 2 18 10c2-8 8-12 18-10s12 14 6 22z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

/* ── Dice Icon ────────────────────────────────────────
   For GWYG / chance-based services.
*/
export function DiceIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="22" r="4" fill="currentColor" />
      <circle cx="42" cy="22" r="4" fill="currentColor" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <circle cx="22" cy="42" r="4" fill="currentColor" />
      <circle cx="42" cy="42" r="4" fill="currentColor" />
    </svg>
  );
}

/* ── Crown Icon ──────────────────────────────────────
   For Deluxe / premium services.
*/
export function CrownIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 48L14 20l12 12 8-20 8 20 12-12 6 28z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="8" y="48" width="48" height="6" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="32" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

/* ── Lightning Bolt Icon ──────────────────────────────
   For Plinko / dramatic services.
*/
export function LightningIcon({ className = "" }: DecorationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M38 4L14 36h16L22 60l28-32H34z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ── Circular Stamp Badge ─────────────────────────────
   For "Est. 2008" or similar text in a circular stamp format.
*/
export function StampBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border-2 border-ht-gold relative ${className}`}
    >
      <div className="absolute inset-[4px] rounded-full border border-dashed border-ht-gold/50" />
      <span className="relative z-10 font-display text-ht-gold uppercase tracking-[0.25em] text-xs px-5 py-2">
        {children}
      </span>
    </div>
  );
}

/* ── Pin/Tape Corner Accent ───────────────────────────
   Small red "pin" in the top corner of a flash card.
*/
export function PinAccent({ className = "" }: DecorationProps) {
  return (
    <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 z-10 ${className}`}>
      <div className="w-5 h-3 bg-ht-red rounded-sm shadow-md" />
    </div>
  );
}

/* ── Section Corner Decorations ───────────────────────
   Four corners to frame a section.
*/
export function CornerFrameSVG({ className = "" }: DecorationProps) {
  return (
    <>
      {/* Top-left */}
      <svg
        className={`absolute top-0 left-0 w-8 h-8 text-ht-gold/40 ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 32V0h32" stroke="currentColor" strokeWidth="2" />
        <path d="M0 24V8h16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Top-right */}
      <svg
        className={`absolute top-0 right-0 w-8 h-8 text-ht-gold/40 ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M32 32V0H0" stroke="currentColor" strokeWidth="2" />
        <path d="M32 24V8H16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Bottom-left */}
      <svg
        className={`absolute bottom-0 left-0 w-8 h-8 text-ht-gold/40 ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 0v32h32" stroke="currentColor" strokeWidth="2" />
        <path d="M0 8v16h16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Bottom-right */}
      <svg
        className={`absolute bottom-0 right-0 w-8 h-8 text-ht-gold/40 ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M32 0v32H0" stroke="currentColor" strokeWidth="2" />
        <path d="M32 8v16H16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    </>
  );
}
