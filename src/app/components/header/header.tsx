"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import ThemeToggle from '../global/themeToggle/themeToggle';
import Language from '../global/languageButton/language';
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

  /* bg-[var(--html-bg)] */

  return (
    <header className={`${scrolled ? 'backdrop-blur-2xl' : 'border-transparent'}  border-b-[1px] sticky top-0 left-0 right-0 z-50 duration-200	ease-in-out`} >
      <div className='max-w-[var(--max-width)] mx-auto px-5 rounded-full'>
        <div className='flex justify-between items-center py-4'>

          <div className='text-4xl flex gap-3 items-center'>
            <Link href={'/'}>
              <IoLogoGithub />
            </Link>

            <div className='flex gap-1 text[var(--icons-color)]'>

              <ThemeToggle />
              <Language />
            </div>

          </div>
          <p>
            menu
          </p>
        </div>
      </div>

    </header>
  )
}

export default Header