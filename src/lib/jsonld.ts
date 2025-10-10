// JSON-LD utilities for structured data
export interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

export interface WebsiteData {
  name: string;
  description: string;
  url: string;
  publisher: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export interface ServiceData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

export interface ProjectData {
  name: string;
  description: string;
  url: string;
  image?: string;
  creator: string;
  dateCreated: string;
  keywords: string[];
  category: string;
}

export interface PersonData {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  worksFor: string;
  knowsAbout: string[];
}

export interface ContactPageData {
  name: string;
  description: string;
  url: string;
  mainEntity: string;
}

// Generate Organization JSON-LD
export function generateOrganizationJsonLd(data: OrganizationData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType,
        email: data.contactPoint.email,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}

// Generate Website JSON-LD
export function generateWebsiteJsonLd(data: WebsiteData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    description: data.description,
    url: data.url,
    publisher: {
      "@type": "Organization",
      name: data.publisher,
    },
    ...(data.potentialAction && {
      potentialAction: {
        "@type": "SearchAction",
        target: data.potentialAction.target,
        "query-input": data.potentialAction.queryInput,
      },
    }),
  };
}

// Generate Service JSON-LD
export function generateServiceJsonLd(data: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    areaServed: data.areaServed,
    serviceType: data.serviceType,
  };
}

// Generate Project/Work JSON-LD
export function generateProjectJsonLd(data: ProjectData) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.image && { image: data.image }),
    creator: {
      "@type": "Organization",
      name: data.creator,
    },
    dateCreated: data.dateCreated,
    keywords: data.keywords.join(", "),
    genre: data.category,
  };
}

// Generate Person JSON-LD
export function generatePersonJsonLd(data: PersonData) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle,
    description: data.description,
    ...(data.image && { image: data.image }),
    worksFor: {
      "@type": "Organization",
      name: data.worksFor,
    },
    knowsAbout: data.knowsAbout,
  };
}

// Generate Contact Page JSON-LD
export function generateContactPageJsonLd(data: ContactPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: data.name,
    description: data.description,
    url: data.url,
    mainEntity: {
      "@type": "Organization",
      name: data.mainEntity,
    },
  };
}

// Generate Breadcrumb JSON-LD
export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate FAQ JSON-LD
export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Local Business JSON-LD
export function generateLocalBusinessJsonLd(data: {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.email && { email: data.email }),
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
    }),
    ...(data.openingHours && { openingHours: data.openingHours }),
    ...(data.priceRange && { priceRange: data.priceRange }),
  };
}
