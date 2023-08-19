import { FC } from 'react'
import { morganite } from '@/fonts/Fonts'

interface HeaderProps {
  text: string
  large?: boolean
  className?: string
  props?: any
}

const Title: FC<HeaderProps> = ({ large, className, props, text }) => {
  return (
    <h1
      className={`
        ${morganite.className}
            w-fit
            uppercase
            tracking-wide
            ${className}
            ${
              large
                ? 'lg:text-8xl md:text-7xl text-6xl font-bold'
                : 'lg:text-5xl md:text-4xl text-3xl font-semibold'
            }
        `}
      {...props}
    >
      {text}
    </h1>
  )
}

export default Title
