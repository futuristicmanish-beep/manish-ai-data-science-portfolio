/**
 * SEO CONFIGURATION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Centralized SEO metadata configuration
 */

import { Metadata } from "next";
import { SITE_INFO, CONTACT_INFO, SOCIAL_LINKS } from "./constants";

/**
 * Default SEO metadata for the site
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: SITE_INFO.title,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "Manish Vidhya Narayanan",
    "AI Student",
    "Data Science Student",
    "B.Tech AI & Data Science",
    "First Year Student",
    "Artificial Intelligence",
    "Machine Learning",
    "Healthcare Technology",
    "Full Stack Development",
    "Python Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "ZYNETRA Healthcare",
    "Student Projects",
    "AI Projects",
    "Data Science Projects",
    "Healthcare AI",
    "Learning AI",
    "Coimbatore Institute of Engineering",
    "CIET",
    "AI Portfolio",
    "Student Developer",
    "Aspiring Data Scientist",
  ],
  authors: [{ name: SITE_INFO.author }],
  creator: SITE_INFO.author,
  publisher: SITE_INFO.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    siteName: SITE_INFO.name,
    images: [
      {
        url: "/og-image.png", // Will be created or use fallback
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} - ${SITE_INFO.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: ["/og-image.png"],
  },
  verification: {
    // Add verification codes when available
    // google: "verification_code",
    // yandex: "verification_code",
    // bing: "verification_code",
  },
};

/**
 * Generate metadata for project pages
 */
export function generateProjectMetadata(project: {
  title: string;
  tagline: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  const title = project.title;
  const description = project.tagline || project.description;
  const url = `${SITE_INFO.url}/projects/${project.slug}`;
  const image = project.image || "/og-image.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE_INFO.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * JSON-LD Structured Data for the website
 */
export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    description: SITE_INFO.description,
    author: {
      "@type": "Person",
      name: SITE_INFO.author,
    },
  };
}

/**
 * JSON-LD Structured Data for Person
 * Enhanced with brand positioning
 */
export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_INFO.author,
    url: SITE_INFO.url,
    email: CONTACT_INFO.email,
    jobTitle: "AI & Data Science Student",
    description: "Building intelligent solutions through AI, data science, and healthcare technology. Student at Coimbatore Institute of Engineering and Technology.",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning", 
      "Data Science",
      "Healthcare Technology",
      "Full Stack Development",
      "Python Programming",
      "React Development",
      "Next.js",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Coimbatore Institute of Engineering and Technology",
    },
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
    ].filter(link => !link.includes("manishvidhya")), // Filter out placeholder links
  };
}

/**
 * JSON-LD Structured Data for Project
 */
export function getProjectJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  technologies?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_INFO.url}/projects/${project.slug}`,
    image: project.image,
    author: {
      "@type": "Person",
      name: SITE_INFO.author,
    },
    keywords: project.technologies?.join(", "),
  };
}
