import { ContentType } from "./types";

const Content: ContentType = {
  HeroSection: {
    eyebrow: "◆ Fullstack Developer · Nürnberg, DE",
    titleLine1: "Produkte",
    titleLine2: "bauen, die",
    titleLine3: "wirklich liefern.",
    subtitle:
      "Ich arbeite mit Startups und Unternehmen — vom ersten Commit bis zur Produktion. Ich löse echte Probleme und liefere zuverlässig.",
    ctaPrimary: "Projekt starten →",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Fullstack"],
    availableBadge: "Verfügbar für Projekte",
  },
  StatsSection: {
    columns: [
      { label: "Design Systems", sublabel: "Fokus auf Wiederverwendbarkeit" },
      { label: "Sauberer Code", sublabel: "Fokus auf Problemlösung" },
      { label: "Nürnberg · DE", sublabel: "Remote weltweit verfügbar" },
    ],
  },
  ServicesSection: {
    eyebrow: "Was ich tue",
    cards: [
      {
        icon: "⬡",
        title: "Web- & App-Entwicklung",
        body: "Ich baue produktionsreife Anwendungen — saubere Architektur, wiederverwendbare Komponenten und ein Fokus auf das eigentliche Problem. Nicht nur zum Laufen bringen, sondern richtig machen.",
        featured: true,
      },
      {
        icon: "◈",
        title: "UI Engineering & Design Systems",
        body: "Von Design-Tokens bis zu Komponentenbibliotheken — ich implementiere Interfaces, die pixelgenau, zugänglich und skalierbar sind.",
      },
      {
        icon: "◎",
        title: "KI-Integration & Workflows",
        body: "Ich integriere KI-APIs und Automatisierungsworkflows in Produkte — von LLM-gestützten Features bis zur intelligenten Prozessautomatisierung.",
      },
      {
        icon: "⟁",
        title: "Beratung & Problemlösung",
        body: "Architekturentscheidungen, Code-Reviews, Sprint-Support. Ich denke in Systemen und liefere pragmatische Lösungen — egal welche Codebase, egal welches Problem.",
      },
    ],
  },
  AboutSection: {
    eyebrow: "Über mich",
    name: "Hallo, ich bin Nizar.",
    paragraph1:
      "Ich bin ein Fullstack-Entwickler aus Nürnberg mit einem tiefen Fokus auf JavaScript-Ökosysteme. Ich baue Dinge, die schnell, wartbar und angenehm zu bedienen sind — für Endnutzer und für Entwickler, die nach mir kommen.",
    paragraph2:
      "Mir liegen saubere Architektur, frühe gute Entscheidungen und pünktliche Lieferung am Herzen. Ob ein Produkt von Grund auf oder ein Entwickler zur Teamverstärkung — ich bringe technische Tiefe und pragmatisches Denken mit.",
    chips: ["JavaScript / TypeScript", "React & Next.js", "Node.js & APIs", "Headless CMS"],
  },
  StackSection: {
    eyebrow: "Tech Stack",
    items: [
      "React", "Next.js", "TypeScript", "Node.js",
      "Tailwind CSS", "Framer Motion", "PostgreSQL", "Drizzle ORM",
      "Sanity", "Strapi", "Payload CMS", "Remix",
      "Stripe",
    ],
  },
  ContactSection: {
    headline: "Haben Sie ein Projekt im",
    headlineAccent: "Sinn?",
    subline:
      "Ob neues Produkt, Redesign oder ein Entwickler auf Abruf — lassen Sie uns sprechen.",
    cta: "Nachricht senden →",
    form: {
      name: "Name",
      namePlaceholder: "z.B. Max",
      email: "E-Mail",
      emailPlaceholder: "z.B. max@beispiel.de",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt",
      submit: "Nachricht senden →",
    },
  },
};

export default Content;
