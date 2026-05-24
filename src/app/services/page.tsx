import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { ServicesSection } from "@/sections/services";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { CtaSection } from "@/sections/cta";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviation Services Dubai",
  description:
    "Aircraft parts UAE sourcing, aviation consumables Dubai supply, aviation logistics Dubai support, and aircraft leasing support for airlines, operators, and MRO teams.",
  path: "/services",
  keywords: [
    "aviation consumables Dubai",
    "aviation tools supplier",
    "aviation logistics Dubai",
    "MRO support UAE",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="End-to-end aviation trading services."
        subtitle="From sourcing and verification to logistics and MRO support—built for speed, compliance, and precision."
        eyebrow="Services"
      />
      <ServicesSection variant="page" />
      <WhyChooseUsSection />
      <CtaSection />
    </main>
  );
}
