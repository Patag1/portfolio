import { FC } from 'react'
import { gambetta } from '@/fonts/Fonts'

interface GambettaProps {
  children: React.ReactNode
  className?: string
  remark?: boolean
  weight?: boolean
  large?: boolean
  small?: boolean
  gray?: boolean
}

const Gambetta: FC<GambettaProps> = ({
  children,
  className,
  remark,
  weight,
  large,
  small,
  gray,
}) => {
  return (
    <span
      className={`
        w-fit italic text-center leading-none whitespace-nowrap
        ${gambetta.className}
        ${className} 
        ${remark && 'bg-yellowA'}
        ${weight ? 'font-extrabold' : 'font-normal'}
        ${large ? 'text-2xl' : small ? 'text-xs' : 'text-xl'}
        ${gray ? 'text-neutral-500 dark:text-neutral-400' : 'text-cblack'}
      `}
    >
      {children}
    </span>
  )
}

export default Gambetta
