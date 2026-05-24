"use client";

import { ImageWithFallback } from "@/components/image-with-fallback";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Timer, ArrowRight, CheckCircle } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { stagger, scaleUp, fadeUp, easeOut, easeExpo } from "@/lib/motion";

type AboutCard = { title: string; description: string; image: string; alt: string };

type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  cards: AboutCard[];
};

const cardIcons = [Globe, ShieldCheck, Timer];

const highlights = [
  "5+ years of dedicated aviation supply expertise",
  "ISO 9001:2015 certified quality management",
  "24/7 AOG support & rapid global delivery",
];

// Stagger for highlight items
const listStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const listItem = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x:   0 },
};

export function AboutSection({
  variant = "home",
  content,
}: {
  variant?: "home" | "page";
  content?: AboutContent;
}) {
  const eyebrow   = content?.eyebrow   ?? "About AeroTrade Global";
  const title     = content?.title     ?? "Your trusted partner in aviation solutions";
  const description =
    content?.description ??
    "With a strong global network and deep industry expertise, we deliver high-quality aircraft parts and reliable aviation supply solutions to airlines, MROs, and aerospace businesses worldwide.";
  const ctaLabel  = content?.ctaLabel  ?? "Learn More About Us";
  const ctaHref   = content?.ctaHref   ?? "/about";
  const cards: AboutCard[] = content?.cards ?? [
    {
      title: "Dubai-Based Operations",
      description: "Headquartered at Dubai Digital Park, Dubai Silicon Oasis — at the centre of the region's fastest-growing aviation hub.",
      image: "/images/about/dubai-operations.jpg",
      alt: "Aircraft on approach to Dubai International Airport",
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality management certified to ISO 9001:2015 — ensuring every part and service meets the highest aviation standards.",
      image: "/images/about/iso-certified.jpg",
      alt: "Aircraft engine MRO inspection and quality check",
    },
    {
      title: "24/7 AOG Response",
      description: "Round-the-clock AOG support with priority sourcing and rapid dispatch to minimise aircraft ground time worldwide.",
      image: "/images/about/aog-response.jpg",
      alt: "Air cargo loading and logistics operations",
    },
  ];

  return (
    <Section id={variant === "home" ? "about" : undefined} className="bg-white">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          {/* Left: Text */}
          <Reveal blur from="left">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
              {title}
            </h2>
            <div className="accent-line mt-5" />
            <p className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-slate-600">
              {description}
            </p>

            {/* Staggered highlight list */}
            <motion.ul
              className="mt-7 space-y-2.5"
              variants={listStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {highlights.map((h) => (
                <motion.li
                  key={h}
                  variants={listItem}
                  transition={{ duration: 0.45, ease: easeExpo }}
                  className="flex items-center gap-2.5 text-[14px] text-slate-700"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#FF7A3D]" />
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full bg-[#0F172A] px-6 transition-all duration-200 hover:scale-[1.04] hover:bg-[#1E293B]">
                <Link href={ctaHref}>
                  {ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>

          {/* Right: Image cards */}
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {cards.map((c, i) => {
              const Icon = cardIcons[i % cardIcons.length];
              return (
                <motion.div
                  key={c.title}
                  variants={scaleUp}
                  transition={{ duration: 0.65, ease: easeExpo, delay: i * 0.07 }}
                  className="h-full"
                >
                  <motion.div
                    className="aviation-card group h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-card"
                    whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(15,23,42,0.12)" }}
                    transition={{ duration: 0.28, ease: easeOut }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4]">
                      <ImageWithFallback
                        src={c.image}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <div className="img-overlay-navy absolute inset-0" />
                      <div className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/25">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="bg-[#070F24] px-4 py-4">
                      <div className="text-sm font-semibold text-white">{c.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-white/65">{c.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
