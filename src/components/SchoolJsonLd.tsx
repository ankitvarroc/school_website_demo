import React from "react";

/**
 * SchoolJsonLd outputs Schema.org EducationalOrganization structured data.
 * Enhances SEO, rich snippets, Google Knowledge Graph, and local search rankings.
 */
export default function SchoolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Dynamic Public School",
    "alternateName": "Dynamic Public School (DPS)",
    "url": "https://dynamicpublicschool.edu",
    "logo": "https://dynamicpublicschool.edu/images/hero_campus.jpg",
    "image": "https://dynamicpublicschool.edu/images/hero_campus.jpg",
    "description":
      "Premier CBSE-affiliated senior secondary institution combining character values with modern STEM, AI robotics, athletic excellence, and global curriculum.",
    "foundingDate": "1998",
    "founder": {
      "@type": "Person",
      "name": "Dynamic Educational Trust",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dynamic Public School Campus, Sector 15",
      "addressLocality": "Metro City",
      "addressRegion": "National Capital Region",
      "postalCode": "110001",
      "addressCountry": "IN",
    },
    "telephone": "+91-11-2659-1886",
    "email": "admissions@dynamicpublicschool.edu",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Central Board of Secondary Education (CBSE) Senior Secondary Affiliation",
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "ISO 9001:2015 Educational Quality Certification",
      },
    ],
    "award": [
      "National Education Excellence Award 2025",
      "Ranked #1 Day-Cum-Boarding Co-Ed Institution",
    ],
    "alumni": [
      {
        "@type": "Person",
        "name": "Global Scientists, Civil Servants, Olympic Athletes, and Innovators",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
