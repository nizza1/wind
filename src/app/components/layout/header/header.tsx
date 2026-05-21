"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", hash: "services" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/" || /^\/[a-z]{2}\/?$/.test(pathname);

  const getNavHref = (hash: string) => {
    if (isHome) return `#${hash}`;
    const locale = pathname.match(/^\/([a-z]{2})\//)?.[1] ?? "en";
    return `/${locale}#${hash}`;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "border-b border-[var(--color-border)] backdrop-blur-[12px] bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)]"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link
              href="/"
              className="font-mona font-bold text-xl tracking-tight"
              aria-label="Home"
            >
              <span className="text-[var(--color-text)]">NI</span>
              <span className="text-[var(--color-accent)]">.</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.hash}
                  href={getNavHref(link.hash)}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150 font-mona"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-2">
              {/* <Language /> */}
              <a
                href={getNavHref("contact")}
                className="ml-2 inline-flex items-center h-8 px-4 rounded-[4px] bg-[var(--color-accent)] text-[var(--color-accent-text)] text-sm font-mona font-semibold hover:opacity-90 transition-opacity duration-150"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-5 h-[1.5px] bg-[var(--color-text)] block" />
              <span className="w-5 h-[1.5px] bg-[var(--color-text)] block" />
              <span className="w-3 h-[1.5px] bg-[var(--color-text)] block" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--color-bg)] flex flex-col">
          <div className="flex items-center justify-between h-14 px-5 border-b border-[var(--color-border)]">
            <Link
              href="/"
              className="font-mona font-bold text-xl tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-[var(--color-text)]">NI</span>
              <span className="text-[var(--color-accent)]">.</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={getNavHref(link.hash)}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-mona font-bold text-[var(--color-text)] py-3 border-b border-[var(--color-border)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 p-8 border-t border-[var(--color-border)]">
            {/* <Language /> */}
            <a
              href={getNavHref("contact")}
              onClick={() => setMobileOpen(false)}
              className="ml-auto inline-flex items-center h-9 px-5 rounded-[4px] bg-[var(--color-accent)] text-[var(--color-accent-text)] text-sm font-mona font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
