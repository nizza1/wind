import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className = "" }: TagProps) => (
  <span
    className={`inline-flex items-center h-6 px-2.5 rounded-[3px] border border-[var(--color-border)] font-raleway text-[11px] text-[var(--color-text-muted)] tracking-wide ${className}`}
  >
    {children}
  </span>
);
