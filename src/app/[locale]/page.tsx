import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import contentDE from "@/app/content/home/HomeDE";
import contentEN from "@/app/content/home/HomeEN";
import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import Services from "@/app/components/sections/Services";
import About from "@/app/components/sections/About";
import Stack from "@/app/components/sections/Stack";
import Contact from "@/app/components/sections/Contact";

type Props = {
  params: Params;
};

export default function Home({ params }: Props) {
  const content = params.locale === "de" ? contentDE : contentEN;

  const {
    HeroSection,
    StatsSection,
    ServicesSection,
    AboutSection,
    StackSection,
    ContactSection,
  } = content;

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <Hero {...HeroSection} />
      <Stats {...StatsSection} />
      <Services {...ServicesSection} />
      <About {...AboutSection} />
      <Stack {...StackSection} />
      <Contact {...ContactSection} />
    </main>
  );
}
