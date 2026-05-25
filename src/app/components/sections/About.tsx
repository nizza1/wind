"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/app/components/ui/SectionLabel";
import { Tag } from "@/app/components/ui/Tag";
import { AboutSectionType } from "@/app/content/home/types";
import { fadeUpContainer, fadeUpItemSlow } from "./animations";

import myImg from "/public/portfolioImage.jpg";


const About = ({ eyebrow, name, paragraph1, paragraph2, chips }: AboutSectionType) => (
  <section id="about" className="max-w-[1100px] mx-auto px-5 py-20">
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-12 items-start"
    >
      {/* Photo strip */}
      <motion.div variants={fadeUpItemSlow}>
        <div className="overflow-hidden rounded-[4px] border border-[var(--color-border)] w-[110px] md:w-[160px]">
          <Image
            src={myImg}
            alt="Nizar"
            width={160}
            height={240}
            sizes="(max-width: 768px) 110px, 160px"
            className="w-full object-cover object-top block"
            style={{ filter: "grayscale(100%) contrast(1.05)" }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col gap-5">
        <motion.div variants={fadeUpItemSlow}>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="font-mona font-extrabold text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--color-text)] tracking-[-0.03em] leading-tight">
            {name.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="text-[var(--color-accent)] not-italic">
              {name.split(" ").at(-1)}
            </em>
          </h2>
        </motion.div>

        <motion.p variants={fadeUpItemSlow} className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[60ch]">
          {paragraph1}
        </motion.p>

        <motion.p variants={fadeUpItemSlow} className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[60ch]">
          {paragraph2}
        </motion.p>

        <motion.div variants={fadeUpItemSlow} className="flex flex-wrap gap-2 pt-1">
          {chips.map((chip) => (
            <Tag key={chip}>{chip}</Tag>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
