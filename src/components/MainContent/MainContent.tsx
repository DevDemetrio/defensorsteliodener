import { useLocation } from 'react-router-dom'
import { Biography } from '../Biography'
import { HeroSection } from '../HeroSection/HeroSection'
import { InvestmentsSection } from '../InvestmentsSection/InvestmentsSection'
import { ProjectsSection } from '../ProjectsSection/ProjectsSection'
import { ShellColumn } from '../ShellColumn/ShellColumn'

export function MainContent() {
  const { pathname } = useLocation()

  if (pathname === '/biografia') return <ShellColumn label="Biografia" region="center"><Biography /></ShellColumn>

  return <ShellColumn label="Mandato em números" region="center"><HeroSection /><InvestmentsSection /><ProjectsSection /></ShellColumn>
}
