'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  const [dynamicHeight, setDynamicHeight] = useState('h-screen')
  const [dynamicOpacity, setDynamicOpacity] = useState('opacity-0')

  const changeClass = () => {
    setTimeout(() => setDynamicHeight('h-0'), 500)
    setDynamicOpacity('opacity-0')
  }

  useEffect(() => {
    setDynamicOpacity('opacity-100')
    setTimeout(() => changeClass(), 3000)
  }, [])

  return (
    <div className={`absolute w-full ${dynamicHeight} z-20 flex justify-center items-center bg-neutral-50 ease-in-out duration-1000`}>
      <Image
        src={'/signature.png'}
        alt='signature'
        width={200}
        height={200}
        className={`${dynamicOpacity} ease-in-out duration-700`}
      />
      <p className={`${dynamicOpacity} font-[Gambetta] text-2xl text-neutral-400 italic ease-in-out duration-700`}>Augusto Sasso</p>
    </div>
  )
}

export default Loader