"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { Tag } from "@/app/components/ui/Tag";
import { HeroSectionType } from "@/app/content/home/types";
import { fadeUpContainer, fadeUpItem } from "./animations";
import myImg from "/public/me.jpg";

const Hero = (props: HeroSectionType) => {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    titleLine3,
    subtitle,
    ctaPrimary,
    tags,
    availableBadge,
  } = props;

  return (
    <section className="max-w-[1100px] mx-auto px-5 py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-16 items-start">

        {/* Left column */}
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          <motion.p
            variants={fadeUpItem}
            className="font-raleway text-xs text-[var(--color-accent)] tracking-[0.1em] uppercase"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUpItem}
            className="font-mona font-extrabold text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.04em] text-[var(--color-text)]"
          >
            {titleLine1}{" "}
            <em className="text-[var(--color-accent)] not-italic">{titleLine2.trim()}</em>{" "}
            {titleLine3}
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[46ch]"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-3 pt-1">
            <Button variant="accent" href="#contact">{ctaPrimary}</Button>
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative hidden md:block w-full"
        >
          {/* Available badge — hidden on mobile (no room), visible on desktop */}
          <div className="hidden md:flex absolute top-3 right-3 z-10 items-center gap-1.5 px-2.5 py-1 rounded-[4px] border border-[var(--color-accent)] bg-[var(--color-bg-card)] font-raleway text-[10px] text-[var(--color-text)] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
            {availableBadge}
          </div>

          {/* Photo */}
          <div className="relative overflow-hidden rounded-[4px]">
            <Image
              src={myImg}
              alt="Nizar — Fullstack Developer"
              width={260}
              height={347}
              sizes="(max-width: 768px) 120px, 260px"
              className="w-full object-cover object-top block"
              style={{ filter: "grayscale(15%) contrast(1.05)" }}
              priority
            />
            {/* Bottom gradient overlay */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
              style={{
                background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
