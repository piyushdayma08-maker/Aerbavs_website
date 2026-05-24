import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { AboutSection } from "@/sections/about";
import { CertificationsSection } from "@/sections/certifications";
import { CtaSection } from "@/sections/cta";

export const metadata: Metadata = buildPageMetadata({
  title: "About AERBAVS",
  description:
    "Learn how AERBAVS supports airlines and MRO teams with certified aircraft parts UAE sourcing, aviation tools supplier services, and aerospace supply UAE operations.",
  path: "/about",
  keywords: ["Dubai aviation supplier", "aircraft parts UAE", "aerospace supply UAE"],
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Built for mission-critical aviation supply."
        subtitle="A premium trading partner for OEM-aligned sourcing, compliance-first operations, and time-sensitive delivery."
        eyebrow="About"
      />
      <AboutSection variant="page" />
      <CertificationsSection />
      <CtaSection />
    </main>
  );
}
