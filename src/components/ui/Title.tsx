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
            font-bold
            tracking-wide
            text-cblack
            dark:text-cwhite
            ${className}
            ${large ? 'text-7xl' : 'text-4xl'}
        `}
      {...props}
    >
      {text}
    </h1>
  )
}

export default Title
