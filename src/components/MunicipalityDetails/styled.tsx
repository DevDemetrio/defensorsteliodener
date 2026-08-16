import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/tokens'

const { limeGreen } = colors

export const DetailLayout = styled.div`
  position:relative;z-index:1;display:grid;grid-template-columns:minmax(220px,.85fr) 1.15fr;gap:32px;align-items:stretch;
  @media(max-width:700px){grid-template-columns:1fr;gap:24px}
`

export const DetailImage = styled.img`
  width:100%;height:100%;min-height:300px;object-fit:cover;border-radius:14px;
  @media(max-width:700px){min-height:190px;max-height:260px}
`

export const DetailContent = styled.div`
  display:flex;align-items:flex-start;flex-direction:column;justify-content:center;>span{margin-top:22px;color:${limeGreen};font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h2{margin:8px 0 18px;color:#fff;font-size:clamp(2rem,4vw,3.5rem);line-height:1}small{color:rgba(255,255,255,.72);font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}>strong{margin-top:3px;color:${limeGreen};font-size:clamp(1.4rem,3vw,2rem)}
`

export const BackLink = styled(Link)`
  display:inline-flex;align-items:center;gap:7px;color:#fff;font-size:.78rem;font-weight:800;text-decoration:none;svg{font-size:1.1rem}&:hover{color:${limeGreen}}
`

export const HighlightList = styled.ul`
  display:grid;gap:8px;margin:22px 0 0;padding:0;list-style:none;li{position:relative;padding-left:18px;color:rgba(255,255,255,.78);font-size:.82rem;line-height:1.45}li::before{position:absolute;left:0;top:.55em;width:7px;height:7px;border-radius:50%;background:${limeGreen};content:''}
`
