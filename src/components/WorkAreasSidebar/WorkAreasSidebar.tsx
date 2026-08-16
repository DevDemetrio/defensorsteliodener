import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useState } from 'react'
import { workAreas } from '../../mocks'
import { ShellColumn } from '../ShellColumn/ShellColumn'
import { AreaItem, AreaList, PageButton, PageIndicator, Pagination } from './styled'

const AREAS_PER_PAGE = 8

export function WorkAreasSidebar() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(workAreas.length / AREAS_PER_PAGE)
  const firstAreaIndex = (currentPage - 1) * AREAS_PER_PAGE
  const visibleAreas = workAreas.slice(firstAreaIndex, firstAreaIndex + AREAS_PER_PAGE)

  return (
    <ShellColumn disableInternalScroll label="Áreas de atuação" region="right">
      <AreaList>{visibleAreas.map((item, index) => <AreaItem key={item.name}><span>{String(firstAreaIndex + index + 1).padStart(2, '0')}</span><div><strong>{item.name}</strong><p>{item.detail}</p></div></AreaItem>)}</AreaList>
      <Pagination aria-label="Paginação das áreas de atuação">
        <PageButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)} aria-label="Página anterior"><ChevronLeftRoundedIcon /></PageButton>
        <PageIndicator aria-live="polite">{currentPage} de {totalPages}</PageIndicator>
        <PageButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage(page => page + 1)} aria-label="Próxima página"><ChevronRightRoundedIcon /></PageButton>
      </Pagination>
    </ShellColumn>
  )
}
