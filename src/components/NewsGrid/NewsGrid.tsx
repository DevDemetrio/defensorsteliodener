import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useState } from 'react'
import { newsMock } from '../../mocks/newsMock'
import { Grid, GridAction, GridCard, GridCardLink, GridContainer, GridImage, GridImageArea, GridPagination, GridPaginationButton, GridPlaceholder } from './styled'

const MAX_NEWS_ITEMS = 4

export function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(newsMock.length / MAX_NEWS_ITEMS))
  const firstItemIndex = (currentPage - 1) * MAX_NEWS_ITEMS
  const newsItems = newsMock.slice(firstItemIndex, firstItemIndex + MAX_NEWS_ITEMS)
  const placeholders = Array.from({ length: MAX_NEWS_ITEMS - newsItems.length }, (_, index) => newsItems.length + index + 1)

  return (
    <GridContainer aria-label="Grade de notícias">
      <Grid $itemCount={newsItems.length + placeholders.length}>
        {newsItems.map(news => (
          <GridCard key={news.id}>
            <GridImageArea>
              <GridImage src={news.imageDesktop} alt={news.imageAlt} loading="lazy" />
              <GridAction>{news.action}</GridAction>
            </GridImageArea>
            <p>{news.title}</p>
            <GridCardLink
              to={`/noticias/${news.id}#news-detail-title`}
              aria-label={`Ler notícia: ${news.title}`}
            >
              Saiba mais <ArrowForwardRoundedIcon />
            </GridCardLink>
          </GridCard>
        ))}
        {placeholders.map(item => (
          <GridPlaceholder key={item} aria-label={`Espaço reservado para a notícia ${item}`}>
            <strong>Em breve</strong>
            <span>Notícia {item}</span>
          </GridPlaceholder>
        ))}
      </Grid>
      <GridPagination aria-label="Paginação da grade de notícias">
        <GridPaginationButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)} aria-label="Página anterior">
          <ChevronLeftRoundedIcon />
        </GridPaginationButton>
        <span>Página <strong>{currentPage}</strong> de {totalPages}</span>
        <GridPaginationButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage(page => page + 1)} aria-label="Próxima página">
          <ChevronRightRoundedIcon />
        </GridPaginationButton>
      </GridPagination>
    </GridContainer>
  )
}
