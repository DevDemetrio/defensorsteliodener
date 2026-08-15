import { workAreas } from '../../mocks'
import { ShellColumn } from '../ShellColumn/ShellColumn'
import { AreaItem, AreaList } from './styled'

export function WorkAreasSidebar() {
  return <ShellColumn label="Áreas de atuação" region="right"><AreaList>{workAreas.map((item, index) => <AreaItem key={item.name}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.name}</strong><p>{item.detail}</p></div></AreaItem>)}</AreaList></ShellColumn>
}
