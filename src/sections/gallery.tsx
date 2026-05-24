"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { stagger, fadeUp, easeOut } from "@/lib/motion";
import { galleryImages } from "@/lib/images";

export function GallerySection({ variant = "home" }: { variant?: "home" | "page" }) {
  return (
    <Section id={variant === "home" ? "gallery" : undefined}>
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="High-end aviation visuals."
          description="A modern, editorial-style grid with real aviation photography and subtle hover states."
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        >
          {galleryImages.slice(0, variant === "home" ? 6 : galleryImages.length).map((img, idx) => (
            <motion.figure
              key={img.src}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut, delay: idx * 0.02 }}
              className={`aviation-card group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-colors hover:bg-muted ${
                idx % 7 === 0
                  ? "lg:col-span-7"
                  : idx % 7 === 1
                    ? "lg:col-span-5"
                    : idx % 7 === 2
                      ? "lg:col-span-4"
                      : idx % 7 === 3
                        ? "lg:col-span-4"
                        : idx % 7 === 4
                          ? "lg:col-span-4"
                          : idx % 7 === 5
                            ? "lg:col-span-6"
                            : "lg:col-span-6"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent opacity-95" />
              </div>
              <figcaption className="pointer-events-none absolute bottom-4 left-4 right-4 text-xs text-slate-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
