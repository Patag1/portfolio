'use client'

import { FC, useEffect, useState } from 'react'
import Button from './ui/Button'
import {
  AiOutlineInfoCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import { SiLinktree } from 'react-icons/si'
import { CiGlobe } from 'react-icons/ci'
import { RiHomeLine } from 'react-icons/ri'
import { MdOutlineArticle, MdOutlineWorkOutline } from 'react-icons/md'
import ThemeBtn from './ui/ThemeBtn'
import CV from './CV'
import { useTranslation } from 'react-i18next'
import { store } from '@/store/store'

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = ({}) => {
  const [isFixed, setIsFixed] = useState(false)
  const { changeLang } = store()

  const [t, i18n] = useTranslation('global')

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 160)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const handleLang = () => {
    changeLang()
    i18n.changeLanguage(t('menu.lang') === 'ES' ? 'EN' : 'ES')
  }

  return (
    <div className="w-7">
      <div
        className={`${
          isFixed && 'fixed top-20'
        } flex flex-col gap-2 border-cwhite`}
      >
        <Button
          icon1={RiHomeLine}
          icon2={RiHomeLine}
          iconBool={false}
          link="/"
          label="Home"
          onClick={() => {}}
        />
        <Button
          icon1={AiOutlineInfoCircle}
          icon2={AiOutlineInfoCircle}
          iconBool={false}
          link="/about"
          label="About"
          onClick={() => {}}
        />
        <Button
          icon1={MdOutlineArticle}
          icon2={MdOutlineArticle}
          iconBool={false}
          link="/blog"
          label="Blog"
          onClick={() => {}}
        />
        <Button
          icon1={MdOutlineWorkOutline}
          icon2={MdOutlineWorkOutline}
          iconBool={false}
          link="/hire"
          label={t('menu.hire')}
          onClick={() => {}}
        />
        <div className="my-1"></div>
        <CV />
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
        <div className="my-1"></div>
        <ThemeBtn />
        <Button
          icon1={CiGlobe}
          icon2={CiGlobe}
          iconBool={false}
          label={t('menu.lang')}
          clickable
          onClick={handleLang}
        />
      </div>
    </div>
  )
}

export default SideMenu
