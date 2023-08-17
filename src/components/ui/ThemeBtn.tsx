'use client'

import { FC, useEffect, useState } from 'react'
import Button from './Button'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

interface ThemeBtnProps {}

const ThemeBtn: FC<ThemeBtnProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
    setTheme(systemTheme ?? 'light')
  }, [setTheme, systemTheme])

  const [t] = useTranslation('global')

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!isMounted) {
    return null
  }

  return (
    <Button
      icon1={BiMoon}
      icon2={BiSun}
      label={t('menu.theme')}
      clickable
      iconBool={theme === 'light'}
      onClick={handleTheme}
    />
  )
}

export default ThemeBtn
