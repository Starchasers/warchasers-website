import { IContentPage } from '../../../../@types/generated/contentful'
import getContentfulData from '../getContentfulData'

export interface IContentPageData {
  contentPage: IContentPage
}

const getContentPageData = async (slug: string): Promise<IContentPageData> => {
  const [contentPages] = await Promise.all([getContentfulData<IContentPage>('contentPage')])

  return {
    contentPage: contentPages.find((contentPage) => contentPage.fields.slug.slice(1) === slug)
  }
}

export default getContentPageData
