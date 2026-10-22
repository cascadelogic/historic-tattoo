import { business } from "@/data/business";

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Historic Tattoo",
    description: `Contact ${business.name} in Portland, OR. Call ${business.phone} or visit us at ${business.address.full}.`,
    url: `${business.url}/contact`,
    mainEntity: {
      "@type": "TattooParlor",
      name: business.name,
      telephone: business.phoneRaw,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: "US",
      },
    },
  };
}

export function personSchema(artist: {
  name: string;
  slug: string;
  specialty: string;
  bio: string;
  ig: string;
  photo: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    jobTitle: "Tattoo Artist",
    description: artist.bio.split("\n\n")[0],
    worksFor: {
      "@type": "TattooParlor",
      name: business.name,
      url: business.url,
    },
    url: `${business.url}/artists/${artist.slug}`,
    sameAs: [artist.ig],
    ...(artist.photo ? { image: artist.photo } : {}),
    knowsAbout: [artist.specialty, "Traditional American Tattoo", "Flash Tattoo"],
  };
}

export function howToSchema(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Tattoo Aftercare Guide",
    description: "Step-by-step tattoo aftercare instructions from Historic Tattoo in Portland, OR.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
