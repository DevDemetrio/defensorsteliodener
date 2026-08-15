import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, navy } = colors

export const MunicipalityList = styled.div`display:grid;gap:8px;`
export const MunicipalityItem = styled.article`
  display:grid;gap:5px;padding:15px;border:1px solid ${border};border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(31,73,49,.04);span{color:${navy};font-size:.82rem;font-weight:800}strong{color:${green};font-size:.7rem}
  @media(max-width:800px){padding:18px;span{font-size:1rem}strong{font-size:.82rem}}
`
