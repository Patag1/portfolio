'use client'

import ContactForm from '@/components/ContactForm'
import Gambetta from '@/components/ui/Gambetta'
import Title from '@/components/ui/Title'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useSound from 'use-sound'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [t] = useTranslation('global')

  const [play, {stop}] = useSound('/audios/hover1.mp3')

  return (
    <>
      <Title text={t('hire.section1.title')} />
      <p>
        {t('hire.section1.content1')}{' '}
        <a
          href="https://linktr.ee/agusasso"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          Linktree
        </a>{' '}
        {t('hire.section1.content2')}
      </p>
      <br />
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-auto gap-4">
        <div
          className="
            p-4
            flex
            flex-col
            gap-2
            hover:bg-yellowA
            dark:hover:bg-yellowA
            border-[1px]
            border-cblack
            dark:border-cwhite
            hover:border-transparent
            dark:hover:border-transparent
            hover:text-cblack
            dark:hover:text-cblack
            [&>div>div>div>span]:hover:text-cblack
            [&>div>div>div>span]:dark:hover:text-cblack
            transition-all
            duration-300
            ease-in-out
          "
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Title text="Front-end" />
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta
                  weight
                  gray
                  className="dark:text-cwhite transition-all duration-300 ease-in-out"
                >
                  {t('hire.card.type.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.type.content')}</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta
                  weight
                  gray
                  className="dark:text-cwhite transition-all duration-300 ease-in-out"
                >
                  {t('hire.card.mode.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.mode.content')}</p>
            </div>
          </div>
        </div>
        <div
          className="
            p-4
            flex
            flex-col
            gap-2
            hover:bg-yellowA
            dark:hover:bg-yellowA
            border-[1px]
            border-cblack
            dark:border-cwhite
            hover:border-transparent
            dark:hover:border-transparent
            hover:text-cblack
            dark:hover:text-cblack
            [&>div>div>div>span]:hover:text-cblack
            [&>div>div>div>span]:dark:hover:text-cblack
            transition-all
            duration-300
            ease-in-out
          "
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Title text={t('hire.card2.title')} />
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta
                  weight
                  gray
                  className="dark:text-cwhite transition-all duration-300 ease-in-out"
                >
                  {t('hire.card.type.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.type.content')}</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta
                  weight
                  gray
                  className="dark:text-cwhite transition-all duration-300 ease-in-out"
                >
                  {t('hire.card.mode.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.mode.content')}</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Title text={t('hire.form.title')} />
      <ContactForm />
    </>
  )
}

export default Page
