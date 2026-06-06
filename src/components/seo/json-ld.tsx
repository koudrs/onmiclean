import { site } from "@/lib/site";
import { bundle } from "@/lib/products";

type JsonLdGraph = {
  "@context": string;
  "@graph": Record<string, unknown>[];
};

const data: JsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneDisplay,
      description: site.description,
      areaServed: "Panamá",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad de Panamá",
        addressCountry: "PA",
      },
    },
    {
      "@type": "Product",
      "@id": `${site.url}/#combo`,
      name: bundle.name,
      description: bundle.description,
      image: `${site.url}${bundle.image.src}`,
      brand: {
        "@type": "Brand",
        name: site.name,
      },
      offers: {
        "@type": "Offer",
        url: site.url,
        price: bundle.price,
        priceCurrency: bundle.currency,
        availability: "https://schema.org/InStock",
        // El precio mostrado NO incluye ITBMS (7%); se suma al cobrar.
        priceSpecification: {
          "@type": "PriceSpecification",
          price: bundle.price,
          priceCurrency: bundle.currency,
          valueAddedTaxIncluded: false,
        },
        seller: {
          "@id": `${site.url}/#business`,
        },
      },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
