"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { SplitFormSection } from "@/types/site-config";

interface Props {
  section: SplitFormSection;
}

const SUCCESS_MESSAGE =
  "شكراً لك، تم استلام رسالتك وسنتواصل معك قريباً";

export function SplitForm({ section }: Props) {
  const { content } = section;
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "contact");

    setSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(formData.entries()) as [string, string][]
        ).toString(),
      });
      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSubmitting(false);
      }
    } catch {
      setSubmitting(false);
    }
  }

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

        {success ? (
          <div
            className="rounded-xl bg-accent_main/10 border border-accent_main/30 text-accent_main px-6 py-8 text-center font-heading font-bold text-lg"
            role="status"
          >
            {SUCCESS_MESSAGE}
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            onSubmit={handleSubmit}
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
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors disabled:opacity-60"
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors disabled:opacity-60"
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
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border_color text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-accent_main focus:ring-2 focus:ring-accent_main/20 transition-colors disabled:opacity-60"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg bg-accent_main text-white font-semibold hover:bg-accent_hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "جاري الإرسال..." : content.button_text}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
