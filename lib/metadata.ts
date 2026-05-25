import { Metadata } from "next";

const BASE_URL = "https://fsb-protupozarna-zastita.hr";

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}: PageMetadata): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "FSB Protupožarna Zaštita",
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "hr_HR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

// JSON-LD Structured Data helpers
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FSB Protupožarna Zaštita",
    description:
      "Više od 30 godina iskustva u projektiranju, izvođenju i nadzoru protupožarne zaštite.",
    url: BASE_URL,
    telephone: "+385 1 4878 515",
    email: "info@fsb-protupozarna-zastita.hr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ivana Lučića 5",
      addressLocality: "Zagreb",
      postalCode: "10000",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.8018,
      longitude: 15.9710,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    image: `${BASE_URL}/images/og-image.jpg`,
    sameAs: [],
  };
}

export function generateProductSchema(product: {
  title: string;
  description: string;
  image: string;
  manufacturer: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: `${BASE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.manufacturer,
    },
    manufacturer: {
      "@type": "Organization",
      name: product.manufacturer,
    },
    url: `${BASE_URL}/proizvodi/${product.category}/${product.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "FSB Protupožarna Zaštita",
      },
    },
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/usluge/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "FSB Protupožarna Zaštita",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ivana Lučića 5",
        addressLocality: "Zagreb",
        postalCode: "10000",
        addressCountry: "HR",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Hrvatska",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
