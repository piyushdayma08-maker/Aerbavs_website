import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoInput): Metadata {
  const cleanBase = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${cleanBase}${path === "/" ? "" : path}`;
  const allKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.legalName,
      locale: "en_AE",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.legalName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
      site: "@aerbavs",
      creator: "@aerbavs",
    },
  };
}
