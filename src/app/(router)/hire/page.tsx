'use client'

import ContactForm from '@/components/ContactForm'
import Gambetta from '@/components/ui/Gambetta'
import Title from '@/components/ui/Title'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [t] = useTranslation('global')

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
      <ul className="grid md:grid-cols-2 grid-cols-1 grid-rows-auto gap-4">
        <li className="p-4 flex flex-col gap-2 border-[1px] border-cblack dark:border-cwhite">
          <Gambetta weight gray large>
            Front-End
          </Gambetta>
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  {t('hire.card.type.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.type.content')}</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  {t('hire.card.mode.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.mode.content')}</p>
            </div>
          </div>
        </li>
        <li className="p-4 flex flex-col gap-2 border-[1px] border-cblack dark:border-cwhite">
          <Gambetta weight gray large>
            {t('hire.card2.title')}
          </Gambetta>
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  {t('hire.card.type.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.type.content')}</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  {t('hire.card.mode.title')}
                </Gambetta>
                :
              </div>{' '}
              <p className="wrap-balance">{t('hire.card.mode.content')}</p>
            </div>
          </div>
        </li>
      </ul>
      <br />
      <Title text={t('hire.form.title')} />
      <ContactForm />
    </>
  )
}

export default Page
