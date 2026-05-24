"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, ArrowRight, Plane, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { stagger, fadeUp, easeOut, easeExpo } from "@/lib/motion";

const services = [
  "MRO Parts Supply",
  "Aircraft Leasing",
  "AOG Emergency Support",
  "Aerospace Procurement",
  "Inventory Management",
  "Logistics & Shipping",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#E2E8F0] bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 aviation-grid opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="cloud-drift pointer-events-none absolute -left-20 top-24 h-40 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,200,255,0.24)_0%,rgba(141,200,255,0)_72%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="cloud-drift pointer-events-none absolute -right-12 bottom-20 h-36 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,141,236,0.2)_0%,rgba(79,141,236,0)_72%)] blur-2xl [animation-delay:2s]"
      />

      {/* ── CTA banner ── */}
      <Reveal from="bottom">
        <div className="relative border-b border-[#E2E8F0] bg-gradient-to-r from-[#070F24] to-[#0E214A]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 aviation-route-lines opacity-35" />
          <div className="container py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-[#FF7A3D]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">24/7 Aviation Support</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Ready to streamline your aviation supply?
                </h3>
                <p className="mt-2 text-[15px] text-white/60">
                  Submit an RFQ and our specialists will respond with pricing, availability, and lead times.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-[#FF7A3D] px-6 font-semibold transition-all duration-200 hover:scale-[1.04] hover:bg-[#E55A1C]"
                >
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/8 px-6 text-white hover:bg-white/14">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Main footer ── */}
      <motion.div
        className="container py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8% 0px" }}
        variants={stagger}
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeExpo }}
          >
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-slate-500">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 transition-all duration-200 hover:translate-x-0.5 hover:text-[#0F172A]"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                {siteConfig.links.email}
              </a>
              <a
                href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 transition-all duration-200 hover:translate-x-0.5 hover:text-[#0F172A]"
              >
                <Phone className="h-4 w-4 text-slate-400" />
                {siteConfig.links.phone}
              </a>
            </div>
            {/* Social icons with hover scale */}
            <div className="mt-6 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.18, ease: easeOut }}>
                <Button asChild size="icon" variant="outline" className="h-9 w-9 rounded-full" aria-label="LinkedIn">
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.18, ease: easeOut }}>
                <Button asChild size="icon" variant="outline" className="h-9 w-9 rounded-full" aria-label="Twitter/X">
                  <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer"><Twitter className="h-4 w-4" /></a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeExpo, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-slate-500 transition-colors hover:text-[#0F172A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeExpo, delay: 0.10 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="link-underline text-sm text-slate-500 transition-colors hover:text-[#0F172A]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter + locations */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeExpo, delay: 0.14 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Stay Updated</p>
            <p className="mt-3 text-sm text-slate-500">
              Receive procurement insights and compliance updates.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]/20"
              />
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}>
                <Button type="submit" size="icon" className="shrink-0 rounded-full bg-[#0F172A]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </form>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Offices</p>
              <ul className="mt-3 space-y-2">
                {siteConfig.locations.map((loc) => (
                  <li key={loc.city} className="flex items-start gap-2 text-sm text-slate-500">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300" />
                    <span><span className="font-medium text-slate-700">{loc.city}</span> — {loc.address}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-14 border-t border-[#E2E8F0] pt-7"
          variants={fadeUp}
          transition={{ duration: 0.55, ease: easeOut, delay: 0.18 }}
        >
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-700 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-slate-700 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
