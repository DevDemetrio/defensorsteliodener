import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/tokens'

const { border, green, limeGreen, navy } = colors

export const NewsHeader = styled.header`
  margin: 54px 0 24px;
  > span { color:${green};font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase; }
  h2 { max-width:760px;margin:8px 0 12px;scroll-margin-top:54px;color:${navy};font-size:clamp(1.7rem,3vw,2.8rem);line-height:1.08;letter-spacing:-.04em; }
  p { max-width:620px;margin:0;color:#687971;font-size:.85rem;line-height:1.6; }
`

export const TableWrapper = styled.div`
  overflow:hidden;border:1px solid ${border};border-radius:14px;background:#fff;box-shadow:0 12px 30px rgba(31,73,49,.07);
`

export const NewsTable = styled.table`
  width:100%;border-collapse:collapse;text-align:left;
  th { padding:15px 18px;background:${navy};color:#fff;font-size:.68rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase; }
  td { padding:18px;border-top:1px solid ${border};color:#596e62;font-size:.78rem;line-height:1.5;vertical-align:middle; }
  td:first-child strong { color:${green}; }
  td:nth-child(2) { width:22%;color:${navy};font-weight:800; }
  td:nth-child(3) { width:44%; }
  td:last-child { width:130px;text-align:right; }
  .sr-only { position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap; }

  @media(max-width:680px){
    thead,thead tr { display:block;width:100%; }
    thead tr { padding:0;border:0; }
    thead th { display:none; }
    thead th:nth-child(2) { display:block;width:100%;padding:13px 18px; }
    tbody,td { display:block;width:100%; }
    tbody tr { display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;padding:18px;border-top:1px solid ${border}; }
    tbody tr:first-child { border-top:0; }
    td,td:nth-child(2),td:nth-child(3),td:last-child { width:100%;padding:5px 0;border:0;text-align:left; }
    td:first-child,td:nth-child(3) { display:none; }
    td[data-label]::before { display:block;margin-bottom:2px;color:${green};font-size:.6rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;content:attr(data-label); }
    td:nth-child(2)::before { display:none; }
    td:last-child { width:auto;padding:0; }
  }
`

export const DetailsButton = styled(Link)`
  display:inline-flex;min-height:38px;align-items:center;justify-content:center;gap:6px;padding:0 14px;border:0;border-radius:999px;background:${green};color:#fff;font-size:.7rem;font-weight:900;cursor:pointer;transition:background .2s ease,transform .2s ease;
  text-decoration:none;
  svg { width:16px; }
  &:hover { background:${navy};transform:translateY(-1px); }
  &:focus-visible { outline:3px solid ${limeGreen};outline-offset:2px; }
  @media(max-width:680px){min-height:34px;padding:0 11px;font-size:.64rem;white-space:nowrap}
`

export const Article = styled.article`
  max-width:850px;margin:0 auto;padding:28px 0 64px;
  .article-content{max-width:720px;margin:34px auto 0;padding:30px;border-left:4px solid ${green};background:#f6faf8;border-radius:0 14px 14px 0}
  .article-content p{margin:0 0 18px;color:#52685c;font-size:.94rem;line-height:1.8}.article-content p:last-child{margin-bottom:0}
  @media(max-width:600px){padding-top:12px;.article-content{padding:22px 18px}}
`

export const ArticlePicture = styled.picture`
  display:block;margin-top:24px;overflow:hidden;border:3px solid ${green};border-radius:16px;box-shadow:0 14px 34px rgba(31,73,49,.12);
  @media(max-width:700px){width:min(350px, 100%);margin:20px auto 0;border-radius:12px}
`

export const ArticleImage = styled.img`
  display:block;width:100%;aspect-ratio:16/9;object-fit:cover;
  @media(max-width:700px){height:auto;aspect-ratio:16/9;object-fit:cover}
`

export const Quote = styled.blockquote`
  margin:28px 0;padding:24px;border-left:4px solid ${limeGreen};background:${navy};color:#fff;font-size:1.05rem;font-weight:700;line-height:1.65;
  cite{display:block;margin-top:12px;color:${limeGreen};font-size:.7rem;font-style:normal;font-weight:900;text-transform:uppercase}
`

export const ServiceBox = styled.aside`
  display:grid;gap:5px;margin-top:30px;padding:20px;border-radius:12px;background:#eaf4ee;color:#52685c;font-size:.8rem;
  strong{margin-bottom:4px;color:${green};font-size:.72rem;text-transform:uppercase}
`

export const ArticleNavigation = styled.nav`
  display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:30px;
`

export const ArticleFooter = styled.footer`
  max-width:720px;margin:34px auto 0;padding-top:24px;border-top:1px solid ${border};
  ${ArticleNavigation}{margin-bottom:0}
`

export const BackLink = styled(Link)`
  display:inline-flex;align-items:center;gap:7px;color:${green};font-size:.76rem;font-weight:900;text-decoration:none;
  svg{width:18px}&:hover{color:${navy}}
`

export const HomeLink = styled(BackLink)`
  text-align:right;
`

export const DetailHeader = styled.header`
  padding:0;color:${navy};
  >span{display:inline-block;margin-bottom:8px;color:${green};font-size:.7rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}small{display:block;color:#819087;font-size:.65rem}h1{max-width:760px;margin:16px 0;scroll-margin-top:54px;font-size:clamp(1.75rem,3vw,2rem);line-height:1.12;letter-spacing:-.035em}p{max-width:680px;margin:0;color:#667970;font-size:.92rem;line-height:1.7}
`

export const Pagination = styled.nav`
  display:flex;align-items:center;justify-content:center;gap:14px;margin:22px 0 38px;color:#687971;font-size:.72rem;
  strong { color:${green}; }
`

export const PaginationButton = styled.button`
  display:grid;width:38px;height:38px;place-items:center;padding:0;border:1px solid ${border};border-radius:50%;background:#fff;color:${green};cursor:pointer;
  svg { width:20px; }
  &:hover:not(:disabled) { border-color:${green};background:#f0f7f3; }
  &:disabled { opacity:.38;cursor:not-allowed; }
`
