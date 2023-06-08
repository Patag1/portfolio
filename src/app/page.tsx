import Link from 'next/link'
import Header from './components/ui/Header'
import Loader from './components/Loader'

export default function Home() {
  return (
    <main className='relative h-screen w-full overflow-y-hidden'>
      <Loader />
      <video
        src={'/landingvideo.mp4'}
        autoPlay
        loop
        muted
        className='absolute top-0 w-full h-screen -z-10 object-cover'
      ></video>
      <Header size={'xl'} className='absolute -bottom-20 right-2 text-right text-neutral-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[5000ms]'>FRONT-END DEVELOPER</Header>
    </main>
  )
}
