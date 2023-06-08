import { FC } from 'react'
import Container from '../components/Container'
import Header from '../components/ui/Header'
import ContactForm from '../components/ContactForm'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div className='bg-neutral-900 w-full h-full'>
    <Container width='w-full' className='relative animate-fade-up animate-once animate-duration-1000 animate-delay-500'>
      <Header size={'xl'} className='absolute -top-20 left-8 text-neutral-400'>LET&apos;S TALK, LET&apos;S DO</Header>
      <div className='absolute top-56 left-9 right-9'>
        <p className='mb-6 text-sm font-[Gambetta] text-neutral-400'>Let&apos;s make your brand <span className='font-extrabold'>glow</span></p>
        <ContactForm className='flex justify-center items-start flex-col' />
      </div>
    </Container>
  </div>
}

export default page
