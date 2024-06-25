import React from 'react'
import LoginForm from './loginForm'

const Page = () => {
  return (
    <main className=' px-5 py-12 min-h-screen'>
      <section className='flex max-w-[var(--max-width)] justify-center mx-auto items-center w-full py-12'>
        <div className=' min-w-[350px] max-w-[100%]'>
          <LoginForm />
        </div>
      </section>
    </main>
  )
}

export default Page