import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Button } from '@mui/material'
import { Hero, HeroActions } from './styled'

export function HeroSection() {
  return <Hero id="inicio"><span>O Defensor não para</span><h1>Mais de <strong>R$ 367 milhões</strong> destinados para transformar Roraima.</h1><p>Um mandato marcado por investimentos em saúde, infraestrutura, agricultura, esporte, educação, povos indígenas e desenvolvimento dos municípios.</p><HeroActions><Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Conheça nosso trabalho</Button><Button variant="outlined">Ver resultados</Button></HeroActions></Hero>
}
