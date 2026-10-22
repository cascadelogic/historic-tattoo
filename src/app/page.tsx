import Link from "next/link";
import Image from "next/image";
import {
  BannerRibbon,
  OrnamentalDivider,
  StampBadge,
  AnchorIcon,
  RoseIcon,
  EagleIcon,
  HeartIcon,
  DiceIcon,
  CrownIcon,
  LightningIcon,
  TradStar,
  CornerFrameSVG,
  PinAccent,
} from "@/components/Decorations";
import { artists as allArtists } from "@/data/artists";
import { business } from "@/data/business";

const trustStats = [
  { num: "18+", label: "Years in Business", icon: "anchor" },
  { num: "109", label: "Years Combined Experience", icon: "star" },
  { num: "9", label: "Artists on Staff", icon: "eagle" },
  { num: "1,000s", label: "Hand-Painted Designs", icon: "rose" },
];

const services = [
  {
    name: "Get What You Get",
    price: "$100",
    tag: "The Classic",
    icon: "dice",
    description:
      "Buy a token, spin the wheel, walk out with a traditional American tattoo. Every result is a winner — no exceptions.",
    cta: "Learn More",
  },
  {
    name: "GWYG Deluxe",
    price: "$200",
    tag: "Go Big",
    icon: "crown",
    description:
      "Same game, bigger canvas. Let fate choose a bolder, larger traditional piece from our extended flash collection.",
    cta: "Learn More",
  },
  {
    name: "Tattoo Plinko",
    price: "$200",
    tag: "Let It Drop",
    icon: "lightning",
    description:
      "Drop the puck, let physics decide. Portland's most dramatic tattoo experience — guaranteed to be a story.",
    cta: "Learn More",
  },
];

const homeArtists = allArtists.filter((a) => a.photo !== null);

/* Only append Squarespace CDN format params to external URLs; local images are served as-is */
const cdnUrl = (src: string, fmt: string) => src.startsWith("/") ? src : `${src}?format=${fmt}`;

/* Hero images — hand-picked tattoo WORK (not headshots) for visual impact.
   Chosen for subject variety (eagle, lady head, snake, heart/dagger) across 4 different artists. */
const heroImages = {
  /* Mobile background — Craig's tattoo work, bold & iconic */
  mobile: { src: "/portfolio/craig-brown/01.jpg", alt: "Traditional American tattoo by Craig Brown at Historic Tattoo Portland" },
  /* Desktop 2×2 collage — one piece per artist, varied subjects */
  collage: [
    { src: "/portfolio/craig-brown/01.jpg", alt: "Traditional American tattoo by Craig Brown at Historic Tattoo Portland" },
    { src: "/hero/abbie-ladyhead.jpg", alt: "Classic lady head tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
    { src: "/portfolio/tony-vyeda/03.jpg", alt: "Traditional snake tattoo by Tony J. Vyeda at Historic Tattoo Portland" },
    { src: "/hero/krystian-heartdagger.jpg", alt: "Bold heart and dagger tattoo by Krystian Schneider at Historic Tattoo Portland" },
  ],
};

/* Portfolio grid — tattoo work images for the "The Work" section */
const portfolioGrid = [
  { src: "/portfolio/craig-brown/01.jpg", alt: "Traditional American tattoo by Craig Brown at Historic Tattoo Portland" },
  { src: "/hero/abbie-ladyhead.jpg", alt: "Classic lady head tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
  { src: "/portfolio/tony-vyeda/03.jpg", alt: "Traditional snake tattoo by Tony J. Vyeda at Historic Tattoo Portland" },
  { src: "/hero/krystian-heartdagger.jpg", alt: "Bold heart and dagger tattoo by Krystian Schneider at Historic Tattoo Portland" },
  { src: "/portfolio/craig-brown/02.jpg", alt: "Bold traditional flash by Craig Brown at Historic Tattoo Portland" },
  { src: "/portfolio/adam-defiglio/01.jpg", alt: "Classic traditional tattoo by Adam DeFiglio at Historic Tattoo SE Portland" },
  { src: "/hero/abbie-flower.jpg", alt: "Traditional flower bouquet tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
  { src: "/portfolio/tony-vyeda/01.jpg", alt: "Traditional rose and banner tattoo by Tony J. Vyeda at Historic Tattoo Portland" },
  { src: "/portfolio/brad-delay/02.jpg", alt: "Traditional American tattoo by Brad Delay at Historic Tattoo Portland" },
];

/* Instagram grid — different images from the portfolio grid so the homepage doesn't repeat */
const instagramGrid = [
  { src: "/portfolio/craig-brown/03.jpg", alt: "Traditional tattoo by Craig Brown at Historic Tattoo Portland" },
  { src: "/portfolio/abbie-fitzpatrick/01.jpg", alt: "Traditional tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
  { src: "/portfolio/blane/02.jpg", alt: "Traditional tattoo by Blane at Historic Tattoo Portland" },
  { src: "/portfolio/mishka/02.jpg", alt: "Traditional tattoo by Mishka at Historic Tattoo Portland" },
  { src: "/portfolio/krystian-schneider/01.jpg", alt: "Traditional tattoo by Krystian Schneider at Historic Tattoo Portland" },
  { src: "/portfolio/adam-defiglio/02.jpg", alt: "Traditional tattoo by Adam DeFiglio at Historic Tattoo Portland" },
  { src: "/portfolio/one-eyed-jon/01.jpg", alt: "Traditional tattoo by One Eyed Jon at Historic Tattoo Portland" },
  { src: "/portfolio/craig-brown/04.jpg", alt: "Traditional tattoo by Craig Brown at Historic Tattoo Portland" },
  { src: "/portfolio/abbie-fitzpatrick/03.jpg", alt: "Traditional tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
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

function ServiceIcon({ type, className }: { type: string; className?: string }) {
  if (type === "lightning") return <LightningIcon className={className} />;
  if (type === "crown") return <CrownIcon className={className} />;
  return <DiceIcon className={className} />;
}

function TrustIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "anchor": return <AnchorIcon className={className} />;
    case "eagle": return <EagleIcon className={className} />;
    case "rose": return <RoseIcon className={className} />;
    default: return <TradStar className={className} />;
  }
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Mobile: portfolio image background with overlay */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={cdnUrl(heroImages.mobile.src, "1000w")}
            alt={heroImages.mobile.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ht-black/80 via-ht-black/70 to-ht-black/90" />
        </div>

        {/* Desktop: split layout */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh] sm:min-h-[92vh]">
            {/* Left: text + CTAs */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 sm:py-16 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <StampBadge>Est. 2008 · Portland, OR</StampBadge>
              </div>

              <h1 className="font-display font-bold uppercase leading-none mb-4">
                <span className="block text-5xl sm:text-7xl lg:text-8xl text-ht-cream tracking-wide">Historic</span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl text-ht-red tracking-wide">Tattoo</span>
                <span className="sr-only"> — Traditional American Tattoo Shop in Portland, Oregon</span>
              </h1>

              <p className="font-body text-ht-cream/70 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-3">
                18+ years of traditional American tattooing. 109 years of combined artist experience.
                Thousands of hand-painted flash designs — walk-ins welcome every day.
              </p>

              <p className="font-display text-sm tracking-widest text-ht-gold uppercase mb-8">
                <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
                <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
                <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
                <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
                <TradStar className="w-3 h-3 inline text-ht-gold mr-2" />
                {business.reviews.google.rating} Stars · {business.reviews.google.count}+ Reviews on Google
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center sm:items-stretch mb-6">
                <a href={business.phoneHref} className="btn-primary whitespace-nowrap flex-shrink-0">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Now
                </a>
                <Link href="/get-what-you-get" className="btn-secondary whitespace-nowrap flex-shrink-0">
                  Get What You Get
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              <p className="font-body text-xs text-ht-cream/40 tracking-widest uppercase">
                {business.address.street} · Open Daily {business.hours.short} · Walk-ins Welcome
              </p>
            </div>

            {/* Right: portfolio collage (desktop only) */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-1.5 p-4 my-8 mr-8 relative">
              {heroImages.collage.map((img, i) => (
                <div key={i} className={`relative overflow-hidden bg-ht-gray ${i === 0 ? "rounded-tl-lg" : ""} ${i === 1 ? "rounded-tr-lg" : ""} ${i === 2 ? "rounded-bl-lg" : ""} ${i === 3 ? "rounded-br-lg" : ""}`}>
                  <Image
                    src={cdnUrl(img.src, "750w")}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="25vw"
                    priority
                  />
                  <div className="absolute inset-0 border border-ht-gold/10 pointer-events-none" />
                </div>
              ))}
              {/* Overlay link */}
              <Link href="/gallery" className="absolute bottom-12 right-12 btn-tertiary text-xs bg-ht-black/70 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                View Gallery
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-ht-gold/90 via-ht-gold to-ht-gold/90 py-8 px-4 border-y-2 border-ht-gold/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <TrustIcon type={s.icon} className="w-6 h-6 text-ht-black/60 mb-2" />
              <p className="font-display text-3xl font-bold text-ht-black">{s.num}</p>
              <p className="font-display text-xs tracking-widest uppercase text-ht-black/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Signature Services ───────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">
              Portland&apos;s Most Unique Tattoo Experience
            </p>
            <BannerRibbon className="w-72 sm:w-96 h-14 mx-auto mb-6">
              Take Your Chances
            </BannerRibbon>
            <p className="font-body text-ht-cream/60 max-w-xl mx-auto mt-4">
              No deliberating. No anxiety. Just you, a token, and a guaranteed great traditional tattoo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="flash-sheet relative p-8 text-center flex flex-col group"
                style={{ transform: `rotate(${i === 0 ? -1 : i === 2 ? 1 : 0}deg)` }}
              >
                <PinAccent />
                {/* Service icon */}
                <ServiceIcon type={s.icon} className="w-10 h-10 text-ht-red mx-auto mb-3" />
                <p className="font-display text-xs tracking-widest uppercase text-ht-green mb-2">{s.tag}</p>
                {/* Price badge */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-ht-red flex items-center justify-center border-2 border-ht-black">
                  <span className="font-display text-lg font-bold text-white">{s.price}</span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-ht-black mb-4">{s.name}</h3>
                <p className="font-body text-sm text-ht-black/60 leading-relaxed mb-6 flex-1">{s.description}</p>
                <Link
                  href="/get-what-you-get"
                  className="btn-primary !bg-ht-red !text-white !shadow-none !rounded-none border-2 border-ht-black text-xs"
                >
                  {s.cta}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-ht-cream/40 text-sm">
            Just show up — no appointment needed. Open daily {business.hours.short}.
          </p>
        </div>
      </section>

      {/* ── Portfolio / Work ─────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20 relative">
        <CornerFrameSVG />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">The Work</p>
            <BannerRibbon className="w-80 sm:w-[28rem] h-14 mx-auto mb-4">
              Traditional Done Right
            </BannerRibbon>
            <p className="font-body text-ht-cream/60 max-w-xl mx-auto mt-4">
              Bold lines, solid color, timeless imagery. Every tattoo that leaves our shop is built to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-10">
            {portfolioGrid.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-ht-black group warm-glow">
                <Image
                  src={cdnUrl(img.src, "500w")}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 border border-ht-gold/10 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Historic Tattoo ──────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">Why We&apos;re Different</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-6 leading-tight">
              Portland&apos;s Traditional Tattoo Institution
            </h2>
            <div className="space-y-4 font-body text-ht-cream/70 leading-relaxed">
              <p>
                Historic Tattoo has been the home of traditional American tattooing in Portland since 2008 — that&apos;s over 18 years of bold lines, solid color, and timeless imagery.
              </p>
              <p>
                Our nine artists bring 109 years of combined experience to every tattoo. Whether it&apos;s flash off the wall or a fully custom piece, you&apos;re getting the real deal.
              </p>
              <p>
                We&apos;re also the only shop in Portland with Get What You Get and Tattoo Plinko — two of the most fun ways to get tattooed anywhere in the country.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="btn-primary">
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/artists" className="btn-secondary">
                Meet the Artists
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: AnchorIcon, title: "Walk-Ins Always Welcome", desc: "No appointment needed. Come in any day between 11am and 7pm." },
              { Icon: RoseIcon, title: "Traditional American Style", desc: "Bold lines, solid color, classic imagery that lasts a lifetime." },
              { Icon: EagleIcon, title: "18+ Years of Excellence", desc: "Portland's most trusted traditional tattoo shop since 2008." },
              { Icon: HeartIcon, title: "109 Years Experience", desc: "Our team's combined experience means world-class tattooing every time." },
            ].map((f) => (
              <div key={f.title} className="parchment-card p-5 relative">
                <f.Icon className="w-8 h-8 text-ht-red mb-3" />
                <h3 className="font-display text-sm uppercase tracking-wider text-ht-cream mb-2">{f.title}</h3>
                <p className="font-body text-xs text-ht-cream/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artists ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">109 Years Combined Experience</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream">Our Artists</h2>
            <OrnamentalDivider className="mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {homeArtists.map((artist) => (
              <Link
                key={artist.name}
                href={`/artists/${artist.slug}`}
                className="flash-card parchment-card p-4 text-center group"
              >
                {/* Ornate circular frame */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-[3px] border-ht-red group-hover:border-ht-gold transition-colors">
                  <div className="absolute inset-[3px] rounded-full border border-dashed border-ht-red/30 z-10 pointer-events-none" />
                  <Image
                    src={cdnUrl(artist.photo!, "300w")}
                    alt={`${artist.name} — tattoo artist at Historic Tattoo Portland`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-display text-xs uppercase tracking-wider text-ht-cream mb-1 group-hover:text-ht-red transition-colors leading-tight">
                  {artist.name}
                </h3>
                <p className="font-body text-xs text-ht-cream/40">{artist.days}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/artists" className="btn-tertiary">
              View Full Artist Portfolios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews / Social Proof ───────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">What People Are Saying</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-4">
              {business.reviews.total}+ Reviews
            </h2>
            <p className="font-body text-ht-cream/60">
              Portland&apos;s most-loved traditional tattoo shop.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            <a href={business.reviews.google.url} target="_blank" rel="noopener noreferrer" className="parchment-card px-6 py-3 flex items-center gap-3 hover:border-ht-gold/40 transition-colors">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-display text-sm text-ht-cream">{business.reviews.google.rating} on Google</p>
                <p className="font-body text-xs text-ht-cream/40">{business.reviews.google.count} reviews</p>
              </div>
              <span className="font-display text-[10px] tracking-widest uppercase text-ht-green border border-ht-green/30 px-2 py-0.5 rounded-sm ml-2">Verified</span>
            </a>
            <a href={business.reviews.yelp.url} target="_blank" rel="noopener noreferrer" className="parchment-card px-6 py-3 flex items-center gap-3 hover:border-ht-gold/40 transition-colors">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <TradStar key={i} className={`w-4 h-4 ${i < 4 ? "text-ht-gold" : "text-ht-gold/30"}`} />
                ))}
              </div>
              <div className="text-left">
                <p className="font-display text-sm text-ht-cream">{business.reviews.yelp.rating} on Yelp</p>
                <p className="font-body text-xs text-ht-cream/40">{business.reviews.yelp.count} reviews</p>
              </div>
              <span className="font-display text-[10px] tracking-widest uppercase text-ht-green border border-ht-green/30 px-2 py-0.5 rounded-sm ml-2">Verified</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.map((r) => (
              <div key={r.author} className="parchment-card p-8 relative">
                {/* Aged postcard style */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                  ))}
                </div>
                <p className="font-body text-ht-cream/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs tracking-widest uppercase text-ht-cream/50">{r.author}</span>
                  {/* Source stamp badge */}
                  <span className="font-display text-[10px] tracking-widest uppercase text-ht-red border border-ht-red/30 px-2 py-0.5 rounded-sm">
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={business.reviews.yelp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read Reviews on Yelp
            </a>
            <a
              href={business.reviews.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── Instagram Section ────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">Follow Along</p>
            <BannerRibbon className="w-64 sm:w-80 h-14 mx-auto mb-4">
              {business.social.instagramHandle}
            </BannerRibbon>
            <p className="font-body text-ht-cream/50 mb-2 mt-4">38,000+ followers · Portland, OR</p>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !w-auto inline-flex mt-2"
            >
              Follow on Instagram
            </a>
          </div>

          {/* Flash-sheet-style border grid */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-8 grunge-border p-1 sm:p-2">
            {instagramGrid.map((img, i) => (
              <a
                key={i}
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden bg-ht-black group block warm-glow"
              >
                <Image
                  src={cdnUrl(img.src, "500w")}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-ht-black/0 group-hover:bg-ht-black/30 transition-colors flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary"
            >
              View All Posts on Instagram
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Visit / Map CTA ──────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">Come See Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-4">
            Walk In Today
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-12 h-px bg-ht-gold/40" />
            <TradStar className="w-4 h-4 text-ht-gold" />
            <span className="block w-12 h-px bg-ht-gold/40" />
          </div>
          <p className="font-body text-ht-cream/70 text-lg mb-10 max-w-xl mx-auto">
            No appointment needed. Just show up between 11am and 7pm any day of the week and our artists will take care of you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="parchment-card p-6">
              <AnchorIcon className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Address</p>
              <p className="font-body text-ht-cream/80 text-sm leading-relaxed">
                {business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}<br />
                <span className="text-ht-cream/40 text-xs">{business.address.neighborhood}</span>
              </p>
            </div>
            <div className="parchment-card p-6">
              <TradStar className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Hours</p>
              <p className="font-body text-ht-cream/80 text-sm">
                Open Every Day<br />
                <span className="text-ht-cream font-medium">{business.hours.short}</span><br />
                <span className="text-ht-cream/40 text-xs">Walk-ins always welcome</span>
              </p>
            </div>
            <div className="parchment-card p-6">
              <HeartIcon className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Contact</p>
              <a href={business.phoneHref} className="font-body text-ht-cream/80 text-sm hover:text-ht-red transition-colors block">
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="font-body text-ht-cream/40 text-xs hover:text-ht-red transition-colors break-all block mt-1">
                {business.email}
              </a>
            </div>
          </div>

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
    </>
  );
}
