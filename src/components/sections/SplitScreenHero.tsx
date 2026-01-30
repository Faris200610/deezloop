"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundWaves } from "@/components/BackgroundWaves";
import type { SplitScreenHeroSection } from "@/types/site-config";

interface Props {
  section: SplitScreenHeroSection;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SplitScreenHero({ section }: Props) {
  const { content } = section;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 py-24 overflow-hidden"
    >
      <BackgroundWaves />
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(37, 99, 235, 0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(37, 99, 235, 0.04) 0%, transparent 50%)",
        }}
      />
      <div className="glow-section absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 max-w-xl lg:max-w-2xl w-full"
      >
        <motion.h1
          variants={item}
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-900 mb-6"
        >
          {content.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-text_secondary text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
        >
          {content.subheadline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Link
            href={content.cta_primary.link}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent_main text-white font-semibold hover:bg-accent_hover transition-colors"
          >
            {content.cta_primary.text}
          </Link>
          <Link
            href={content.cta_secondary.link}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border_color text-text_primary hover:border-accent_main hover:bg-background_secondary transition-colors"
          >
            {content.cta_secondary.text}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 flex-1 max-w-lg w-full flex justify-center"
      >
        <div className="w-full min-h-[240px] overflow-hidden rounded-2xl border border-slate-100 shadow-2xl shadow-blue-900/10 bg-slate-50">
          <video
            src="/dezloop-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto min-h-[200px] rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
