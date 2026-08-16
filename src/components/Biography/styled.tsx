import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, limeGreen, navy } = colors

export const BiographyLayout = styled.article`
  display:grid;gap:28px;color:${navy};
`

export const BiographyHeader = styled.header`
  padding-bottom:22px;border-bottom:1px solid ${border};span{color:${green};font-size:.72rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}h1{margin:7px 0 10px;font-size:clamp(2.2rem,5vw,4.4rem);line-height:.95}p{max-width:680px;margin:0;color:rgba(17,45,35,.72);font-size:1rem;line-height:1.6}
`

export const BiographyContent = styled.div`
  display:grid;grid-template-columns:minmax(220px,.72fr) minmax(0,1.28fr);gap:32px;align-items:start;
  @media(max-width:700px){grid-template-columns:1fr;gap:24px}
`

export const BiographyPicture = styled.picture`
  position:sticky;top:74px;display:block;overflow:hidden;border-radius:16px;background:${green};
  @media(max-width:700px){position:static;max-height:520px}
`

export const BiographyImage = styled.img`
  display:block;width:100%;height:auto;object-fit:cover;
  @media(max-width:700px){width:100%;height:100%;object-position:center 22%}
`

export const BiographyText = styled.div`
  display:grid;gap:15px;p{margin:0;color:rgba(17,45,35,.82);font-size:.94rem;line-height:1.72}
`

export const BiographyClosing = styled.strong`
  margin-top:8px;padding:18px 20px;border-left:5px solid ${limeGreen};border-radius:0 10px 10px 0;background:${green};color:#fff;font-size:1.15rem;
`
