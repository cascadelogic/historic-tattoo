import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <StampBadge className="mb-6">404</StampBadge>
        <h1 className="font-display text-6xl sm:text-8xl font-bold uppercase text-ht-cream mb-4">
          Page Not Found
        </h1>
        <OrnamentalDivider className="mb-6" />
        <p className="font-body text-ht-cream/60 leading-relaxed mb-8">
          Looks like this page got lost on the way to the shop.
          Head back home or check out our artists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </Link>
          <Link href="/artists" className="btn-secondary">
            Meet the Artists
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
