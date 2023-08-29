'use client'

import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from '@/translations/es/global.json'
import global_en from '@/translations/en/global.json'
import { store } from '@/store/store'
import Modal from './ui/Modal'
import UserLang from './UserLang'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const { lang } = store()

  i18next.init({
    interpolation: { escapeValue: false },
    lng: lang ?? 'ES',
    resources: {
      ES: {
        global: global_es,
      },
      EN: {
        global: global_en,
      },
    },
  })

  UserLang()

  return (
    <ThemeProvider attribute="class">
      <I18nextProvider i18n={i18next}>
        {children}
        <Toaster position="bottom-right" />
        <Modal />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default Provider
