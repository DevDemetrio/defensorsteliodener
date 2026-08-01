import { Container } from '@mui/material'
import { Card, CardGrid, Section, SectionTitle } from '../../pages/Home/styles'
import { galleryMock } from './mock'

export function GallerySection() {
  return (
    <Section id="galeria">
      <Container maxWidth="lg">
        <SectionTitle>Galeria</SectionTitle>
        <CardGrid>
          {galleryMock.map((item) => (
            <Card key={item.id}>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}
