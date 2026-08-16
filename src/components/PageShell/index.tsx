import { InstitutionalFooter } from '../Footer/Footer'
import { InstitutionalHeader } from '../Header/Header'
import { MainContent } from '../MainContent/MainContent'
import { ProposalsSidebar } from '../ProposalsSidebar/ProposalsSidebar'
import { WorkAreasSidebar } from '../WorkAreasSidebar/WorkAreasSidebar'
import { MainGrid, PageFrame } from './styles'

export function PageShell() {
  return <PageFrame><InstitutionalHeader /><MainGrid><ProposalsSidebar /><MainContent /><WorkAreasSidebar /></MainGrid><InstitutionalFooter /></PageFrame>
}
