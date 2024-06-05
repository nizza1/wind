import React from 'react'

import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiStrapi } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";



const Tech = () => {
  return (
    <div className='flex gap-2 text-5xl text-[var(--icons-light)] justify-center'>
       <FaReact />
       <SiFramer />
       <SiSanity />
       <FaNode />
       <SiPrisma />
       <SiMongodb />
       <BiLogoPostgresql />
       <SiStrapi />
       <SiTailwindcss />
    </div>
  )
}

export default Tech