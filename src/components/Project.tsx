'use client'

import { FC } from 'react'
import { Project } from '@/types'
import { store } from '@/store/store'
import { useTranslation } from 'react-i18next'
import Title from './ui/Title'
import { AiFillGithub } from 'react-icons/ai'
import { BiWrench } from 'react-icons/bi'
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia'
import { gambetta } from '@/fonts/Fonts'
import useSound from 'use-sound'

interface ProjectProps {
  project: Project
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { name, url, techs, status } = project

  const { openModal } = store()

  const [t] = useTranslation('global')

  const [play, { stop }] = useSound('/audios/hover1.mp3')

  const english = t('menu.lang') === 'EN'

  const handleModal = () => {
    openModal(project)
  }

  return (
    <div
      className="relative grid grid-cols-1 grid-rows-[auto_1fr] gap-2 p-4 pb-0 border-[1px] border-cblack dark:border-cwhite hover:bg-yellowA hover:border-transparent dark:hover:border-transparent hover:text-black cursor-pointer transition-all ease-in-out duration-300"
      onClick={handleModal}
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
    >
      <div className="flex justify-between items-start">
        <Title text={name} />
        <div className="flex justify-end items-center gap-2">
          <div className="relative [&>div]:hover:opacity-100 [&>div]:hover:translate-y-2">
            <BiWrench />
            <div
              className={`${gambetta.className} z-30 flex flex-col justify-start items-start font-extrabold absolute w-fit h-fit top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all ease-in-out pointer-events-none text-sm whitespace-nowrap`}
            >
              {techs.map((tech, i) => (
                <span key={i} className="text-cwhite">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {status ? (
            <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-2">
              <AiFillGithub className="text-xl text-neutral-500 dark:text-neutral-400" />
              <span
                className={`${gambetta.className} font-extrabold absolute w-fit h-fit -top-6 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all ease-in-out pointer-events-none text-xs whitespace-nowrap`}
              >
                {english ? 'Private' : 'Privado'}
              </span>
            </div>
          ) : (
            <a href={url} target="_blank" className="w-fit h-fit">
              <AiFillGithub className="text-xl" />
            </a>
          )}
          {url === '' ? (
            <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-2">
              <LiaExternalLinkSquareAltSolid className="text-xl text-neutral-500 dark:text-neutral-400" />
              <span
                className={`${gambetta.className} font-extrabold absolute w-fit h-fit -top-6 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all ease-in-out pointer-events-none text-xs whitespace-nowrap`}
              >
                {english ? 'No link' : 'Sin link'}
              </span>
            </div>
          ) : (
            <a
              href={url}
              target="_blank"
              className="w-fit h-fit hover:translate-x-1 hover:-translate-y-1 transition-all ease-in-out"
            >
              <LiaExternalLinkSquareAltSolid className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
