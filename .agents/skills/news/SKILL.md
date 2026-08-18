---
name: news
description: Padronizar, limpar, revisar e publicar notícias do mandato de Stélio Dener neste projeto React. Usar quando o usuário enviar texto, HTML, tags, fatos, imagens ou rascunhos de uma nova notícia; pedir inclusão ou edição no newsMock; solicitar título, introdução, palavras relevantes, imagens responsivas ou adequação ao padrão visual e editorial das notícias existentes.
---

# Notícias do mandato

Produzir notícias consistentes com o conteúdo, o schema, as rotas e a apresentação já adotados no site. Preservar a arquitetura existente e não inventar fatos, números, declarações, locais ou datas.

## Fluxo obrigatório

1. Ler completamente `references/news-standard.md`.
2. Conferir o estado atual de:
   - `src/mocks/newsMock.ts`
   - `src/components/NewsSection/NewsDetails.tsx`
   - `src/components/NewsSection/NewsSection.tsx`
   - `src/components/NewsSection/styled.tsx`
   - `src/components/NewsGrid/NewsGrid.tsx`
   - `src/components/NewsGrid/styled.tsx`
3. Limpar o texto recebido antes da revisão. Remover tags HTML, XML ou JSX e normalizar entidades, espaços e quebras conforme `references/news-standard.md`.
4. Tratar o conteúdo textual limpo como fonte factual. Não transformar inferências em fatos.
5. Identificar informações ausentes. Omitir campos opcionais sem fonte. Perguntar apenas quando uma ausência impedir a notícia ou mudar materialmente seu sentido.
6. Redigir em português do Brasil com linguagem institucional, factual, clara e escaneável.
7. Adicionar um único objeto ao array `newsMock`, preservando os objetos existentes.
8. Preparar e importar as imagens conforme o padrão atual. Nunca esticar, deformar ou cortar o assunto principal.
9. Confirmar que tabela, grade, detalhe, paginação e rotas continuam funcionando sem lógica específica para uma notícia.
10. Executar `pnpm build && pnpm lint`.

## Regras editoriais

- Salvar todos os campos textuais como texto puro. Não inserir tags como `<p>`, `<article>`, `<div>`, `<br>`, `<strong>` ou fragmentos de fechamento no `newsMock`.
- Usar título informativo em voz ativa, com o fato ou resultado mais relevante. Preferir números concretos quando fornecidos.
- Fazer a introdução responder, em uma frase, ao que aconteceu, quem participou, onde ocorreu e por que importa.
- Organizar de quatro a seis parágrafos curtos em pirâmide invertida: fato principal, contexto, significado, resultados e próximos passos ou serviço.
- Evitar repetição literal entre título, introdução e primeiro parágrafo.
- Manter tom institucional sem superlativos vazios, ataques, promessas não comprovadas ou linguagem artificialmente publicitária.
- Preservar citações como fala atribuída. Nunca criar ou completar uma declaração não fornecida.
- Usar `service` somente para informações práticas confirmadas, como local, endereço, data, horário ou contato.

## Relevância e termos-chave

- Selecionar de três a seis termos realmente sustentados pela notícia: nome da ação, município, área de atuação, resultado quantitativo, público atendido e `Stélio Dener` ou `Defensor Stélio Dener`.
- Inserir os termos naturalmente no título, introdução, primeiro parágrafo e texto alternativo quando forem pertinentes.
- Citar `Roraima` e o município quando a localização for conhecida.
- Evitar repetição mecânica, listas de palavras-chave, excesso do nome do parlamentar e qualquer dado usado apenas para otimização.

## Integração

- Definir `id` como string numérica sequencial, sem zeros à esquerda: `1`, `2`, `3`.
- Manter o schema `NewsItem`; não criar campos sem necessidade real de interface.
- Criar nomes de arquivos descritivos em kebab-case e imports coerentes.
- Manter até quatro notícias por página no `NewsGrid`; novos itens devem aparecer automaticamente pelo mock.
- Manter os destinos `#news-detail-title` e `#news-list-title` para preservar o posicionamento de navegação.
- Reutilizar os componentes e estilos existentes. Não criar uma página ou componente exclusivo para a nova notícia.

## Entrega

Informar de forma breve: notícia adicionada ou revisada, ID, imagens criadas ou reutilizadas, campos opcionais omitidos e resultado de build/lint.
