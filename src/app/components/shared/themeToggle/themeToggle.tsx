"use client"

import { useEffect } from "react";

import { IoSunny, IoMoon } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '@/app/globalState/hooks'
import { toggleTheme } from '@/app/globalState/feature/theme-slice'

const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.value)

  const dispatch = useAppDispatch();
  const switchTheme = () => {
    dispatch(toggleTheme());
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add('dark')
    }
    else {
      root.classList.remove('dark')
    }

  }, [theme]);


  return (
    <div>
      <button
        /* name="toggle theme" */
        aria-label="toggle theme"
        className='text-[1rem] rounded-full flex border-[1px] border-[var(--border)] justify-center items-center w-8 h-8'
        onClick={switchTheme}
      >
        {theme == true ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  )
}

export default ThemeToggle