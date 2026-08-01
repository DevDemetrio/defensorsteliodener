import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, IconButton, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { GallerySection } from '../../components/GallerySection'
import { MediaInformationSection } from '../../components/MediaInformationSection'
import {
  Card,
  CardGrid,
  ContactForm,
  Copyright,
  Footer,
  FooterContent,
  Header,
  Hero,
  Logo,
  MobileMenuButton,
  MobileNav,
  Nav,
  Section,
  SectionTitle,
} from './styles'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

const contents = [
  { category: 'Categoria', title: 'Título do primeiro conteúdo', description: 'Resumo do conteúdo em destaque.' },
  { category: 'Categoria', title: 'Título do segundo conteúdo', description: 'Resumo do conteúdo em destaque.' },
  { category: 'Categoria', title: 'Título do terceiro conteúdo', description: 'Resumo do conteúdo em destaque.' },
]

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.email('Informe um e-mail válido'),
})

type ContactData = z.infer<typeof contactSchema>

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })

  const handleContact = (data: ContactData) => {
    console.info('Contato:', data)
  }

  return (
    <>
      <Header>
        <Container maxWidth="lg">
          <div className="header-content">
            <Logo href="#inicio">Stelio Dener</Logo>
            <Nav aria-label="Navegação principal">
              {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </Nav>
            <MobileMenuButton as={IconButton} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="menu-mobile" onClick={() => setIsMenuOpen((open) => !open)}>
              {isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </MobileMenuButton>
          </div>
          <MobileNav id="menu-mobile" $open={isMenuOpen} aria-label="Navegação mobile">
            <div>
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
            </div>
          </MobileNav>
        </Container>
      </Header>

      <main>
        <Hero id="inicio">
          <Container maxWidth="lg">
            <small>Apresentação</small>
            <h1>Espaço para a mensagem principal</h1>
            <p>Este conteúdo será substituído pelas informações definitivas do projeto.</p>
            <Button href="#conteudos" variant="contained" size="large">Conheça o projeto</Button>
          </Container>
        </Hero>

        <Section id="conteudos">
          <Container maxWidth="lg">
            <SectionTitle>Conteúdos recentes</SectionTitle>
            <CardGrid>
              {contents.map((item) => (
                <Card key={item.title}>
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              ))}
            </CardGrid>
          </Container>
        </Section>

        <Section id="atuacao" $dark>
          <Container maxWidth="lg">
            <SectionTitle>Atuação</SectionTitle>
            <p>Espaço reservado para apresentar áreas de trabalho, projetos ou serviços.</p>
          </Container>
        </Section>

        <MediaInformationSection />

        <GallerySection />

        <Section id="contato">
          <Container maxWidth="lg">
            <SectionTitle>Vamos conversar</SectionTitle>
            <ContactForm onSubmit={handleSubmit(handleContact)} noValidate>
              <TextField label="Nome" error={!!errors.name} helperText={errors.name?.message} {...register('name')} />
              <TextField label="E-mail" error={!!errors.email} helperText={errors.email?.message} {...register('email')} />
              <Button type="submit" variant="contained">Enviar</Button>
            </ContactForm>
          </Container>
        </Section>
      </main>

      <Footer>
        <Container maxWidth="lg">
          <FooterContent>
            <div><h2>Stelio Dener</h2><p>Área reservada para uma breve apresentação institucional.</p></div>
            <div><strong>Contato</strong><p>Informações serão adicionadas posteriormente.</p></div>
          </FooterContent>
          <Copyright>© {new Date().getFullYear()} Stelio Dener.</Copyright>
        </Container>
      </Footer>
    </>
  )
}
