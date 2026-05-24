import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import { siteConfig } from "@/lib/site";
import { OrganizationJsonLd } from "@/components/jsonld";
import { ConditionalLayout } from "@/components/conditional-layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#051530",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Aviation Parts Supplier & Aircraft Leasing Dubai UAE`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Aviation Parts Supplier & Aircraft Leasing Dubai`,
    description: siteConfig.description,
    siteName: siteConfig.legalName,
    locale: "en_AE",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.legalName} — Aviation Parts Supplier & Aircraft Leasing Dubai UAE`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Aviation Parts Supplier Dubai UAE`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    site: "@aerbavs",
    creator: "@aerbavs",
  },
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
  category: "Aviation",
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai Silicon Oasis",
    "geo.position": "25.1212;55.3695",
    ICBM: "25.1212, 55.3695",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-background font-[var(--font-inter)] antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <OrganizationJsonLd />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
