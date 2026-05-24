import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { WhatWeDoSection } from "@/sections/what-we-do";
import { ServicesSection } from "@/sections/services";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { GlobalPresenceSection } from "@/sections/global-presence";
import { IndustriesSection } from "@/sections/industries";
import { AchievementsSection } from "@/sections/achievements";
import { CertificationsSection } from "@/sections/certifications";
import { FaqSection } from "@/sections/faq";
import { ContactSection } from "@/sections/contact";

function getContent() {
  try {
    const file = path.join(process.cwd(), "data", "content.json");
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export const metadata: Metadata = buildPageMetadata({
  title: "Aviation Parts Supplier Dubai UAE",
  description:
    "Dubai aviation supplier for aircraft parts UAE, aviation consumables Dubai, aircraft leasing support, AOG response, and MRO logistics from Dubai Silicon Oasis.",
  path: "/",
  keywords: [
    "Dubai aviation supplier",
    "aircraft parts UAE",
    "aviation consumables Dubai",
    "aerospace supply UAE",
    "aircraft leasing support",
    "aviation tools supplier",
    "aviation logistics Dubai",
    "MRO support UAE",
    "AOG support Dubai",
  ],
});

export default function HomePage() {
  const content = getContent();

  return (
    <main>
      <HeroSection slides={content.hero?.slides ?? []} />
      <AboutSection content={content.about} />
      <WhatWeDoSection content={content.whatWeDo} />
      <ServicesSection content={content.services} />
      <WhyChooseUsSection content={content.whyChooseUs} />
      <IndustriesSection content={content.industries} />
      <GlobalPresenceSection content={content.globalOperations} />
      <AchievementsSection content={content.achievements} />
      <CertificationsSection content={content.certifications} />
      <FaqSection content={content.faq} />
      <ContactSection content={content.contact} />
    </main>
  );
}

export const revalidate = 3600;
