import styled from 'styled-components'

const borders = '#dfe7e2'
const mutedSurface = '#f3f6f4'

export const PageFrame = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100dvh;
  overflow: hidden;
  background: #eef3f0;
  color: #1f4931;

  @media (max-width: 800px) {
    display: block;
    height: auto;
    min-height: 100dvh;
    overflow: visible;
  }
`

export const Header = styled.header`
  position: relative;
  z-index: 2;
  background: #fff;
  box-shadow: 0 3px 18px rgba(31, 73, 49, 0.07);
`

export const UtilityBar = styled.div`
  display: flex;
  min-height: 36px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 max(24px, calc((100vw - 1440px) / 2));
  background: #1f4931;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.72rem;

  @media (max-width: 640px) {
    justify-content: center;
    min-height: 32px;
    padding-inline: 16px;
    div:first-child { display: none; }
  }
`

export const BrandBar = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(240px, 1.4fr) 1fr;
  min-height: 104px;
  align-items: center;
  gap: 24px;
  padding: 18px max(24px, calc((100vw - 1440px) / 2));
  border-bottom: 1px solid ${borders};

  .menu-slot { justify-self: start; }
  .brand-slot {
    justify-self: center;
    color: #1f4931;
    font-size: clamp(1.25rem, 2vw, 1.8rem);
    font-weight: 800;
  }
  .secondary-brand-slot { justify-self: end; }
  .menu-slot, .secondary-brand-slot { color: #718078; font-size: 0.78rem; }

  @media (max-width: 640px) {
    grid-template-columns: auto 1fr;
    min-height: 76px;
    padding: 14px 16px;
    .brand-slot { justify-self: start; }
    .secondary-brand-slot { display: none; }
  }
`

export const NavigationBar = styled.nav`
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  padding: 0 max(24px, calc((100vw - 1440px) / 2));
  border-bottom: 1px solid ${borders};
  color: #56685e;
  font-size: 0.8rem;
  font-weight: 700;

  @media (max-width: 640px) {
    min-height: 46px;
    padding-inline: 16px;
  }
`

export const HighlightsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 68px;
  border-bottom: 1px solid ${borders};
  background: #f8faf9;

  > div {
    display: grid;
    place-items: center;
    padding: 14px 24px;
    border-right: 1px solid ${borders};
    color: #718078;
    font-size: 0.76rem;
  }
  > div:last-child { border-right: 0; }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    min-height: 54px;
    > div { display: none; border: 0; }
    > div:first-child { display: grid; }
  }
`

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(420px, 1fr) minmax(220px, 280px);
  min-height: 0;
  width: min(100%, 1600px);
  margin-inline: auto;
  border-inline: 1px solid ${borders};
  background: #fff;

  @media (max-width: 1050px) {
    grid-template-columns: 220px minmax(360px, 1fr) 220px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 0;
  }
`

export const Column = styled.div<{ $region: 'left' | 'center' | 'right' }>`
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  padding: ${({ $region }) => $region === 'center' ? '28px' : '22px'};
  border-right: ${({ $region }) => $region === 'right' ? '0' : `1px solid ${borders}`};
  background: ${({ $region }) => $region === 'center' ? '#fff' : '#fafcfb'};

  .column-heading {
    position: sticky;
    z-index: 1;
    top: ${({ $region }) => $region === 'center' ? '-28px' : '-22px'};
    margin: ${({ $region }) => $region === 'center' ? '-28px -28px 24px' : '-22px -22px 20px'};
    padding: 14px 22px;
    border-bottom: 1px solid ${borders};
    background: rgba(255, 255, 255, 0.96);
    color: #63746a;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }

  &:focus-visible { outline-offset: -3px; }

  @media (max-width: 800px) {
    order: ${({ $region }) => $region === 'center' ? 1 : $region === 'left' ? 2 : 3};
    overflow: visible;
    padding: 20px 16px;
    border-right: 0;
    border-bottom: 1px solid ${borders};

    .column-heading {
      position: static;
      margin: -20px -16px 20px;
    }
  }
`

export const Placeholder = styled.section<{ $height: 'small' | 'medium' | 'large' }>`
  display: grid;
  min-height: ${({ $height }) => $height === 'small' ? '120px' : $height === 'large' ? '380px' : '220px'};
  margin-bottom: 18px;
  place-items: center;
  border: 1px dashed #b8c7be;
  border-radius: 12px;
  background: ${mutedSurface};
  color: #849188;
  text-align: center;

  span { padding: 20px; font-size: 0.76rem; font-weight: 700; }

  @media (max-width: 800px) {
    min-height: ${({ $height }) => $height === 'small' ? '100px' : $height === 'large' ? '280px' : '180px'};
  }
`
