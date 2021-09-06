import getOneContentfulData from '../getOneContentfulData'
import { ILayout } from '../../../../@types/generated/contentful'

export interface ILayoutData {
  layout: ILayout
}

const getLayoutData = async (): Promise<ILayoutData> => {
  const [layout] = await Promise.all([getOneContentfulData<ILayout>('layout')])

  return {
    layout
  }
}

export default getLayoutData
