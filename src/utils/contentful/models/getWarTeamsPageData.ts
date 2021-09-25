import { IWarTeamsPage } from '../../../../@types/generated/contentful'
import getContentfulData from '../getContentfulData'

export interface IWarTeamsPageData {
  warTeamsPage: IWarTeamsPage
}

const getWarTeamsPageData = async (): Promise<IWarTeamsPageData> => {
  const [warTeamsPage] = await Promise.all([getContentfulData<IWarTeamsPage>('warTeamsPage')])

  return {
    warTeamsPage: warTeamsPage?.[0]
  }
}

export default getWarTeamsPageData
