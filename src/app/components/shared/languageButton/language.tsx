"use client"

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Language: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const isGerman = path.startsWith("/de");
  const newPath = isGerman ? path.replace("/de", "/en") : `/de${path}`;
  const currentLang = isGerman ? "DE" : "EN";
  const targetLang = isGerman ? "EN" : "DE";

  return (
    <button
      onClick={() => router.push(newPath, { scroll: false })}
      className="flex items-center gap-1 h-8 px-3 rounded-sm border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)] transition-colors duration-200 font-raleway text-xs tracking-widest"
      aria-label={`Switch to ${targetLang}`}
    >
      <span className="text-[var(--color-text)]">{currentLang}</span>
      <span className="opacity-30">|</span>
      <span>{targetLang}</span>
    </button>
  );
};

export default Language;
