import type { Metadata } from "next";
import Script from "next/script";
import GearClientContent from "./GearClientContent";
import { GEAR_ITEMS, getAmazonUrl } from "@/data/gearData";

export const metadata: Metadata = {
  title: "My Gear & Recommended Physical Therapy Tools | PT Sakkinen",
  description:
    "Explore Janne Sakkinen's curated list of camera gear, audio equipment, physical therapy rehab tools, and software used in clinical practice and content creation.",
  alternates: {
    canonical: "https://www.ptsakkinen.com/gear",
    languages: {
      en: "https://www.ptsakkinen.com/gear",
      fi: "https://www.ftsakkinen.com/kamat",
      "x-default": "https://www.ftsakkinen.com/kamat",
    },
  },
  openGraph: {
    title: "My Gear & Recommended Physical Therapy Tools | PT Sakkinen",
    description:
      "Explore Janne Sakkinen's curated list of camera gear, audio equipment, physical therapy rehab tools, and software.",
    url: "https://www.ptsakkinen.com/gear",
    siteName: "PT Sakkinen - Physical Therapy",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.ptsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Gear & Recommended Physical Therapy Tools | PT Sakkinen",
    description:
      "Explore Janne Sakkinen's curated list of camera gear, audio equipment, physical therapy rehab tools, and software.",
    images: ["https://www.ptsakkinen.com/logo-whitebg.png"],
  },
};

export default function GearPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Janne Sakkinen's Recommended Gear & Tools",
      description:
        "Curated equipment, cameras, rehab tools, and software used by OMT Physical Therapist Janne Sakkinen.",
      url: "https://www.ptsakkinen.com/gear",
      itemListElement: GEAR_ITEMS.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          name: item.name,
          description: item.description,
          category: item.category,
          url: item.directUrl || getAmazonUrl(item),
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: item.directUrl || getAmazonUrl(item),
          },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.ptsakkinen.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "My Gear & Tools",
          item: "https://www.ptsakkinen.com/gear",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="json-ld-gear-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GearClientContent />
    </>
  );
}
