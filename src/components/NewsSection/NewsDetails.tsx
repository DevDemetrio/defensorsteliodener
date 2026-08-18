import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Navigate } from 'react-router-dom'
import { newsMock } from '../../mocks/newsMock'
import { Article, ArticleFooter, ArticleImage, ArticleNavigation, ArticlePicture, BackLink, DetailHeader, HomeLink, Quote, ServiceBox } from './styled'

type NewsDetailsProps = { newsId: string }

function NewsNavigation() {
  return (
    <ArticleNavigation>
      <BackLink to="/noticias#news-list-title"><ArrowBackRoundedIcon />Voltar para notícias</BackLink>
      <HomeLink to="/">Voltar ao início<ArrowForwardRoundedIcon /></HomeLink>
    </ArticleNavigation>
  )
}

export function NewsDetails({ newsId }: NewsDetailsProps) {
  const news = newsMock.find(item => item.id === newsId)

  if (!news) return <Navigate to="/noticias" replace />

  return (
    <Article>
      <NewsNavigation />
      <DetailHeader><span>{news.action}</span><small>Notícia #{news.id}</small><h1 id="news-detail-title">{news.title}</h1><p>{news.introduction}</p></DetailHeader>
      <ArticlePicture><ArticleImage src={news.imageDesktop} alt={news.imageAlt} /></ArticlePicture>
      <div className="article-content">
        {news.paragraphs.map((paragraph, index) => <div key={paragraph}><p>{paragraph}</p>{index === 2 && news.quote && <Quote>“{news.quote}”<cite>{news.quoteAuthor}</cite></Quote>}</div>)}
        {news.service && <ServiceBox><strong>Serviço</strong>{news.service.map(item => <span key={item}>{item}</span>)}</ServiceBox>}
      </div>
      <ArticleFooter><NewsNavigation /></ArticleFooter>
    </Article>
  )
}
