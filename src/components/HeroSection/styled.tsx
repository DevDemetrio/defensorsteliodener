import styled from 'styled-components'
import { colors } from '../../styles/tokens'

const { darkGreen, green, limeGreen } = colors

export const Hero = styled.section`
  position:relative;overflow:hidden;padding:clamp(30px,5vw,60px);border-radius:18px;background:linear-gradient(130deg,${darkGreen},${green});color:#fff;
  &::after{position:absolute;width:260px;height:260px;right:-110px;top:-130px;border:24px solid rgba(190,252,95,.18);border-radius:50%;content:''}>span{color:${limeGreen};font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}h1{position:relative;z-index:1;max-width:760px;margin:14px 0 20px;font-size:clamp(1.5rem,calc(4vw - 25px),calc(4.4rem - 25px));line-height:.98;letter-spacing:-.05em}h1 strong{color:${limeGreen}}p{max-width:680px;margin:0;color:rgba(255,255,255,.76);font-size:.94rem;line-height:1.65}
`
