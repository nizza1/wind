/** Tile size in the bento grid on md+ screens. */
export type ShowcaseBentoSize = "hero" | "tall" | "wide" | "small";

export interface ShowcaseScreenshotType {
  /** Desktop screenshot (landscape), shown on md+ screens. Omit together with srcMobile for a placeholder tile. */
  srcDesktop?: string;
  /** Mobile screenshot (portrait), shown below md. Tiles without one are hidden on small screens unless they are placeholders. */
  srcMobile?: string;
  alt: string;
  caption: string;
  size: ShowcaseBentoSize;
}

export interface ShowcaseFeatureType {
  icon: string;
  title: string;
  body: string;
}

export interface ShowcaseHighlightType {
  title: string;
  body: string;
}

export interface ShowcaseStackRowType {
  layer: string;
  tech: string;
}

export interface ShowcaseDemoType {
  /** Credentials live in the backend email template — these are shown only as reference copy. */
  note: string;
}

export interface ShowcaseProjectType {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  intro: string[];
  liveUrl?: string;
  sourceNote: string;
  screenshots: ShowcaseScreenshotType[];
  features: ShowcaseFeatureType[];
  highlights: ShowcaseHighlightType[];
  stack: ShowcaseStackRowType[];
  demo: ShowcaseDemoType;
}

/** Compact teaser shown on the homepage, linking to /showcase. */
export interface ShowcaseTeaserType {
  eyebrow: string;
  label: string;
  name: string;
  tagline: string;
  tags: string[];
  cta: string;
  /** One or two (dark) screenshots layered next to the teaser text. */
  images: { src: string; alt: string }[];
  /** Optional portrait phone screenshot, skewed in over the layered shots. */
  phoneImage?: { src: string; alt: string };
}

/** Localized chrome for the /showcase page (labels + demo-form strings). */
export interface ShowcasePageCopyType {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  labels: {
    overview: string;
    screenshots: string;
    features: string;
    highlights: string;
    stack: string;
    liveApp: string;
    sourceLabel: string;
    screenshotSoon: string;
  };
  demo: {
    title: string;
    description: string;
    openButton: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    privacyNote: string;
  };
}

export interface ShowcaseContentType {
  teaser: ShowcaseTeaserType;
  page: ShowcasePageCopyType;
  projects: ShowcaseProjectType[];
}
