import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useState } from 'react'
import mobileHeaderBanner from '../../assets/CELULAR.png'
import desktopHeaderBanner from '../../assets/DESKTOP.png'
import tabletHeaderBanner from '../../assets/TABLET.png'
import { indicators, navigation } from '../../mocks'
import { BrandBar, Header, HeaderBanner, HighlightsBar, MenuButton, MobileNavigation, NavigationBar, UtilityBar } from './styled'

export function InstitutionalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Header>
      <UtilityBar><span>Deputado Federal por Roraima</span><span>O Defensor não para</span></UtilityBar>
      <BrandBar>
        <MenuButton type="button" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="menu-mobile" onClick={() => setIsMenuOpen(open => !open)}>
          {isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </MenuButton>
        <HeaderBanner href="#inicio" aria-label="Defensor Stélio Dener - início">
          <picture>
            <source media="(max-width: 600px)" srcSet={mobileHeaderBanner} />
            <source media="(max-width: 1024px)" srcSet={tabletHeaderBanner} />
            <img src={desktopHeaderBanner} alt="Candidato a Deputado Federal Defensor Stélio Dener, 4477 — Por Roraima, por você!" />
          </picture>
        </HeaderBanner>
      </BrandBar>
      <NavigationBar aria-label="Navegação principal">
        <div>{navigation.map(item => <a key={item} href={`#${item.toLowerCase().replace('í', 'i')}`}>{item}</a>)}</div>
        <SearchRoundedIcon aria-label="Pesquisar" />
      </NavigationBar>
      <MobileNavigation id="menu-mobile" $open={isMenuOpen} aria-label="Navegação mobile">
        <div>
          {navigation.map(item => <a key={item} href={`#${item.toLowerCase().replace('í', 'i')}`} onClick={() => setIsMenuOpen(false)}>{item}<ArrowForwardRoundedIcon /></a>)}
        </div>
      </MobileNavigation>
      <HighlightsBar aria-label="Indicadores do mandato">
        {indicators.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </HighlightsBar>
    </Header>
  )
}
