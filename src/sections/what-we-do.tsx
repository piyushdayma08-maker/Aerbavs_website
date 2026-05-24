"use client";

import { ImageWithFallback } from "@/components/image-with-fallback";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { stagger, fadeUp, easeOut, easeExpo } from "@/lib/motion";

type ProductItem = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

type WwdContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProductItem[];
  // Legacy fields kept for admin backward compatibility
  image?: string;
  imageAlt?: string;
  imageCaptionTitle?: string;
  imageCaptionBody?: string;
};

const FALLBACK_IMG = "/images/placeholder.svg";

const DEFAULT_ITEMS: ProductItem[] = [
  { title: "Tools and Equipment",    body: "Specialist aviation maintenance tools, pneumatic riveters, torque wrenches, and precision equipment for MRO and line maintenance.",                                    image: "/images/products/tools-equipment.jpg",      imageAlt: "Aviation maintenance tools and equipment"       },
  { title: "Shop & Hangar Supplies", body: "Ground support equipment, workstands, jacks, and all the infrastructure supplies required for efficient hangar operations.",                                          image: "/images/products/hangar-supplies.jpg",       imageAlt: "Hangar and shop supplies"                       },
  { title: "Aircraft & Engine Parts",body: "Certified rotables, LRUs, airframe and engine components with full 8130-3 / EASA Form 1 documentation from approved sources.",                                        image: "/images/products/aircraft-engine-parts.jpg", imageAlt: "Aircraft and engine parts"                      },
  { title: "Avionics & Instruments", body: "Flight instruments, navigation systems, communication equipment, and avionics components with full trace documentation.",                                               image: "/images/products/avionics-instruments.jpg",  imageAlt: "Aircraft avionics and instruments"               },
  { title: "Adhesives",              body: "Aviation-grade structural adhesives — epoxy systems, film adhesives, and bonding compounds approved for aircraft maintenance and repair.",                               image: "/images/products/adhesives.jpg",             imageAlt: "Aviation adhesives"                             },
  { title: "Lubricants",             body: "Aerospace lubricants, hydraulic fluids, and greases meeting OEM specifications for airframes, engines, landing gear, and flight controls.",                              image: "/images/products/lubricants.jpg",            imageAlt: "Aviation lubricants and fluids"                 },
  { title: "Sealants",               body: "Polysulfide, polyurethane, and silicone sealants for fuel tanks, pressurised structures, windows, and aircraft exterior applications.",                                 image: "/images/products/sealants.jpg",              imageAlt: "Aviation sealants"                              },
  { title: "Silicones",              body: "High-performance silicone compounds, RTV sealants, and dielectric greases approved for aviation electrical and structural applications.",                                image: "/images/products/silicones.jpg",             imageAlt: "Aviation silicone products"                     },
  { title: "Cleaners",               body: "Aviation surface cleaners, degreasers, solvent wipes, and aqueous cleaning systems formulated for aircraft surfaces and components.",                                   image: "/images/products/cleaners.jpg",              imageAlt: "Aviation cleaning products"                     },
  { title: "Coatings",               body: "Primers, topcoats, corrosion inhibitors, and specialised aviation coatings qualified for aircraft interior and exterior paint systems.",                                 image: "/images/products/coatings.jpg",              imageAlt: "Aviation coatings and paints"                   },
  { title: "Tapes",                  body: "High-performance aviation tapes — aluminium foil, speed tape, edge tape, and speciality tapes approved for aircraft maintenance use.",                                   image: "/images/products/tapes.jpg",                 imageAlt: "Aviation tapes and accessories"                 },
  { title: "Accessories",            body: "Aviation electrical accessories, connector pins, circuit breakers, aircraft batteries, wire harnesses, and specialist maintenance accessories.",                           image: "/images/products/accessories.jpg",           imageAlt: "Aviation accessories and electrical components"  },
];

const META_STATS = [
  { val: "12", label: "Product Categories" },
  { val: "5+", label: "Years of Expertise" },
  { val: "40+", label: "Countries Served" },
  { val: "ISO 9001:2015", label: "Quality Certified" },
];

export function WhatWeDoSection({ content }: { content?: WwdContent }) {
  const eyebrow = content?.eyebrow ?? "What We Supply";
  const title = content?.title ?? "AERBAVS MRO Parts & Leasing FZCO — Supplying the Skies Since 2020";
  const description =
    content?.description ??
    "AERBAVS MRO PARTS & LEASING FZCO has been serving the aviation community for over 5 years, providing the parts, tools, and materials that keep aircraft airborne and leasing activities running smoothly. With deep inventory, fast shipping, and remarkable service, we make it easy to get what you need — when you need it.";
  const items: ProductItem[] = content?.items?.length ? content.items : DEFAULT_ITEMS;

  return (
    <Section id="what-we-do" className="bg-[#F8FAFC]">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
              {title}
            </h2>
            <div className="accent-line mt-5" />
            <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-600">
              {description}
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#0F172A] px-6 hover:bg-[#1E293B]">
                <Link href="/services">
                  All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ── Trust / Meta Strip ── */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-[#E2E8F0] bg-white px-7 py-4 shadow-sm">
            {META_STATS.map((s, idx) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-[15px] font-bold tracking-tight text-[#FF7A3D]">{s.val}</span>
                <span className="text-[12px] text-slate-500">{s.label}</span>
                {idx < META_STATS.length - 1 && (
                  <span className="hidden h-4 w-px bg-[#E2E8F0] sm:block" />
                )}
              </div>
            ))}
            <div className="ml-auto hidden items-center gap-2 text-[12px] text-slate-400 sm:flex">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              Genuine certified products only
            </div>
          </div>
        </Reveal>

        {/* ── Product Grid ── */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeExpo, delay: i * 0.04 }}
              className="h-full"
            >
              <motion.div
                className="aviation-card group h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.10)", borderColor: "#D1D5DB" }}
                transition={{ duration: 0.25, ease: easeOut }}
              >

                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
                  <ImageWithFallback
                    src={item.image || FALLBACK_IMG}
                    alt={item.imageAlt || item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  {/* Bottom fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/25 via-transparent to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1C3872]/0 transition-colors duration-300 group-hover:bg-[#1C3872]/10" />
                  {/* Category number badge */}
                  <div className="absolute left-3 top-3">
                    <span className="inline-block rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] text-[#FF7A3D] shadow-sm backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-4">
                  <h3 className="text-[13.5px] font-semibold leading-snug text-[#0F172A]">
                    {item.title}
                  </h3>
                  <div className="mt-2.5 h-[2px] w-7 rounded-full bg-[#FF7A3D] transition-all duration-300 group-hover:w-12" />
                  <p className="mt-2.5 text-[12px] leading-relaxed text-slate-500 line-clamp-2">
                    {item.body}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA Strip ── */}
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-gradient-to-r from-[#070F24] to-[#0E214A] px-8 py-7 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-white">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <p className="mt-0.5 text-[12px] text-white/55">
                Contact our Dubai team — we source globally and respond within 24 hours.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#FF7A3D] px-6 text-sm font-semibold hover:bg-[#E55A1C]">
                <Link href="/contact">
                  Submit an RFQ <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="tel:+97154176164"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-white"
              >
                +971 54 176 1644
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
