import { FC } from 'react'

interface ContainerProps {
  width?: string,
  className: string,
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <main className='w-full h-full grid grid-cols-[116px_1fr] grid-rows-1 bg-neutral-900'>
      <aside></aside>
      <section className={`px-8 py-5 ${className}`}>
        {children}
      </section>
  </main>
}

export default Container