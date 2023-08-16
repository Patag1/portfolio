'use client'

import { FC } from 'react'
import { articles } from '@/lib/articles'
import Title from '@/components/ui/Title'
import Gambetta from '@/components/ui/Gambetta'
import YouTube from 'react-youtube'
import Link from 'next/link'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <>
      {articles.map((a, i) => (
        <div key={i}>
          <div className="flex justify-between gap-6">
            <Link
              href={`/blog/${a.id}`}
              className="hover:text-neutral-500 dark:text-neutral-400 hover:underline transition-all ease-in-out duration-300"
            >
              <Title text={a.title} gray className="wrap-balance" />
            </Link>
            <Gambetta small gray className="mt-1 whitespace-nowrap">
              {a.date}
            </Gambetta>
          </div>
          <p>{a.subtitle}</p>
          <div className="my-2 max-w-prose justify-center items-center overflow-hidden">
            {a.video && (
              <YouTube
                videoId={a.video}
                opts={{ width: '570', height: '321' }}
                className="my-2 border-y-2 border-cblack dark:border-cwhite"
              />
            )}
            {a.image && (
              <img
                src={a.image}
                alt={a.image}
                className="my-2 w-full aspect-video object-cover border-y-2 border-cblack dark:border-cwhite"
              />
            )}
          </div>
          <div className="mb-4">
            <Gambetta gray weight>
              {a.content[0].subtitle}
            </Gambetta>
            <p>{a.content[0].paragraph}</p>
          </div>
          {a.source && (
            <div className="mt-2">
              <Gambetta small gray>
                source:
              </Gambetta>{' '}
              <Link
                href={a.source}
                className="text-xs text-cyan-400 hover:underline"
              >
                {a.source}
              </Link>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Page
