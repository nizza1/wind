import { ContentType } from "./types";

const Content: ContentType = {
  HeroSection: {
    eyebrow: "◆ Fullstack Developer · Nürnberg, DE",
    titleLine1: "Building",
    titleLine2: "products that",
    titleLine3: "actually ship.",
    subtitle:
      "I work with startups and businesses — from first commit to production. I fix what needs fixing and solve real problems.",
    ctaPrimary: "Start a project →",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Fullstack"],
    availableBadge: "Available for projects",
  },
  StatsSection: {
    columns: [
      { label: "Design systems", sublabel: "Focus on reusability" },
      { label: "Clean code", sublabel: "Focus on problem solving" },
      { label: "Nürnberg · DE", sublabel: "Remote-ready worldwide" },
    ],
  },
  ServicesSection: {
    eyebrow: "What I do",
    cards: [
      {
        icon: "⬡",
        title: "Web & App Development",
        body: "I build production-ready applications — clean architecture, reusable components, and a focus on solving the actual problem. Not just making it work, but making it right.",
        featured: true,
      },
      {
        icon: "◈",
        title: "UI Engineering & Design Systems",
        body: "From design tokens to component libraries — I implement interfaces that are pixel-perfect, accessible, and built to scale across products.",
      },
      {
        icon: "◎",
        title: "AI Integration & Workflows",
        body: "I integrate AI APIs and automation workflows into products — from LLM-powered features to intelligent process automation.",
      },
      {
        icon: "⟁",
        title: "Consulting & Problem Solving",
        body: "Architecture decisions, code reviews, sprint support. I think in systems and deliver pragmatic solutions — whatever the codebase, whatever the problem.",
      },
    ],
  },
  AboutSection: {
    eyebrow: "About",
    name: "Hey, I'm Nizar.",
    paragraph1:
      "I'm a fullstack developer based in Nürnberg with a deep focus on JavaScript ecosystems. I build things that are fast, maintainable, and enjoyable to use — for end users and for the developers who come after me.",
    paragraph2:
      "I care about clean architecture, good decisions made early, and shipping on time. Whether you need a product built from scratch or a developer to strengthen your team — I bring both technical depth and a pragmatic mindset.",
    chips: ["JavaScript / TypeScript", "React & Next.js", "Node.js & APIs", "Headless CMS"],
  },
  StackSection: {
    eyebrow: "Tech stack",
    items: [
      "React", "Next.js", "TypeScript", "Node.js",
      "Tailwind CSS", "Framer Motion", "PostgreSQL", "Drizzle ORM",
      "Sanity", "Strapi", "Payload CMS", "Remix",
      "Stripe",
    ],
  },
  ContactSection: {
    headline: "Got a project in",
    headlineAccent: "mind?",
    subline:
      "Whether it's a new product, a redesign, or you need a developer on-call — let's talk.",
    cta: "Send a message →",
    form: {
      name: "Name",
      namePlaceholder: "e.g. Max",
      email: "Email",
      emailPlaceholder: "e.g. max@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project",
      submit: "Send message →",
    },
  },
};

export default Content;
