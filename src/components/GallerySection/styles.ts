import styled from 'styled-components'

export const GallerySectionWrapper = styled.section`
  padding:104px 0;background:#fff;scroll-margin-top:80px;.heading>span{color:#00923e;font-size:.78rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase}.heading h2{margin:12px 0 18px;color:#173f2a;font-size:clamp(2.2rem,4.5vw,4rem);line-height:1}.heading p{margin:0 0 42px;color:#5a7062;line-height:1.7}@media(max-width:760px){padding:72px 0;scroll-margin-top:64px}
`
export const GalleryGrid = styled.div`display:grid;grid-template-columns:repeat(12,1fr);gap:16px;@media(max-width:700px){grid-template-columns:1fr}`
export const GalleryCard = styled.article<{ $index:number }>`
  position:relative;display:flex;align-items:end;justify-content:space-between;grid-column:span ${({$index})=>$index<2?'6':'4'};min-height:${({$index})=>$index<2?'280px':'220px'};overflow:hidden;padding:26px;border-radius:22px;background:linear-gradient(145deg,rgba(10,51,30,.18),rgba(10,51,30,.78)),linear-gradient(${({$index})=>115+$index*18}deg,#3d8a59,#173f2a);color:#fff;transition:transform .22s ease;cursor:default;&::before{content:'';position:absolute;width:180px;height:180px;right:-70px;top:-80px;border:1px solid rgba(190,252,95,.35);border-radius:50%} &:hover{transform:translateY(-4px)} small{color:#befc5f;font-weight:800;text-transform:uppercase;letter-spacing:.08em}h3{margin:10px 0 0;font-size:1.55rem}svg{color:#befc5f}@media(max-width:900px){grid-column:span 6}@media(max-width:700px){grid-column:auto;min-height:210px}
`
