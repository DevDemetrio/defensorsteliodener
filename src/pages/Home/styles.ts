import styled from 'styled-components'

export const Header = styled.header`
  position:sticky; z-index:10; top:0; border-bottom:1px solid rgba(31,73,49,.1); background:rgba(255,255,255,.94); backdrop-filter:blur(14px);
  .header-content{display:flex;align-items:center;justify-content:space-between;min-height:76px}
  @media(max-width:860px){.header-content{min-height:64px}}
`
export const Logo = styled.a`
  display:flex; flex-direction:column; color:#173f2a; line-height:.82; text-decoration:none; letter-spacing:-.04em;
  strong{font-size:1.3rem;font-weight:900} span{color:#00923e;font-size:.78rem;font-weight:800;letter-spacing:.22em}
`
export const Nav = styled.nav`
  display:flex;align-items:center;gap:22px;a{color:#31533e;font-size:.82rem;font-weight:700;text-decoration:none;transition:color .2s}a:hover,a:focus-visible{color:#00923e}@media(max-width:860px){display:none}
`
export const MobileMenuButton = styled.button`&&{display:none;color:#173f2a}@media(max-width:860px){&&{display:inline-flex}}`
export const MobileNav = styled.nav<{ $open:boolean }>`
  display:none;@media(max-width:860px){display:grid;grid-template-rows:${({$open})=>$open?'1fr':'0fr'};visibility:${({$open})=>$open?'visible':'hidden'};transition:grid-template-rows .2s,visibility .2s;>div{overflow:hidden}a{display:flex;align-items:center;min-height:46px;border-top:1px solid rgba(31,73,49,.08);color:#173f2a;font-weight:700;text-decoration:none}}
`
export const ContactLayout = styled.div`
  display:grid;grid-template-columns:.85fr 1.15fr;gap:80px;padding:104px 0;>div>span{color:#00923e;font-size:.78rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase}h2{margin:12px 0 20px;color:#173f2a;font-size:clamp(2.5rem,5vw,4.5rem);line-height:1}p{max-width:520px;color:#5a7062;line-height:1.7}@media(max-width:760px){grid-template-columns:1fr;gap:40px;padding:72px 0}
`
export const ContactForm = styled.form`
  display:grid;gap:16px;padding:30px;border:1px solid rgba(31,73,49,.1);border-radius:24px;background:#f7faf8;box-shadow:0 18px 50px rgba(31,73,49,.08);button{min-height:50px}p[role=status]{margin:0;color:#08713b;font-weight:700}@media(max-width:480px){padding:20px}
`
export const Footer = styled.footer`padding:64px 0 28px;background:#102f21;color:#fff;padding-bottom:max(28px,env(safe-area-inset-bottom));`
export const FooterContent = styled.div`
  display:grid;grid-template-columns:2fr 1fr 1fr;gap:54px;padding-bottom:50px;p{max-width:440px;color:rgba(255,255,255,.65);line-height:1.7}div>strong{display:block;margin-bottom:16px;color:#befc5f}a{display:block;margin:10px 0;color:rgba(255,255,255,.7);font-size:.9rem;text-decoration:none}@media(max-width:680px){grid-template-columns:1fr;gap:28px}
`
export const Copyright = styled.p`margin:0;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.55);font-size:.8rem;`
