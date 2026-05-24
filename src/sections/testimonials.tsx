"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { easeOut } from "@/lib/motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
};

const items: Testimonial[] = [
  {
    name: "Procurement Lead",
    role: "Commercial Airline",
    quote:
      "Their response time and documentation discipline are exceptional. We’ve reduced AOG risk with consistent, verified supply.",
    rating: 5,
    image: "/placeholders/avatar-1.svg",
  },
  {
    name: "Supply Chain Manager",
    role: "MRO Organization",
    quote:
      "Premium communication, fast RFQs, and a logistics team that understands urgency. A partner we trust for critical sourcing.",
    rating: 5,
    image: "/placeholders/avatar-2.svg",
  },
  {
    name: "Director of Operations",
    role: "Private Aviation",
    quote:
      "Discreet, accurate, and incredibly reliable. Their team handles complex parts requests with precision and speed.",
    rating: 5,
    image: "/placeholders/avatar-3.svg",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => items[index], [index]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <Section id="testimonials" className="bg-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who can’t afford downtime."
          description="A modern testimonial slider with premium motion and clean typography."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="p-8 sm:p-10">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: easeOut }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                      <Image src={current.image} alt={current.name} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-tight">{current.name}</div>
                      <div className="text-xs text-muted-foreground">{current.role}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-primary">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary" />
                    ))}
                  </div>

                  <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
                    “{current.quote}”
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>

          <div className="grid gap-4">
            <div className="aviation-card rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Controls
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((t, i) => (
                  <Button
                    key={t.name}
                    variant={i === index ? "default" : "outline"}
                    onClick={() => setIndex(i)}
                    className="justify-start"
                  >
                    {t.role}
                  </Button>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Auto-rotates every few seconds.
              </p>
            </div>
            <div className="aviation-card rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-tight">Premium support</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Dedicated specialists for RFQ intake, sourcing, compliance checks, and logistics coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
