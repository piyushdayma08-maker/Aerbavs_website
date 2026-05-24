"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <Section>
      <div className="container">
        <Reveal className="rounded-3xl border border-border bg-muted p-10 shadow-sm sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Ready to partner?
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Partner with a trusted aviation trading leader.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Get a premium RFQ experience with verified sourcing, compliance-ready documentation, and global delivery options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button asChild size="default">
                <Link href="/contact">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="default" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
