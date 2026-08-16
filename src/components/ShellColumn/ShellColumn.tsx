import type { ReactNode } from 'react'
import { Column } from './styled'

type ShellColumnProps = {
  children: ReactNode
  disableInternalScroll?: boolean
  label: string
  region: 'left' | 'center' | 'right'
}

export function ShellColumn({ children, disableInternalScroll = false, label, region }: ShellColumnProps) {
  const component = region === 'center' ? 'main' : 'aside'

  return <Column as={component} $disableInternalScroll={disableInternalScroll} $region={region} aria-label={label} tabIndex={0}><div className="column-heading">{label}</div>{children}</Column>
}
