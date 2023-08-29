'use client'

import { FC, useEffect } from 'react'
import { store } from '@/store/store'
import Title from './Title'
import Image from 'next/image'
import Gambetta from './Gambetta'
import { MdClose } from 'react-icons/md'
import useSound from 'use-sound'
import { useTranslation } from 'react-i18next'

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  const { modalData, closeModal } = store()

  const [play, { stop }] = useSound('/audios/hover.mp3')

  const [t] = useTranslation('global')

  if (!modalData) return null

  const { name, image, desc, descEN, url, repo, techs, status, ud } = modalData

  const english = t('menu.lang') === 'EN'

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 flex items-center bg-cblack/10 dark:bg-cwhite/10 overflow-hidden"
      onClick={closeModal}
    >
      <div
        className="animate-fade-up animate-once animate-duration-300 relative mx-auto p-8 bg-cwhite dark:bg-cblack md:border-2 border-y-2 border-cblack dark:border-cwhite aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="mb-4">
            <Title text={name} large />
            <div className="border-b-[1px] border-cblack dark:border-cwhite" />
          </div>
          <div className="flex md:flex-row flex-col items-start gap-8">
            <div className="flex flex-col gap-4">
              {image && (
                <Image
                  src={image}
                  alt={name}
                  width={1}
                  height={1}
                  className="md:w-96 w-full aspect-video object-cover object-center border-[1px] border-cblack dark:border-cwhite"
                />
              )}
              <p className="whitespace-normal md:w-96 w-full">
                {english ? descEN : desc}
              </p>
            </div>
            <div className="w-full flex flex-col gap-8">
              <div className="w-full flex md:flex-col justify-between md:gap-4">
                <div>
                  <Gambetta weight gray>
                    {english ? 'Technologies' : 'Tecnologías'}
                  </Gambetta>
                  <ul>
                    {techs.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      onMouseEnter={() => play()}
                      onMouseLeave={() => stop()}
                    >
                      <Gambetta weight remark>
                        Demo
                      </Gambetta>
                    </a>
                  ) : (
                    <Gambetta weight gray>
                      {english ? 'No demo' : 'Sin demo'}
                    </Gambetta>
                  )}
                  {status ? (
                    <Gambetta weight gray>
                      {english ? 'Private repo' : 'Repo privado'}
                    </Gambetta>
                  ) : (
                    <a
                      href={repo}
                      target="_blank"
                      onMouseEnter={() => play()}
                      onMouseLeave={() => stop()}
                    >
                      <Gambetta weight remark>
                        {english ? 'Public repo' : 'Repo público'}
                      </Gambetta>
                    </a>
                  )}
                  <Gambetta weight gray={ud} remark={!ud}>
                    {english && ud
                      ? 'Under development'
                      : english && !ud
                      ? 'Complete'
                      : ud
                      ? 'En desarrollo'
                      : 'Completado'}
                  </Gambetta>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MdClose
          className="absolute top-8 right-8 text-2xl cursor-pointer"
          onClick={closeModal}
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        />
      </div>
    </div>
  )
}

export default Modal
