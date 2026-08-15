import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, limeGreen, navy } = colors

export const AreaList = styled.div`display:grid;gap:10px;`
export const AreaItem = styled.article`
  display:grid;grid-template-columns:32px 1fr;gap:10px;padding:14px 12px;border-bottom:1px solid ${border};>span{color:${limeGreen};font-size:.72rem;font-weight:900}strong{color:${navy};font-size:.82rem}p{margin:5px 0 0;color:#687971;font-size:.68rem;line-height:1.45}
  @media(max-width:800px){grid-template-columns:38px 1fr;gap:12px;padding:18px 8px;>span{font-size:.82rem}strong{font-size:1rem}p{font-size:.82rem;line-height:1.55}}
`
