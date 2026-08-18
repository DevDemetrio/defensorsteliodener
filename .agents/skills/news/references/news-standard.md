# Padrão canônico de notícias

## Fonte de verdade

O arquivo `src/mocks/newsMock.ts` é a fonte de dados. A interface vigente é:

```ts
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
```

## Finalidade dos campos

- `id`: número sequencial em string, também usado na rota `/noticias/:newsId`.
- `action`: rótulo curto da ação exibido na tabela, na notícia e sobre a imagem do grid. Usar cerca de duas a seis palavras, incluindo local quando útil.
- `title`: manchete factual e específica; destacar resultado, quantidade, ação ou local.
- `introduction`: resumo autônomo de uma frase, adequado à listagem e ao detalhe.
- `imageDesktop`: WebP horizontal otimizado, preferencialmente 1600×900, usado no detalhe e atualmente no grid.
- `imageMobile`: WebP móvel otimizado, preferencialmente 480×480, mantendo todos os sujeitos essenciais visíveis mesmo quando o uso atual do componente mudar.
- `imageAlt`: descrição objetiva do que aparece, da ação e do local quando conhecido. Não iniciar com “imagem de” ou “foto de”.
- `paragraphs`: corpo em quatro a seis parágrafos curtos, cada item contendo apenas um parágrafo.
- `quote`: fala opcional, sem aspas no valor; a interface acrescenta aspas e atribuição visual.
- `quoteAuthor`: autoria obrigatória quando houver `quote`; nunca presumir que toda fala é de Stélio Dener.
- `service`: lista opcional de informações práticas, uma informação por item.

## Limpeza de marcação recebida

Tratar qualquer conteúdo enviado com tags como uma fonte de texto, não como HTML a ser preservado.

1. Remover todas as tags HTML, XML ou JSX, incluindo abertura, fechamento e atributos.
2. Usar tags de bloco como `p`, `article`, `div`, `section`, títulos e itens de lista somente para reconhecer limites de parágrafos antes de removê-las.
3. Converter `br` em uma quebra textual apropriada antes da limpeza.
4. Remover por completo tags `script`, `style`, `iframe` e seu conteúdo.
5. Decodificar entidades comuns, como `&nbsp;`, `&amp;`, `&quot;` e acentos codificados.
6. Eliminar tags isoladas, linhas vazias excedentes e espaços duplicados.
7. Preservar pontuação, acentos, nomes, números e o sentido do texto original.
8. Garantir que `action`, `title`, `introduction`, `imageAlt`, `paragraphs`, `quote`, `quoteAuthor` e `service` contenham somente texto puro.

Exemplo de entrada:

```html
<p>Stélio Dener agradeceu o convite feito pela deputada e também a presença dos eleitores que participaram da reunião. O encontro no Nova Canaã marcou mais uma agenda de mobilização política em Boa Vista, com destaque para a parceria entre as duas candidaturas.</p>

</article>
```

Resultado textual:

```text
Stélio Dener agradeceu o convite feito pela deputada e também a presença dos eleitores que participaram da reunião. O encontro no Nova Canaã marcou mais uma agenda de mobilização política em Boa Vista, com destaque para a parceria entre as duas candidaturas.
```

## Exemplo editorial existente

Usar a primeira notícia do `newsMock` como referência de tom e estrutura:

- Ação: `Adesivaço em Boa Vista`
- Título: `Mais de 300 carros marcam início da campanha de Stélio Dener em Boa Vista`
- Introdução: `Adesivaço reuniu apoiadores na capital e marcou a abertura da campanha eleitoral de 2026 do candidato a deputado federal.`
- Termos relevantes: `mais de 300 carros`, `adesivaço`, `Boa Vista`, `campanha eleitoral de 2026`, `Defensor Stélio Dener`, `apoiadores`.
- Sequência narrativa:
  1. Informar quantidade, ação, período, local e finalidade.
  2. Detalhar endereço, organização e participação.
  3. Explicar o significado atribuído por Stélio Dener.
  4. Contextualizar mobilização e alcance público.
  5. Encerrar com continuidade e orientação prática.
- Citação: usar apenas a declaração entregue pela fonte.
- Serviço: nome do ponto, endereço e município/UF.

## Padrão visual que os dados alimentam

- A listagem mostra Item, Ação, Título e `Saiba +`; no smartphone, mantém Ação e botão na mesma linha.
- O grid exibe no máximo quatro itens por página, usa imagem quadrada por `object-fit: cover`, sobrepõe `action` em faixa azul-escura e apresenta `Saiba mais` em faixa verde-clara.
- O detalhe exibe ação, número, título, introdução, imagem 16:9 com contorno verde, corpo, citação opcional, serviço opcional e navegação no topo e rodapé.
- Títulos de destino usam `news-detail-title` e `news-list-title`. Não remover esses identificadores.

## Tratamento de imagem

1. Localizar a imagem original enviada pelo usuário.
2. Preservar o original.
3. Criar variantes em `src/assets/news/desktop/` e `src/assets/news/mobile/`.
4. Usar WebP e remover metadados desnecessários quando a ferramenta disponível permitir.
5. Manter rostos, pessoas, texto relevante e foco da ação dentro do enquadramento.
6. Conferir visualmente as variantes; não confiar apenas nas dimensões.
7. Criar `imageAlt` a partir do conteúdo visível, sem inserir interpretação política.

## Checklist de qualidade

- Nenhum campo do objeto contém tags, atributos, fragmentos como `</article>` ou entidades HTML não decodificadas.
- Todos os números e nomes estão presentes na fonte recebida.
- Título, introdução e primeiro parágrafo não repetem exatamente a mesma frase.
- A ação é curta o suficiente para a faixa do grid e para o mobile.
- Há contexto de município/Roraima quando disponível.
- Termos relevantes aparecem naturalmente e não como SEO artificial.
- Citação e serviço foram omitidos quando não fornecidos.
- Toda citação possui autoria confirmada em `quoteAuthor`.
- ID e rota são únicos.
- Imagens existem nos caminhos importados e não distorcem o assunto.
- `pnpm build` e `pnpm lint` terminam sem erro.
