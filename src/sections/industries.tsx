"use client";

import { ImageWithFallback } from "@/components/image-with-fallback";
import { motion } from "framer-motion";
import { Building2, Shield, Package, Crown, Factory, Plane, Globe, Truck } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { stagger, fadeUp, easeOut } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = {
  Building2, Shield, Package, Crown, Factory, Plane, Globe, Truck,
};

type IndustryItem = {
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
};

type IndustriesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: IndustryItem[];
};

const DEFAULT_ITEMS: IndustryItem[] = [
  { title: "Airlines",               description: "MRO parts supply, aircraft consumables, and leasing solutions for scheduled carriers and charter airlines.",              icon: "Building2", image: "/images/industries/airlines.jpg",            alt: "Commercial passenger aircraft at terminal gate"     },
  { title: "MRO Organisations",      description: "Line and base maintenance parts, aviation tooling, hangar supplies, and aircraft consumables for MRO operations.",       icon: "Wrench",    image: "/images/industries/mro-organisations.jpg",    alt: "Aircraft MRO hangar with maintenance technicians"   },
  { title: "Aviation Operators",     description: "Rotable exchanges, AOG parts sourcing, and flexible leasing solutions for charter operators and regional carriers.",     icon: "Plane",     image: "/images/industries/aviation-operators.jpg",   alt: "Aviation operator aircraft on airport apron"        },
  { title: "Government Aviation",    description: "Reliable procurement support for government-operated aircraft fleets with comprehensive documentation and compliance.",  icon: "Shield",    image: "/images/industries/government-aviation.jpg",  alt: "Government aviation operations at airport"          },
  { title: "Defence Aviation",       description: "Compliance-driven parts sourcing and supply chain support for defence aviation programmes.",                             icon: "ShieldCheck",image: "/images/industries/defence-aviation.jpg",    alt: "Defence and military aviation operations"           },
  { title: "Fleet Support",          description: "End-to-end fleet support from consumables and tooling to rotable pool management and AOG logistics.",                   icon: "Globe",     image: "/images/industries/fleet-support.jpg",        alt: "Fleet of commercial aircraft at international hub"  },
];

export function IndustriesSection({
  variant = "home",
  content,
}: {
  variant?: "home" | "page";
  content?: IndustriesContent;
}) {
  const eyebrow = content?.eyebrow ?? "Industries Served";
  const title = content?.title ?? "Aligned to complex mission profiles.";
  const description = content?.description ?? "From commercial airlines to defense contractors, we deliver compliant sourcing and premium service across the full aerospace ecosystem.";
  const items = content?.items?.length ? content.items : DEFAULT_ITEMS;

  return (
    <Section id={variant === "home" ? "industries" : undefined} className="bg-white">
      <div className="container">

        {/* Header */}
        <Reveal className="text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
            {title}
          </h2>
          <div className="accent-line mx-auto mt-5" />
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>

        {/* Grid */}
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {items.map((it, idx) => {
            const Icon = ICONS[it.icon] ?? Building2;
            const isLarge = idx === 0 || idx === 3;
            return (
              <motion.div
                key={it.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: easeOut, delay: idx * 0.06 }}
                className={isLarge ? "sm:col-span-1 lg:col-span-1" : ""}
              >
                <div className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl bg-navy-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                  {/* Background image */}
                  <ImageWithFallback
                    src={it.image}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-55 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-65"
                  />

                  {/* Overlay */}
                  <div className="img-overlay-navy absolute inset-0" />

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{it.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/65 transition-all duration-300 group-hover:text-white/80">
                      {it.description}
                    </p>
                    <div className="mt-5 h-px w-full bg-white/10" />
                    <div className="mt-3 text-[11px] font-medium uppercase tracking-wider text-white/40">
                      Aviation Supply
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
