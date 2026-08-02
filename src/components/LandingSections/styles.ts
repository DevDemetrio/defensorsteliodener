import styled from 'styled-components'

export const Section = styled.section<{ $dark?: boolean; $compact?: boolean }>`
  padding: ${({ $compact }) => $compact ? '48px 0' : '104px 0'};
  background: ${({ $dark, $compact }) => $dark ? '#123d29' : $compact ? '#befc5f' : '#f7faf8'};
  color: ${({ $dark }) => $dark ? '#fff' : '#1f4931'};
  scroll-margin-top: 80px;
  @media (max-width: 760px) { padding: ${({ $compact }) => $compact ? '40px 0' : '72px 0'}; scroll-margin-top: 64px; }
`

export const Hero = styled.section`
  position: relative; overflow: hidden; min-height: 710px; display: grid; align-items: center;
  background: radial-gradient(circle at 78% 25%, rgba(190,252,95,.2), transparent 27%), linear-gradient(125deg,#173f2a,#08713b); color:#fff;
  &::after { content:''; position:absolute; width:520px; height:520px; right:-260px; top:-170px; border:1px solid rgba(255,255,255,.18); border-radius:50%; }
`
export const HeroContent = styled.div`
  display:grid; grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr); align-items:end; gap:56px; padding-top:64px;
  .eyebrow { color:#befc5f; font-weight:800; text-transform:uppercase; letter-spacing:.11em; font-size:.78rem; }
  h1 { max-width:790px; margin:18px 0 24px; font-size:clamp(3rem,5.6vw,5.8rem); line-height:.96; letter-spacing:-.055em; }
  h1 strong { color:#befc5f; }
  p { max-width:680px; color:rgba(255,255,255,.78); font-size:1.08rem; line-height:1.7; }
  @media(max-width:850px){ grid-template-columns:1fr; padding-top:80px; gap:20px; }
  @media(max-width:600px){ padding-top:64px; h1{font-size:clamp(2.5rem,12vw,4rem)} }
`
export const HeroActions = styled.div`
  display:flex; flex-wrap:wrap; gap:14px; margin:32px 0 56px;
  a { min-height:50px; padding-inline:24px; }
  a:first-child { background:#befc5f; color:#173f2a; }
  a:last-child { border-color:rgba(255,255,255,.6); color:#fff; }
  @media(max-width:480px){ margin-bottom:40px; a{width:100%;} }
`
export const HeroImage = styled.div`
  display:flex; align-items:end; justify-content:center; min-height:520px;
  img { width:min(100%,390px); filter:drop-shadow(0 24px 30px rgba(0,0,0,.25)); }
  @media(max-width:850px){ min-height:300px; img{width:260px;} }
`
export const IndicatorGrid = styled.div`display:grid; grid-template-columns:repeat(5,1fr); gap:24px; @media(max-width:980px){grid-template-columns:repeat(3,1fr)} @media(max-width:600px){grid-template-columns:repeat(2,1fr); gap:28px 18px}`
export const Indicator = styled.div`
  strong { display:block; color:#173f2a; font-size:clamp(1.65rem,3vw,2.5rem); line-height:1; letter-spacing:-.04em; }
  span { display:block; margin-top:10px; color:#31533e; font-size:.86rem; line-height:1.4; }
`
export const SectionHeading = styled.div`
  span { color:#00923e; font-size:.78rem; font-weight:800; letter-spacing:.11em; text-transform:uppercase; }
  h2 { max-width:760px; margin:12px 0 18px; font-size:clamp(2.2rem,4.5vw,4rem); line-height:1.04; letter-spacing:-.045em; }
  ${Section}[data-dark] & span { color:#befc5f; }
`
export const SectionIntro = styled.p`max-width:660px; margin:0 0 42px; color:inherit; opacity:.72; font-size:1.05rem; line-height:1.7;`
export const AreaGrid = styled.div`display:grid; grid-template-columns:repeat(5,1fr); gap:16px; @media(max-width:1050px){grid-template-columns:repeat(3,1fr)} @media(max-width:680px){grid-template-columns:repeat(2,1fr)} @media(max-width:430px){grid-template-columns:1fr}`
export const AreaCard = styled.article`
  min-height:220px; padding:24px; border:1px solid rgba(31,73,49,.1); border-radius:20px; background:#fff; box-shadow:0 14px 35px rgba(31,73,49,.06); transition:.22s ease;
  &:hover { transform:translateY(-5px); box-shadow:0 22px 46px rgba(31,73,49,.12); }
  .icon { display:grid; place-items:center; width:48px; height:48px; border-radius:14px; background:#e9f8de; color:#08713b; }
  h3 { margin:30px 0 10px; font-size:1.08rem; } p { margin:0; color:#5a7062; font-size:.9rem; line-height:1.55; }
`
export const ProjectGrid = styled.div`display:grid; grid-template-columns:repeat(2,1fr); gap:20px; @media(max-width:720px){grid-template-columns:1fr}`
export const ProjectCard = styled.article<{ $featured?: boolean }>`
  padding:34px; border:1px solid rgba(255,255,255,.12); border-radius:24px; background:${({$featured})=>$featured?'linear-gradient(135deg,#26734a,#17924f)':'rgba(255,255,255,.06)'};
  small { color:#befc5f; font-weight:800; letter-spacing:.08em; text-transform:uppercase; } h3{margin:18px 0 12px;font-size:1.7rem} p{color:rgba(255,255,255,.72);line-height:1.65}
  ul{display:grid;gap:10px;margin:24px 0 0;padding:0;list-style:none} li{display:flex;gap:9px;align-items:center;font-size:.92rem} svg{width:18px;color:#befc5f}
  @media(max-width:480px){padding:24px}
`
export const Biography = styled.div`display:grid; grid-template-columns:minmax(280px,.8fr) 1.2fr; gap:72px; align-items:center; >img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:28px;box-shadow:0 24px 60px rgba(31,73,49,.18)} @media(max-width:760px){grid-template-columns:1fr;gap:40px;>img{max-height:520px}}`
export const BiographyContent = styled.div`p{max-width:650px;color:#526b5c;line-height:1.75} a{margin-top:20px;min-height:48px;padding-inline:24px}`
