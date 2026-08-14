import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded'
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded'
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Button, Container } from '@mui/material'
import heroImage from '../../assets/hero.png'
import biographyImage from '../../assets/foto.jpeg'
import { areas, indicators, projects } from '../../pages/Home/content'
import {
  AreaCard, AreaGrid, Biography, BiographyContent, Hero, HeroActions, HeroContent,
  HeroImage, Indicator, IndicatorGrid, ProjectCard, ProjectGrid, Section,
  SectionHeading, SectionIntro,
} from './styles'

const areaIcons = {
  saude: HealthAndSafetyRoundedIcon,
  infraestrutura: ApartmentRoundedIcon,
  agricultura: AgricultureRoundedIcon,
  indigenas: GroupsRoundedIcon,
  educacao: AutoStoriesRoundedIcon,
  esporte: SportsSoccerRoundedIcon,
  cultura: PaletteRoundedIcon,
  desenvolvimento: TrendingUpRoundedIcon,
  cidadania: BalanceRoundedIcon,
  seguranca: SecurityRoundedIcon,
}

export function HeroSection() {
  return (
    <Hero id="inicio">
      <Container maxWidth="lg">
        <HeroContent>
          <div>
            <span className="eyebrow">O Defensor do Estado e do Povo</span>
            <h1>Mais de <strong>R$ 367 milhões</strong> destinados para transformar Roraima.</h1>
            <p>Um mandato marcado por investimentos em saúde, infraestrutura, agricultura, esporte, educação, povos indígenas e desenvolvimento dos municípios.</p>
            <HeroActions>
              <Button href="#projetos" variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />}>Conheça nosso trabalho</Button>
              <Button href="#resultados" variant="outlined" size="large">Ver resultados</Button>
            </HeroActions>
          </div>
          <HeroImage><img src={heroImage} alt="Deputado Federal Defensor Stélio Dener" /></HeroImage>
        </HeroContent>
      </Container>
    </Hero>
  )
}

export function IndicatorsSection() {
  return <Section id="resultados" $compact><Container maxWidth="lg"><IndicatorGrid>{indicators.map((item) => <Indicator key={item.label}><strong>{item.value}</strong><span>{item.label}</span></Indicator>)}</IndicatorGrid></Container></Section>
}

export function AreasSection() {
  return (
    <Section id="atuacao">
      <Container maxWidth="lg">
        <SectionHeading><span>Atuação</span><h2>Trabalho presente onde Roraima mais precisa.</h2></SectionHeading>
        <SectionIntro>Recursos e iniciativas que fortalecem serviços públicos, geram oportunidades e melhoram a vida das pessoas.</SectionIntro>
        <AreaGrid>{areas.map((area) => { const Icon = areaIcons[area.id as keyof typeof areaIcons]; return <AreaCard key={area.id}><div className="icon"><Icon /></div><h3>{area.title}</h3><p>{area.description}</p></AreaCard> })}</AreaGrid>
      </Container>
    </Section>
  )
}

export function ProjectsSection() {
  return (
    <Section id="projetos" $dark data-dark="true">
      <Container maxWidth="lg">
        <SectionHeading><span>Projetos em destaque</span><h2>Iniciativas que chegam às pessoas.</h2></SectionHeading>
        <SectionIntro>Resultados concretos construídos em diferentes regiões e comunidades do estado.</SectionIntro>
        <ProjectGrid>{projects.map((project, index) => <ProjectCard key={project.title} $featured={index === 0}><small>{project.eyebrow}</small><h3>{project.title}</h3><p>{project.description}</p><ul>{project.highlights.map((item) => <li key={item}><CheckCircleRoundedIcon />{item}</li>)}</ul></ProjectCard>)}</ProjectGrid>
      </Container>
    </Section>
  )
}

export function BiographySection() {
  return (
    <Section id="biografia">
      <Container maxWidth="lg">
        <Biography>
          <img src={biographyImage} alt="Retrato de Stélio Dener" loading="lazy" />
          <BiographyContent><SectionHeading><span>Biografia</span><h2>Uma trajetória dedicada à defesa das pessoas.</h2></SectionHeading><p>Stélio Dener de Souza Cruz é advogado, defensor público e deputado federal por Roraima. Foi Defensor Público-Geral do Estado por quatro mandatos e construiu sua trajetória na defesa dos direitos da população.</p><p>Na Câmara dos Deputados, atua pelo fortalecimento da saúde, infraestrutura, agricultura, desenvolvimento regional, povos indígenas, esporte, cultura e cidadania.</p><Button href="#contato" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Conheça a trajetória</Button></BiographyContent>
        </Biography>
      </Container>
    </Section>
  )
}
