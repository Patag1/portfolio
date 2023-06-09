import Image from 'next/image'
import { FC } from 'react'
import Container from '../components/Container'
import Header from '../components/ui/Header'
import { Dot } from 'lucide-react'
import Gambetta from '../components/ui/Gambetta'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <Container width='w-full' className='animate-fade-up animate-once animate-duration-1000 animate-delay-500'>
    <div className='relative ml-9 flex justify-between items-center w-11/12'>
      <Header size={'xl'} className='text-neutral-400'>ABOUT</Header>
      <Image
        src='/Selfie1.png'
        alt='profile-pic'
        width={200}
        height={200}
        className='lg:w-44 w-32 h-full saturate-0'
      />
    </div>
    <div className='lg:w-11/12 w-full px-8 pt-2'>
      <Gambetta size='sm' weight='' color='gray' className=''>What I do</Gambetta>
      <p className='text-neutral-50 text-4xl font-light mt-3'>
        I help startups and businesses <Gambetta size='lg' weight='on' color='white' className=''>grow</Gambetta>, understanding the challenges and opportunities that arise in the tech industry, being passionate about helping companies like yours <Gambetta size='lg' weight='on' color='white' className=''>thrive</Gambetta> in this ever-evolving landscape.
      </p>
      <div className='h-1 w-full my-4 bg-neutral-400'></div>
    </div>
    <div className='lg:w-11/12 w-full px-8 flex justify-start items-start gap-16'>
      <div>
        <p className='text-neutral-50 text-2xl font-light'>Front-end</p>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Tailwind</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Typescript</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Next.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Zustand</Gambetta>
          </div>
        </div>

      </div>
      <div>
        <p className='text-neutral-50 text-2xl font-light'>Back-end</p>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Node.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Express.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>Prisma</Gambetta>
          </div>
        </div>

      </div>
      <div>
        <p className='text-neutral-50 text-2xl font-light'>Databases</p>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray' className=''>PostgreSQL</Gambetta>
          </div>
        </div>
      </div>
    </div>
  </Container>
}

export default page
