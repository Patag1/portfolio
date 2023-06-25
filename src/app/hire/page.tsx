import { FC } from 'react'
import Container from '../components/Container'
import Header from '../components/ui/Header'
import ContactForm from '../components/ContactForm'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div className='bg-neutral-900 w-full h-full'>
    <Container width='w-full' className='relative animate-fade-up animate-once animate-duration-1000 animate-delay-500 pt-8'>
      <article className='w-11/12 grid grid-cols-1 grid-rows-[auto_1fr] gap-8'>
        <Header size={'xl'} className=' text-neutral-400'>LET&apos;S TALK, LET&apos;S DO</Header>
        <div>
          <p className='mb-6 text-sm font-[Gambetta] italic text-neutral-400'>Let&apos;s make your brand <span className='font-extrabold'>glow</span></p>
          <ContactForm className='flex justify-center items-start flex-col' />
        </div>
      </article>
    </Container>
  </div>
}

export default page
