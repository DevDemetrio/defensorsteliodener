import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, navy } = colors

export const PageFrame = styled.div`min-height:100dvh;background:#edf3f0;color:${navy};`

export const MainGrid = styled.div`
  display:grid;grid-template-columns:minmax(210px,270px) minmax(480px,1fr) minmax(220px,290px);align-items:stretch;width:min(100%,1600px);margin-inline:auto;border-inline:1px solid ${border};background:#fff;
  @media(max-width:1050px){grid-template-columns:220px minmax(400px,1fr) 230px}
  @media(max-width:800px){display:flex;height:auto;width:100%;flex-direction:column;border:0}
`
