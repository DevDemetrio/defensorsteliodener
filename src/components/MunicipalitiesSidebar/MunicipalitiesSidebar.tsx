import { municipalities } from '../../mocks'
import { ShellColumn } from '../ShellColumn/ShellColumn'
import { MunicipalityItem, MunicipalityList } from './styled'

export function MunicipalitiesSidebar() {
  return <ShellColumn label="Municípios atendidos" region="left"><MunicipalityList>{municipalities.map(item => <MunicipalityItem key={item.name}><span>{item.name}</span><strong>{item.value}</strong></MunicipalityItem>)}</MunicipalityList></ShellColumn>
}
