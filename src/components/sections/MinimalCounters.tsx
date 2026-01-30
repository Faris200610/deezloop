"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { MinimalCountersSection } from "@/types/site-config";

interface Props {
  section: MinimalCountersSection;
}

/** Parse value string like "120+", "85", "1M+", "5" into number + suffix */
function parseCounterValue(value: string): { end: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { end: 0, suffix: value };
  const num = parseInt(match[1], 10);
  const suffix = match[2] ?? "";
  return { end: num, suffix };
}

/** Ease-out cubic for smooth count-up */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const DURATION_MS = 2000;

function AnimatedCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { end, suffix } = parseCounterValue(value);

  useEffect(() => {
    if (!isInView || end === 0 || hasAnimated) return;
    setHasAnimated(true);
    const startTime = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * end);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, end, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function MinimalCounters({ section }: Props) {
  const { items } = section;

  return (
    <section className="relative py-24 px-6 border-t border-border_color/50">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {items.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center"
            >
              <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-accent_main mb-2">
                <AnimatedCounter
                  value={stat.value}
                  className="tabular-nums"
                />
              </p>
              <p className="text-text_secondary text-sm lg:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
