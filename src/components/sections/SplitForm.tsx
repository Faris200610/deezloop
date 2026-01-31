"use client";

import { motion } from "framer-motion";
import type { SplitFormSection } from "@/types/site-config";

interface Props {
  section: SplitFormSection;
}

/**
 * Netlify Forms: إرسال عادي (بدون fetch) لتجنب 404.
 * النموذج يرسل إلى "/" و Netlify يعالجه ثم إعادة التوجيه إلى /thank-you.
 * في Netlify Dashboard: Form "contact" → Post-submit redirect → /thank-you
 */
export function SplitForm({ section }: Props) {
  const { content } = section;

  return (
    <section id="contact" className="relative py-24 px-6 bg-background_secondary">
      <div className="glow-section absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text_primary mb-4">
          {content.headline}
        </h2>
        <p className="text-text_secondary mb-10">{content.subheadline}</p>

        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          {content.form_fields.map((field) => (
            <div key={field.name}>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.type === "email"}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent_main text-white font-semibold hover:bg-accent_hover transition-colors"
          >
            {content.button_text}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
