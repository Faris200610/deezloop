"use client";

import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/types/site-config";

interface Props {
  config: SiteConfig;
}

export function Footer({ config }: Props) {
  const { footer } = config;

  return (
    <footer className="border-t border-border_color/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <Link
          href="#hero"
          className="flex items-center gap-2 justify-center sm:justify-start w-fit flex-row-reverse"
          aria-label="Dezloop - الصفحة الرئيسية"
        >
          <Image
            src="/dezloop.png"
            alt=""
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
          <span className="font-heading font-bold text-2xl text-text_primary whitespace-nowrap">
            Dezloop
          </span>
        </Link>
        <p className="text-text_secondary text-sm text-center sm:text-start">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
