import './globals.css'
import { poppins } from '../fonts/Fonts'
import Header from '@/components/ui/Header'
import SideMenu from '@/components/SideMenu'
import Loader from '@/components/Loader'
import Provider from '@/components/Provider'

export const metadata = {
  title: 'Augusto S',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-cwhite dark:bg-cblack text-cblack dark:text-cwhite transition-all overflow-hidden`}
      >
        <Provider>
          <main className="w-fit mx-auto px-6 py-2 my-32 grid grid-rows-[min-content_1fr] grid-cols-1 md:border-x-2 border-cblack dark:border-cwhite">
            <Header />
            <br />
            <article className="grid grid-cols-[1fr_min-content] grid-rows-1 gap-6">
              <div className="max-w-prose">
                {children}
                <hr className="my-4 bg-neutral-300 dark:bg-cwhite" />
                <iframe
                  className="rounded-xl"
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
