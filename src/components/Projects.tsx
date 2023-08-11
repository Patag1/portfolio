import { projects } from '@/lib/projects'
import { FC } from 'react'
import Gambetta from './ui/Gambetta'
import { MdClose } from 'react-icons/md'
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia'
import { BiWrench } from 'react-icons/bi'
import { gambetta } from '@/fonts/Fonts'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="mb-2 grid md:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-4">
      {projects.map((p, i) => (
        <div
          className="grid grid-cols-1 grid-rows-[auto_1fr] gap-2 p-4 border-[1px] border-neutral-300 dark:border-cwhite"
          key={i}
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Gambetta weight gray>
                {p.name}
              </Gambetta>
              {p.private ? (
                <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-2">
                  <p className="text-xs text-neutral-400">github</p>
                  <span
                    className={`${gambetta.className} font-extrabold absolute w-fit h-fit -top-6 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black bg-opacity-75text-gray-200 px-2 py-1  transition-all pointer-events-none text-xs whitespace-nowrap`}
                  >
                    Private
                  </span>
                </div>
              ) : (
                <a
                  href={p.repo}
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
                  className={`${gambetta.className} z-30 flex flex-col justify-start items-start font-extrabold absolute w-fit h-fit top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 bg-black text-cwhite px-2 py-1 transition-all pointer-events-none text-xs whitespace-nowrap`}
                >
                  {p.techs.map((t, i) => (
                    <span key={i} className='text-cwhite'>{t}</span>
                  ))}
                </div>
              </div>
              {p.private || p.url === '' ? (
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
                  href={p.url}
                  target="_blank"
                  className="w-fit h-fit p-1 hover:translate-x-1 hover:-translate-y-1 transition-all"
                >
                  <LiaExternalLinkSquareAltSolid className="text-xl" />
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            <p>{p.desc}</p>
            {p.ud && (
              <span className="absolute bottom-0 right-0 text-xs text-gray-400">
                under development
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
