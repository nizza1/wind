import React from "react";
import Link from "next/link";
import { Content as DE } from "@/app/content/layout/footer/footerDE";
import { Content as EN } from "@/app/content/layout/footer/footerEN";

type Props = {
  locale: string;
};

const Footer = ({ locale }: Props) => {
  const content = locale === "de" ? DE : EN;
  const { copyright, links } = content;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-[1100px] mx-auto px-5 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-raleway text-xs text-[var(--color-text-muted)] tracking-wide">
            {copyright}
          </span>
          <nav className="flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-raleway text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150 tracking-wide"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
