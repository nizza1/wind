"use client"

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/app/components/ui/SectionLabel";
import { ServicesSectionType, ServiceCardType } from "@/app/content/home/types";
import { fadeUpContainer, fadeUpItem } from "./animations";

const ServiceCard = ({ card }: { card: ServiceCardType }) => (
  <motion.div
    variants={fadeUpItem}
    className={`flex flex-col gap-4 p-6 rounded-[4px] bg-[var(--color-bg-card)] border transition-colors duration-200`}
    style={
      card.featured
        ? { borderColor: "rgba(200,255,0,0.4)" }
        : { borderColor: "var(--color-border)" }
    }
    whileHover={{
      borderColor: "rgba(200,255,0,0.25)",
      transition: { duration: 0.2 },
    }}
  >
    <span className="text-2xl text-[var(--color-accent)] leading-none">{card.icon}</span>
    <div>
      <h3 className="font-mona font-bold text-base text-[var(--color-text)] mb-2 tracking-[-0.02em]">
        {card.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-[1.65]">{card.body}</p>
    </div>
  </motion.div>
);

const Services = ({ eyebrow, cards }: ServicesSectionType) => (
  <section id="services" className="max-w-[1100px] mx-auto px-5 py-20">
    <SectionLabel>{eyebrow}</SectionLabel>
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {cards.map((card) => (
        <ServiceCard key={card.title} card={card} />
      ))}
    </motion.div>
  </section>
);

export default Services;
