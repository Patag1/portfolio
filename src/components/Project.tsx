'use client'

import { FC, useState } from 'react'
import Gambetta from './ui/Gambetta'
import { MdClose } from 'react-icons/md'
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia'
import { BiWrench } from 'react-icons/bi'
import { gambetta } from '@/fonts/Fonts'
import { Project } from '@/types'
import Image from 'next/image'

interface ProjectProps {
  project: Project
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { name, image, url, repo, desc, techs, status, ud } = project

  const [bgimg, setBgimg] = useState(false)
  const [toggleDesc, setToggleDesc] = useState(false)

  const shortenedDesc = desc.length > 172 ? `${desc.slice(0, 172)}...` : desc

  const handleDesc = () => {
    setToggleDesc(!toggleDesc)
  }

  return (
    <div
      className={`relative grid grid-cols-1 grid-rows-[auto_1fr] gap-2 p-4 border-[1px] border-cblack dark:border-cwhite bg-cover bg-no-repeat bg-bottom cursor-pointer`}
      onClick={() => setBgimg(!bgimg)}
    >
      {image && (
        <img
          src={image}
          alt={name}
          // width={1}
          // height={1}
          className={`absolute left-0 right-0 bottom-0 w-full h-auto object-cover ${
            bgimg ? 'opacity-100' : 'opacity-0'
          } transition-all ease-in-out duration-300 pointer-events-none`}
        />
      )}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Gambetta
            weight
            gray
            className="hover:underline"
          >
            {name}
          </Gambetta>
          {status ? (
            <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-2">
              <p className="text-xs text-neutral-400">github</p>
              <span
                className={`${gambetta.className} font-extrabold absolute w-fit h-fit -top-6 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1  transition-all pointer-events-none text-xs whitespace-nowrap`}
              >
                Private
              </span>
            </div>
          ) : (
            <a
              href={repo}
              target="_blank"
              className="text-xs text-cyan-400 hover:underline"
            >
              github
            </a>
          )}
        </div>
        <div className="flex justify-end items-center gap-2">
          <div className="relative [&>div]:hover:opacity-100 [&>div]:hover:translate-y-2">
            <BiWrench />
            <div
              className={`${gambetta.className} z-30 flex flex-col justify-start items-start font-extrabold absolute w-fit h-fit top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all pointer-events-none text-sm whitespace-nowrap`}
            >
              {techs.map((t, i) => (
                <span key={i} className="text-cwhite">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {status || url === '' ? (
            <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-2">
              <MdClose className="text-xl" />
              <span
                className={`${gambetta.className} font-extrabold absolute w-fit h-fit -top-6 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all pointer-events-none text-xs whitespace-nowrap`}
              >
                No link
              </span>
            </div>
          ) : (
            <a
              href={url}
              target="_blank"
              className="w-fit h-fit p-1 hover:translate-x-1 hover:-translate-y-1 transition-all"
            >
              <LiaExternalLinkSquareAltSolid className="text-xl" />
            </a>
          )}
        </div>
      </div>
      <div className="relative">
        <p
          className={`${
            bgimg && 'opacity-0 pointer-events-none'
          } transition-all ease-in-out duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          {toggleDesc ? desc : shortenedDesc}
          {desc.length > 172 && (
            <span
              className="p-1 hover:underline text-cyan-400 text-xs"
              onClick={handleDesc}
            >
              Read {toggleDesc ? 'less' : 'more'}
            </span>
          )}
        </p>
        <span
          className={`absolute bottom-0 right-0 w-2 aspect-square rounded-full ${
            ud && status
              ? 'bg-neutral-400'
              : ud
              ? 'bg-yellow-400 animate-pulse'
              : 'bg-green-400 animate-pulse'
          }`}
        ></span>
      </div>
    </div>
  )
}

export default Project
