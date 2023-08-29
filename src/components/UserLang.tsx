'use client'

import { store } from '@/store/store'
import { useEffect, useState } from 'react'

const UserLang = () => {
  const [mounted, setMounted] = useState(false)
  const { setLang } = store()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  const userLang = navigator?.language?.split('-')?.[0]?.toUpperCase()

  setLang(userLang)
}

export default UserLang