import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
  <span
    className={`inline-block font-raleway text-xs text-[var(--color-accent)] tracking-[0.1em] uppercase mb-4 ${className}`}
  >
    {children}
  </span>
);
