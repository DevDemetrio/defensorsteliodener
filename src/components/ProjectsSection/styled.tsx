import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { green, limeGreen, navy } = colors

export const SectionHeading = styled.header`
  margin:54px 0 24px;>span{color:${green};font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h2{margin:8px 0 12px;color:${navy};font-size:clamp(1.7rem,3vw,2.8rem);line-height:1.08;letter-spacing:-.04em}
`
export const ProjectGrid = styled.div`display:grid;gap:12px;padding-bottom:30px;`
export const ProjectCard = styled.article`
  display:grid;grid-template-columns:minmax(190px,.75fr) 1.25fr;gap:24px;align-items:center;padding:22px;border-radius:12px;background:${navy};color:#fff;small{color:${limeGreen};font-size:.72rem;font-weight:900}h3{margin:6px 0 0;font-size:1.08rem}p{margin:0;color:rgba(255,255,255,.7);font-size:.76rem;line-height:1.55}@media(max-width:560px){grid-template-columns:1fr;gap:12px}
`
