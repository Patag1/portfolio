import Image from 'next/image'
import { FC } from 'react'
import Container from '../components/Container'
import Header from '../components/ui/Header'
import { Icons } from '../components/Icons'
import Gambetta from '../components/ui/Gambetta'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <Container width='w-full' className='animate-fade-up animate-once animate-duration-1000 animate-delay-500'>
    <div className='relative p-2 flex justify-start items-center'>
      <Header size={'xl'} className='absolute lg:left-44 left-24 text-neutral-400'>ABOUT</Header>
      <Image
        src='/Selfie1.png'
        alt='profile-pic'
        width={200}
        height={200}
        className='lg:w-52 w-32 ml-8 pr-2 pt-2 saturate-0 hover:saturate-100 transition-all duration-500 ease-in-out profile-pic'
      />
    </div>
    <div className='lg:w-11/12 w-full px-8 pt-4'>
      <p className='font-[Gambetta] text-sm italic text-neutral-400 mb-2 rounded-sm'>What I do</p>
      <p className='text-neutral-50 text-4xl font-light'>
        I help startups and businesses <Gambetta size='lg' weight='on' color='white'>grow</Gambetta>, understanding the challenges and opportunities that arise in the tech industry, being passionate about helping companies like yours <Gambetta size='lg' weight='on' color='white'>thrive</Gambetta> in this ever-evolving landscape.
      </p>
      <div className='h-1 w-full my-4 bg-neutral-400'></div>
    </div>
    <div className='lg:w-11/12 w-full px-8 flex justify-start items-start gap-16'>
      <div>
        <div className='flex justify-start items-center gap-1'>
          <Icons.Paintbrush2 size={20} className='text-neutral-50' />
          <p className='text-neutral-50 text-2xl font-light'>Front-end</p>
        </div>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Tailwind</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Typescript</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Next.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Zustand</Gambetta>
          </div>
        </div>

      </div>
      <div>
        <div className='flex justify-start items-center gap-1'>
          <Icons.Wrench size={20} className='text-neutral-50' />
          <p className='text-neutral-50 text-2xl font-light'>Back-end</p>
        </div>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Node.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Express.js</Gambetta>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>Prisma</Gambetta>
          </div>
        </div>

      </div>
      <div>
        <div className='flex justify-start items-center gap-1'>
          <Icons.Database size={20} className='text-neutral-50' />
          <p className='text-neutral-50 text-2xl font-light'>Databases</p>
        </div>
        <div className='mt-1 flex justify-center items-start flex-col'>
          <div className='flex justify-start items-center gap-1'>
            <Icons.Dot size={10} className='text-neutral-50' />
            <Gambetta size='sm' weight='' color='gray'>PostgreSQL</Gambetta>
          </div>
        </div>
      </div>
    </div>
  </Container>
}

export default page