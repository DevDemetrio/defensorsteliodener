import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { border, green, limeGreen } = colors

export const Column = styled.div<{ $region:'left'|'center'|'right' }>`
  position:${({$region})=>$region==='center'?'relative':'sticky'};top:0;min-width:0;height:${({$region})=>$region==='center'?'auto':'100dvh'};min-height:0;overflow:${({$region})=>$region==='center'?'visible':'hidden auto'};overscroll-behavior:${({$region})=>$region==='center'?'auto':'contain'};scrollbar-gutter:${({$region})=>$region==='center'?'auto':'stable'};touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:${({$region})=>$region==='center'?'28px':'20px'};border-right:${({$region})=>$region==='right'?'0':`1px solid ${border}`};background:${({$region})=>$region==='center'?'#fff':'#f8fbf9'};
  .column-heading{position:sticky;z-index:3;top:${({$region})=>$region==='center'?'-28px':'-20px'};margin:${({$region})=>$region==='center'?'-28px -28px 24px':'-20px -20px 18px'};padding:14px 20px;border-bottom:3px solid ${limeGreen};background:${green};color:#fff;font-size:.68rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase;backdrop-filter:blur(10px)}
  &:focus-visible{outline-offset:-3px}
  @media(max-width:800px){position:static;order:${({$region})=>$region==='center'?1:$region==='left'?2:3};width:${({$region})=>$region==='center'?'100%':'calc(100% - 40px)'};height:auto;margin:${({$region})=>$region==='center'?'0':'20px'};overflow:visible;overscroll-behavior:auto;scrollbar-gutter:auto;padding:${({$region})=>$region==='center'?'20px 16px':'20px'};border:${({$region})=>$region==='center'?'0':`1px solid ${border}`};border-radius:${({$region})=>$region==='center'?'0':'14px'};.column-heading{position:static;margin:${({$region})=>$region==='center'?'-20px -16px 20px':'-20px -20px 20px'};border-radius:${({$region})=>$region==='center'?'0':'13px 13px 0 0'}}}
`
