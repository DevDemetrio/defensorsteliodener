import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Button } from '@mui/material'
import type { ReactNode } from 'react'
import { useState } from 'react'
import {
  featuredInvestments,
  featuredProjects,
  indicators,
  municipalities,
  navigation,
  workAreas,
} from './content'
import {
  AreaItem,
  AreaList,
  BrandBar,
  Column,
  Footer,
  FooterBottom,
  FooterGrid,
  Header,
  Hero,
  HeroActions,
  HighlightsBar,
  InvestmentCard,
  InvestmentGrid,
  MainGrid,
  MenuButton,
  MobileNavigation,
  MunicipalityItem,
  MunicipalityList,
  NavigationBar,
  PageFrame,
  ProjectCard,
  ProjectGrid,
  SectionHeading,
  UtilityBar,
} from './styles'

type ShellColumnProps = {
  children: ReactNode
  label: string
  region: 'left' | 'center' | 'right'
}

export function InstitutionalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Header>
      <UtilityBar><span>Deputado Federal por Roraima</span><span>O Defensor do Estado e do Povo</span></UtilityBar>
      <BrandBar>
        <MenuButton type="button" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="menu-mobile" onClick={() => setIsMenuOpen(open => !open)}>
          {isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </MenuButton>
        <a href="#inicio" className="brand-slot"><small>Deputado Federal</small><strong>DEFENSOR</strong><span>STÉLIO DENER</span></a>
        <div className="secondary-brand-slot">Compromisso com Roraima</div>
      </BrandBar>
      <NavigationBar aria-label="Navegação principal">
        <div>{navigation.map(item => <a key={item} href={`#${item.toLowerCase().replace('í', 'i')}`}>{item}</a>)}</div>
        <SearchRoundedIcon aria-label="Pesquisar" />
      </NavigationBar>
      <MobileNavigation id="menu-mobile" $open={isMenuOpen} aria-label="Navegação mobile">
        <div>
          {navigation.map(item => <a key={item} href={`#${item.toLowerCase().replace('í', 'i')}`} onClick={() => setIsMenuOpen(false)}>{item}<ArrowForwardRoundedIcon /></a>)}
        </div>
      </MobileNavigation>
      <HighlightsBar aria-label="Indicadores do mandato">
        {indicators.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </HighlightsBar>
    </Header>
  )
}

export function ShellColumn({ children, label, region }: ShellColumnProps) {
  const Component = region === 'center' ? 'main' : 'aside'
  return <Column as={Component} $region={region} aria-label={label} tabIndex={0}><div className="column-heading">{label}</div>{children}</Column>
}

export function MunicipalitiesSidebar() {
  return <ShellColumn label="Municípios atendidos" region="left"><MunicipalityList>{municipalities.map(item => <MunicipalityItem key={item.name}><span>{item.name}</span><strong>{item.value}</strong></MunicipalityItem>)}</MunicipalityList></ShellColumn>
}

export function WorkAreasSidebar() {
  return <ShellColumn label="Áreas de atuação" region="right"><AreaList>{workAreas.map((item, index) => <AreaItem key={item.name}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.name}</strong><p>{item.detail}</p></div></AreaItem>)}</AreaList></ShellColumn>
}

export function MainContent() {
  return (
    <ShellColumn label="Mandato em números" region="center">
      <Hero id="inicio">
        <span>O Defensor do Estado e do Povo</span>
        <h1>Mais de <strong>R$ 367 milhões</strong> destinados para transformar Roraima.</h1>
        <p>Um mandato marcado por investimentos em saúde, infraestrutura, agricultura, esporte, educação, povos indígenas e desenvolvimento dos municípios.</p>
        <HeroActions><Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Conheça nosso trabalho</Button><Button variant="outlined">Ver resultados</Button></HeroActions>
      </Hero>

      <section id="resultados">
        <SectionHeading><span>Resultados</span><h2>Os maiores investimentos do mandato.</h2><p>Recursos que fortalecem serviços, infraestrutura e oportunidades em todo o estado.</p></SectionHeading>
        <InvestmentGrid>{featuredInvestments.map(item => <InvestmentCard key={item.title}><small>{item.value}</small><h3>{item.title}</h3><p>{item.description}</p></InvestmentCard>)}</InvestmentGrid>
      </section>

      <section id="projetos">
        <SectionHeading><span>Projetos em destaque</span><h2>Presença que transforma.</h2></SectionHeading>
        <ProjectGrid>{featuredProjects.map(item => <ProjectCard key={item.title}><div><small>{item.value}</small><h3>{item.title}</h3></div><p>{item.description}</p></ProjectCard>)}</ProjectGrid>
      </section>
    </ShellColumn>
  )
}

export function InstitutionalFooter() {
  return <Footer id="contato"><FooterGrid><div><strong>Defensor Stélio Dener</strong><span>Advogado, defensor público e deputado federal por Roraima.</span></div><div><strong>Mandato</strong><span>Trabalho que gera resultados. Mais investimentos para quem mais precisa.</span></div><div><strong>Vamos conversar</strong><span>Envie sugestões e acompanhe as ações desenvolvidas em todo o estado.</span></div></FooterGrid><FooterBottom><span>Deputado Federal Defensor Stélio Dener</span><span>Compromisso com Roraima</span></FooterBottom></Footer>
}

export function PageShell() {
  return <PageFrame><InstitutionalHeader /><MainGrid><MunicipalitiesSidebar /><MainContent /><WorkAreasSidebar /></MainGrid><InstitutionalFooter /></PageFrame>
}
