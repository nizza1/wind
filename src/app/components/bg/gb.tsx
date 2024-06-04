"use client"
import React from 'react'
import styles from './styles.module.css'
import { useAppSelector } from '@/app/globalState/hooks'
import bgImage from '/public/bbblurry (2).svg';
import Image from 'next/image';
const Bb = () => {

  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={styles.bg}>
      <div className={`absolute top-0 z-[-2] h-screen w-screen ${theme ? styles.dark : styles.light} `}>
        <Image src={bgImage}
          alt='bgImage'
          fill={true}
          objectFit='cover'

          className='opacity-60'
        />
      </div>
    </div>

  )
}

export default Bb