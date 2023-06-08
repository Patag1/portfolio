'use client'

import { FC, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

interface ContactFormProps {
  className: string,
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const form = useRef<any>()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm('service_smax5ij', 'template_hgznvh2', form.current, 'rcdCD6i8Vp1qSYK0Q')
      .then(() => (
        <Image
          src='Selfie1.png'
          alt='test'
          width={500}
          height={500}
        />
      ))
      .catch((e) => alert('error'))
  }

  return (
    <form action="" ref={form} className={`${className}`} onSubmit={handleSubmit}>
      <input required name='name' type="text" placeholder='Full name' className='w-full p-1 rounded-[.375rem_.375rem_0_0]' />
      <input required name='email' type="text" placeholder='Email' className='w-full p-1' />
      <input required name='company' type="text" placeholder='Company' className='w-full p-1' />
      <select required name='job' className='w-full p-1'>
        <option value="" selected disabled>Select one</option>
        <option value="internship">Internship</option>
        <option value="front-end">Front-end job</option>
        <option value="back-end">Back-end job</option>
        <option value="full stack">Full stack job</option>
        <option value="freelance">Freelance job</option>
      </select>
      <textarea name="message" cols={40} rows={4} className='w-full p-1 resize-none rounded-[0_0_.375rem_.375rem]' placeholder='Anything else I should know?' />
      <button type='submit' className='text-sm text-neutral-50 mt-4 m-2 px-1 rounded-sm hover:bg-yellowA hover:text-neutral-900 font-bold transition-all'>SUBMIT</button>
    </form>
  )
}

export default ContactForm