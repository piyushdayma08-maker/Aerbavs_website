"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, BadgeCheck, Globe, Award, Star, CheckCircle, Lock } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { stagger, scaleUp, easeOut, easeExpo } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = {
  ShieldCheck, FileCheck, BadgeCheck, Globe, Award, Star, CheckCircle, Lock,
};

type CertItem = { title: string; description: string; icon: string };
type CertContent = { eyebrow: string; title: string; description: string; items: CertItem[] };

const DEFAULT_ITEMS: CertItem[] = [
  { title: "Quality Management", description: "ISO-aligned processes ensuring consistency, traceability, and quality control across all supply operations.", icon: "ShieldCheck" },
  { title: "Verified Documentation", description: "Meticulous record-keeping focused on compliance transparency and full audit trail capability.", icon: "FileCheck" },
  { title: "Supplier Assurance", description: "Comprehensive vetting workflows built to reduce procurement risk and ensure supplier integrity.", icon: "BadgeCheck" },
  { title: "Global Trade Readiness", description: "Customs-aware routing and complete export documentation support for international transactions.", icon: "Globe" },
];

export function CertificationsSection({
  variant = "home",
  content,
}: {
  variant?: "home" | "page";
  content?: CertContent;
}) {
  const eyebrow = content?.eyebrow ?? "Certifications & Standards";
  const title = content?.title ?? "Compliance-forward by design.";
  const description = content?.description ?? "Our operational standards are built on rigorous certification frameworks that ensure quality, traceability, and regulatory compliance.";
  const items = content?.items?.length ? content.items : DEFAULT_ITEMS;

  return (
    <Section id={variant === "home" ? "certifications" : undefined} className="bg-white">
      <div className="container">

        {/* Header */}
        <Reveal blur>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
            {title}
          </h2>
          <div className="accent-line mt-5" />
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>

        {/* Cards — shimmer-card CSS + scale-up variant */}
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {items.map((c, idx) => {
            const Icon = ICONS[c.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={c.title}
                variants={scaleUp}
                transition={{ duration: 0.60, ease: easeExpo, delay: idx * 0.07 }}
              >
                {/* shimmer-card enables the CSS shimmer sweep on hover */}
                <motion.div
                  className="aviation-card shimmer-card group h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(15,23,42,0.10)" }}
                  transition={{ duration: 0.28, ease: easeOut }}
                >
                  {/* Hover accent bar — expands from 0 → full width */}
                  <div className="h-1 w-0 bg-gradient-to-r from-[#FF7A3D] to-[#FF9F6B] transition-all duration-400 group-hover:w-full" />

                  <div className="p-6">
                    {/* Icon badge */}
                    <div className="relative inline-flex">
                      <motion.div
                        className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#BAE6FD] p-3.5"
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                      >
                        <Icon className="h-full w-full text-[#1D4ED8]" />
                      </motion.div>
                      <div className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#FF7A3D]" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-[#0F172A]">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{c.description}</p>

                    <div className="mt-5 h-px w-full bg-[#E2E8F0]" />
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                      <span className="text-[11px] text-slate-400">Active certification</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
