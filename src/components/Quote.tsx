import { FC } from 'react'
import Gambetta from './ui/Gambetta'

interface QuoteProps {
  image: string
  name: string
  title: string
  message: string
}

const Quote: FC<QuoteProps> = ({ image, name, title, message }) => {
  return (
    <div className="p-4 flex gap-4 border-[1px] border-cblack dark:border-cwhite">
      <div>
        <img
          src={image}
          alt={name}
          className="w-32 aspect-square rounded-full saturate-0 hover:saturate-100 transition-all ease-in-out duration-300"
        />
        <Gambetta remark weight>
          {name}
        </Gambetta>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
          {title}
        </p>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Quote
