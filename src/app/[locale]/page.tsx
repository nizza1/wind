
import Hero from '../components/home/hero/hero'
import About from '../components/home/about/about';
import Service from '@/app/components/home/service/features';
import Skills from '../components/home/skills/skills';
import { Toaster } from "@/components/ui/sonner";
import contentDE from '@/app/content/home/HomeDE';
import contentEN from '@/app/content/home/HomeEN';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

//animation 



type Props = {
  params: Params,
}

export default function Home({ params }: Props) {

  const lang = params.locale
  const de = contentDE[0];
  const en = contentEN[0];

  const content = lang === 'de' ? de : en;

  const {
    HeroSection,
    ServiceSection,
    TechnologySection,
    AboutSection,
    ContactForm
  } = content;


  return (
    <main className=" min-h-screen">
      <Hero {...HeroSection} />
      <Service {...ServiceSection} />
      <Skills {...TechnologySection} />
      <About
        {...AboutSection}
        contactForm={ContactForm} />
      <Toaster />
    </main>
  );
}
