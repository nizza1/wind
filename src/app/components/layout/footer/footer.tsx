import React from 'react';
import Link from 'next/link';
import { Content as DE } from '@/app/content/layout/footer/footerDE';
import { Content as EN } from '@/app/content/layout/footer/footerEN';

type Props = {
  locale: string
}

const Footer = ({ locale }: Props) => {

  const content = locale === 'de' ? DE : EN;
  const { links } = content;
  return (
    <footer className='border-t-[1px] border-[var(--border)]  bg-[var(--html-bg)]'>
      <article className=' py-5 max-w-[var(--max-width)] mx-auto px-5 '>
        <div className='text-[var(--secondary-foreground)] flex justify-between'>
          {links.map(link => <Link className='hover:text-[var(--foreground)] duration-75' href={link.href} >{link.name}</Link>)}
        </div>
      </article>

    </footer>
  )
}

export default Footer