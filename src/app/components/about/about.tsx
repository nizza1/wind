import React from 'react'
import Image from 'next/image'

import Nizar from '/public/Nizar.jpg'

import ContactForm from '../forms/contactForm/contactForm'

type Props = {
  title: string,
  greeting: string,
  imgText: string,
  aboutText: {
    text1: string,
    text2: string
  }
}


const About = (props: Props) => {

  const { greeting, imgText, aboutText } = props

  return (
    <section className=''>
      <div className='max-w-[var(--max-width)] px-5 py-10 mx-auto lg:flex'>
        {/*  <h1>
       py-10
            About
        </h1> */}

        <article className='py-5 max-w-[600px]'>
          <div className='flex items-center gap-5  rounded-full p-r-2'>
            <div className='relative md:min-w-32 md:w-32 md:h-32 w-28 h-28 min-w-28 bg-slate-200 rounded-full overflow-hidden shadow-md'>
              <Image
                src={Nizar}
                fill={true}
                alt='portfolio-developer'
                placeholder='blur'
                sizes='40wv'
              />
            </div>
            <div>
              <h1> <span className='text-[var(--secondary-foreground)]'>{greeting}  </span><br />{imgText} </h1>

            </div>

          </div>

          <div className='pt-8 border-t-[1px] mt-5 lg:pr-3'>
            <p>
              {aboutText.text1} <br /><br />
              {aboutText.text2}
            </p>
          </div>

        </article>

        <ContactForm />
      </div>

    </section>
  )
}

export default About