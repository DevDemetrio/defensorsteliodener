import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Container } from '@mui/material'
import { galleryCategories } from './mock'
import { GalleryCard, GalleryGrid, GallerySectionWrapper } from './styles'

export function GallerySection() {
  return <GallerySectionWrapper id="galeria"><Container maxWidth="lg"><div className="heading"><span>Galeria</span><h2>Roraima em movimento.</h2><p>Registros do trabalho realizado em diferentes áreas e municípios do estado.</p></div><GalleryGrid>{galleryCategories.map((category, index) => <GalleryCard key={category} $index={index}><div><small>Galeria</small><h3>{category}</h3></div><ArrowOutwardRoundedIcon aria-hidden="true" /></GalleryCard>)}</GalleryGrid></Container></GallerySectionWrapper>
}
