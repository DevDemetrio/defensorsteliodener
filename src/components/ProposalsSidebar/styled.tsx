import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, navy } = colors

export const ProposalList = styled.div`display:grid;gap:8px;`
export const ProposalItem = styled.article`
  display:grid;gap:5px;padding:15px;border:1px solid ${border};border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(31,73,49,.04);strong{color:${green};font-size:.72rem}span{color:${navy};font-size:.78rem;font-weight:750;line-height:1.35}
  @media(max-width:800px){padding:18px;strong{font-size:.86rem}span{font-size:.95rem}}
`
