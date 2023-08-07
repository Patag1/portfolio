'use client'

import { FC, useEffect, useState } from 'react'
import Button from './ui/Button'
import { AiOutlineInfoCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import { SiLinktree } from 'react-icons/si'
import { MdOutlineWorkOutline } from 'react-icons/md'
import ThemeBtn from './ui/ThemeBtn'

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = ({}) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 160)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-7">
      <div className={`${isFixed && 'fixed top-20'} flex flex-col gap-2 border-cwhite`}>
        <Button
          icon1={AiOutlineInfoCircle}
          icon2={AiOutlineInfoCircle}
          iconBool={false}
          link="/about"
          label="About"
          onClick={() => {}}
        />
        <Button
          icon1={MdOutlineWorkOutline}
          icon2={MdOutlineWorkOutline}
          iconBool={false}
          link="/hire"
          label="Hire"
          onClick={() => {}}
        />
        <div className='my-1'></div>
        <Button
          icon1={AiFillLinkedin}
          icon2={AiFillLinkedin}
          iconBool={false}
          external="https://www.linkedin.com/in/augusto-sasso/"
          label="LinkedIn"
          onClick={() => {}}
        />
        <Button
          icon1={AiFillGithub}
          icon2={AiFillGithub}
          iconBool={false}
          external="https://github.com/Patag1"
          label="GitHub"
          onClick={() => {}}
        />
        <Button
          icon1={BiLogoGmail}
          icon2={BiLogoGmail}
          iconBool={false}
          external="mailto:augustosasso97@gmail.com"
          label="Gmail"
          onClick={() => {}}
        />
        <Button
          icon1={SiLinktree}
          icon2={SiLinktree}
          iconBool={false}
          external="https://linktr.ee/agusasso"
          label="Linktree"
          onClick={() => {}}
        />
        <div className='my-1'></div>
        <ThemeBtn/>
      </div>
    </div>
  )
}

export default SideMenu
