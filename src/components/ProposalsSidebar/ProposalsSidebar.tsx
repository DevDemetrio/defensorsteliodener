import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useState } from 'react'
import { authoredProposals } from '../../mocks'
import { ShellColumn } from '../ShellColumn/ShellColumn'
import { PageButton, PageIndicator, Pagination, ProposalItem, ProposalList } from './styled'

const PROPOSALS_PER_PAGE = 8

export function ProposalsSidebar() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(authoredProposals.length / PROPOSALS_PER_PAGE)
  const firstProposalIndex = (currentPage - 1) * PROPOSALS_PER_PAGE
  const visibleProposals = authoredProposals.slice(firstProposalIndex, firstProposalIndex + PROPOSALS_PER_PAGE)

  return (
    <ShellColumn disableInternalScroll label="Minhas Propostas" region="left">
      <ProposalList>{visibleProposals.map(proposal => <ProposalItem key={proposal.id}><strong>{proposal.code}</strong><span>{proposal.keywords}</span></ProposalItem>)}</ProposalList>
      <Pagination aria-label="Paginação das propostas">
        <PageButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)} aria-label="Página anterior"><ChevronLeftRoundedIcon /></PageButton>
        <PageIndicator aria-live="polite">{currentPage} de {totalPages}</PageIndicator>
        <PageButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage(page => page + 1)} aria-label="Próxima página"><ChevronRightRoundedIcon /></PageButton>
      </Pagination>
    </ShellColumn>
  )
}
