import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t-[1px] border-[var(--border)]  bg-[var(--html-bg)]'>
        <article className=' py-5 max-w-[var(--max-width)] mx-auto px-5 '>
        <div className='text-[var(--secondary-foreground)] flex justify-between'>
            <Link className='hover:text-[var(--foreground)] duration-75' href={'#'} >Imprint</Link>
            <Link className='hover:text-[var(--foreground)] duration-75' href={'#'} >Privacy Policy </Link>
        </div>
        </article>
        
    </footer>
  )
}

export default Footer