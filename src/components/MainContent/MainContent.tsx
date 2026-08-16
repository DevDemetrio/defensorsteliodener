import { useLocation, useParams } from 'react-router-dom'
import { Biography } from '../Biography'
import { HeroSection } from '../HeroSection/HeroSection'
import { InvestmentsSection } from '../InvestmentsSection/InvestmentsSection'
import { NewsSection } from '../NewsSection/NewsSection'
import { NewsDetails } from '../NewsSection/NewsDetails'
import { ProjectsSection } from '../ProjectsSection/ProjectsSection'
import { ShellColumn } from '../ShellColumn/ShellColumn'

export function MainContent() {
  const { pathname } = useLocation()
  const { newsId } = useParams()

  if (pathname === '/biografia') return <ShellColumn label="Biografia" region="center"><Biography /></ShellColumn>
  if (newsId) return <ShellColumn label="Notícias" region="center"><NewsDetails newsId={newsId} /></ShellColumn>
  if (pathname === '/noticias') return <ShellColumn label="Notícias" region="center"><NewsSection /></ShellColumn>

  return <ShellColumn label="Mandato em números" region="center"><HeroSection /><InvestmentsSection /><ProjectsSection /></ShellColumn>
}
