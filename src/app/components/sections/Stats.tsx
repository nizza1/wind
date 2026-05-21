"use client"

import React from "react";
import { motion } from "framer-motion";
import { StatsSectionType } from "@/app/content/home/types";

const Stats = ({ columns }: StatsSectionType) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="border-[var(--color-border)]"
    style={{ borderTopWidth: "0.5px", borderBottomWidth: "0.5px", borderTopStyle: "solid", borderBottomStyle: "solid" }}
  >
    <div className="max-w-[1100px] mx-auto px-5">
      <div className="grid grid-cols-3">
        {columns.map((col, i) => (
          <div
            key={i}
            className="py-6 px-4"
            style={i < 2 ? { borderRightWidth: "0.5px", borderRightStyle: "solid", borderRightColor: "var(--color-border)" } : undefined}
          >
            <p className="font-mona font-extrabold text-xl text-[var(--color-text)] leading-tight mb-1">
              {col.label}
            </p>
            <p className="font-raleway text-[11px] text-[var(--color-text-muted)] tracking-wide">
              {col.sublabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Stats;
