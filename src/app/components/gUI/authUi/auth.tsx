"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'

//icons 
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";


const Auth = () => {

    const handleAction = (e:React.FormEvent<Element>):void => {
        e.preventDefault()
        console.log('login');
    }

  return (
    <form onSubmit={(e) => handleAction(e)} className='flex flex-col gap-4 px-4 py-9 rounded-2xl bg-[var(--bg-transp)]  mt-9 shadow-lg border-[1px]'>
        <h1 className='text-center'>LOGIN</h1>
        <Input className=' px-3 py-2 ' type="text" placeholder='user name' id='userName' name='user name' />

        <Input className=' px-2 py-2
        ' type="text" placeholder='password' id='password'
        name='password'/>

          <Button variant={'outline'} 
          className='border-[1px] border-foreground'
        type='submit'
         ><FcGoogle className='text-2xl mr-2' /> log in with Google  </Button>

        <Button variant={'default'} 
        
        type='submit'
         >log in </Button>
         
    </form>
  )
}

export default Auth