import Link from 'next/link'
import { FC } from 'react'

interface NavLinkProps {
  href: string
  label: string
}

const NavLink: FC<NavLinkProps> = ({href, label}) => {
  return (
    <div className='navlink flex justify-center items-center text-center'>
        <div className='navlink-line absolute left-3 bg-neutral-400 h-[.10rem] w-1 hover:w-full transition-all'></div>
        <Link href={href} className='text-neutral-800 font-bold text-xs z-10 px-1 bg-neutral-50 transition-all hover:bg-yellowA rounded-sm'>{label}</Link>
    </div>
  )
}

export default NavLink
