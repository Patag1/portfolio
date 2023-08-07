'use client'

import { FC } from 'react'
import Button from './ui/Button'
import { AiOutlineDownload } from 'react-icons/ai'

interface CVProps {}

const CV: FC<CVProps> = ({}) => {
  const handleDownload = () => {
    const fileUrl = '/CVit.pdf'
    const fileName = 'CVit.pdf'

    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      icon1={AiOutlineDownload}
      icon2={AiOutlineDownload}
      label="Download CV"
      clickable
      onClick={handleDownload}
    />
  )
}

export default CV
