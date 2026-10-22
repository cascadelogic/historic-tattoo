import type { Metadata } from "next";
import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Historic Tattoo — Portland, OR",
  description: `Privacy policy for Historic Tattoo in Portland, OR. Learn how we handle your information when you visit our website.`,
  alternates: {
    canonical: `${business.url}/privacy`,
  },
};

const crumbSchema = breadcrumbSchema([
  { name: "Home", url: business.url },
  { name: "Privacy Policy", url: `${business.url}/privacy` },
]);

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">Legal</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Privacy Policy
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            How we handle your information when you visit our website.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">Information We Collect</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>
                When you visit the Historic Tattoo website, we automatically collect certain information about your
                device and your visit through Google Analytics. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-ht-cream/60">
                <li>Pages you view and how long you spend on each page</li>
                <li>Your approximate geographic location (city level)</li>
                <li>The website or search engine that referred you to us</li>
                <li>Your device type, browser, and operating system</li>
                <li>Anonymous usage statistics (clicks, scrolling, etc.)</li>
              </ul>
              <p>
                We do <strong className="text-ht-cream">not</strong> collect your name, email address, phone number,
                or any personally identifiable information through this website. We have no contact forms, user
                accounts, or newsletter signups.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">How We Use This Information</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>We use analytics data solely to:</p>
              <ul className="list-disc list-inside space-y-1 text-ht-cream/60">
                <li>Understand which pages are most popular</li>
                <li>Improve our website design and content</li>
                <li>Understand how visitors find our shop online</li>
              </ul>
              <p>We never sell, rent, or share your data with third parties for marketing purposes.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">Cookies</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>
                Google Analytics uses cookies to distinguish unique visitors and track sessions.
                These cookies do not contain personal information. You can control or disable cookies
                through your browser settings. Disabling cookies will not affect your ability to
                browse our website.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">Third-Party Services</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>Our website uses the following third-party services:</p>
              <ul className="list-disc list-inside space-y-1 text-ht-cream/60">
                <li><strong className="text-ht-cream">Google Analytics</strong> — website traffic analysis</li>
                <li><strong className="text-ht-cream">Google Maps</strong> — embedded map on our contact page</li>
                <li><strong className="text-ht-cream">Squarespace CDN</strong> — image hosting for portfolio photos</li>
              </ul>
              <p>
                Each of these services has its own privacy policy governing how they handle data.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">External Links</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>
                Our website contains links to external sites including Instagram, Yelp, and Google Maps.
                We are not responsible for the privacy practices of these external sites. We encourage
                you to review their privacy policies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">Children&apos;s Privacy</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>
                Our website is not directed at children under 18. Tattoo services at Historic Tattoo
                require clients to be at least 18 years of age with valid government-issued photo ID,
                in accordance with Oregon state law.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">Contact</h2>
            <div className="font-body text-ht-cream/70 leading-relaxed space-y-4 text-sm">
              <p>
                If you have questions about this privacy policy, contact us at{" "}
                <a href={`mailto:${business.email}`} className="text-ht-red hover:text-ht-red-light transition-colors underline">
                  {business.email}
                </a>{" "}
                or call{" "}
                <a href={business.phoneHref} className="text-ht-red hover:text-ht-red-light transition-colors underline">
                  {business.phone}
                </a>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-ht-red/10">
            <p className="font-body text-xs text-ht-cream/30">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
