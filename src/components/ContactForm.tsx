'use client'

import { FC, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { gambetta } from '@/fonts/Fonts'
import toast from 'react-hot-toast'

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
      .then(() => toast.success('Thanks! I will review your email shortly'))
      .catch(() => toast.error('Oh no, something broke! Try again later'))
  }

  return (
    <form action="" ref={form} onSubmit={handleSubmit} className="text-cblack">
      <div className="bg-cwhite border-[1px] border-neutral-300">
        <div className="relative">
          <input
            required
            name="name"
            type="text"
            placeholder="Full name"
            className="w-full p-1 bg-transparent focus:border-none focus:outline-none"
          />
          <span className="absolute top-0 -right-4 text-rose-400">*</span>
        </div>
        <div className="relative">
          <input
            required
            name="email"
            type="text"
            placeholder="Email"
            className="w-full p-1 bg-transparent focus:border-none focus:outline-none"
          />
          <span className="absolute top-0 -right-4 text-rose-400">*</span>
        </div>
        <div className="relative">
          <input
            required
            name="company"
            type="text"
            placeholder="Company"
            className="w-full p-1 bg-transparent focus:border-none focus:outline-none"
          />
          <span className="absolute top-0 -right-4 text-rose-400">*</span>
        </div>
        <div className="relative">
          <select
            required
            name="job"
            className="w-full py-1 bg-transparent focus:border-none focus:outline-none"
          >
            <option value="" selected disabled>
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
          className="w-full -mb-1 p-1 resize-none bg-transparent focus:border-none focus:outline-none"
          placeholder="Anything else I should know?"
        />
      </div>
      <button
        type="submit"
        className={`${gambetta.className} text-cblack dark:text-cwhite text-lg mt-2 mr-2 px-1 hover:bg-yellowA hover:text-neutral-900 font-extrabold transition-all`}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
