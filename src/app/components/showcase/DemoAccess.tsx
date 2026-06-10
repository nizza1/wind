"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { ShowcasePageCopyType } from "@/app/content/showcase/types";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  /** Project name, sent with the request so the backend knows which demo to mail. */
  project: string;
  /** Short note describing what the demo workspace contains. */
  note: string;
  copy: ShowcasePageCopyType["demo"];
};

const inputClass =
  "w-full h-10 px-3 rounded-[6px] border border-[var(--color-border)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150 font-mona";

/**
 * Demo-access form. The visitor enters their email; the external /api/send service
 * (the same endpoint the contact form uses) handles the demo flow — emailing the
 * credentials to the visitor and notifying the site owner. Credentials are never
 * shipped in this bundle; they live in the backend email template.
 */
const DemoAccess = ({ project, note, copy }: Props) => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(copy.emailLabel);
      return;
    }
    setError(null);
    setFormState("submitting");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ACTION_URL}/api/send`, {
        method: "POST",
        body: JSON.stringify({ type: "demo", email, project }),
        headers: { "content-type": "application/json", accept: "application/json" },
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 sm:p-7 rounded-[4px] bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="flex flex-col gap-2">
        <h3 className="font-mona font-bold text-base text-[var(--color-text)] tracking-[-0.02em]">
          {copy.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-[1.65] max-w-[52ch]">
          {copy.description}
        </p>
        <p className="text-xs text-[var(--color-text-muted)] leading-[1.6] max-w-[52ch] italic">
          {note}
        </p>
      </div>

      {!showForm && (
        <div>
          <Button
            variant="accent"
            onClick={(e) => {
              e.preventDefault();
              setShowForm(true);
            }}
          >
            {copy.openButton}
          </Button>
        </div>
      )}

      {showForm && formState !== "success" && (
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 pt-1"
        >
          <div className="flex flex-col gap-1">
            <label className="font-raleway text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
              {copy.emailLabel}
            </label>
            <input
              type="email"
              placeholder={copy.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              autoComplete="email"
            />
            {error && <span className="text-xs text-red-400">{error}</span>}
          </div>

          {formState === "error" ? (
            <p className="text-sm text-red-400 font-raleway">{copy.error}</p>
          ) : (
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full h-10 rounded-[4px] bg-[var(--color-accent)] text-[var(--color-accent-text)] font-mona font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity duration-150"
            >
              {formState === "submitting" ? copy.submitting : copy.submit}
            </button>
          )}

          <p className="font-raleway text-[11px] text-[var(--color-text-muted)]">
            {copy.privacyNote}
          </p>
        </motion.form>
      )}

      {formState === "success" && (
        <p className="text-sm text-[var(--color-accent)] font-raleway pt-1">✓ {copy.success}</p>
      )}
    </div>
  );
};

export default DemoAccess;
