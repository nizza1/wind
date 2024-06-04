import React from 'react'
import Auth from '@/app/components/gUI/authUi/auth'

const Page = () => {
  return (
    <main className=' px-5 py-12 min-h-screen'>
         <section className='flex max-w-[var(--max-width)] justify-center mx-auto items-center w-full py-12'>
          <div  className=' min-w-[350px] max-w-[100%]'>
           <Auth/>
          </div>
         </section>
    </main>
  )
}

export default Page