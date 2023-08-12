'use client'

import { morganite } from '@/fonts/Fonts'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  const [dynamicHeight, setDynamicHeight] = useState('h-full')
  const [dynamicOpacity, setDynamicOpacity] = useState('opacity-0')
  
  const bodyClasses = () => {
    document.body.classList.remove('overflow-hidden')
    document.body.classList.add('overflow-y-auto')
  }

  const changeClass = () => {
    setTimeout(() => setDynamicHeight('h-0'), 500)
    setTimeout(() => bodyClasses(), 500)
    setDynamicOpacity('opacity-0')
  }

  useEffect(() => {
    setDynamicOpacity('opacity-100')
    setTimeout(() => changeClass(), 3000)
  }, [])

  return (
    <div
      className={`${dynamicHeight} fixed top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center gap-6 bg-cwhite ease-in-out duration-1000`}
    >
      <Image
        src={'/signature.png'}
        alt="signature"
        width={200}
        height={200}
        className={`${dynamicOpacity} w-auto h-auto ease-in-out duration-700`}
      />
      <p
        className={`${dynamicOpacity} ${morganite.className} text-8xl font-bold tracking-wide text-cblack ease-in-out duration-700`}
      >
        Augusto Sasso
      </p>
    </div>
  )
}

export default Loader
