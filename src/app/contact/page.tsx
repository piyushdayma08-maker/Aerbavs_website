import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/sections/contact";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Aviation Supplier Dubai",
  description:
    "Contact AERBAVS for aircraft parts UAE RFQs, AOG support Dubai, aviation logistics Dubai coordination, and aircraft leasing support from our Dubai team.",
  path: "/contact",
  keywords: ["AOG support Dubai", "aircraft parts UAE", "aviation logistics Dubai"],
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Let’s deliver your next mission."
        subtitle="Send an inquiry for parts sourcing, procurement, or logistics—our team responds fast."
        eyebrow="Contact"
      />
      <ContactSection variant="page" />
    </main>
  );
}
