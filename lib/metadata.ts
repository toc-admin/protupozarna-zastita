import { Metadata } from "next";

const BASE_URL = "https://www.protupozarna-zastita.com";

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
      siteName: "FSB d.o.o.",
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
    name: "FSB d.o.o.",
    description:
      "Proizvođač i izvođač pasivne protupožarne zaštite s 20 godina iskustva.",
    url: BASE_URL,
    telephone: "+385 1 3496 811",
    email: "info@fsb-zagreb.hr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Samoborska cesta 91",
      addressLocality: "Zagreb",
      postalCode: "10000",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7994,
      longitude: 15.8756,
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
        name: "FSB d.o.o.",
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
      name: "FSB d.o.o.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Samoborska cesta 91",
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
