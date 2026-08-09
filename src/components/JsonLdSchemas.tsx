import Script from "next/script";

export function PersonPhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Physician"],
        "@id": "https://www.ptsakkinen.com/#janne-sakkinen",
        "name": "Janne Säkkinen",
        "givenName": "Janne",
        "familyName": "Säkkinen",
        "jobTitle": "OMT Physical Therapist & Ergonomics Instructor",
        "description": "Specialized OMT Physical Therapist (SOMTY), B.Sc. Health Sciences, Valvira/Terhikki registered healthcare professional, and University of Oulu dentistry instructor since 2017.",
        "url": "https://www.ptsakkinen.com/about",
        "image": "https://www.ptsakkinen.com/janne-sakkinen.jpg",
        "worksFor": {
          "@type": "MedicalBusiness",
          "@id": "https://www.ptsakkinen.com/#organization",
          "name": "Tiedottajanne Oy",
          "legalName": "Tiedottajanne Oy",
          "identifier": "3505813-7",
          "vatID": "FI35058137"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "University of Oulu Faculty of Medicine"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Finnish Society of Orthopedic Manual Therapy (SOMTY)"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Valvira / Terhikki Registered Healthcare Professional"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "SOMTY Certified OMT Physical Therapist"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "B.Sc. Health Sciences (Terveystieteiden kandidaatti)"
          }
        ],
        "knowsAbout": [
          "Temporomandibular Joint Disorders (TMJ)",
          "Orofacial Pain & Masseter Muscle Relief",
          "Cervical Spine Rehabilitation",
          "Pelvic Floor & Incontinence Physiotherapy",
          "Dental & Workplace Ergonomics"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "sameAs": [
          "https://www.youtube.com/channel/UCbIWSnSD_k3YoTQSqrzi5Bw",
          "https://www.tiktok.com/@ptsakkinen",
          "https://www.instagram.com/ptsakkinen/"
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.ptsakkinen.com/#organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "identifier": "3505813-7",
        "vatID": "FI35058137",
        "url": "https://www.ptsakkinen.com/",
        "telephone": "+358401234567",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "location": [
          {
            "@type": "Place",
            "name": "Terveystalo Oulu & Kempele",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          },
          {
            "@type": "Place",
            "name": "Norre Työterveys Oulu",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          },
          {
            "@type": "Place",
            "name": "Hammasvahti Oulu",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="person-physician-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id={`breadcrumb-jsonld-${items.length}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
