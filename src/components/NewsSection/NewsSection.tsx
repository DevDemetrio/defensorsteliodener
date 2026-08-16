import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useState } from 'react'
import { newsMock } from '../../mocks/newsMock'
import {
  DetailsButton,
  NewsHeader,
  NewsTable,
  Pagination,
  PaginationButton,
  TableWrapper,
} from './styled'

const ITEMS_PER_PAGE = 2

export function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(newsMock.length / ITEMS_PER_PAGE)
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleNews = newsMock.slice(firstItemIndex, firstItemIndex + ITEMS_PER_PAGE)

  return (
    <section id="noticias">
      <NewsHeader>
        <span>Notícias</span>
        <h2 id="news-list-title">Acompanhe minha caminhada rumo à vitória do povo.</h2>
        <p>Veja as ações, encontros e resultados construídos junto à população de Roraima.</p>
      </NewsHeader>

      <TableWrapper>
        <NewsTable>
          <thead><tr><th scope="col">Item</th><th scope="col">Ação</th><th scope="col">Título</th><th scope="col"><span className="sr-only">Acessar notícia</span></th></tr></thead>
          <tbody>
            {visibleNews.map(item => (
              <tr key={item.id}>
                <td data-label="Item"><strong>{item.id}</strong></td>
                <td data-label="Ação">{item.action}</td>
                <td data-label="Título">{item.title}</td>
                <td><DetailsButton to={`/noticias/${item.id}#news-detail-title`} aria-label={`Saiba mais sobre: ${item.title}`}>Saiba +<ArrowForwardRoundedIcon /></DetailsButton></td>
              </tr>
            ))}
          </tbody>
        </NewsTable>
      </TableWrapper>

      {totalPages > 1 && <Pagination aria-label="Paginação das notícias">
        <PaginationButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)} aria-label="Página anterior"><ChevronLeftRoundedIcon /></PaginationButton>
        <span>Página <strong>{currentPage}</strong> de {totalPages}</span>
        <PaginationButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage(page => page + 1)} aria-label="Próxima página"><ChevronRightRoundedIcon /></PaginationButton>
      </Pagination>}
    </section>
  )
}
