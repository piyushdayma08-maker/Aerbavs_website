"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function format(value: number, formatter?: Intl.NumberFormat) {
  return formatter ? formatter.format(value) : value.toLocaleString();
}

export function AnimatedNumber({
  value,
  durationMs = 900,
  className,
  formatter,
}: {
  value: number;
  durationMs?: number;
  className?: string;
  formatter?: Intl.NumberFormat;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const nf = useMemo(() => formatter, [formatter]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = value;

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, inView, value]);

  return (
    <span ref={ref} className={className}>
      {format(Math.round(current), nf)}
    </span>
  );
}

