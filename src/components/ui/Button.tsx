'use client'

import { gambetta } from '@/fonts/Fonts'
import Link from 'next/link'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  icon1: IconType
  icon2: IconType
  iconBool?: boolean
  clickable?: boolean
  link?: string
  external?: string
  onClick?: () => void
  label: string | null
}

const Button: FC<ButtonProps> = ({
  icon1: Icon1,
  icon2: Icon2,
  iconBool,
  clickable,
  link,
  external,
  onClick,
  label,
}) => {
  return (
    <div className="relative flex w-fit [&>span]:hover:-translate-x-2 [&>span]:hover:opacity-100">
      {link ? (
        <Link
          href={link}
          className="w-fit p-1 active:translate-x-1 active:scale-95 transition-all"
        >
          {iconBool ? <Icon2 /> : <Icon1 />}
        </Link>
      ) : external ? (
        <a
          href={external}
          target="_blank"
          className="w-fit p-1 active:translate-x-1 active:scale-95 transition-all"
        >
          {iconBool ? <Icon2 /> : <Icon1 />}
        </a>
      ) : (
        <button
          className={`w-fit p-1 ${
            clickable
              ? 'active:translate-x-1 active:scale-95'
              : 'cursor-default'
          } transition-all`}
          onClick={onClick}
        >
          {iconBool ? <Icon2 /> : <Icon1 />}
        </button>
      )}
      <span
        className={`${gambetta.className} font-extrabold absolute w-fit h-fit right-6 top-1/2 bottom-1/2 -translate-y-1/2 opacity-0 bg-black text-cwhite px-2 py-1  transition-all pointer-events-none text-xs whitespace-nowrap`}
      >
        {label}
      </span>
    </div>
  )
}

export default Button
