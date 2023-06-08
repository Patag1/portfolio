import { FC } from 'react'

interface ContainerProps {
  width: string,
  className: string,
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ width, className, children }) => {
  return <div className='w-full h-full grid grid-cols-[108px_1fr] grid-rows-1 bg-neutral-900'>
      <div></div>
      <div className={`mt-2 mr-2 p-2 ${width} h-fit ${className}`}>
        {children}
      </div>
  </div>
}

export default Container