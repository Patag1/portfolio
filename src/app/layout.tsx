import './globals.css'
import { poppins } from '../fonts/Fonts'
import Header from '@/components/ui/Header'
import SideMenu from '@/components/SideMenu'
import Loader from '@/components/Loader'
import Provider from '@/components/Provider'
import Title from '@/components/ui/Title'
import Head from 'next/head'

export const metadata = {
  title: 'AS | portfolio',
  description: 'Made with love and style by Augusto Sasso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/audios/hover.mp3" as="audio" />
        <link rel="preload" href="/audios/hover1.mp3" as="audio" />
        <meta name="view-transition" content="same-origin" />
      </Head>
      <body
        className={`
          ${poppins.className}
          bg-cwhite
          dark:bg-cblack
          text-cblack
          dark:text-cwhite
          transition-all
          ease-in-out
          duration-300
          overflow-hidden
          select-none
        `}
      >
        <Provider>
          <main className="w-fit mx-auto px-6 py-2 my-32 grid grid-rows-[min-content_1fr] grid-cols-1 md:border-x-2 border-cblack dark:border-cwhite">
            <Header />
            <br />
            <article className="grid grid-cols-[1fr_min-content] grid-rows-1 gap-6">
              <div className="max-w-prose">
                {children}
                <div className="my-4 border-b-[1px] border-cblack dark:border-cwhite" />
                <Title text="Playlist" />
                <iframe
                  className="rounded-xl mt-2"
                  src="https://open.spotify.com/embed/playlist/66cYkZTFtuwp17Q53KR8qn?utm_source=generator"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <SideMenu />
            </article>
          </main>
        </Provider>
        <Loader />
      </body>
    </html>
  )
}
