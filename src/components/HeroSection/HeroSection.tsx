import { useParams } from 'react-router-dom'
import { municipalityCarousel } from '../../mocks'
import { MunicipalityDetails } from '../MunicipalityDetails/MunicipalityDetails'
import { NewsGrid } from '../NewsGrid/NewsGrid'
import { NumberCarousel } from '../NumberCarousel/NumberCarousel'
import { Hero } from './styled'

export function HeroSection() {
  const { municipalitySlug } = useParams()
  const municipality = municipalityCarousel.find(item => item.slug === municipalitySlug)

  if (municipality) return <Hero id="inicio"><MunicipalityDetails municipality={municipality} /></Hero>

  return <><Hero id="inicio"><span>O Defensor não para</span><h1>Mais de <strong>R$ 367 milhões</strong> em emendas parlamentares destinados a Roraima.</h1><p>Trabalho que gera resultados. Mais investimentos para quem mais precisa.</p><NumberCarousel /></Hero><NewsGrid /></>
}
