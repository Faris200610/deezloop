"use client";

import { motion } from "framer-motion";
import type { CenteredStatementSection } from "@/types/site-config";

interface Props {
  section: CenteredStatementSection;
}

function buildHighlightedParts(
  text: string,
  highlightedWords: string[]
): Array<{ text: string; highlight: boolean }> {
  const parts: Array<{ text: string; highlight: boolean }> = [];
  let remaining = text;
  const sortedWords = [...highlightedWords].sort((a, b) => b.length - a.length);

  while (remaining.length > 0) {
    let found = false;
    for (const word of sortedWords) {
      const idx = remaining.indexOf(word);
      if (idx !== -1) {
        if (idx > 0) {
          parts.push({ text: remaining.slice(0, idx), highlight: false });
        }
        parts.push({ text: word, highlight: true });
        remaining = remaining.slice(idx + word.length);
        found = true;
        break;
      }
    }
    if (!found) {
      parts.push({ text: remaining, highlight: false });
      break;
    }
  }
  return parts;
}

export function CenteredStatement({ section }: Props) {
  const { content } = section;
  const parts = buildHighlightedParts(content.text, content.highlighted_words);

  return (
    <section className="relative py-24 px-6">
      <div className="glow-section absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-text_primary">
          {parts.map((part, i) =>
            part.highlight ? (
              <span key={i} className="text-accent_main font-heading font-bold">
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>
      </motion.div>
    </section>
  );
}
