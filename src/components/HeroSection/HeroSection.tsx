import { useParams } from 'react-router-dom'
import { municipalityCarousel } from '../../mocks'
import { MunicipalityDetails } from '../MunicipalityDetails/MunicipalityDetails'
import { NumberCarousel } from '../NumberCarousel/NumberCarousel'
import { Hero } from './styled'

export function HeroSection() {
  const { municipalitySlug } = useParams()
  const municipality = municipalityCarousel.find(item => item.slug === municipalitySlug)

  if (municipality) return <Hero id="inicio"><MunicipalityDetails municipality={municipality} /></Hero>

  return <Hero id="inicio"><span>O Defensor não para</span><h1>Mais de <strong>R$ 367 milhões</strong> destinados para transformar Roraima.</h1><p>Um mandato marcado por investimentos em saúde, infraestrutura, agricultura, esporte, educação, povos indígenas e desenvolvimento dos municípios.</p><NumberCarousel /></Hero>
}
