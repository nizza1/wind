"use client"
import React, { useState } from 'react';
import { IoLanguageOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/app/globalState/hooks'
import { changeLanguage } from '@/app/globalState/feature/lang'

const Language: React.FC = () => {

  const language = useAppSelector((state) => state.language.value);
  const dispatch = useAppDispatch();


  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(changeLanguage());
  }

  return (
    <div>
      <button
        onClick={toggle}
        className='text-[1rem] rounded-full flex border-[1px] border-[var(--border)] justify-center items-center h-8 px-2 gap-2' >
        <IoLanguageOutline />

        {language === 'en' ? <>DE</> : <>EN</>}
      </button>
    </div>
  )
}

export default Language