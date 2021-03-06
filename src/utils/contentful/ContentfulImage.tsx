import Image from 'next/image'
import { Asset } from 'contentful'

/**
 * An easy way to include Contentful Image with Next.js Image tag
 *
 * @example
 * Where `data.fields.icon` contains an Asset from Contentful
 * <ContentfulImage {...data.fields.icon} />
 **/
const ContentfulImage = (props: Asset) => (
  <Image
    src={`https:${props.fields.file.url}?fm=jpg`}
    alt={props.fields.title}
    width={props.fields.file.details.image.width}
    height={props.fields.file.details.image.height}
    placeholder={'blur'}
    blurDataURL={`https:${props.fields.file.url}?fm=jpg&w=${Math.floor(
      Number(props.fields.file.details.image.width) / 5
    )}&q=10`}
  />
)

export default ContentfulImage
