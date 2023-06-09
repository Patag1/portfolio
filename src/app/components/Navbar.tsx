import Image from 'next/image'
import { FC } from 'react'
import NavLink from './ui/NavLink'
import Link from 'next/link'
import Gambetta from './ui/Gambetta'
import { Dot } from 'lucide-react'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return <div className='absolute z-10 top-2 left-2 bottom-8 h-auto flex justify-between items-center flex-col py-2 bg-neutral-50 rounded-md'>
    <Link href={'/'} className='flex flex-col justify-center items-center gap-2'>
        <Image
          src={'/signature.png'}
          alt='profile'
          width={100}
          height={100}
          className='px-2'
        />
        <Gambetta size='xs' weight='on' color='gray' className=''>Augusto<br />Sasso</Gambetta>
    </Link>
    <div className='flex justify-between items-center flex-col gap-2'>
        <NavLink
          href='about'
          label='ABOUT'
        />
        <NavLink
          href='hire'
          label='HIRE ME'
        />
        <Dot size={20} className='m-0 p-0 text-neutral-900' />
    </div>
  </div>
}

export default Navbar
