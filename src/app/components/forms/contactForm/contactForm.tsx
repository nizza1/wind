"use client"
import React from 'react'

import { useForm, FieldValues } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"


//icons
import { IoIosSend } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";



const ContactForm: React.FC = () => {

  /* const { toast } = useToast() */

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data);
    // Trigger a toast notification upon successful form submission
    /*  toast({
         variant: 'default',
         title: "Message has been submitted",
         description: "I will reach out to you soon.",
         }); */
    const suc = <div className='bg-[var(--background)] p-3 border-[1px] rounded-sm shadow-inherit flex items-center gap-3 '>
      <FaCheckCircle className='text-[var(--success-foreground)]' />
      <p className='text-[var(--success-foreground)]'>message has been successf</p>
    </div>
    toast(suc, {
      unstyled: true,
      icon: <FaCheckCircle />,
    });

  }


  return (
    <article id='contact-form-h' className=' px-4 relative min-h-32 w-full'>
      <div className='w-[1px] h-full bg-gradient-to-t from-10% from-transparent via-60% via-border to-90% to-transparent  absolute left-0 '>

      </div>
      <h1 className='my-5'>
        Let's connect
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='font-light max-w-[600px] '>
        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="name">
            Name
            <span className='text-destructive text-2xl'>*</span>
          </label>
          <Input
            type='text'
            {...register('name',
              { required: 'Name is required' })}
            placeholder='e.g max'
          />
          {errors.name && <span className='text-destructive'>{`${errors.name.message}`}</span>}
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="email"
            className='flex gap-1 text-lg items-center font-extralight'>
            Email
            <span className='text-destructive text-2xl'>*</span>
          </label>
          <Input
            type='email'
            {...register('email',
              {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              }
            )}
            placeholder='e.g max@gmail.com'
          />
          {errors.email && <span className='text-destructive'>{`${errors.email.message}`}</span>}
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="tel"
            className='flex gap-1 text-lg items-center font-extralight'>
            Telephon
          </label>
          <Input
            type='tel'
            {...register('tel')}
            placeholder='e.g +1 123-456-7890'
          />
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor='message'
            className='flex gap-1 text-lg items-center font-extralight'>
            Message
          </label>

          <Textarea
            className='text-[1rem] bg-[var(--input)]'
            {...register('message')}
            placeholder='Your message here...'
          />
        </div>

        <div className='mt-3'>
          <Button
            disabled={isSubmitting}
            className='rounded-full' type='submit'>Send <IoIosSend className='ml-3' /></Button>
        </div>


      </form>
    </article>
  )
}

export default ContactForm