import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useEffect, useRef, useState } from 'react'
import { municipalityCarousel } from '../../mocks'
import { CarouselButton, CarouselContainer, CarouselContent, CarouselFooter, CarouselImage, CarouselItem, CarouselTrack, CarouselViewport } from './styled'

export function NumberCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex(index => (index + 1) % municipalityCarousel.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    const item = viewport?.querySelectorAll<HTMLElement>('[data-carousel-item]')[currentIndex]
    if (viewport && item) viewport.scrollTo({ left: item.offsetLeft, behavior: 'smooth' })
  }, [currentIndex])

  const showPrevious = () => setCurrentIndex(index => (index - 1 + municipalityCarousel.length) % municipalityCarousel.length)
  const showNext = () => setCurrentIndex(index => (index + 1) % municipalityCarousel.length)

  return (
    <CarouselContainer aria-label="Carrossel numérico">
      <CarouselButton type="button" onClick={showPrevious} aria-label="Número anterior"><ChevronLeftRoundedIcon /></CarouselButton>
      <CarouselViewport ref={viewportRef}>
        <CarouselTrack>
          {municipalityCarousel.map(item => <CarouselItem key={item.name} to={`/municipios/${item.slug}`} data-carousel-item><CarouselImage src={item.image} alt={`Ação do mandato em ${item.name}`} /><CarouselContent><span>{item.name}</span><small>Total destinado</small><strong>{item.total}</strong></CarouselContent><CarouselFooter>Clique e saiba mais</CarouselFooter></CarouselItem>)}
        </CarouselTrack>
      </CarouselViewport>
      <CarouselButton type="button" onClick={showNext} aria-label="Próximo número"><ChevronRightRoundedIcon /></CarouselButton>
    </CarouselContainer>
  )
}
