import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const primary = siteConfig.locations.find((l) => l.isPrimary) ?? siteConfig.locations[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.svg`,
          width: 300,
          height: 295,
        },
        description: siteConfig.description,
        foundingDate: siteConfig.foundedYear,
        email: siteConfig.links.email,
        telephone: siteConfig.links.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: primary.address,
          addressLocality: primary.city,
          addressCountry: primary.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.1212,
          longitude: 55.3695,
        },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Middle East" },
          { "@type": "Place", name: "Global" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Aviation MRO Parts & Leasing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "MRO Parts Supply",
                description: "Certified maintenance, repair and overhaul aircraft components and spare parts",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aircraft Leasing",
                description: "Commercial aircraft leasing and asset management solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AOG Support",
                description: "24/7 Aircraft on Ground emergency parts sourcing and logistics",
              },
            },
          ],
        },
        sameAs: [siteConfig.links.linkedin, siteConfig.links.twitter],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.legalName,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
