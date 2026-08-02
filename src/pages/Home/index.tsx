import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, IconButton, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { GallerySection } from '../../components/GallerySection'
import { AreasSection, BiographySection, HeroSection, IndicatorsSection, ProjectsSection } from '../../components/LandingSections'
import { navigation } from './content'
import { ContactForm, ContactLayout, Copyright, Footer, FooterContent, Header, Logo, MobileMenuButton, MobileNav, Nav } from './styles'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.email('Informe um e-mail válido'),
  message: z.string().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres'),
})
type ContactData = z.infer<typeof contactSchema>

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })
  const handleContact = (data: ContactData) => { console.info('Contato:', data); reset() }

  return <>
    <Header><Container maxWidth="lg"><div className="header-content"><Logo href="#inicio" aria-label="Stélio Dener — início"><strong>STÉLIO</strong><span>DENER</span></Logo><Nav aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</Nav><MobileMenuButton as={IconButton} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="menu-mobile" onClick={() => setIsMenuOpen(open => !open)}>{isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}</MobileMenuButton></div><MobileNav id="menu-mobile" $open={isMenuOpen} aria-label="Navegação mobile"><div>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}</div></MobileNav></Container></Header>
    <main>
      <HeroSection />
      <IndicatorsSection />
      <AreasSection />
      <ProjectsSection />
      <GallerySection />
      <BiographySection />
      <section id="contato"><Container maxWidth="lg"><ContactLayout><div><span>Contato</span><h2>Vamos conversar.</h2><p>Entre em contato para conhecer mais sobre o mandato, enviar sugestões ou acompanhar de perto as ações desenvolvidas em todo o estado de Roraima.</p></div><ContactForm onSubmit={handleSubmit(handleContact)} noValidate><TextField label="Nome" error={!!errors.name} helperText={errors.name?.message} {...register('name')} /><TextField label="E-mail" type="email" error={!!errors.email} helperText={errors.email?.message} {...register('email')} /><TextField label="Mensagem" multiline minRows={4} error={!!errors.message} helperText={errors.message?.message} {...register('message')} /><Button type="submit" variant="contained">Enviar mensagem</Button>{isSubmitSuccessful && <p role="status">Mensagem preparada com sucesso.</p>}</ContactForm></ContactLayout></Container></section>
    </main>
    <Footer><Container maxWidth="lg"><FooterContent><div><Logo as="div"><strong>STÉLIO</strong><span>DENER</span></Logo><p>O Defensor do Estado e do Povo. Trabalho que gera resultados e compromisso com Roraima.</p></div><div><strong>Navegação</strong>{navigation.slice(0, 6).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div><strong>Mandato</strong><p>Cuidando das pessoas.<br />Desenvolvendo o Estado.</p></div></FooterContent><Copyright>© {new Date().getFullYear()} Stélio Dener. Todos os direitos reservados.</Copyright></Container></Footer>
  </>
}
