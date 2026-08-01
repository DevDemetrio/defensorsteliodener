import { Container } from '@mui/material'
import { Card, CardGrid, Section, SectionTitle } from '../../pages/Home/styles'
import { mediaInformationMock } from './mock'

export function MediaInformationSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle>Mídia e informações</SectionTitle>
        <CardGrid>
          {mediaInformationMock.map((item) => (
            <Card key={item.id}>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}
