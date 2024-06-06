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

import { ContactFormType } from '@/app/content/home/types'



const ContactForm: React.FC<ContactFormType> = (props) => {
  const {
    title, formFields: {
      email, emailPlaceholder, message, messagePlaceholder, name, namePlaceholder, telephone, telephonePlaceholder, button
    } } = props

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data: FieldValues) => {

    const sendContactForm = async (data: FieldValues) =>
      fetch('api/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        }
      })

    const res = await sendContactForm(data);
    console.log(res)

    const suc = <div className='bg-[var(--background)] p-3 border-[1px] rounded-sm shadow-inherit flex items-center gap-3 '>
      <FaCheckCircle className='text-[var(--success-foreground)]' />
      <p className='text-[var(--success-foreground)]'>Email sent successfully</p>
    </div>
    {
      if (res.ok) toast(suc, {
        unstyled: true,
        icon: <FaCheckCircle />,
      })
    }

  }


  return (
    <article id='contact-form-h' className=' px-4 relative min-h-32 w-full'>
      <div className='w-[1px] h-full bg-gradient-to-t from-10% from-transparent via-60% via-border to-90% to-transparent  absolute left-0 '>

      </div>
      <h1 className='my-5'>
        {title}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='font-light max-w-[600px] '>
        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="name">
            {name}
            <span className='text-destructive text-2xl'>*</span>
          </label>
          <Input
            type='text'
            {...register('name',
              { required: 'Name is required' })}
            placeholder={namePlaceholder}
          />
          {errors.name && <span className='text-destructive'>{`${errors.name.message}`}</span>}
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="email"
            className='flex gap-1 text-lg items-center font-extralight'>
            {email}
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
            placeholder={emailPlaceholder}
          />
          {errors.email && <span className='text-destructive'>{`${errors.email.message}`}</span>}
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor="tel"
            className='flex gap-1 text-lg items-center font-extralight'>
            {telephone}
          </label>
          <Input
            type='tel'
            {...register('tel')}
            placeholder={telephonePlaceholder}
          />
        </div>

        <div className=' flex flex-col gap-1 pb-2'>
          <label
            htmlFor='message'
            className='flex gap-1 text-lg items-center font-extralight'>
            {message}
          </label>

          <Textarea
            className='text-[1rem] bg-[var(--input)]'
            {...register('message')}
            placeholder={messagePlaceholder}
          />
        </div>

        <div className='mt-3'>
          <Button
            disabled={isSubmitting}
            className='rounded-full' type='submit'>{button} <IoIosSend className='ml-3' /></Button>
        </div>


      </form>
    </article>
  )
}

export default ContactForm




// Trigger a toast notification upon successful form submission
/*  toast({
     variant: 'default',
     title: "Message has been submitted",
     description: "I will reach out to you soon.",
     }); */