import adesivacoDesktop from '../assets/news/desktop/adesivaco-boa-vista.webp'
import adesivacoMobile from '../assets/news/mobile/adesivaco-boa-vista.webp'
import catarinaGuerraDesktop from '../assets/news/desktop/catarina-guerra-apoia-stelio-dener.webp'
import catarinaGuerraMobile from '../assets/news/mobile/catarina-guerra-apoia-stelio-dener.webp'

export type NewsItem = {
  id: string
  action: string
  title: string
  introduction: string
  imageDesktop: string
  imageMobile: string
  imageAlt: string
  paragraphs: string[]
  quote?: string
  quoteAuthor?: string
  service?: string[]
}

export const newsMock: NewsItem[] = [
  {
    id: '1',
    action: 'Adesivaço em Boa Vista',
    title: 'Mais de 300 carros marcam início da campanha de Stélio Dener em Boa Vista',
    introduction: 'Adesivaço reuniu apoiadores na capital e marcou a abertura da campanha eleitoral de 2026 do candidato a deputado federal.',
    imageDesktop: adesivacoDesktop,
    imageMobile: adesivacoMobile,
    imageAlt: 'Apoiadores aplicam adesivo da campanha de Stélio Dener em veículo durante mobilização em Boa Vista',
    paragraphs: [
      'Mais de 300 carros foram adesivados durante uma mobilização realizada na virada de sábado para domingo, em Boa Vista, para marcar o início da campanha eleitoral de 2026 do candidato a deputado federal Defensor Stélio Dener.',
      'O adesivaço aconteceu no Quartel General do Adesivaço dos Defensores, localizado na Avenida Venezuela, 2574, no bairro Jardim Floresta. Segundo a organização, a movimentação reuniu apoiadores e foi considerada uma demonstração de participação e mobilização em torno da candidatura.',
      'Para Stélio Dener, a adesão registrada no primeiro evento da campanha também representa uma resposta ao trabalho desenvolvido nos últimos quatro anos.',
      'A campanha avalia que a presença de mais de 300 veículos no adesivaço demonstra a capacidade de mobilização dos apoiadores e amplia a apresentação da candidatura à população de Boa Vista.',
      'O Quartel General continuará funcionando como ponto de adesivação para apoiadores dos Defensores Stélio Dener e Oleno Matos. Quem desejar participar poderá procurar o espaço para adesivar carros ou motocicletas.',
    ],
    quote: 'Fiquei muito feliz em ver que foi um grande sucesso o evento. Isso significa que estou acertando no trabalho realizado nos últimos quatro anos e vamos continuar fazendo.',
    quoteAuthor: 'Defensor Stélio Dener',
    service: ['Quartel General do Adesivaço dos Defensores', 'Avenida Venezuela, 2574', 'Jardim Floresta, Boa Vista (RR)'],
  },
  {
    id: '2',
    action: 'Reunião no Nova Canaã',
    title: 'Catarina Guerra reforça apoio a Stélio Dener durante reunião em Boa Vista',
    introduction: 'Encontro no bairro Nova Canaã reuniu apoiadores, apresentou propostas e marcou o apoio da candidata à reeleição ao deputado federal.',
    imageDesktop: catarinaGuerraDesktop,
    imageMobile: catarinaGuerraMobile,
    imageAlt: 'Catarina Guerra acompanha Stélio Dener durante discurso em reunião com apoiadores no bairro Nova Canaã, em Boa Vista',
    paragraphs: [
      'A deputada estadual Catarina Guerra, candidata à reeleição, reuniu apoiadores na noite desta segunda-feira, 17 de agosto, no bairro Nova Canaã, em Boa Vista. O apoio ao deputado federal Defensor Stélio Dener foi um dos principais destaques do encontro.',
      'Durante a reunião, Catarina e Stélio conversaram com os participantes, apresentaram propostas e discutiram ideias relacionadas ao futuro de Roraima. O encontro também foi marcado pela participação dos apoiadores e pela aproximação política entre os dois candidatos.',
      'Ao falar sobre Stélio Dener, Catarina destacou a afinidade entre os projetos e os princípios defendidos pelos dois.',
      'A declaração reforçou publicamente o apoio de Catarina Guerra à candidatura de Stélio Dener. Durante o encontro, os dois também apresentaram propostas aos presentes e conversaram com apoiadores sobre diferentes ideias para o Estado.',
      'Stélio Dener agradeceu o convite feito pela deputada e a presença dos eleitores que participaram da reunião. O encontro no Nova Canaã marcou mais uma agenda de mobilização política em Boa Vista, com destaque para a parceria entre as duas candidaturas.',
    ],
    quote: 'Meu amigo Dener é um grande aliado na caminhada, tem uma luta por Roraima, pela cultura, pelo esporte e muitos dos nossos alinhamentos se cruzam porque temos os mesmo princípios e objetivos que é o bem e o crescimento de Roraima.',
    quoteAuthor: 'Catarina Guerra',
  },
]

export const newsNewestFirst = [...newsMock].sort((first, second) => Number(second.id) - Number(first.id))
