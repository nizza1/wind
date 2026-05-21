"use client"

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/app/components/ui/SectionLabel";
import { StackSectionType } from "@/app/content/home/types";
import { stackContainer, stackItem } from "./animations";

const Stack = ({ eyebrow, items }: StackSectionType) => (
  <section className="max-w-[1100px] mx-auto px-5 py-20">
    <SectionLabel>{eyebrow}</SectionLabel>
    <motion.div
      variants={stackContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-3"
    >
      {items.map((name, i) => (
        <motion.div
          key={name}
          variants={stackItem}
          className="flex flex-col gap-1 px-4 py-3 rounded-[4px] bg-[var(--color-bg-card)] border border-[var(--color-border)] transition-colors duration-200"
          whileHover={{
            borderColor: "rgba(200,255,0,0.25)",
            transition: { duration: 0.15 },
          }}
        >
          <span className="font-raleway text-[10px] text-[var(--color-text-muted)] tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-mona font-semibold text-sm text-[var(--color-text)]">{name}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Stack;
