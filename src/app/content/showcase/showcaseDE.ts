import { ShowcaseContentType } from "./types";
import clockM from "./clockM";

const ShowcaseDE: ShowcaseContentType = {
  teaser: {
    eyebrow: "Aktuelles Projekt",
    label: "Featured Build",
    name: "Clock-M",
    tagline:
      "Eine Multi-Tenant-SaaS-Plattform für Zeiterfassung & Teamverwaltung — komplett selbst gebaut, von der Datenbank bis zur Mobile-App.",
    tags: ["SaaS", "Full-Stack", "Multi-Tenant", "React Native", "Stripe"],
    cta: "Case Study ansehen →",
    images: [
      { src: "/showcase/clock-m/des/home-dark-des.png", alt: "Clock-M Dashboard mit Live-Timer" },
      { src: "/showcase/clock-m/des/report-des.png", alt: "Clock-M Monatsbericht" },
    ],
    phoneImage: {
      src: "/showcase/clock-m/rn-ai/native-app.png",
      alt: "Clock-M React-Native-Companion-App",
    },
  },
  page: {
    eyebrow: "Showcase",
    heading: "Ausgewählte",
    headingAccent: "Projekte.",
    intro:
      "Ein genauerer Blick auf Dinge, die ich von A bis Z gebaut habe. Weitere Case Studies folgen in Kürze.",
    labels: {
      overview: "Überblick",
      screenshots: "Screenshots",
      features: "Was es kann",
      highlights: "Engineering-Highlights",
      stack: "Tech-Stack",
      liveApp: "Live-App ↗",
      sourceLabel: "Quellcode",
      screenshotSoon: "Screenshot folgt in Kürze",
    },
    demo: {
      title: "Live-Demo testen",
      description:
        "Keine Registrierung nötig — gib deine E-Mail ein und ich schicke dir einen fertigen Demo-Zugang zu einem voll gefüllten Team-Workspace.",
      openButton: "Demo-Zugang per E-Mail →",
      emailLabel: "Deine E-Mail",
      emailPlaceholder: "z. B. du@beispiel.de",
      submit: "Zugang schicken →",
      submitting: "Wird gesendet…",
      success: "Schau in dein Postfach — der Demo-Zugang ist unterwegs.",
      error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder über das Kontaktformular melden.",
      privacyNote: "Ich nutze deine E-Mail ausschließlich, um dir den Demo-Zugang zu schicken.",
    },
  },
  projects: [clockM],
};

export default ShowcaseDE;
