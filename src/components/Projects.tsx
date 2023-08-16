import { projects } from '@/lib/projects'
import { FC } from 'react'
import Project from './Project'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="mb-2 grid md:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-4">
      {projects.map((p, i) => (
        <Project project={p} key={i} />
      ))}
    </div>
  )
}

export default Projects
