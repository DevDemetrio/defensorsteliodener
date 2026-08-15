import type { ReactNode } from 'react'
import { Column } from './styled'

type ShellColumnProps = {
  children: ReactNode
  label: string
  region: 'left' | 'center' | 'right'
}

export function ShellColumn({ children, label, region }: ShellColumnProps) {
  const component = region === 'center' ? 'main' : 'aside'

  return <Column as={component} $region={region} aria-label={label} tabIndex={0}><div className="column-heading">{label}</div>{children}</Column>
}
