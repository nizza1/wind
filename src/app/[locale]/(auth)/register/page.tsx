import React from 'react';
import RegisterForm from './registerForm'

const Page = () => {
  return (
    <main >
      <section className='flex max-w-[var(--max-width)] justify-center mx-auto items-center w-full py-12'>
        <div className=' min-w-[350px] max-w-[100%]'>
          <RegisterForm />
        </div>
      </section>
    </main>
  )
}

export default Page