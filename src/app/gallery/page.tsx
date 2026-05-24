import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { GallerySection } from "@/sections/gallery";
import { CtaSection } from "@/sections/cta";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviation Operations Gallery",
  description:
    "Explore AERBAVS aviation operations visuals featuring aircraft parts UAE workflows, aviation consumables Dubai support, and aerospace supply UAE capabilities.",
  path: "/gallery",
  keywords: ["Dubai aviation supplier", "aviation consumables Dubai", "aerospace supply UAE"],
});

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Aviation, refined."
        subtitle="High-performance supply chains engineered for the world’s most demanding fleets."
        eyebrow="Gallery"
      />
      <GallerySection variant="page" />
      <CtaSection />
    </main>
  );
}
