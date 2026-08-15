import { featuredProjects } from '../../mocks'
import { ProjectCard, ProjectGrid, SectionHeading } from './styled'

export function ProjectsSection() {
  return <section id="projetos"><SectionHeading><span>Projetos em destaque</span><h2>Presença que transforma.</h2></SectionHeading><ProjectGrid>{featuredProjects.map(item => <ProjectCard key={item.title}><div><small>{item.value}</small><h3>{item.title}</h3></div><p>{item.description}</p></ProjectCard>)}</ProjectGrid></section>
}
