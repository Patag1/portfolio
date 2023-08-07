import ContactForm from '@/components/ContactForm'
import Gambetta from '@/components/ui/Gambetta'
import Title from '@/components/ui/Title'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Title text="Let's make your brand glow" gray />
      <p>
        Contact me by any social media in my{' '}
        <a
          href="https://linktr.ee/agusasso"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          Linktree
        </a>{' '}
        or by directly sending an email completing the form down below.
        Positions I&apos;m most interested in:
      </p>
      <br />
      <ul className="grid md:grid-cols-2 grid-cols-1 grid-rows-auto gap-4">
        <li className="p-4 flex flex-col gap-2 border-[1px] border-neutral-300 dark:border-cwhite">
          <Gambetta weight gray large>
            Front-End Developer
          </Gambetta>
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  Type
                </Gambetta>
                :
              </div>{' '}
              <p>on-site, hybrid or remote</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  Mode
                </Gambetta>
                :
              </div>{' '}
              <p>contract or freelance</p>
            </div>
          </div>
        </li>
        <li className="p-4 flex flex-col gap-2 border-[1px] border-neutral-300 dark:border-cwhite">
          <Gambetta weight gray large>
            IT Recruiter
          </Gambetta>
          <div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  Type
                </Gambetta>
                :
              </div>{' '}
              <p>on-site, hybrid or remote</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Gambetta weight remark>
                  Mode
                </Gambetta>
                :
              </div>{' '}
              <p>contract or freelance</p>
            </div>
          </div>
        </li>
      </ul>
      <br />
      <Title text='Send an email' gray />
      <ContactForm />
    </>
  )
}

export default page
