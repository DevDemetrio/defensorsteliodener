import adesivacoDesktop from '../assets/news/desktop/adesivaco-boa-vista.webp'
import adesivacoMobile from '../assets/news/mobile/adesivaco-boa-vista.webp'

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
    service: ['Quartel General do Adesivaço dos Defensores', 'Avenida Venezuela, 2574', 'Jardim Floresta, Boa Vista (RR)'],
  },
]
