import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { darkGreen, limeGreen } = colors

export const FooterContainer = styled.footer`position:relative;z-index:1;padding:56px max(24px,calc((100vw - 1440px)/2)) 24px;border-top:7px solid ${limeGreen};background:${darkGreen};color:#fff;`
export const FooterGrid = styled.div`
  display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:48px;padding-bottom:48px;>div{display:grid;align-content:start;gap:14px}strong{color:${limeGreen};font-size:.9rem}span{max-width:360px;color:rgba(255,255,255,.62);font-size:.78rem;line-height:1.6}@media(max-width:680px){grid-template-columns:1fr;gap:28px;padding-bottom:36px}
`
export const FooterBottom = styled.div`
  display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.48);font-size:.7rem;@media(max-width:520px){align-items:flex-start;flex-direction:column;gap:10px}
`

export const SocialLinks = styled.nav`
  display:flex;align-items:center;gap:12px;margin-top:6px;a{display:grid;width:42px;height:42px;place-items:center;border:1px solid rgba(255,255,255,.28);border-radius:50%;color:#fff;text-decoration:none;transition:background .2s ease,border-color .2s ease,color .2s ease}a:hover{border-color:${limeGreen};background:${limeGreen};color:${darkGreen}}svg{font-size:1.35rem}@media(max-width:520px){gap:10px;a{width:40px;height:40px}}
`
