"use client";

import type {
  SectionConfig,
  SplitScreenHeroSection,
  CenteredStatementSection,
  BentoGridSection,
  MinimalCountersSection,
  SplitFormSection,
} from "@/types/site-config";
import { SplitScreenHero } from "./sections/SplitScreenHero";
import { CenteredStatement } from "./sections/CenteredStatement";
import { BentoGrid } from "./sections/BentoGrid";
import { MinimalCounters } from "./sections/MinimalCounters";
import { SplitForm } from "./sections/SplitForm";

interface SectionBuilderProps {
  sections: SectionConfig[];
}

function SectionRenderer({ section }: { section: SectionConfig }) {
  switch (section.type) {
    case "split_screen_hero":
      return <SplitScreenHero section={section as SplitScreenHeroSection} />;
    case "centered_statement":
      return <CenteredStatement section={section as CenteredStatementSection} />;
    case "bento_grid":
      return <BentoGrid section={section as BentoGridSection} />;
    case "minimal_counters":
      return <MinimalCounters section={section as MinimalCountersSection} />;
    case "split_form":
      return <SplitForm section={section as SplitFormSection} />;
    default:
      return null;
  }
}

export function SectionBuilder({ sections }: SectionBuilderProps) {
  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
