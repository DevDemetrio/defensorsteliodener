import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, navy } = colors

export const ProposalList = styled.div`display:grid;gap:8px;`
export const ProposalItem = styled.article`
  display:grid;gap:5px;padding:15px;border:1px solid ${border};border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(31,73,49,.04);strong{color:${green};font-size:.72rem}span{color:${navy};font-size:.78rem;font-weight:750;line-height:1.35}
  @media(max-width:800px){padding:18px;strong{font-size:.86rem}span{font-size:.95rem}}
`

export const Pagination = styled.nav`
  display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px;
`

export const PageButton = styled.button`
  display:grid;width:44px;height:44px;flex:0 0 44px;place-items:center;padding:0;border:1px solid ${green};border-radius:50%;background:transparent;color:${green};cursor:pointer;transition:background .2s ease,color .2s ease;&:hover:not(:disabled){background:${green};color:#fff}svg{font-size:1.65rem}&:disabled{border-color:${border};color:#a8b4ae;cursor:not-allowed;opacity:.7}
  @media(max-width:480px){width:40px;height:40px;flex-basis:40px}
`

export const PageIndicator = styled.span`
  color:${navy};font-size:.68rem;font-weight:850;white-space:nowrap;
`
