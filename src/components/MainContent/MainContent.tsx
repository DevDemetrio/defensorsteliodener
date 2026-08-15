import { HeroSection } from '../HeroSection/HeroSection'
import { InvestmentsSection } from '../InvestmentsSection/InvestmentsSection'
import { ProjectsSection } from '../ProjectsSection/ProjectsSection'
import { ShellColumn } from '../ShellColumn/ShellColumn'

export function MainContent() {
  return <ShellColumn label="Mandato em números" region="center"><HeroSection /><InvestmentsSection /><ProjectsSection /></ShellColumn>
}
