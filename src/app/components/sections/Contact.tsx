"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactSectionType } from "@/app/content/home/types";
import { Button } from "@/app/components/ui/Button";
import { fadeUpContainer, fadeUpItemSlow } from "./animations";

type FormState = "idle" | "submitting" | "success" | "error";

const Contact = ({ headline, headlineAccent, subline, cta, form }: ContactSectionType) => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof values>>({});

  const validate = () => {
    const e: Partial<typeof values> = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Valid email required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState("submitting");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ACTION_URL}/api/send`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json", accept: "application/json" },
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full h-10 px-3 rounded-[6px] border border-[var(--color-border)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150 font-mona";

  return (
    <section
      id="contact"
      className="relative"
      style={{ background: "rgba(200,255,0,0.02)" }}
    >
      <div className="max-w-[1100px] mx-auto px-5 py-20">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 max-w-[640px]"
        >
          <motion.h2
            variants={fadeUpItemSlow}
            className="font-mona font-extrabold text-[clamp(2rem,5vw,3rem)] text-[var(--color-text)] tracking-[-0.04em] leading-tight"
          >
            {headline}{" "}
            <em className="text-[var(--color-accent)] not-italic">{headlineAccent}</em>
          </motion.h2>

          <motion.p variants={fadeUpItemSlow} className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[50ch]">
            {subline}
          </motion.p>

          <motion.div variants={fadeUpItemSlow}>
            {!showForm && (
              <Button
                variant="accent"
                onClick={(e) => { e.preventDefault(); setShowForm(true); }}
                href="#contact"
              >
                {cta}
              </Button>
            )}
          </motion.div>

          {showForm && (
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 pt-2"
            >
              <div className="flex flex-col gap-1">
                <label className="font-raleway text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
                  {form.name}
                </label>
                <input
                  type="text"
                  placeholder={form.namePlaceholder}
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  className={inputClass}
                  autoComplete="name"
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-raleway text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
                  {form.email}
                </label>
                <input
                  type="email"
                  placeholder={form.emailPlaceholder}
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className={inputClass}
                  autoComplete="email"
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-raleway text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
                  {form.message}
                </label>
                <textarea
                  rows={5}
                  placeholder={form.messagePlaceholder}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  className={`${inputClass} h-auto resize-none py-2.5`}
                />
              </div>

              {formState === "success" ? (
                <p className="text-sm text-[var(--color-accent)] font-raleway">
                  ✓ Message sent. I&apos;ll be in touch soon.
                </p>
              ) : formState === "error" ? (
                <p className="text-sm text-red-400 font-raleway">
                  Something went wrong. Try again or email me directly.
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full h-10 rounded-[4px] bg-[var(--color-accent)] text-[var(--color-accent-text)] font-mona font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity duration-150"
                >
                  {formState === "submitting" ? "Sending…" : form.submit}
                </button>
              )}
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
