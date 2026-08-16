import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, limeGreen, navy } = colors

export const GridContainer = styled.section`
  margin-top:48px;
  @media(max-width:600px){margin-top:36px}
`

export const Grid = styled.div<{ $itemCount:number }>`
  display:grid;grid-template-columns:repeat(${({$itemCount}) => Math.max(1, Math.min($itemCount, 4))},minmax(0,1fr));gap:18px;
  @media(max-width:1024px){grid-template-columns:repeat(${({$itemCount}) => Math.max(1, Math.min($itemCount, 2))},minmax(0,1fr))}
  @media(max-width:600px){grid-template-columns:1fr}
`

export const GridCard = styled.article`
  display:flex;min-width:0;overflow:hidden;flex-direction:column;border:1px solid ${border};border-top:4px solid ${green};border-radius:16px;background:#fff;color:${navy};box-shadow:0 12px 30px rgba(12,50,76,.08);
  >p{display:-webkit-box;min-height:64px;margin:18px 18px 12px;overflow:hidden;color:${navy};font-size:.82rem;font-weight:800;line-height:1.5;-webkit-box-orient:vertical;-webkit-line-clamp:3}
  @media(max-width:600px){border-radius:12px}
`

export const GridImageArea = styled.div`
  position:relative;aspect-ratio:1;overflow:hidden;background:#e8edf0;
`

export const GridImage = styled.img`
  display:block;width:100%;height:100%;object-fit:cover;
`

export const GridAction = styled.span`
  position:absolute;right:0;bottom:0;left:0;padding:10px 12px;background:rgba(12,50,76,.9);color:#fff;font-size:.65rem;font-weight:900;letter-spacing:.04em;text-align:center;text-transform:uppercase;backdrop-filter:blur(4px);
`

export const GridCardLink = styled(Link)`
  display:flex;min-height:38px;align-items:center;justify-content:center;gap:5px;margin-top:auto;background:${limeGreen};color:${navy};font-size:.7rem;font-weight:900;letter-spacing:.06em;text-decoration:none;text-transform:uppercase;transition:filter .2s ease;
  svg{width:16px;height:16px}
  &:hover{filter:brightness(.94)}
  &:focus-visible{outline:3px solid ${navy};outline-offset:-3px}
`

export const GridPlaceholder = styled.div`
  display:grid;aspect-ratio:1;place-content:center;justify-items:center;gap:6px;border:1px dashed #aebbc3;border-top:4px solid ${green};border-radius:16px;background:linear-gradient(145deg,#f7f9fc,#edf2f7);color:${navy};text-align:center;
  strong{font-size:.85rem;text-transform:uppercase}
  span{color:#75858e;font-size:.72rem}
  @media(max-width:600px){border-radius:12px}
`

export const GridPagination = styled.nav`
  display:flex;min-height:64px;align-items:center;justify-content:center;gap:16px;margin-top:18px;padding:12px 18px;border-radius:12px;background:#dfe7e3;color:${navy};
  >span{font-size:.72rem;font-weight:700}
  >span strong{color:${green}}
`

export const GridPaginationButton = styled.button`
  display:grid;width:36px;height:36px;place-items:center;padding:0;border:1px solid rgba(12,50,76,.2);border-radius:50%;background:#fff;color:${navy};cursor:pointer;transition:background .2s ease,color .2s ease,opacity .2s ease;
  svg{font-size:1.3rem}
  &:hover:not(:disabled){background:${green};color:#fff}
  &:focus-visible{outline:3px solid ${green};outline-offset:2px}
  &:disabled{opacity:.35;cursor:not-allowed}
`
