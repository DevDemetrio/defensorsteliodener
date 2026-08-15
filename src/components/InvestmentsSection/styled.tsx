import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, navy } = colors

export const SectionHeading = styled.header`
  margin:54px 0 24px;>span{color:${green};font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h2{margin:8px 0 12px;color:${navy};font-size:clamp(1.7rem,3vw,2.8rem);line-height:1.08;letter-spacing:-.04em}p{max-width:620px;margin:0;color:#687971;font-size:.85rem;line-height:1.6}
`
export const InvestmentGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;@media(max-width:620px){grid-template-columns:1fr}`
export const InvestmentCard = styled.article`
  min-height:190px;padding:22px;border:1px solid ${border};border-top:5px solid ${green};border-radius:12px;background:#fff;box-shadow:0 12px 28px rgba(31,73,49,.07);small{color:${green};font-size:.82rem;font-weight:900}h3{margin:24px 0 9px;color:${navy};font-size:1.15rem}p{margin:0;color:#65776e;font-size:.76rem;line-height:1.55}
`
