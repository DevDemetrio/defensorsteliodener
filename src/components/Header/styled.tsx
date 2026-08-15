import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, darkGreen, green, limeGreen, navy } = colors

export const BrandBar = styled.div`
  position:relative;border-bottom:1px solid ${border};
`

export const Header = styled.header`position:relative;z-index:2;background:#fff;box-shadow:0 3px 18px rgba(31,73,49,.08);`

export const HeaderBanner = styled.a`
  display:block;width:100%;overflow:hidden;background:${darkGreen};text-decoration:none;
  picture{display:block;width:100%}
  img{display:block;width:100%;height:auto}
  @media(max-width:1024px){img{aspect-ratio:744/220}}
  @media(max-width:600px){img{aspect-ratio:375/140}}
`

export const HighlightsBar = styled.div`
  display:grid;grid-template-columns:repeat(5,1fr);min-height:82px;border-bottom:1px solid ${border};background:linear-gradient(110deg,#f6faf8,#fff);
  >div{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:13px 18px;border-right:1px solid ${border};text-align:center}>div:last-child{border:0}strong{color:${green};font-size:1.05rem}span{max-width:150px;margin-top:4px;color:#63746b;font-size:.64rem;line-height:1.3}
  @media(max-width:800px){grid-template-columns:repeat(2,1fr);>div{display:none}>div:nth-child(-n+2){display:flex}}
`

export const MenuButton = styled.button`
  display:none;width:42px;height:42px;place-items:center;padding:0;border:1px solid rgba(255,255,255,.3);border-radius:10px;background:rgba(31,73,49,.78);color:#fff;cursor:pointer;transition:background .2s ease;&:hover{background:${navy}}&:focus-visible{outline:3px solid ${limeGreen};outline-offset:2px}
  @media(max-width:780px){position:absolute;z-index:2;top:50%;right:12px;display:grid;transform:translateY(-50%)}
`

export const MobileNavigation = styled.nav<{ $open:boolean }>`
  display:none;
  @media(max-width:780px){display:grid;grid-template-rows:${({$open})=>$open?'1fr':'0fr'};visibility:${({$open})=>$open?'visible':'hidden'};border-bottom:${({$open})=>$open?`1px solid ${border}`:'0'};background:#fff;transition:grid-template-rows .24s ease,visibility .24s ease;>div{overflow:hidden}a{display:flex;min-height:52px;align-items:center;justify-content:space-between;padding:0 20px;border-top:1px solid ${border};color:${navy};font-size:.78rem;font-weight:900;text-decoration:none;text-transform:uppercase}a:hover{background:#f1f7f4;color:${green}}svg{width:18px;color:${green}}}
`

export const NavigationBar = styled.nav`
  display:flex;min-height:52px;align-items:center;justify-content:space-between;padding:0 max(24px,calc((100vw - 1440px)/2));border-bottom:1px solid ${border};
  >div{display:flex;height:52px;align-items:stretch}a{display:flex;align-items:center;padding:0 18px;border-left:1px solid ${border};color:${navy};font-size:.76rem;font-weight:800;text-decoration:none;text-transform:uppercase}a:last-child{border-right:1px solid ${border}}a:hover{background:#f3f8f5;color:${green}}>svg{color:${green}}
  @media(max-width:780px){display:none}
`

export const UtilityBar = styled.div`
  display:flex;min-height:34px;align-items:center;justify-content:space-between;gap:24px;padding:0 max(24px,calc((100vw - 1440px)/2));background:${navy};color:rgba(255,255,255,.78);font-size:.7rem;font-weight:600;letter-spacing:.04em;
  @media(max-width:640px){justify-content:center;padding-inline:16px;span:first-child{display:none}}
`
