import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import type { MunicipalityCarouselItem } from '../../mocks'
import { BackLink, DetailContent, DetailImage, DetailLayout, DetailPicture, HighlightList } from './styled'

type MunicipalityDetailsProps = {
  municipality: MunicipalityCarouselItem
}

export function MunicipalityDetails({ municipality }: MunicipalityDetailsProps) {
  return (
    <DetailLayout>
      <DetailPicture><source media="(max-width: 700px)" srcSet={municipality.imageMobile} /><DetailImage src={municipality.imageDesktop} alt={`Ação do mandato em ${municipality.name}`} /></DetailPicture>
      <DetailContent>
        <BackLink to="/" state={{ preserveScroll: true }}><ArrowBackRoundedIcon /> Voltar</BackLink>
        <span>Investimentos no município</span>
        <h2>{municipality.name}</h2>
        <small>Total destinado</small>
        <strong>{municipality.total}</strong>
        <HighlightList>{municipality.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</HighlightList>
      </DetailContent>
    </DetailLayout>
  )
}
