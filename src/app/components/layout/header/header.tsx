"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import ThemeToggle from '@/app/components/global/themeToggle/themeToggle';
import Language from '@/app/components/global/languageButton/language';
import { IoLogoGithub } from "react-icons/io";



const Header = () => {

  const [scrolled, setScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 10) {

        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <header className={`${scrolled ? '' : 'border-transparent'} backdrop-blur-2xl  border-b-[1px] sticky top-0 left-0 right-0 z-50 duration-200	ease-in-out`} >
      <div className='max-w-[var(--max-width)] mx-auto px-5 rounded-full'>
        <div className='flex justify-between items-center py-4'>

          <div className='text-4xl flex gap-3 items-center'>
            <div className='flex gap-1 text[var(--icons-color)]'>
              <ThemeToggle />
              <Language />
            </div>
          </div>
          <div className='text-4xl'>
            <Link href={'/'} aria-label="logo">
              <IoLogoGithub />
            </Link>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header