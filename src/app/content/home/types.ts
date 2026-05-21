export interface HeroSectionType {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  subtitle: string;
  ctaPrimary: string;
  tags: string[];
  availableBadge: string;
}

export interface StatColumnType {
  label: string;
  sublabel: string;
}

export interface StatsSectionType {
  columns: [StatColumnType, StatColumnType, StatColumnType];
}

export interface ServiceCardType {
  icon: string;
  title: string;
  body: string;
  featured?: boolean;
}

export interface ServicesSectionType {
  eyebrow: string;
  cards: [ServiceCardType, ServiceCardType, ServiceCardType, ServiceCardType];
}

export interface AboutSectionType {
  eyebrow: string;
  name: string;
  paragraph1: string;
  paragraph2: string;
  chips: string[];
}

export interface StackSectionType {
  eyebrow: string;
  items: string[];
}

export interface ContactFormFields {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
}

export interface ContactSectionType {
  headline: string;
  headlineAccent: string;
  subline: string;
  cta: string;
  form: ContactFormFields;
}

export interface ContentType {
  HeroSection: HeroSectionType;
  StatsSection: StatsSectionType;
  ServicesSection: ServicesSectionType;
  AboutSection: AboutSectionType;
  StackSection: StackSectionType;
  ContactSection: ContactSectionType;
}
