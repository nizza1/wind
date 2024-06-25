"use client"
import React from 'react';
import { IoLanguageOutline } from 'react-icons/io5'

import { useRouter, usePathname } from 'next/navigation';

const Language: React.FC = () => {

  const router = useRouter()
  const path = usePathname()

  const isGerman = path.startsWith('/de');
  const lang = isGerman ? 'en' : 'de'; // Toggle the 
  const newPath = isGerman ? path.replace('/de', '/en') : `/de${path}`;

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(newPath, { scroll: false })
  }

  return (
    <div>
      <button
        onClick={toggle}
        className='text-[1rem] rounded-full flex border-[1px] border-[var(--border)] justify-center items-center h-8 px-2 gap-2' >
        <IoLanguageOutline />

        {lang === 'de' ? <>🇩🇪</> : <>🇺🇸</>}
      </button>
    </div>
  )
}

export default Language