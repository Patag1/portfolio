'use client'

import { FC } from 'react'
import { articles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Gambetta from '@/components/ui/Gambetta'
import Link from 'next/link'
import YouTube from 'react-youtube'
import Title from '@/components/ui/Title'

interface pageProps {
  params: { id: string }
}

const page: FC<pageProps> = ({ params }) => {
  const { id } = params

  // @ts-ignore
  const article = articles.filter((a) => a.id == id)[0]

  if (!article) return notFound()

  return (
    <div>
      <div className="flex justify-between items-start gap-6">
        <Title text={article.title} className="wrap-balance" />
        <Gambetta small gray className="mt-1 whitespace-nowrap">
          {article.date}
        </Gambetta>
      </div>
      <p>{article.subtitle}</p>
      <div className="my-2 max-w-prose justify-center items-center overflow-hidden">
        {article.video && (
          <YouTube
            videoId={article.video}
            opts={{ width: '570', height: '321' }}
            className="my-2 border-y-2 border-cblack dark:border-cwhite"
          />
        )}
        {article.image && (
          <img
            src={article.image}
            alt={article.image}
            className="my-2 w-full aspect-video object-cover border-y-2 border-cblack dark:border-cwhite"
          />
        )}
      </div>
      {article.content.map((section, i) => (
        <div className="mb-4" key={i}>
          <Gambetta gray weight>
            {section.subtitle}
          </Gambetta>
          <p>{section.paragraph}</p>
        </div>
      ))}
      {article.source && (
        <div className="mt-2">
          <Gambetta small gray>
            source:
          </Gambetta>{' '}
          <Link
            href={article.source}
            className="text-xs text-cyan-400 hover:underline"
          >
            {article.source}
          </Link>
        </div>
      )}
    </div>
  )
}

export default page
