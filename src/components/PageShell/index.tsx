import type { ReactNode } from 'react'
import {
  BrandBar,
  Column,
  Header,
  HighlightsBar,
  MainGrid,
  NavigationBar,
  PageFrame,
  Placeholder,
  UtilityBar,
} from './styles'

type PlaceholderBlockProps = {
  height?: 'small' | 'medium' | 'large'
  label: string
}

type ShellColumnProps = {
  children: ReactNode
  label: string
  region: 'left' | 'center' | 'right'
}

export function PlaceholderBlock({ height = 'medium', label }: PlaceholderBlockProps) {
  return <Placeholder $height={height}><span>{label}</span></Placeholder>
}

export function InstitutionalHeader() {
  return (
    <Header>
      <UtilityBar aria-label="Barra institucional">
        <div>Área de informações institucionais</div>
        <div>Área de contato e redes sociais</div>
      </UtilityBar>

      <BrandBar>
        <div className="menu-slot" aria-label="Espaço para menu">Menu</div>
        <div className="brand-slot">Identidade institucional</div>
        <div className="secondary-brand-slot">Marca secundária</div>
      </BrandBar>

      <NavigationBar aria-label="Navegação principal">
        <div>Área da navegação principal</div>
        <div>Busca</div>
      </NavigationBar>

      <HighlightsBar aria-label="Faixa de destaques">
        <div>Destaque 01</div>
        <div>Destaque 02</div>
        <div>Destaque 03</div>
      </HighlightsBar>
    </Header>
  )
}

export function ShellColumn({ children, label, region }: ShellColumnProps) {
  const Component = region === 'center' ? 'main' : 'aside'

  return (
    <Column as={Component} $region={region} aria-label={label} tabIndex={0}>
      <div className="column-heading">{label}</div>
      {children}
    </Column>
  )
}

export function PageShell() {
  return (
    <PageFrame>
      <InstitutionalHeader />

      <MainGrid>
        <ShellColumn label="Barra lateral esquerda" region="left">
          <PlaceholderBlock label="Área lateral 01" height="medium" />
          <PlaceholderBlock label="Área lateral 02" height="large" />
          <PlaceholderBlock label="Área lateral 03" height="medium" />
        </ShellColumn>

        <ShellColumn label="Conteúdo principal" region="center">
          <PlaceholderBlock label="Área principal de destaque" height="large" />
          <PlaceholderBlock label="Área principal de conteúdo" height="large" />
          <PlaceholderBlock label="Área principal complementar" height="medium" />
        </ShellColumn>

        <ShellColumn label="Barra lateral direita" region="right">
          <PlaceholderBlock label="Área lateral 01" height="small" />
          <PlaceholderBlock label="Área lateral 02" height="medium" />
          <PlaceholderBlock label="Área lateral 03" height="large" />
          <PlaceholderBlock label="Área lateral 04" height="small" />
        </ShellColumn>
      </MainGrid>
    </PageFrame>
  )
}
