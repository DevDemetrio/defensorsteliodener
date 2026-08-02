import { Container } from '@mui/material'
import { AreaCard, AreaGrid, Section, SectionHeading } from '../LandingSections/styles'
import { mediaInformationMock } from './mock'

export function MediaInformationSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionHeading><span>Informações</span><h2>Mídia e informações</h2></SectionHeading>
        <AreaGrid>
          {mediaInformationMock.map((item) => (
            <AreaCard key={item.id}>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </AreaCard>
          ))}
        </AreaGrid>
      </Container>
    </Section>
  )
}
