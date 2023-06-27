import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className='w-full h-6 absolute bottom-0 px-2 flex justify-center items-center gap-8 bg-neutral-50'>
        <a target='_blank' href={'https://www.linkedin.com/in/augusto-sasso/'} className='px-1 text-xs font-bold hover:bg-blue-500 hover:text-white transition-all rounded-sm'>LINKEDIN</a>
        <a target='_blank' href={'https://www.fiverr.com/s/kgpXRy'} className='px-1 text-xs font-bold hover:bg-green-400 hover:text-white transition-all rounded-sm'>FIVERR</a>
        <a target='_blank' href={'mailto:augustosasso97@gmail.com'} className='px-1 text-xs font-bold hover:bg-red-500 hover:text-white transition-all rounded-sm'>GMAIL</a>
        <a target='_blank' href={'https://github.com/Patag1'} className='px-1 text-xs font-bold hover:bg-neutral-800 hover:text-white transition-all rounded-sm'>GITHUB</a>
      </footer>
    </>
  )
}

export default Footer