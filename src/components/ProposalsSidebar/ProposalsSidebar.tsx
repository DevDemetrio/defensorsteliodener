import { authoredProposals } from '../../mocks'
import { ShellColumn } from '../ShellColumn/ShellColumn'
import { ProposalItem, ProposalList } from './styled'

export function ProposalsSidebar() {
  return <ShellColumn label="Propostas de minha autoria" region="left"><ProposalList>{authoredProposals.map(proposal => <ProposalItem key={proposal.id}><strong>{proposal.code}</strong><span>{proposal.keywords}</span></ProposalItem>)}</ProposalList></ShellColumn>
}
