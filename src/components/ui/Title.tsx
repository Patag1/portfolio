import { FC } from 'react'
import { morganite } from '@/fonts/Fonts'

interface HeaderProps {
  text: string
  large?: boolean
  gray?: boolean
  className?: string
  props?: any
}

const Title: FC<HeaderProps> = ({
  large,
  gray,
  className,
  props,
  text,
}) => {
  return (
    <h1
      className={`
        ${morganite.className}
            uppercase
            font-bold
            tracking-wide
            ${gray ? 'text-neutral-400' : 'text-cblack dark:text-cwhite'}
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
