import Title from '@/components/ui/Title'
// import Loader from '@/components/Loader'
import Gambetta from '@/components/ui/Gambetta'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Title text="What do I do?" gray />
      <p>
        I help startups and businesses{' '}
        <Gambetta remark weight>
          grow
        </Gambetta>
        , understanding the challenges and opportunities that arise in the tech
        industry, being passionate about helping companies like yours{' '}
        <Gambetta remark weight>
          thrive
        </Gambetta>{' '}
        in this ever-evolving landscape.
      </p>
      <br />
      <Title text="Projects" gray />
      <p>
        Please note that most of my most complex projects are private startup
        initiatives. Don&apos;t be fooled!
      </p>
      <br />
      <Projects />
    </>
  )
}
