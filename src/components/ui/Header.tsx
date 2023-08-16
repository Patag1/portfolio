'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Title from './Title'
import Image from 'next/image'
import { gambetta } from '@/fonts/Fonts'
import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'
import Gambetta from './Gambetta'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const path = usePathname()
  let title

  switch (path) {
    case '/':
      title = 'front-end developer'
      break
    case '/about':
      title = 'about'
      break
    case '/hire':
      title = "let's talk, let's do"
      break
    default:
      break
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <Title text={title ?? '?'} large />
        <div className="relative [&>div]:hover:opacity-100 [&>div]:hover:-translate-x-2 mb-2">
          <Image
            src="/Selfie.png"
            alt="profile-pic"
            width={60}
            height={60}
            className="w-auto h-auto saturate-0 hover:saturate-100 hover:scale-105 rounded-full bg-neutral-400 dark:bg-black transition-all ease-in-out duration-300"
          />
          <div
            className={`${gambetta.className} absolute w-fit h-fit opacity-0 top-1/2 bottom-1/2 right-16 -translate-y-1/2 pointer-events-none transition-all whitespace-nowrap text-xs bg-black bg-opacity-75 text-gray-200 px-2 py-1 font-extrabold`}
          >
            Augusto Sasso
          </div>
        </div>
      </div>
      {path !== '/' ? (
        <Link
          href={'/'}
          className="w-full px-1 flex justify-start items-center gap-1 bg-neutral-400 text-cblack hover:brightness-110 transition-all ease-in-out duration-300"
        >
          <BsArrowLeftShort />
          <Gambetta weight small>
            back to home page
          </Gambetta>
        </Link>
      ) : (
        <div className="border-b-[1px] border-cblack dark:border-cwhite" />
      )}
    </section>
  )
}

export default Header
