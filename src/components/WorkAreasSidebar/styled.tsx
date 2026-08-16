import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, limeGreen, navy } = colors

export const AreaList = styled.div`display:grid;gap:10px;`
export const AreaItem = styled.article`
  display:grid;grid-template-columns:32px 1fr;gap:10px;padding:14px 12px;border-bottom:1px solid ${border};>span{color:${limeGreen};font-size:.72rem;font-weight:900}strong{color:${navy};font-size:.82rem}p{margin:5px 0 0;color:#687971;font-size:.68rem;line-height:1.45}
  @media(max-width:800px){grid-template-columns:38px 1fr;gap:12px;padding:18px 8px;>span{font-size:.82rem}strong{font-size:1rem}p{font-size:.82rem;line-height:1.55}}
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
