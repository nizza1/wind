
import { FaReact, FaWordpress, FaNode } from "react-icons/fa";
import { SiFramer, SiSanity, SiPrisma, SiMongodb, SiStrapi, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPayloadcms } from "react-icons/si";
import { IconType } from "react-icons";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";



export interface CardData {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
}

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "React",
    description: "A JavaScript library for building user interfaces",
    Icon: FaReact,
  },
  {
    id: 2,
    title: "Next.js",
    description: "The React framework for production",
    Icon: TbBrandNextjs,
  },
  {
    id: 3,
    title: "Firebase",
    description: "The world's most advanced open source relational database",
    Icon: IoLogoFirebase,
  },
  {
    id: 4,
    title: "TypeScript",
    description: "ts",
    Icon: SiTypescript
  },
  {
    id: 5,
    title: "MongoDB",
    description: "A document database with scalability, flexibility, querying, and indexing",
    Icon: SiMongodb,
  },
  {
    id: 6,
    title: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    Icon: SiPrisma,
  },
  {
    id: 7,
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for building any design directly in markup",
    Icon: SiTailwindcss,
  },
  {
    id: 8,
    title: "Sanity",
    description: "The unified content platform for better digital experiences",
    Icon: SiSanity,
  },
  {
    id: 9,
    title: "Strapi",
    description: "Open-source headless CMS. Fully customizable and developer-first",
    Icon: SiStrapi,
  },
  {
    id: 10,
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    Icon: FaNode,
  },
  {
    id: 11,
    title: "Payload",
    description: "Developer first-CMS",
    Icon: SiPayloadcms,
  },


  {
    id: 12,
    title: "Framer Motion",
    description: "A production-ready motion library for React",
    Icon: SiFramer,
  },


];
