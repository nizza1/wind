import React from 'react'
import styles from './styles.module.css'

import Tech from '../teck/tech'

/* import { Button } from '@/components/ui/button' */
import { ScrollButton } from './handleScroll';
import Image from 'next/image';

/* 
bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
 */
/* import bgImage from '/public/bbblurry (2).svg'; */

type Content = {
  title: string,
  subtitle: string,
  button: string
}

const Hero: React.FC<Content> = ({ title, subtitle, button }) => {

  return (
    <section className='relative'>
      {/*    <Image src={bgImage}
        alt='bgImage'
        fill={true}
        objectFit='cover'

        className='opacity-60'
      /> */}

      <article className='py-5 px-5  max-w-[1000px] mx-auto'>

        <div className='flex justify-center align-center  flex-col relative min-h-[500px] md:h-screen max-h-[1100px] '>

          <h1 className='text-center md:text-3xl text-[1.6rem] mb-2 max-w-[25ch] mx-auto z-[2] font-normal'>
            {title}
          </h1>
          <p className='text-1xl md:text-2xl text-center text-[var(--secondary-foreground)] z-[2]'>
            {subtitle}</p>

          <div className='flex justify-center py-3 z-[2]'>
            <ScrollButton
              className='rounded-full'
              href='contact-form-h'
              text={button}
            />
          </div>



          <div className="absolute left-1/2 md:h-full md:w-full h-full w-full max-h-[600px] -translate-x-1/2  stroke-gray-200/100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] overflow-hidden z-[1]">


            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className={` absolute inset-0 h-full w-full ${styles.rotate}`}><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="var(--highlight-border)" strokeOpacity="0.7" strokeWidth='2px'></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:S1:-gradient-1)" strokeLinecap="round"></path><defs><linearGradient id=":S1:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stopColor="var(--highlight-border)"></stop><stop offset="1" stopColor="var(--highlight-border)" stopOpacity="0"></stop></linearGradient></defs></svg>

            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className={`absolute inset-0 h-full w-full ${styles.rotate}`}><path strokeWidth='3px' d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="var(--border)" strokeOpacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:S1:-gradient-2)" strokeLinecap="round"></path><defs><linearGradient id=":S1:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stopColor="var(--highlight-border)"></stop><stop offset="1" stopColor="var(--highlight-border)" stopOpacity="1"></stop></linearGradient></defs></svg>


          </div>

          <article className='py-4 px-2'>
            <Tech />
          </article>

        </div>
      </article>
    </section>
  )
}

export default Hero