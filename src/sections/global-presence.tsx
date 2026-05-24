"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { stagger, fadeLeft, fadeRight, easeOut, easeExpo } from "@/lib/motion";

type Hub = { city: string; code: string; region: string };

type GlobalOpsContent = {
  eyebrow: string;
  title: string;
  description: string;
  coverageStat: string;
  coverageLabel: string;
  hubs: Hub[];
  countries: string[];
};

const DEFAULT_HUBS: Hub[] = [
  { city: "Dubai",         code: "DXB", region: "Middle East"   },
  { city: "London",        code: "LHR", region: "Europe"        },
  { city: "Dallas",        code: "DFW", region: "North America" },
  { city: "Singapore",     code: "SIN", region: "Asia Pacific"  },
  { city: "Johannesburg",  code: "JNB", region: "Africa"        },
  { city: "São Paulo",     code: "GRU", region: "South America" },
];

const DEFAULT_COUNTRIES = [
  "United States", "United Kingdom", "UAE", "Singapore", "Germany",
  "France", "Saudi Arabia", "India", "Australia", "South Africa",
];

export function GlobalPresenceSection({ content }: { content?: GlobalOpsContent }) {
  const eyebrow      = content?.eyebrow      ?? "Global Operations";
  const title        = content?.title        ?? "Coverage across major aviation hubs.";
  const description  = content?.description  ?? "A hub-led network designed for reliable procurement, documentation, and time-definite shipping across every major aviation market.";
  const coverageStat = content?.coverageStat ?? "40+";
  const coverageLabel = content?.coverageLabel ?? "Countries served";
  const hubs      = content?.hubs?.length      ? content.hubs      : DEFAULT_HUBS;
  const countries = content?.countries?.length ? content.countries : DEFAULT_COUNTRIES;

  return (
    <Section id="global" className="bg-[#F8FAFC]">
      <div className="container">

        {/* Header */}
        <Reveal className="max-w-2xl" blur>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
            {title}
          </h2>
          <div className="accent-line mt-5" />
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Left: Map + stats */}
          <Reveal from="left">
            <div className="aviation-card overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-card">
              {/* Stats bar */}
              <div className="flex items-center gap-8 border-b border-[#E2E8F0] px-7 py-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#0F172A]">{coverageStat}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{coverageLabel}</div>
                </motion.div>
                <div className="h-10 w-px bg-[#E2E8F0]" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easeOut, delay: 0.18 }}
                >
                  <div className="text-3xl font-bold text-[#0F172A]">{hubs.length}</div>
                  <div className="mt-0.5 text-xs text-slate-500">Primary hubs</div>
                </motion.div>
                <div className="h-10 w-px bg-[#E2E8F0]" />
                <div className="ml-auto hidden rounded-full border border-[#E2E8F0] px-4 py-1.5 text-xs text-slate-500 sm:flex">
                  <Globe2 className="mr-1.5 h-3.5 w-3.5" /> Live network coverage
                </div>
              </div>

              {/* Map */}
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src="/placeholders/world-map.svg"
                  alt="Global operations map"
                  fill
                  className="object-cover opacity-80"
                />
                {/* Animated overlay shimmer on the map */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "200%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

                {/* Hub labels */}
                <div className="absolute left-5 top-5 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
                  Key hubs & priority shipping lanes
                </div>
              </div>

              {/* Countries */}
              <div className="px-7 py-5">
                <p className="text-sm text-slate-600">
                  Active coverage including{" "}
                  <span className="font-medium text-[#0F172A]">
                    {countries.slice(0, 5).join(", ")}
                  </span>
                  {countries.length > 5 && (
                    <span className="text-slate-400"> and {countries.length - 5} more.</span>
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Hub list with pulse dots */}
          <motion.div
            className="space-y-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {hubs.map((h, idx) => (
              <motion.div
                key={h.code}
                variants={fadeLeft}
                transition={{ duration: 0.55, ease: easeExpo, delay: idx * 0.05 }}
              >
                <motion.div
                  className="group flex items-center gap-4 rounded-xl border border-[#E2E8F0] bg-white px-5 py-4 shadow-sm"
                  whileHover={{
                    x: -4,
                    borderColor: "rgba(255,122,61,0.35)",
                    boxShadow: "0 8px 24px rgba(15,23,42,0.09)",
                  }}
                  transition={{ duration: 0.22, ease: easeOut }}
                >
                  {/* Hub code with pulse dot */}
                  <div className="relative inline-flex">
                    {/* Pulse ring — only visible on active/primary hub (idx === 0) */}
                    {idx === 0 && (
                      <span className="absolute inset-0 rounded-full bg-[#FF7A3D]/20 animate-pulse-ring" />
                    )}
                    <div className="hub-dot relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[11px] font-bold text-slate-500 transition-colors duration-200 group-hover:bg-[#FFF4EE] group-hover:text-[#FF7A3D]">
                      {h.code}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#0F172A]">{h.city}</div>
                    <div className="text-xs text-slate-400">{h.region}</div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[11px] text-slate-400">
                    <MapPin className="h-3 w-3" /> Hub
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
