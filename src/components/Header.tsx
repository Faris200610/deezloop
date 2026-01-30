"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/types/site-config";

interface Props {
  config: SiteConfig;
}

export function Header({ config }: Props) {
  const { navigation } = config;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border_color bg-white/95 backdrop-blur-lg"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2 shrink-0 flex-row-reverse"
          aria-label="Dezloop - الصفحة الرئيسية"
        >
          <Image
            src="/dezloop.png"
            alt=""
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="font-heading font-bold text-xl text-text_primary whitespace-nowrap">
            Dezloop
          </span>
        </Link>
        <ul className="flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  item.is_cta
                    ? "px-4 py-2 rounded-lg bg-accent_main text-white font-semibold hover:bg-accent_hover transition-colors"
                    : "text-text_primary hover:text-accent_main transition-colors"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
