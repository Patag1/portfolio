'use client'

import { FC, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { gambetta } from '@/fonts/Fonts'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const form = useRef<any>()

  const [t] = useTranslation('global')

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
    <form ref={form} onSubmit={handleSubmit} className="mt-2">
      <div className="p-4 border-[1px] border-cblack dark:border-cwhite">
        <div className="relative">
          <input
            required
            name="name"
            type="text"
            placeholder={t('hire.form.name')}
            className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
          />
          <span className="absolute top-0 right-0 text-rose-400">*</span>
        </div>
        <div className="relative">
          <input
            required
            name="email"
            type="text"
            placeholder="Email"
            className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
          />
          <span className="absolute top-0 right-0 text-rose-400">*</span>
        </div>
        <div className="relative">
          <input
            required
            name="company"
            type="text"
            placeholder={t('hire.form.company')}
            className="w-full p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
          />
          <span className="absolute top-0 right-0 text-rose-400">*</span>
        </div>
        <div className="relative">
          <select
            required
            name="job"
            defaultValue=""
            className="w-full px-0 p-1 bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none text-[#9CA3AF] focus:text-cblack transition-all ease-in-out duration-300"
          >
            <option value="" disabled>
              {t('hire.form.select.title')}
            </option>
            <option value="internship">{t('hire.form.select.intern')}</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full stack">Full stack</option>
            <option value="freelance">Freelance</option>
            <option value="recruiter">{t('hire.form.select.design')}</option>
          </select>
          <span className="absolute top-0 right-0 text-rose-400">*</span>
        </div>
        <textarea
          name="message"
          cols={40}
          rows={4}
          className="w-full -mb-1 p-1 resize-none bg-transparent focus:p-4 focus:border-b-2 border-cblack dark:border-cwhite focus:outline-none transition-all ease-in-out duration-300"
          placeholder={t('hire.form.textarea')}
        />
      </div>
      <button
        type="submit"
        className={`${gambetta.className} w-full py-2 text-cblack dark:text-cwhite text-lg mt-2 mr-2 hover:bg-yellowA hover:text-cblack dark:hover:text-cblack font-extrabold transition-all ease-in-out`}
      >
        {t('hire.form.submit')}
      </button>
    </form>
  )
}

export default ContactForm
