'use client'

// import Quote from '@/components/Quote'
import Gambetta from '@/components/ui/Gambetta'
import Title from '@/components/ui/Title'
// import { quotes } from '@/lib/quotes'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useSound from 'use-sound'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [t] = useTranslation('global')

  const [play, { stop }] = useSound('/audios/hover1.png')

  return (
    <>
      <Title text={t('about.section1.title')} />
      {t('menu.lang') === 'EN' ? (
        <p>
          I&apos;m Augusto Sasso, a laid-back{' '}
          <Gambetta remark weight>
            creator
          </Gambetta>{' '}
          on a journey to express my thoughts and ideas through my work. With a
          penchant for creativity and an eye for detail, I find joy in bringing
          a touch of my unique perspective to everything I do.
          <br />
          <br />I thrive on the thrill of turning the ordinary into something{' '}
          <Gambetta remark weight>
            extraordinary
          </Gambetta>
          . Whether it&apos;s crafting pixel-perfect designs, perfecting my best
          practices, tinkering with new{' '}
          <Gambetta remark weight>
            ideas
          </Gambetta>
          , or taking inspiration only from the best, I&apos;m always seeking
          that &quot;aha&quot; moment that makes everything click.
          <br />
          <br />
          I&apos;m excited to share a glimpse of my creative journey with you
          through this portfolio. Take a peek around and join me as I continue
          to explore, create, and find magic in the everyday.
          <br />
          <br />
          Wanna build something?{' '}
          <Link href={'/hire'} className="text-cyan-500 hover:underline">
            Hire
          </Link>{' '}
          me.
        </p>
      ) : (
        <p>
          Soy Augusto Sasso, un{' '}
          <Gambetta remark weight>
            creador
          </Gambetta>{' '}
          relajado en un viaje para expresar mis pensamientos e ideas a través
          de mi trabajo. Con una inclinación por la creatividad y un buen ojo
          para los detalles, disfruto aportando un toque de mi perspectiva única
          a todo lo que hago.
          <br />
          <br />
          Disfruto de la emoción de convertir lo ordinario en algo{' '}
          <Gambetta remark weight>
            extraordinario
          </Gambetta>
          . Ya sea creando diseños pixel perfect, perfeccionando mis mejores
          prácticas, experimentando con nuevas{' '}
          <Gambetta remark weight>
            ideas
          </Gambetta>{' '}
          o inspirándome solo en los mejores, siempre estoy buscando ese momento
          &quot;aha&quot; que hace que todo encaje.
          <br />
          <br />
          Estoy emocionado de compartir mi viaje creativo con ustedes a través
          de este portafolio. Pegate una vuelta y unite conmigo mientras
          continúo explorando, creando y encontrando magia en lo cotidiano.
          <br />
          <br />
          Querés construir algo?{' '}
          <Link href={'/hire'} className="text-cyan-500 hover:underline">
            Contratame
          </Link>
          .
        </p>
      )}
      <br />
      {/* <Title text={t('about.section2.title')} gray />
      <br />
      {quotes.map((q, i) => (
        <Quote
          image={q.image}
          name={q.name}
          title={q.title}
          message={q.message}
          key={i}
        />
      ))}
      <br /> */}
      <Title text={t('about.section2.title')} />
      <p>
        {t('about.section2.content')}{' '}
        <a
          href="https://www.linkedin.com/in/augusto-sasso/"
          target="_blank"
          className="text-cyan-500 hover:underline"
        >
          LinkedIn
        </a>
      </p>
      <br />
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-auto gap-6">
        <div
          className="
            p-4
            bg-cwhite
            dark:bg-cblack
            hover:bg-yellowA
            dark:hover:bg-yellowA
            hover:text-cblack
            dark:hover:text-cblack
            hover:border-transparent
            dark:hover:border-transparent
            border-[1px]
            border-cblack
            dark:border-cwhite
            transition-all
            duration-300
            ease-in-out
          "
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Title text="Front-end" />
          <ul>
            <li>
              <p>Typescript</p>
            </li>
            <li>
              <p>Tailwind CSS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Next.js</p>
            </li>
            <li>
              <p>Zustand</p>
            </li>
          </ul>
        </div>
        <div
          className="
            p-4
            bg-cwhite
            dark:bg-cblack
            hover:bg-yellowA
            dark:hover:bg-yellowA
            hover:text-cblack
            dark:hover:text-cblack
            hover:border-transparent
            dark:hover:border-transparent
            border-[1px]
            border-cblack
            dark:border-cwhite
            transition-all
            duration-300
            ease-in-out
          "
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Title text="Back-end" />
          <ul>
            <li>
              <p>Zod</p>
            </li>
            <li>
              <p>Node.js</p>
            </li>
          </ul>
        </div>
        <div
          className="
            p-4
            bg-cwhite
            dark:bg-cblack
            hover:bg-yellowA
            dark:hover:bg-yellowA
            hover:text-cblack
            dark:hover:text-cblack
            hover:border-transparent
            dark:hover:border-transparent
            border-[1px]
            border-cblack
            dark:border-cwhite
            transition-all
            duration-300
            ease-in-out
          "
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Title text="Databases" />
          <p>PostgreSQL</p>
        </div>
      </div>
    </>
  )
}

export default Page
