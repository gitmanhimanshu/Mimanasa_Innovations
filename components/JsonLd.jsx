import { FAQS, LINKEDIN, OFFICE } from "@/lib/site";

const SITE = "https://launch.mimanasa.online";

/** Structured data for rich results: Organization, WebSite, FAQPage. */
export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mimanasa Innovations",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "AI-driven technology company building software, school management systems, learning platforms, business automation and data-intelligence products.",
      email: "hello@mimanasa.online",
      address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      sameAs: [LINKEDIN],
      foundingLocation: OFFICE,
      slogan: "Where Intelligence Meets Innovation.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mimanasa Innovations",
      url: SITE,
      publisher: { "@type": "Organization", name: "Mimanasa Innovations" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
