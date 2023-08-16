'use client'

import { FC, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { gambetta } from '@/fonts/Fonts'
import { toast } from 'sonner'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const form = useRef<any>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_smax5ij',
        'template_hgznvh2',
        form.current,
        'rcdCD6i8Vp1qSYK0Q'
      )
      .then(() => {
        toast.success('Thanks! I will review your email shortly')
        form.current.reset()
      })
      .catch(() => toast.error('Oh no, something broke! Try again later'))
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="relative">
        <input
          required
          name="name"
          type="text"
          placeholder="Full name"
          className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
        />
        <span className="absolute top-0 -right-4 text-rose-400">*</span>
      </div>
      <div className="relative">
        <input
          required
          name="email"
          type="text"
          placeholder="Email"
          className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
        />
        <span className="absolute top-0 -right-4 text-rose-400">*</span>
      </div>
      <div className="relative">
        <input
          required
          name="company"
          type="text"
          placeholder="Company"
          className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
        />
        <span className="absolute top-0 -right-4 text-rose-400">*</span>
      </div>
      <div className="relative">
        <select
          required
          name="job"
          defaultValue=""
          className="w-full px-0 p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none text-[#9CA3AF] focus:text-cblack transition-all ease-in-out duration-300"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="internship">Internship</option>
          <option value="front-end">Front-end job</option>
          <option value="back-end">Back-end job</option>
          <option value="full stack">Full stack job</option>
          <option value="freelance">Freelance job</option>
          <option value="recruiter">IT Recruiter</option>
        </select>
        <span className="absolute top-0 -right-4 text-rose-400">*</span>
      </div>
      <textarea
        name="message"
        cols={40}
        rows={4}
        className="w-full -mb-1 p-1 resize-none bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
        placeholder="Anything else I should know?"
      />
      <button
        type="submit"
        className={`${gambetta.className} text-cblack dark:text-cwhite text-lg mt-2 mr-2 hover:bg-yellowA hover:text-cblack dark:hover:text-cblack font-extrabold transition-all ease-in-out`}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
