"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

type FaqItem = { q: string; a: string };
type FaqContent = { eyebrow: string; title: string; description: string; items: FaqItem[] };

const DEFAULT_ITEMS: FaqItem[] = [
  { q: "What documentation can you provide with parts?", a: "We support documentation-first workflows and can coordinate traceability and supplier documentation based on your compliance requirements. This includes 8130-3, EASA Form 1, certificates of conformance, and trace documentation as available." },
  { q: "Do you support AOG and time-critical shipping?", a: "Yes. We coordinate time-definite logistics options and expedite workflows based on timeline, destination, and handling requirements. Our 24/7 AOG desk ensures critical requests receive immediate attention." },
  { q: "What industries do you serve?", a: "We support commercial aviation, defense and government, cargo operations, private aviation, and aerospace manufacturing supply needs across 40+ countries worldwide." },
  { q: "How fast do you respond to RFQs?", a: "Our average RFQ response time is under 36 hours, with expedited handling available for urgent and AOG requests. We provide clear quoting with availability, pricing, and lead time in each response." },
  { q: "Can you source hard-to-find or obsolete parts?", a: "Yes. We have deep supplier networks for obsolete, hard-to-find, and long lead-time parts. We provide sourcing options with documentation, condition verification, and lead time transparency." },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.q ?? null);

  return (
    <div className="space-y-3">
      {items.map((f) => {
        const isOpen = open === f.q;
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
              isOpen ? "border-[#FF7A3D]/30 bg-[#FFF4EE]" : "border-[#E2E8F0] bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : f.q)}
              className="flex w-full items-start gap-4 px-6 py-5 text-left"
            >
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isOpen ? "border-[#FF7A3D] bg-[#FF7A3D] text-white" : "border-slate-200 text-slate-400"}`}>
                {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
              </span>
              <span className={`text-[15px] font-medium leading-snug ${isOpen ? "text-[#0F172A]" : "text-slate-700"}`}>
                {f.q}
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pl-[52px] pr-6">
                    <p className="text-[14px] leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function FaqSection({ content }: { content?: FaqContent }) {
  const eyebrow = content?.eyebrow ?? "FAQ";
  const title = content?.title ?? "Clear answers for procurement teams.";
  const description = content?.description ?? "Everything you need to know about our services, processes, and capabilities for aviation supply.";
  const items = content?.items?.length ? content.items : DEFAULT_ITEMS;

  return (
    <Section id="faq" className="bg-[#F8FAFC]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">

          {/* Left */}
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
              {title}
            </h2>
            <div className="accent-line mt-5" />
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="aviation-card mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF6FF]">
                  <HelpCircle className="h-5 w-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Have more questions?</p>
                  <p className="text-xs text-slate-500">Our team responds within 36 hours</p>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-4 block text-center rounded-xl bg-[#0F172A] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Contact Our Team
              </a>
            </div>
          </Reveal>

          {/* Right: Accordion */}
          <Reveal>
            <FaqAccordion items={items} />
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
