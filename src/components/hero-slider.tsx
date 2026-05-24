"use client";

import { ImageWithFallback } from "@/components/image-with-fallback";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeOut, easeExpo } from "@/lib/motion";

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
  eyebrow: string;
  headline: string;
  subheading: string;
};

function clamp(index: number, length: number) {
  return (index + length) % length;
}

const contentStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const textChild = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => clamp(current + 1, slides.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  if (!slides.length) return null;

  const activeSlide = slides[index];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      
      <div className="relative h-full min-h-[76svh] w-full sm:min-h-[78svh] lg:min-h-[82svh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.src}-${index}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.2 : 1.1, ease: easeExpo }}
          >
            <motion.div
              className="absolute inset-0 will-animate"
              initial={{ scale: 1 }}
              animate={{ scale: reducedMotion ? 1 : 1.07 }}
              transition={{ duration: reducedMotion ? 0.2 : 6.5, ease: "linear" }}
            >
              <ImageWithFallback
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={88}
                className="object-cover"
              />
            </motion.div>

            {/* Softer, brighter cinematic overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,184,128,0.10)_0%,rgba(38,146,255,0.06)_40%,rgba(8,38,82,0.06)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,230,200,0.02)_0%,rgba(10,40,90,0.12)_55%,rgba(5,18,40,0.22)_100%)]" />

            {/* Sun glow / runway lights subtle vignette */}
            <motion.div
              className="absolute right-6 top-8 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(255,200,140,0.16),transparent)] blur-3xl opacity-80"
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: 1.05, opacity: 0.9 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />

            <div className="absolute inset-0 bg-radial-vignette opacity-28" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1700px] items-center px-5 py-16 sm:px-8 lg:px-14">
          <div className="max-w-[680px]">
            <AnimatePresence mode="wait">
              <motion.div key={`content-${index}`} variants={contentStagger} initial="hidden" animate="visible" exit={{ opacity: 0, y: -8, transition: { duration: 0.32 } }}>
                <motion.p variants={textChild} transition={{ duration: 0.55, ease: easeExpo }} className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                  {activeSlide.eyebrow}
                </motion.p>

                <motion.h1 variants={textChild} transition={{ duration: 0.6, ease: easeExpo }} className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[58px]">
                  {activeSlide.headline.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {lineIndex > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </motion.h1>

                <motion.div variants={textChild} transition={{ duration: 0.55, ease: easeExpo }} className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#55BAFF] via-[#2A84F4] to-[#1A57C8]" />

                <motion.p variants={textChild} transition={{ duration: 0.58, ease: easeOut }} className="mt-5 max-w-[620px] text-pretty text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
                  {activeSlide.subheading}
                </motion.p>

                <motion.div variants={textChild} transition={{ duration: 0.5, ease: easeOut }} className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild className="h-11 rounded-full bg-gradient-to-r from-[#2B9BF9] via-[#1D7CEC] to-[#155FCC] px-6 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(12,78,176,0.45)] transition-all duration-250 hover:scale-[1.03] hover:from-[#3AA8FF] hover:to-[#1E67D7]">
                    <Link href="/contact">
                      Request a Quote <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-250 hover:scale-[1.02] hover:border-white/50 hover:bg-white/18">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[3] mx-auto flex w-full max-w-[1700px] items-end justify-between px-5 sm:px-8 lg:px-14">
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((current) => clamp(current - 1, slides.length))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-250 hover:scale-105 hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((current) => clamp(current + 1, slides.length))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-250 hover:scale-105 hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="pointer-events-auto hidden items-center gap-2 sm:flex">
            {slides.map((slideItem, itemIndex) => (
              <button
                key={slideItem.id}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Go to slide ${itemIndex + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  itemIndex === index
                    ? "w-9 bg-gradient-to-r from-[#6BC6FF] to-[#2C84F2]"
                    : "w-3 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
