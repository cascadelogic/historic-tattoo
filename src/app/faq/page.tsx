import type { Metadata } from "next";
import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import { business } from "@/data/business";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Tattoo Questions Answered | Historic Tattoo — Portland, OR",
  description:
    "Frequently asked questions about getting a tattoo at Historic Tattoo in Portland, OR. Learn about pricing, walk-ins, age requirements, aftercare, Get What You Get, and more.",
  openGraph: {
    title: "FAQ — Historic Tattoo Portland, OR",
    description:
      "Questions about tattoo pricing, walk-ins, age requirements, and our Get What You Get experience? Find answers here.",
    url: `${business.url}/faq`,
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Historic Tattoo Portland, OR",
    description: "Everything you need to know before getting tattooed at Historic Tattoo Portland.",
  },
  alternates: {
    canonical: `${business.url}/faq`,
  },
};

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "Do I need an appointment to get a tattoo?",
    answer: "No! Walk-ins are welcome every day from 11am to 7pm. If you want to book with a specific artist, you can message them on Instagram or call us at (503) 236-3440.",
  },
  {
    category: "General",
    question: "What style of tattoos do you specialize in?",
    answer: "We specialize in traditional American tattooing — bold lines, solid color, and timeless imagery. Think eagles, roses, anchors, skulls, daggers, and classic flash designs that have stood the test of time.",
  },
  {
    category: "General",
    question: "How long has Historic Tattoo been open?",
    answer: "Historic Tattoo has been Portland's home of traditional American tattooing since 2008 — that's over 18 years. Our team of 8 artists brings 109 years of combined experience.",
  },
  {
    category: "General",
    question: "Where are you located?",
    answer: "We're at 2001 SE 50th Ave, Portland, OR 97215 — in the Foster-Powell neighborhood of SE Portland, near SE Division St. Free street parking is available.",
  },
  {
    category: "General",
    question: "Is Historic Tattoo the best tattoo shop near me in Portland?",
    answer: "Historic Tattoo is consistently rated one of the best tattoo shops in Portland, Oregon — with 4.8 stars on Google and 4.5 stars on Yelp across 395+ reviews. Located at 2001 SE 50th Ave in SE Portland, we've been Portland's home of traditional American tattooing since 2008. Walk-ins are welcome every day, no appointment needed.",
  },
  {
    category: "General",
    question: "Do you do walk-in tattoos near SE Portland?",
    answer: "Yes! We're open for walk-ins every day from 11am to 7pm at 2001 SE 50th Ave in SE Portland (Foster-Powell neighborhood, near SE Division). No appointment needed — just show up and one of our nine traditional American tattoo artists will take care of you.",
  },
  // Pricing
  {
    category: "Pricing",
    question: "How much does a tattoo cost in Portland?",
    answer: "Tattoo pricing depends on size, detail, and placement. Our Get What You Get tattoos start at $100, and GWYG Deluxe and Tattoo Plinko are $200 each. For custom work, your artist will give you a quote based on your design. Come in or call for a free consultation.",
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards (Visa, Mastercard, Amex), and Apple Pay. There is no ATM on-site, so bring your preferred payment method.",
  },
  {
    category: "Pricing",
    question: "Do you require a deposit for appointments?",
    answer: "For most walk-in flash and traditional work, no deposit is needed. For larger custom pieces that require a consultation and drawing time, your artist may request a deposit that goes toward the final cost.",
  },
  // First Tattoo
  {
    category: "First Tattoo",
    question: "What's the minimum age to get a tattoo in Oregon?",
    answer: "In Oregon, you must be 18 years old to get a tattoo. We require a valid government-issued photo ID (driver's license, passport, or state ID). We do not tattoo minors, even with parental consent.",
  },
  {
    category: "First Tattoo",
    question: "Does getting a tattoo hurt?",
    answer: "Everyone's pain tolerance is different, but most people describe it as a scratching or burning sensation. Traditional tattoos with bold lines tend to be quicker sessions. Our artists will work with you to make sure you're comfortable throughout the process.",
  },
  {
    category: "First Tattoo",
    question: "How should I prepare for my tattoo appointment?",
    answer: "Eat a good meal before you come in, stay hydrated, and get a good night's sleep. Wear comfortable clothing that gives easy access to the area being tattooed. Avoid alcohol for 24 hours before your session — it thins the blood and can affect the tattoo.",
  },
  {
    category: "First Tattoo",
    question: "How do I take care of my new tattoo?",
    answer: "We provide detailed aftercare instructions with every tattoo. The basics: keep it clean, moisturized, and out of direct sunlight for 2-3 weeks. Check out our full aftercare guide for step-by-step instructions.",
  },
  // Get What You Get
  {
    category: "Get What You Get",
    question: "What is Get What You Get?",
    answer: "Get What You Get is our signature tattoo experience. You buy a $100 token, spin the wheel, and whatever it lands on is your tattoo. Every design is a hand-painted traditional American flash piece. No picking, no deliberating — just fun.",
  },
  {
    category: "Get What You Get",
    question: "Can I choose where the Get What You Get tattoo goes on my body?",
    answer: "Yes! While you can't choose the design, you absolutely get to choose where on your body the tattoo goes. Your artist will work with you on placement.",
  },
  {
    category: "Get What You Get",
    question: "What's the difference between GWYG, GWYG Deluxe, and Tattoo Plinko?",
    answer: "Get What You Get ($100) is the classic — spin the wheel, get a traditional flash tattoo. GWYG Deluxe ($200) is the same game but with a bigger canvas and bolder designs from our extended flash collection. Tattoo Plinko ($200) uses a Plinko board instead of a wheel — drop the puck and let physics decide your tattoo.",
  },
  {
    category: "Get What You Get",
    question: "Can I veto a Get What You Get design?",
    answer: "That's the whole point — you get what you get! But every design on the wheel is a quality traditional piece that our artists are proud of. Trust the process, and you'll walk out with a great tattoo and a great story.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

const faqSchema = faqPageSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));
const crumbSchema = breadcrumbSchema([
  { name: "Home", url: business.url },
  { name: "FAQ", url: `${business.url}/faq` },
]);

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">Got Questions?</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Frequently Asked Questions
            <span className="sr-only"> — Historic Tattoo Portland, OR</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Everything you need to know about getting a tattoo at Historic Tattoo in Portland, Oregon.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream mb-2">{category}</h2>
              <div className="w-16 h-0.5 bg-ht-red mb-8" />
              <div className="space-y-8">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <div key={faq.question} className="parchment-card p-6 sm:p-8">
                      <h3 className="font-display text-base sm:text-lg uppercase tracking-wide text-ht-cream mb-3 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="font-body text-sm text-ht-cream/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Still Have Questions?</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-8">
            Give us a call, send us an email, or just stop by the shop. We&apos;re happy to chat about your next tattoo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact & Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/aftercare" className="btn-secondary">
              Aftercare Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
