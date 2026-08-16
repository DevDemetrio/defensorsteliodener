import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded'
import { FooterContainer, FooterBottom, FooterGrid, SocialLinks } from './styled'

export function InstitutionalFooter() {
  return <FooterContainer id="contato"><FooterGrid><div><strong>Defensor Stélio Dener</strong><span>Advogado, defensor público e deputado federal por Roraima.</span><span>CNPJ: 68.545.837/0001-50</span></div><div><strong>Mandato</strong><span>Trabalho que gera resultados. Mais investimentos para quem mais precisa.</span></div><div><strong>Me siga nas redes sociais</strong><SocialLinks aria-label="Redes sociais"><a href="https://www.tiktok.com/@defensor_steliodener?_t=ZM-90BwJpxeLP6&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><MusicNoteRoundedIcon /></a><a href="https://www.facebook.com/defensorsteliodeneroficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookRoundedIcon /></a><a href="https://www.instagram.com/defensor_steliodener?utm_source=ig_web_button_share_sheet&igsh=dHQ2Y3llY2U4enNv" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a></SocialLinks></div></FooterGrid><FooterBottom><span>Deputado Federal Defensor Stélio Dener</span><span>Compromisso com Roraima</span></FooterBottom></FooterContainer>
}
