import Gambetta from '@/components/ui/Gambetta'
import Title from '@/components/ui/Title'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Title text="Hey there" gray />
      <p>
        I&apos;m Augusto Sasso, a laid-back{' '}
        <Gambetta remark weight>
          creator
        </Gambetta>{' '}
        on a journey to express my thoughts and ideas through my work. With a
        penchant for creativity and an eye for detail, I find joy in bringing a
        touch of my unique perspective to everything I do.
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
        , or taking inspiration only from the best, I&apos;m always seeking that
        &quot;aha&quot; moment that makes everything click.
        <br />
        <br />
        I&apos;m excited to share a glimpse of my creative journey with you
        through this portfolio. Take a peek around and join me as I continue to
        explore, create, and find magic in the everyday.
        <br />
        <br />
        Wanna build something?{' '}
        <Link href={'/hire'} className="text-cyan-500 hover:underline">
          Hire
        </Link>{' '}
        me.
      </p>
      <br />
      <Title text="Technologies" gray />
      <p>I specialize using...</p>
      <br />
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-auto gap-6">
        <div className="p-4 border-[1px] border-neutral-300 dark:border-cwhite">
          <Gambetta gray weight large>
            Front-end
          </Gambetta>
          <br />
          <ul>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Zustand</li>
          </ul>
        </div>
        <div className="p-4 border-[1px] border-neutral-300 dark:border-cwhite">
          <Gambetta gray weight large>
            Back-end
          </Gambetta>
          <br />
          <ul>
            <li>Zod</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="p-4 border-[1px] border-neutral-300 dark:border-cwhite">
          <Gambetta gray weight large>
            Databases
          </Gambetta>
          <br />
          <p>PostgreSQL</p>
        </div>
      </div>
      <br />
      <p>
        To see all technologies, please visit my{' '}
        <a
          href="https://www.linkedin.com/in/augusto-sasso/"
          target="_blank"
          className="text-cyan-500 hover:underline"
        >
          LinkedIn
        </a>{' '}
        profile.
      </p>
    </>
  )
}

export default page
