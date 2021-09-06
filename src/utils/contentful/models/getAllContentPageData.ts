import { IContentPage } from '../../../../@types/generated/contentful'
import getContentfulData from '../getContentfulData'

export interface IContentPageData {
  contentPages: IContentPage[]
}

const getAllContentPageData = async (): Promise<IContentPageData> => {
  const [contentPages] = await Promise.all([getContentfulData<IContentPage>('contentPage')])

  return {
    contentPages
  }
}

export default getAllContentPageData
