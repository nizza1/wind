"use client"

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/app/components/ui/SectionLabel";
import { Tag } from "@/app/components/ui/Tag";
import { Button } from "@/app/components/ui/Button";
import {
  ShowcaseProjectType,
  ShowcasePageCopyType,
  ShowcaseScreenshotType,
  ShowcaseBentoSize,
} from "@/app/content/showcase/types";
import { fadeUpContainer, fadeUpItem, fadeUpItemSlow } from "@/app/components/sections/animations";
import DemoAccess from "./DemoAccess";

// Bento spans on a 6-column grid. Each "band" of tiles sums to 6 columns
// (hero 4 + tall 2 · small 2×3 · wide 3×2), so the grid packs without holes.
const bentoSpan: Record<ShowcaseBentoSize, string> = {
  hero: "md:col-span-4 md:row-span-3",
  tall: "md:col-span-2 md:row-span-3",
  wide: "md:col-span-3 md:row-span-2",
  small: "md:col-span-2 md:row-span-2",
};

const bentoSizes: Record<ShowcaseBentoSize, string> = {
  hero: "(max-width: 768px) 100vw, 720px",
  tall: "(max-width: 768px) 50vw, 360px",
  wide: "(max-width: 768px) 50vw, 540px",
  small: "(max-width: 768px) 50vw, 360px",
};

const PlaceholderTile = ({ caption, soonLabel }: { caption: string; soonLabel: string }) => (
  <div
    className="absolute inset-0 flex flex-col items-center justify-center gap-2 m-2 rounded-[3px] border border-dashed border-[var(--color-border)] px-4 text-center"
    style={{ background: "rgba(200,255,0,0.02)" }}
  >
    <span className="text-xl text-[var(--color-accent)] leading-none">⬡</span>
    <span className="font-raleway text-[11px] text-[var(--color-text-muted)] tracking-wide uppercase">
      {soonLabel}
    </span>
    <span className="text-xs text-[var(--color-text-muted)] leading-[1.5]">{caption}</span>
  </div>
);

/**
 * One bento tile. Shows the desktop or mobile screenshot depending on the
 * variant, with the caption overlaid on a bottom gradient. Tiles without an
 * image (native app / storage / AI for now) render a labelled placeholder.
 */
const Screenshot = ({
  shot,
  soonLabel,
  variant,
}: {
  shot: ShowcaseScreenshotType;
  soonLabel: string;
  variant: "desktop" | "mobile";
}) => {
  const [failed, setFailed] = useState(false);
  const src = variant === "desktop" ? shot.srcDesktop : shot.srcMobile;

  return (
    <figure
      className={`group relative h-full w-full overflow-hidden rounded-[6px] border border-[color-mix(in_srgb,var(--color-text)_22%,transparent)] bg-[var(--color-bg-card)] transition-colors duration-200 hover:border-[rgba(200,255,0,0.45)] ${
        variant === "mobile" ? "aspect-[758/1640]" : ""
      }`}
    >
      {!src || failed ? (
        <PlaceholderTile caption={shot.caption} soonLabel={soonLabel} />
      ) : (
        <>
          <Image
            src={src}
            alt={shot.alt}
            fill
            sizes={variant === "mobile" ? "50vw" : bentoSizes[shot.size]}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
          />
          <figcaption
            className="absolute inset-x-0 bottom-0 px-3 pb-2.5 pt-10 text-xs text-white/85 leading-[1.5]"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent 100%)" }}
          >
            {shot.caption}
          </figcaption>
        </>
      )}
    </figure>
  );
};

type Props = {
  project: ShowcaseProjectType;
  copy: ShowcasePageCopyType;
};

const ProjectShowcase = ({ project, copy }: Props) => {
  const { labels } = copy;

  return (
    <article className="border-t border-[var(--color-border)]">
      {/* Header */}
      <section className="max-w-[1100px] mx-auto px-5 py-20">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUpItemSlow} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{project.year}</Tag>
              <Tag>{project.role}</Tag>
            </div>
            <h2 className="font-mona font-extrabold text-[clamp(2rem,5vw,3rem)] text-[var(--color-text)] tracking-[-0.04em] leading-tight">
              {project.name.split("-").slice(0, -1).join("-")}
              {project.name.includes("-") && "-"}
              <em className="text-[var(--color-accent)] not-italic">
                {project.name.split("-").at(-1)}
              </em>
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[62ch]">
              {project.tagline}
            </p>
          </motion.div>

          <motion.div variants={fadeUpItemSlow} className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button variant="accent" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {labels.liveApp}
              </Button>
            )}
            <span className="font-raleway text-xs text-[var(--color-text-muted)]">
              {labels.sourceLabel}: {project.sourceNote}
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionLabel>{labels.overview}</SectionLabel>
          <div className="flex flex-col gap-4 max-w-[68ch]">
            {project.intro.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUpItemSlow}
                className="text-sm text-[var(--color-text-muted)] leading-[1.75]"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Demo access */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[640px]"
        >
          <DemoAccess project={project.name} note={project.demo.note} copy={copy.demo} />
        </motion.div>
      </section>

      {/* Screenshots — desktop shots in a bento grid on md+, phone shots in a 2-col grid below */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <SectionLabel>{labels.screenshots}</SectionLabel>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden md:grid md:grid-cols-6 md:auto-rows-[96px] gap-5"
        >
          {project.screenshots.map((shot) => (
            <motion.div key={shot.caption} variants={fadeUpItem} className={bentoSpan[shot.size]}>
              <Screenshot shot={shot} soonLabel={labels.screenshotSoon} variant="desktop" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4 md:hidden"
        >
          {project.screenshots
            .filter((shot) => shot.srcMobile || !shot.srcDesktop)
            .map((shot) => (
              <motion.div key={shot.caption} variants={fadeUpItem}>
                <Screenshot shot={shot} soonLabel={labels.screenshotSoon} variant="mobile" />
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <SectionLabel>{labels.features}</SectionLabel>
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {project.features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpItem}
              className="flex flex-col gap-4 p-6 rounded-[4px] bg-[var(--color-bg-card)] border border-[var(--color-border)] transition-colors duration-200"
              whileHover={{ borderColor: "rgba(200,255,0,0.25)", transition: { duration: 0.2 } }}
            >
              <span className="text-2xl text-[var(--color-accent)] leading-none">{feature.icon}</span>
              <div>
                <h3 className="font-mona font-bold text-base text-[var(--color-text)] mb-2 tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.65]">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Engineering highlights */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <SectionLabel>{labels.highlights}</SectionLabel>
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col"
        >
          {project.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUpItemSlow}
              className="grid grid-cols-1 md:grid-cols-[40px_1fr] gap-2 md:gap-6 py-6 border-b border-[var(--color-border)] first:border-t"
            >
              <span className="font-raleway text-sm text-[var(--color-accent)] tabular-nums pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-mona font-bold text-base text-[var(--color-text)] tracking-[-0.02em]">
                  {h.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[68ch]">
                  {h.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tech stack */}
      <section className="max-w-[1100px] mx-auto px-5 pb-24">
        <SectionLabel>{labels.stack}</SectionLabel>
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col rounded-[4px] border border-[var(--color-border)] overflow-hidden"
        >
          {project.stack.map((row) => (
            <motion.div
              key={row.layer}
              variants={fadeUpItem}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 px-5 py-4 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-bg-card)]"
            >
              <span className="font-mona font-semibold text-sm text-[var(--color-text)]">
                {row.layer}
              </span>
              <span className="text-sm text-[var(--color-text-muted)] leading-[1.6]">{row.tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </article>
  );
};

export default ProjectShowcase;
