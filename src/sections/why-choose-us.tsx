"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Globe2, Headset, Timer, Handshake, Sparkles,
  CheckCircle, Star, Award, Package, Plane, Building2, ShieldCheck,
  ArrowRight, Phone, Mail,
} from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";
import { Button } from "@/components/ui/button";
import { stagger, fadeUp, easeOut, easeExpo } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = {
  Shield, Globe2, Headset, Timer, Handshake, Sparkles, CheckCircle, Star, Award,
  Package, Plane, Building2, ShieldCheck,
};

type Reason = { title: string; description: string; icon: string };
type Stat = { value: number; label: string; suffix: string };

type WhyContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
  reasons: Reason[];
};

const DEFAULT_STATS: Stat[] = [
  { value: 5, label: "Years of aviation expertise", suffix: "+" },
  { value: 40, label: "Countries served", suffix: "+" },
  { value: 500, label: "Aviation supply partners", suffix: "+" },
  { value: 24, label: "Hour AOG support", suffix: "/7" },
];

const DEFAULT_REASONS: Reason[] = [
  { title: "Ample Selection", description: "12 product categories under one roof — aircraft parts, avionics, tools, adhesives, lubricants, sealants, cleaners, coatings, tapes, and leasing.", icon: "Package" },
  { title: "Rapid & Genuine Delivery", description: "Certified aviation products dispatched fast from our Dubai hub. AOG requests treated as immediate priority with same-day dispatch capability.", icon: "Timer" },
  { title: "Trusted Aviation Experience", description: "5+ years serving airlines, MRO organisations, operators, and defence fleets across the Middle East, Central Africa, and South Asia.", icon: "Award" },
  { title: "Leasing Services", description: "Flexible aircraft leasing — dry lease, wet lease, and ACMI — with full technical support, records review, and competitive terms.", icon: "Plane" },
  { title: "Made Easy — Fast & Reliable", description: "Submit an RFQ, receive a fast response, and get your order with full documentation. Straightforward aviation supply with no delays and no complexity.", icon: "Headset" },
];

export function WhyChooseUsSection({ content }: { content?: WhyContent }) {
  const eyebrow = content?.eyebrow ?? "Why Choose AERBAVS";
  const title = content?.title ?? "The trusted aviation supply partner for fleets across the globe.";
  const description = content?.description ?? "AERBAVS was built on the belief that aviation supply should be fast, genuine, and reliable.";
  const stats = content?.stats?.length ? content.stats : DEFAULT_STATS;
  const reasons = content?.reasons?.length ? content.reasons : DEFAULT_REASONS;

  return (
    <Section id="why" className="bg-white">
      <div className="container">

        {/* ── Header ── */}
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
            {title}
          </h2>
          <div className="accent-line mt-5" />
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>

        {/* ── Main content grid ── */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">

          {/* Left: Feature list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {reasons.map((r, i) => {
              const Icon = ICONS[r.icon] ?? Shield;
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: easeExpo, delay: i * 0.07 }}
                  className="group flex gap-5 border-b border-[#F1F5F9] py-6 last:border-0"
                >
                  {/* Icon */}
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all duration-300 group-hover:border-[#1C3872] group-hover:bg-[#1C3872]">
                    <Icon className="h-5 w-5 text-[#0F172A] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[15px] font-semibold leading-snug text-[#0F172A]">
                        {r.title}
                      </h3>
                      <span className="shrink-0 text-[11px] font-bold tabular-nums text-[#FF7A3D] mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
                      {r.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Trust panel (sticky) */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl bg-[#070F24] shadow-premium">

              {/* ISO & brand header */}
              <div className="border-b border-white/8 px-7 py-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#FF7A3D]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                    ISO 9001:2015 Certified
                  </span>
                </div>
                <p className="mt-4 text-[17px] font-semibold leading-snug text-white">
                  Supplying the Skies Since 2020
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                  Dubai-based aviation supply trusted by airlines, MROs, and operators across 40+ countries worldwide.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`px-6 py-5 ${idx % 2 === 0 && idx < stats.length - 1 ? "border-r border-white/8" : ""} ${idx < stats.length - 2 ? "border-b border-white/8" : ""}`}
                  >
                    <div className="text-[22px] font-bold tracking-tight text-white">
                      <AnimatedNumber value={s.value} />
                      <span className="text-[#FF7A3D]">{s.suffix}</span>
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/8" />

              {/* CTA / Contact */}
              <div className="px-7 py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  Get in touch
                </p>
                <div className="mt-4 space-y-2.5">
                  <a
                    href="tel:+97154176164"
                    className="flex items-center gap-3 text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-[#FF7A3D]" />
                    +971 54 176 1644
                  </a>
                  <a
                    href="mailto:info@aerbavs.com"
                    className="flex items-center gap-3 text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#FF7A3D]" />
                    info@aerbavs.com
                  </a>
                </div>
                <Button
                  asChild
                  className="mt-5 w-full rounded-xl bg-[#FF7A3D] text-sm font-semibold hover:bg-[#E55A1C]"
                >
                  <Link href="/contact">
                    Submit an RFQ <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
