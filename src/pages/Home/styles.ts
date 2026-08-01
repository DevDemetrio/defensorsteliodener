import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid rgba(31, 73, 49, 0.12);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
  }
  @media (max-width: 760px) { .header-content { min-height: 64px; } }
`

export const Logo = styled.a`
  color: #1f4931;
  font-size: 1.25rem;
  font-weight: 800;
  text-decoration: none;
`

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  a {
    position: relative;
    color: #1f4931;
    font-size: .9rem;
    font-weight: 700;
    text-decoration: none;
    transition: color .2s ease;
  }
  a:hover { color: #00923e; }
  @media (max-width: 760px) { display: none; }
`

export const MobileMenuButton = styled.button`
  && { display: none; }
  @media (max-width: 760px) { && { display: inline-flex; } }
`

export const MobileNav = styled.nav<{ $open: boolean }>`
  display: none;
  @media (max-width: 760px) {
    display: grid;
    grid-template-rows: ${({ $open }) => $open ? '1fr' : '0fr'};
    visibility: ${({ $open }) => $open ? 'visible' : 'hidden'};
    transition: grid-template-rows .2s ease, visibility .2s;
    > div { overflow: hidden; }
    a {
      display: flex;
      align-items: center;
      min-height: 48px;
      border-top: 1px solid rgba(31,73,49,.1);
      color: #1f4931;
      font-weight: 600;
      text-decoration: none;
    }
  }
`

export const Hero = styled.section`
  display: grid;
  min-height: 720px;
  align-items: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 85% 18%, rgba(190,252,95,.2) 0 7%, transparent 7.2%),
    radial-gradient(circle at 78% 32%, rgba(84,186,99,.2) 0 16%, transparent 16.2%),
    linear-gradient(125deg, #1f4931 0%, #14603a 58%, #00923e 100%);
  color: #fff;
  &::after {
    position: absolute;
    right: -120px;
    bottom: -180px;
    width: 520px;
    height: 520px;
    border: 2px solid rgba(190,252,95,.28);
    border-radius: 50%;
    content: '';
  }
  small { color: #befc5f; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
  h1 { max-width: 850px; margin: 16px 0 24px; font-size: clamp(3rem, 7.5vw, 7rem); line-height: .92; overflow-wrap: anywhere; }
  p { max-width: 640px; color: rgba(255,255,255,.78); font-size: 1.15rem; line-height: 1.7; }
  a {
    margin-top: 32px;
    background: #befc5f;
    color: #1f4931;
    box-shadow: 0 16px 38px rgba(0,0,0,.2);
  }
  a:hover { background: #fff; }
  @media (max-width: 760px) {
    min-height: calc(100svh - 64px);
    padding: 64px 0;
    h1 { font-size: clamp(2.65rem, 13vw, 4.5rem); line-height: .98; }
    p { font-size: 1rem; line-height: 1.6; }
    a { width: 100%; min-height: 48px; margin-top: 24px; }
  }
  @media (max-width: 374px) { h1 { font-size: 2.4rem; } }
`

export const Section = styled.section<{ $dark?: boolean }>`
  padding: 104px 0;
  background: ${({ $dark }) => $dark ? 'linear-gradient(135deg, #1f4931, #388357)' : '#f4f8f5'};
  color: ${({ $dark }) => $dark ? '#fff' : 'inherit'};
  scroll-margin-top: 80px;
  &#conteudos, &#galeria { background: #fff; }
  &#contato { background: linear-gradient(180deg, #eff8f1, #e5f3e9); }
  @media (max-width: 760px) { padding: 64px 0; scroll-margin-top: 64px; }
`

export const SectionTitle = styled.h2`
  margin: 0 0 32px;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1;
  color: inherit;
  &::after {
    display: block;
    width: 64px;
    height: 6px;
    margin-top: 18px;
    border-radius: 999px;
    background: #befc5f;
    content: '';
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`

export const Card = styled.article`
  min-height: 230px;
  padding: 28px;
  border: 1px solid rgba(56,131,87,.16);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 18px 55px rgba(31,73,49,.08);
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
  &:hover { transform: translateY(-4px); border-color: #54ba63; box-shadow: 0 22px 60px rgba(31,73,49,.14); }
  small { color: #00923e; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  h3 { margin: 38px 0 12px; color: #1f4931; font-size: 1.35rem; }
  p { color: #4d6959; line-height: 1.6; }
  @media (max-width: 480px) {
    min-height: 200px;
    padding: 22px;
    border-radius: 16px;
    h3 { margin-top: 28px; }
  }
`

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 16px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; button { grid-column: 1 / -1; min-height: 48px; } }
  @media (max-width: 600px) { grid-template-columns: 1fr; button { grid-column: auto; } }
`

export const Footer = styled.footer`
  padding: 64px 0 28px;
  background: #1f4931;
  color: #fff;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  h2 { margin: 0 0 14px; }
  h2, strong { color: #befc5f; }
  p { max-width: 520px; color: rgba(255,255,255,.72); line-height: 1.7; }
  @media (max-width: 680px) { grid-template-columns: 1fr; gap: 24px; padding-bottom: 32px; }
`

export const Copyright = styled.p`
  margin: 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.12);
  font-size: .85rem;
`
