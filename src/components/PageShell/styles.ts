import styled from 'styled-components'

const green = '#1f4931'
const darkGreen = '#1f4931'
const navy = '#1f4931'
const limeGreen = '#befc5f'
const border = '#dce6e1'

export const PageFrame = styled.div`min-height:100dvh;background:#edf3f0;color:${navy};`
export const Header = styled.header`position:relative;z-index:2;background:#fff;box-shadow:0 3px 18px rgba(31,73,49,.08);`
export const UtilityBar = styled.div`
  display:flex;min-height:34px;align-items:center;justify-content:space-between;gap:24px;padding:0 max(24px,calc((100vw - 1440px)/2));background:${navy};color:rgba(255,255,255,.78);font-size:.7rem;font-weight:600;letter-spacing:.04em;
  @media(max-width:640px){justify-content:center;padding-inline:16px;span:first-child{display:none}}
`
export const BrandBar = styled.div`
  position:relative;border-bottom:1px solid ${border};
`
export const HeaderBanner = styled.a`
  display:block;width:100%;overflow:hidden;background:${darkGreen};text-decoration:none;
  picture{display:block;width:100%}
  img{display:block;width:100%;height:auto}
  @media(max-width:1024px){img{aspect-ratio:744/220}}
  @media(max-width:600px){img{aspect-ratio:375/140}}
`
export const MenuButton = styled.button`
  display:none;width:42px;height:42px;place-items:center;padding:0;border:1px solid rgba(255,255,255,.3);border-radius:10px;background:rgba(31,73,49,.78);color:#fff;cursor:pointer;transition:background .2s ease;&:hover{background:${navy}}&:focus-visible{outline:3px solid ${limeGreen};outline-offset:2px}
  @media(max-width:780px){position:absolute;z-index:2;top:50%;right:12px;display:grid;transform:translateY(-50%)}
`
export const NavigationBar = styled.nav`
  display:flex;min-height:52px;align-items:center;justify-content:space-between;padding:0 max(24px,calc((100vw - 1440px)/2));border-bottom:1px solid ${border};
  >div{display:flex;height:52px;align-items:stretch}a{display:flex;align-items:center;padding:0 18px;border-left:1px solid ${border};color:${navy};font-size:.76rem;font-weight:800;text-decoration:none;text-transform:uppercase}a:last-child{border-right:1px solid ${border}}a:hover{background:#f3f8f5;color:${green}}>svg{color:${green}}
  @media(max-width:780px){display:none}
`
export const MobileNavigation = styled.nav<{ $open:boolean }>`
  display:none;
  @media(max-width:780px){display:grid;grid-template-rows:${({$open})=>$open?'1fr':'0fr'};visibility:${({$open})=>$open?'visible':'hidden'};border-bottom:${({$open})=>$open?`1px solid ${border}`:'0'};background:#fff;transition:grid-template-rows .24s ease,visibility .24s ease;>div{overflow:hidden}a{display:flex;min-height:52px;align-items:center;justify-content:space-between;padding:0 20px;border-top:1px solid ${border};color:${navy};font-size:.78rem;font-weight:900;text-decoration:none;text-transform:uppercase}a:hover{background:#f1f7f4;color:${green}}svg{width:18px;color:${green}}}
`
export const HighlightsBar = styled.div`
  display:grid;grid-template-columns:repeat(5,1fr);min-height:82px;border-bottom:1px solid ${border};background:linear-gradient(110deg,#f6faf8,#fff);
  >div{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:13px 18px;border-right:1px solid ${border};text-align:center}>div:last-child{border:0}strong{color:${green};font-size:1.05rem}span{max-width:150px;margin-top:4px;color:#63746b;font-size:.64rem;line-height:1.3}
  @media(max-width:800px){grid-template-columns:repeat(2,1fr);>div{display:none}>div:nth-child(-n+2){display:flex}}
`
export const MainGrid = styled.div`
  display:grid;grid-template-columns:minmax(210px,270px) minmax(480px,1fr) minmax(220px,290px);align-items:start;width:min(100%,1600px);margin-inline:auto;border-inline:1px solid ${border};background:#fff;
  @media(max-width:1050px){grid-template-columns:220px minmax(400px,1fr) 230px}
  @media(max-width:800px){display:flex;height:auto;width:100%;flex-direction:column;border:0}
`
export const Column = styled.div<{ $region:'left'|'center'|'right' }>`
  position:${({$region})=>$region==='center'?'relative':'sticky'};top:0;min-width:0;height:${({$region})=>$region==='center'?'auto':'100dvh'};min-height:0;overflow:${({$region})=>$region==='center'?'visible':'hidden auto'};overscroll-behavior:${({$region})=>$region==='center'?'auto':'contain'};scrollbar-gutter:${({$region})=>$region==='center'?'auto':'stable'};touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:${({$region})=>$region==='center'?'28px':'20px'};border-right:${({$region})=>$region==='right'?'0':`1px solid ${border}`};background:${({$region})=>$region==='center'?'#fff':'#f8fbf9'};
  .column-heading{position:sticky;z-index:3;top:${({$region})=>$region==='center'?'-28px':'-20px'};margin:${({$region})=>$region==='center'?'-28px -28px 24px':'-20px -20px 18px'};padding:14px 20px;border-bottom:3px solid ${limeGreen};background:${green};color:#fff;font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase;backdrop-filter:blur(10px)}
  &:focus-visible{outline-offset:-3px}
  @media(max-width:800px){
    position:static;
    order:${({$region})=>$region==='center'?1:$region==='left'?2:3};
    width:${({$region})=>$region==='center'?'100%':'calc(100% - 40px)'};
    height:auto;
    margin:${({$region})=>$region==='center'?'0':'20px'};
    overflow:visible;
    overscroll-behavior:auto;
    scrollbar-gutter:auto;
    padding:${({$region})=>$region==='center'?'20px 16px':'20px'};
    border:${({$region})=>$region==='center'?'0':`1px solid ${border}`};
    border-radius:${({$region})=>$region==='center'?'0':'14px'};
    .column-heading{
      position:static;
      margin:${({$region})=>$region==='center'?'-20px -16px 20px':'-20px -20px 20px'};
      border-radius:${({$region})=>$region==='center'?'0':'13px 13px 0 0'};
    }
  }
`
export const MunicipalityList = styled.div`display:grid;gap:8px;`
export const MunicipalityItem = styled.article`
  display:grid;gap:5px;padding:15px;border:1px solid ${border};border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(31,73,49,.04);span{color:${navy};font-size:.82rem;font-weight:800}strong{color:${green};font-size:.7rem}
  @media(max-width:800px){padding:18px;span{font-size:1rem}strong{font-size:.82rem}}
`
export const AreaList = styled.div`display:grid;gap:10px;`
export const AreaItem = styled.article`
  display:grid;grid-template-columns:32px 1fr;gap:10px;padding:14px 12px;border-bottom:1px solid ${border};>span{color:${limeGreen};font-size:.72rem;font-weight:900}strong{color:${navy};font-size:.82rem}p{margin:5px 0 0;color:#687971;font-size:.68rem;line-height:1.45}
  @media(max-width:800px){grid-template-columns:38px 1fr;gap:12px;padding:18px 8px;>span{font-size:.82rem}strong{font-size:1rem}p{font-size:.82rem;line-height:1.55}}
`
export const Hero = styled.section`
  position:relative;overflow:hidden;padding:clamp(30px,5vw,60px);border-radius:18px;background:linear-gradient(130deg,${darkGreen},${green});color:#fff;
  &::after{position:absolute;width:260px;height:260px;right:-110px;top:-130px;border:24px solid rgba(190,252,95,.18);border-radius:50%;content:''}>span{color:${limeGreen};font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h1{position:relative;z-index:1;max-width:760px;margin:14px 0 20px;font-size:clamp(2.2rem,4vw,4.4rem);line-height:.98;letter-spacing:-.05em}h1 strong{color:${limeGreen}}p{max-width:680px;margin:0;color:rgba(255,255,255,.76);font-size:.94rem;line-height:1.65}
`
export const HeroActions = styled.div`
  display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;a,button{min-height:46px}button:first-child{background:${limeGreen};color:${navy}}button:last-child{border-color:rgba(255,255,255,.65);color:#fff}@media(max-width:480px){button{width:100%}}
`
export const SectionHeading = styled.header`
  margin:54px 0 24px;>span{color:${green};font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h2{margin:8px 0 12px;color:${navy};font-size:clamp(1.7rem,3vw,2.8rem);line-height:1.08;letter-spacing:-.04em}p{max-width:620px;margin:0;color:#687971;font-size:.85rem;line-height:1.6}
`
export const InvestmentGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;@media(max-width:620px){grid-template-columns:1fr}`
export const InvestmentCard = styled.article`
  min-height:190px;padding:22px;border:1px solid ${border};border-top:5px solid ${green};border-radius:12px;background:#fff;box-shadow:0 12px 28px rgba(31,73,49,.07);small{color:${green};font-size:.82rem;font-weight:900}h3{margin:24px 0 9px;color:${navy};font-size:1.15rem}p{margin:0;color:#65776e;font-size:.76rem;line-height:1.55}
`
export const ProjectGrid = styled.div`display:grid;gap:12px;padding-bottom:30px;`
export const ProjectCard = styled.article`
  display:grid;grid-template-columns:minmax(190px,.75fr) 1.25fr;gap:24px;align-items:center;padding:22px;border-radius:12px;background:${navy};color:#fff;small{color:${limeGreen};font-size:.72rem;font-weight:900}h3{margin:6px 0 0;font-size:1.08rem}p{margin:0;color:rgba(255,255,255,.7);font-size:.76rem;line-height:1.55}@media(max-width:560px){grid-template-columns:1fr;gap:12px}
`
export const Footer = styled.footer`position:relative;z-index:1;padding:56px max(24px,calc((100vw - 1440px)/2)) 24px;border-top:7px solid ${limeGreen};background:${darkGreen};color:#fff;`
export const FooterGrid = styled.div`
  display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:48px;padding-bottom:48px;>div{display:grid;align-content:start;gap:14px}strong{color:${limeGreen};font-size:.9rem}span{max-width:360px;color:rgba(255,255,255,.62);font-size:.78rem;line-height:1.6}@media(max-width:680px){grid-template-columns:1fr;gap:28px;padding-bottom:36px}
`
export const FooterBottom = styled.div`
  display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.48);font-size:.7rem;@media(max-width:520px){align-items:flex-start;flex-direction:column;gap:10px}
`
