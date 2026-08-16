import { biography } from '../../mocks'
import { BiographyClosing, BiographyContent, BiographyHeader, BiographyImage, BiographyLayout, BiographyPicture, BiographyText } from './styled'

export function Biography() {
  return (
    <BiographyLayout id="biografia">
      <BiographyHeader>
        <span>Biografia</span>
        <h1>{biography.name}</h1>
        <p>{biography.introduction}</p>
      </BiographyHeader>
      <BiographyContent>
        <BiographyPicture>
          <source media="(max-width: 700px)" srcSet={biography.imageMobile} />
          <BiographyImage src={biography.imageDesktop} alt="Deputado Federal Defensor Stélio Dener" />
        </BiographyPicture>
        <BiographyText>
          {biography.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <BiographyClosing>{biography.closing}</BiographyClosing>
        </BiographyText>
      </BiographyContent>
    </BiographyLayout>
  )
}
