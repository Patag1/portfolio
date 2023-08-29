'use client'

import { useEffect, useState } from 'react'

const UserLang = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  const userLang = navigator?.language?.split('-')?.[0]?.toUpperCase()

  return userLang
}

export default UserLang