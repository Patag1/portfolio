'use client'

import Title from '@/components/ui/Title'
import Gambetta from '@/components/ui/Gambetta'
import Projects from '@/components/Projects'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const [t] = useTranslation('global')

  return (
    <>
      <Title text={t('home.section1.title')} />
      {t('menu.lang') === 'EN' ? (
        <p>
          I help startups and businesses{' '}
          <Gambetta remark weight>
            grow
          </Gambetta>
          , understanding the challenges and opportunities that arise in the
          tech industry, being passionate about helping companies like yours{' '}
          <Gambetta remark weight>
            thrive
          </Gambetta>{' '}
          in this ever-evolving landscape.
        </p>
      ) : (
        <p>
          Ayudo a nuevas startups y negocios a{' '}
          <Gambetta remark weight>
            crecer
          </Gambetta>
          , entiendiendo los desafíos y las oportunidades que surgen en la
          industria de la tecnología, apasionado por ayudar a empresas como la
          suya a{' '}
          <Gambetta remark weight>
            prosperar
          </Gambetta>{' '}
          en este panorama en constante evolución.
        </p>
      )}
      <br />
      <Title text={t('home.section2.title')} />
      <p>{t('home.section2.content')}</p>
      <br />
      <Projects />
    </>
  )
}
