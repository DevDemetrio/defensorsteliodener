import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/tokens'

const { limeGreen, navy } = colors

export const CarouselContainer = styled.div`
  display:grid;grid-template-columns:44px minmax(0,320px) 44px;align-items:center;justify-content:center;gap:12px;width:100%;margin-top:28px;
  @media(min-width:1025px){grid-template-columns:44px minmax(0,340px) 44px}
  @media(max-width:480px){grid-template-columns:40px minmax(0,1fr) 40px;gap:8px}
`

export const CarouselViewport = styled.div`
  width:100%;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;scrollbar-width:none;touch-action:pan-x;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none}
`

export const CarouselTrack = styled.div`
  display:flex;width:100%;
`

export const CarouselItem = styled(Link)`
  position:relative;display:grid;min-height:190px;flex:0 0 100%;overflow:hidden;place-items:end center;scroll-snap-align:center;border-radius:12px;background:${navy};color:#fefefe;
  text-decoration:none;
  @media(min-width:1025px){min-height:210px}
  @media(max-width:600px){min-height:160px;border-radius:10px}
`

export const CarouselImage = styled.img`
  position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.38;
`

export const CarouselContent = styled.div`
  position:relative;z-index:1;display:grid;width:100%;justify-items:center;gap:2px;padding:24px 24px 54px;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.65);span{margin-bottom:3px;font-size:clamp(1.35rem,3vw,1.8rem);font-weight:800;line-height:1.1}small{color:rgba(255,255,255,.82);font-size:.72rem;font-weight:700;letter-spacing:.08em;line-height:1.1;text-transform:uppercase}strong{color:${limeGreen};font-size:clamp(1.05rem,2.5vw,1.4rem);font-weight:800;line-height:1.1}
`

export const CarouselFooter = styled.div`
  position:absolute;z-index:2;right:0;bottom:0;left:0;display:grid;min-height:36px;place-items:center;background:${limeGreen};color:${navy};font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
`

export const CarouselButton = styled.button`
  display:grid;width:44px;height:44px;place-items:center;padding:0;border:1px solid rgba(255,255,255,.7);border-radius:50%;background:transparent;color:#fff;cursor:pointer;transition:background .2s ease,color .2s ease;&:hover{background:${limeGreen};color:${navy}}svg{font-size:1.65rem}
  @media(max-width:480px){width:40px;height:40px}
`
