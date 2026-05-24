"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";
import { stagger, fadeUp, scaleUp, easeOut, easeExpo } from "@/lib/motion";

type Stat = { label: string; value: number; suffix: string };

type AchievementsContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
};

const DEFAULT_STATS: Stat[] = [
  { label: "Years of experience",  value: 18,   suffix: "+" },
  { label: "Countries served",     value: 42,   suffix: "+" },
  { label: "Aviation projects",    value: 1250, suffix: "+" },
  { label: "Global clients",       value: 320,  suffix: "+" },
];

const STAT_ACCENTS = [
  { bar: "from-[#3B82F6] to-[#2563EB]", glow: "rgba(59,130,246,0.18)"  },
  { bar: "from-[#FF7A3D] to-[#E55A1C]", glow: "rgba(255,122,61,0.18)"  },
  { bar: "from-[#6366F1] to-[#4F46E5]", glow: "rgba(99,102,241,0.18)"  },
  { bar: "from-[#14B8A6] to-[#0D9488]", glow: "rgba(20,184,166,0.18)"  },
];

export function AchievementsSection({ content }: { content?: AchievementsContent }) {
  const eyebrow     = content?.eyebrow     ?? "Our Achievements";
  const title       = content?.title       ?? "Measured outcomes, delivered consistently.";
  const description = content?.description ?? "Over 18 years of aviation supply excellence, measured in verified results, trusted relationships, and consistent global execution.";
  const stats       = content?.stats?.length ? content.stats : DEFAULT_STATS;

  return (
    <Section id="achievements" className="bg-[#070F24]">
      <div className="container">

        {/* Header */}
        <Reveal className="text-center" blur>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-[38px]">
            {title}
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#FF7A3D] to-[#FF9F6B]" />
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-white/55">
            {description}
          </p>
        </Reveal>

        {/* Stat cards */}
        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {stats.map((s, idx) => {
            const accent = STAT_ACCENTS[idx % STAT_ACCENTS.length];
            return (
              <motion.div
                key={s.label}
                variants={scaleUp}
                transition={{ duration: 0.65, ease: easeExpo, delay: idx * 0.08 }}
              >
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7"
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.09)",
                    boxShadow: `0 20px 50px ${accent.glow}`,
                  }}
                  transition={{ duration: 0.30, ease: easeOut }}
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.bar}`} />

                  {/* Subtle background bloom on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${accent.glow} 0%, transparent 65%)` }}
                  />

                  <div className="relative">
                    <div className="text-4xl font-bold tabular-nums tracking-tight text-white">
                      <AnimatedNumber value={s.value} durationMs={1100} />
                      <span className="text-[#FF7A3D]">{s.suffix}</span>
                    </div>
                    <div className="mt-3 text-sm font-medium text-white/60">{s.label}</div>
                    <div className="mt-5 h-px w-full bg-white/8" />
                    <p className="mt-4 text-[12px] text-white/35">Verified · Consistent · Global</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </Section>
  );
}
