/**
 * ROBOTS.TXT CONFIGURATION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Controls search engine crawler access
 */

import { MetadataRoute } from "next";
import { SITE_INFO } from "@/config/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
