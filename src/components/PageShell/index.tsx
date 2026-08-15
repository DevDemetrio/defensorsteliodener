import { InstitutionalFooter } from '../Footer/Footer'
import { InstitutionalHeader } from '../Header/Header'
import { MainContent } from '../MainContent/MainContent'
import { MunicipalitiesSidebar } from '../MunicipalitiesSidebar/MunicipalitiesSidebar'
import { WorkAreasSidebar } from '../WorkAreasSidebar/WorkAreasSidebar'
import { MainGrid, PageFrame } from './styles'

export function PageShell() {
  return <PageFrame><InstitutionalHeader /><MainGrid><MunicipalitiesSidebar /><MainContent /><WorkAreasSidebar /></MainGrid><InstitutionalFooter /></PageFrame>
}
