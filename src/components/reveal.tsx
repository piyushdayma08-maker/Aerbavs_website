"use client";

import { motion, type MotionProps, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

type RevealFrom = "bottom" | "top" | "left" | "right";

const hiddenMap: Record<RevealFrom, TargetAndTransition> = {
  bottom: { opacity: 0, y: 28 },
  top:    { opacity: 0, y: -28 },
  left:   { opacity: 0, x: -36 },
  right:  { opacity: 0, x:  36 },
};

const visibleMap: Record<RevealFrom, TargetAndTransition> = {
  bottom: { opacity: 1, y: 0 },
  top:    { opacity: 1, y: 0 },
  left:   { opacity: 1, x: 0 },
  right:  { opacity: 1, x: 0 },
};

export function Reveal({
  className,
  children,
  delay = 0,
  from = "bottom",
  blur = false,
  duration = 0.65,
  ...props
}: MotionProps & {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  from?: RevealFrom;
  blur?: boolean;
  duration?: number;
}) {
  const initial: TargetAndTransition = blur
    ? { ...hiddenMap[from], filter: "blur(6px)" }
    : hiddenMap[from];

  const animate: TargetAndTransition = blur
    ? { ...visibleMap[from], filter: "blur(0px)" }
    : visibleMap[from];

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, ease: easeOut, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
