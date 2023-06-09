import { FC } from 'react'
import { gambetta } from '../Fonts'

interface GambettaProps {
  children: React.ReactNode
  weight: 'on' | '',
  size: 'lg' | 'sm' | 'xs',
  color: 'gray' | 'white',
  className: string
}

const Gambetta: FC<GambettaProps> = ({ children, weight, size, color, className }) => {
  const fontWeight = weight === 'on' ? 'font-extrabold' : 'font-normal'
  const textSize = size === 'lg' ? 'text-[2.6rem]' : size === 'sm' ? 'text-sm' : 'text-xs'
  const textColor = color === 'gray' ? 'text-neutral-400' : 'text-neutral-50'

  return <span className={`${gambetta.className} ${fontWeight} ${textSize} ${textColor} ${className} w-fit italic text-center`}>{children}</span>
}

export default Gambetta