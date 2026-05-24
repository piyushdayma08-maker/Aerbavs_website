"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroSlider, type HeroSlide } from "@/components/hero-slider";
import { easeOut } from "@/lib/motion";

export function HeroSection({ slides }: { slides: HeroSlide[] }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#030C1E] pt-[88px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_65%_at_12%_18%,rgba(38,146,255,0.22),transparent_62%),radial-gradient(70%_60%_at_86%_16%,rgba(18,84,188,0.3),transparent_60%),linear-gradient(160deg,#030c1e_0%,#051530_54%,#072449_100%)]" />
      <div className="relative flex-1 px-0 sm:px-0 lg:px-0">
        <HeroSlider slides={slides} />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-[2] flex w-fit -translate-x-1/2 items-center gap-2 text-xs text-slate-300/80 transition-colors hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.8 }}
      >
        <span className="tracking-wider">Discover</span>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(4,17,44,0.35)] backdrop-blur-md">
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </motion.a>
    </section>
  );
}
