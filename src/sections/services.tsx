"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box, Plane, ShieldCheck, Truck, Wrench, Handshake,
  Globe, Briefcase, Settings, Package, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { stagger, fadeUp, easeOut } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = {
  Plane, Box, ShieldCheck, Truck, Wrench, Handshake, Globe, Briefcase, Settings, Package,
};

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

type ServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

const DEFAULT_ITEMS: ServiceItem[] = [
  { title: "Aircraft Parts Trading", description: "Sourcing and trading for sortables, consumables, avionics, and hard-to-find parts—backed by documentation-first workflows.", icon: "Plane", features: ["RFQ-ready response", "Documentation-first sourcing", "Global shipping coordination"] },
  { title: "Aviation Equipment Supply", description: "Ground support equipment and specialized aviation tools with quality checks and delivery coordination.", icon: "Box", features: ["Quality-verified equipment", "GSE sourcing", "Fast delivery options"] },
  { title: "Aerospace Procurement", description: "End-to-end procurement support: RFQs, vendor vetting, traceability, and condition verification.", icon: "ShieldCheck", features: ["Vendor vetting workflows", "Full traceability", "Condition verification"] },
  { title: "Logistics & Global Shipping", description: "Time-definite shipping options, customs coordination, and routing designed for AOG urgency.", icon: "Truck", features: ["AOG priority routing", "Customs coordination", "Controlled handling"] },
  { title: "MRO Support", description: "Parts provisioning, kits, and on-demand sourcing for maintenance, repair, and overhaul operations.", icon: "Wrench", features: ["On-demand provisioning", "MRO kit assembly", "Repair cycle support"] },
  { title: "Aviation Consulting", description: "Strategic sourcing and supply-chain advisory to reduce downtime and improve procurement outcomes.", icon: "Handshake", features: ["Supply chain analysis", "Procurement strategy", "Compliance advisory"] },
];

const CARD_COLORS = [
  "from-blue-600 to-blue-700",
  "from-sky-500 to-sky-600",
  "from-indigo-600 to-indigo-700",
  "from-orange-500 to-orange-600",
  "from-teal-600 to-teal-700",
  "from-purple-600 to-purple-700",
];

export function ServicesSection({
  variant = "home",
  content,
}: {
  variant?: "home" | "page";
  content?: ServicesContent;
}) {
  const eyebrow = content?.eyebrow ?? "Our Services";
  const title = content?.title ?? "Enterprise-grade services for global fleets.";
  const description = content?.description ?? "Premium aviation services delivered with compliance-first execution.";
  const items = content?.items?.length ? content.items : DEFAULT_ITEMS;

  return (
    <Section id={variant === "home" ? "services" : undefined} className="bg-white">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
              {title}
            </h2>
            <div className="accent-line mt-5" />
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600">
              {description}
            </p>
          </Reveal>
          {variant === "home" && (
            <Reveal className="shrink-0">
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/services">
                  All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          )}
        </div>

        {/* Grid */}
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {items.map((s, idx) => {
            const Icon = ICONS[s.icon] ?? Plane;
            const gradient = CARD_COLORS[idx % CARD_COLORS.length];
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: easeOut, delay: idx * 0.04 }}
              >
                <div className="aviation-card group h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                  {/* Top accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                  <div className="p-7">
                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-[11px] font-bold tabular-nums text-slate-200">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold tracking-tight text-[#0F172A]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                      {s.description}
                    </p>

                    {/* Features */}
                    {s.features?.length > 0 && (
                      <ul className="mt-5 space-y-1.5">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[13px] text-slate-500">
                            <span className="h-1 w-1 rounded-full bg-[#FF7A3D]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Learn more */}
                    <div className="mt-6 flex items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors group-hover:text-[#FF7A3D]">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
