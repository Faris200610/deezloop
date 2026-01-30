"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShieldCheck,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";
import type { BentoGridSection } from "@/types/site-config";

const iconMap: Record<string, LucideIcon> = {
  code_bracket: Code2,
  smartphone: Smartphone,
  shield_check: ShieldCheck,
  paint_brush: Paintbrush,
};

interface Props {
  section: BentoGridSection;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function BentoGrid({ section }: Props) {
  const { headline, items } = section;

  return (
    <section id="services" className="relative py-24 px-6 bg-background_secondary">
      <div className="glow-section absolute inset-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl sm:text-4xl text-center text-text_primary mb-16"
        >
          {headline}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {items.map((card, index) => {
            const Icon = iconMap[card.icon] ?? Code2;
            return (
              <motion.article
                key={index}
                variants={item}
                className={`rounded-2xl bg-white border border-border_color shadow-lg shadow-slate-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-accent_main/30 ${card.grid_span}`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent_main/10 flex items-center justify-center text-accent_main">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-text_primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-text_secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
