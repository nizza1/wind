"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/app/components/ui/SectionLabel";
import { Tag } from "@/app/components/ui/Tag";
import { Button } from "@/app/components/ui/Button";
import { ShowcaseTeaserType } from "@/app/content/showcase/types";
import { fadeUpContainer, fadeUpItemSlow } from "./animations";

type Props = ShowcaseTeaserType & { locale: string };

const LatestProject = ({ eyebrow, label, name, tagline, tags, cta, images, phoneImage, locale }: Props) => (
  <section id="work" className="max-w-[1100px] mx-auto px-5 py-20">
    <SectionLabel>{eyebrow}</SectionLabel>
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        variants={fadeUpItemSlow}
        className="grid grid-cols-1 md:grid-cols-[1fr_minmax(300px,420px)] gap-8 md:gap-10 items-center p-7 sm:p-8 rounded-[4px] bg-[var(--color-bg-card)] border border-[var(--color-border)] transition-colors duration-200"
        whileHover={{ borderColor: "rgba(200,255,0,0.25)", transition: { duration: 0.2 } }}
      >
        {/* Text */}
        <div className="flex flex-col gap-5">
          <span className="font-raleway text-[11px] text-[var(--color-text-muted)] tracking-[0.1em] uppercase">
            {label}
          </span>

          <div className="flex flex-col gap-3">
            <h3 className="font-mona font-extrabold text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--color-text)] tracking-[-0.03em] leading-tight">
              {name.split("-").slice(0, -1).join("-")}
              {name.includes("-") && "-"}
              <em className="text-[var(--color-accent)] not-italic">{name.split("-").at(-1)}</em>
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[58ch]">
              {tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="pt-1">
            <Button variant="accent" href={locale === "de" ? "/de/showcase" : "/showcase"}>
              {cta}
            </Button>
          </div>
        </div>

        {/* Layered screenshots — desktop shots stacked, with the phone app skewed in on top */}
        {images.length > 0 && (
          <div
            className="relative rounded-[8px] p-5 sm:p-6 pb-12 overflow-hidden border border-[color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            style={{
              background:
                "radial-gradient(120% 120% at 80% 0%, rgba(200,255,0,0.10), rgba(200,255,0,0.02) 55%, transparent 80%), var(--color-bg)",
            }}
          >
            <div className={`relative ${images[1] ? "pb-10 pl-6" : ""} ${phoneImage ? "pr-10" : ""}`}>
              <div className="relative aspect-[2940/1912] overflow-hidden rounded-[6px] border border-[color-mix(in_srgb,var(--color-text)_22%,transparent)]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
              {images[1] && (
                <div className="absolute bottom-0 left-0 w-[52%] aspect-[2940/1912] overflow-hidden rounded-[6px] border border-[color-mix(in_srgb,var(--color-text)_22%,transparent)] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    sizes="(max-width: 768px) 60vw, 220px"
                    className="object-cover object-top"
                  />
                </div>
              )}
              {phoneImage && (
                <div
                  className="absolute -bottom-6 right-0 w-[26%] aspect-[758/1640] overflow-hidden rounded-[10px] border-2 border-[color-mix(in_srgb,var(--color-text)_28%,transparent)] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <Image
                    src={phoneImage.src}
                    alt={phoneImage.alt}
                    fill
                    sizes="(max-width: 768px) 28vw, 120px"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  </section>
);

export default LatestProject;
