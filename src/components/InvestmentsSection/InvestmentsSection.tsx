import { featuredInvestments } from '../../mocks'
import { InvestmentCard, InvestmentGrid, SectionHeading } from './styled'

export function InvestmentsSection() {
  return <section id="resultados"><SectionHeading><span>Resultados</span><h2>Os maiores investimentos do mandato.</h2><p>Recursos que fortalecem serviços, infraestrutura e oportunidades em todo o estado.</p></SectionHeading><InvestmentGrid>{featuredInvestments.map(item => <InvestmentCard key={item.title}><small>{item.value}</small><h3>{item.title}</h3><p>{item.description}</p></InvestmentCard>)}</InvestmentGrid></section>
}
