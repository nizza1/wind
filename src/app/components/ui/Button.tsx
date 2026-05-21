import React from "react";

type ButtonVariant = "accent" | "ghost";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  as?: "a" | "button";
}

const variantClasses: Record<ButtonVariant, string> = {
  accent:
    "bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:opacity-90",
  ghost:
    "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-text-muted)]",
};

export const Button = ({
  variant = "accent",
  children,
  className = "",
  ...props
}: ButtonProps) => (
  <a
    className={`inline-flex items-center justify-center h-10 px-5 rounded-[4px] text-sm font-mona font-semibold transition-all duration-150 cursor-pointer ${variantClasses[variant]} ${className}`}
    {...props}
  >
    {children}
  </a>
);
