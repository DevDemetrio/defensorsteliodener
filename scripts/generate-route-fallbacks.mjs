import { copyFile, mkdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const projectFile = path => fileURLToPath(new URL(`../${path}`, import.meta.url))
const newsSource = await readFile(projectFile('src/mocks/newsMock.ts'), 'utf8')
const newsIds = [...newsSource.matchAll(/\bid:\s*['"](\d+)['"]/g)].map(match => match[1])
const routes = ['noticias', 'biografia', ...newsIds.map(id => `noticias/${id}`)]
const indexFile = projectFile('dist/index.html')

await Promise.all(routes.map(async route => {
  const routeDirectory = projectFile(`dist/${route}`)
  await mkdir(routeDirectory, { recursive: true })
  await copyFile(indexFile, `${routeDirectory}/index.html`)
}))

await copyFile(indexFile, projectFile('dist/404.html'))

console.log(`Fallbacks gerados para ${routes.length} rotas.`)
