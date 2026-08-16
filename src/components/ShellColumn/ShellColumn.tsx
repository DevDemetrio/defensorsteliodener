import type { ReactNode } from 'react'
import { Column } from './styled'

type ShellColumnProps = {
  children: ReactNode
  disableInternalScroll?: boolean
  headingId?: string
  label: string
  region: 'left' | 'center' | 'right'
}

export function ShellColumn({ children, disableInternalScroll = false, headingId, label, region }: ShellColumnProps) {
  const component = region === 'center' ? 'main' : 'aside'

  return <Column as={component} $disableInternalScroll={disableInternalScroll} $region={region} aria-label={label} tabIndex={0}><div id={headingId} className="column-heading">{label}</div>{children}</Column>
}
