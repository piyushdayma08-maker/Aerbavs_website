import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { IndustriesSection } from "@/sections/industries";
import { GlobalPresenceSection } from "@/sections/global-presence";
import { CtaSection } from "@/sections/cta";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries We Serve",
  description:
    "AERBAVS supports airlines, cargo, defense, and fleet teams with aerospace supply UAE workflows, MRO support UAE sourcing, and aviation tools supplier services.",
  path: "/industries",
  keywords: ["aerospace supply UAE", "MRO support UAE", "aviation tools supplier"],
});

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Trusted across aviation and defense."
        subtitle="We deliver high-compliance procurement and resilient supply across diverse mission profiles."
        eyebrow="Industries"
      />
      <IndustriesSection variant="page" />
      <GlobalPresenceSection />
      <CtaSection />
    </main>
  );
}
