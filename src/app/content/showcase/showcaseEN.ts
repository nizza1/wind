import { ShowcaseContentType } from "./types";
import clockM from "./clockM";

const ShowcaseEN: ShowcaseContentType = {
  teaser: {
    eyebrow: "Latest project",
    label: "Featured build",
    name: "Clock-M",
    tagline:
      "A multi-tenant SaaS platform for time tracking & team management — built end-to-end, from database to mobile app.",
    tags: ["SaaS", "Full-stack", "Multi-tenant", "React Native", "Stripe"],
    cta: "View case study →",
    images: [
      { src: "/showcase/clock-m/des/home-dark-des.png", alt: "Clock-M dashboard with live timer" },
      { src: "/showcase/clock-m/des/report-des.png", alt: "Clock-M monthly report" },
    ],
    phoneImage: {
      src: "/showcase/clock-m/rn-ai/native-app.png",
      alt: "Clock-M React Native companion app",
    },
  },
  page: {
    eyebrow: "Showcase",
    heading: "Selected",
    headingAccent: "work.",
    intro:
      "A closer look at things I’ve built end-to-end. More case studies coming soon.",
    labels: {
      overview: "Overview",
      screenshots: "Screenshots",
      features: "What it does",
      highlights: "Engineering highlights",
      stack: "Tech stack",
      liveApp: "Live app ↗",
      sourceLabel: "Source",
      screenshotSoon: "Screenshot coming soon",
    },
    demo: {
      title: "Try the live demo",
      description:
        "No signup needed — enter your email and I’ll send you a ready-to-use demo login for a fully populated team workspace.",
      openButton: "Email me the demo login →",
      emailLabel: "Your email",
      emailPlaceholder: "e.g. you@example.com",
      submit: "Send me the login →",
      submitting: "Sending…",
      success: "Check your inbox — the demo login is on its way.",
      error: "Something went wrong. Try again, or reach me via the contact form.",
      privacyNote: "I only use your email to send the demo login.",
    },
  },
  projects: [clockM],
};

export default ShowcaseEN;
