import { ICoordinatesConfiguration } from '../../../../@types/generated/contentful'
import getContentfulData from '../getContentfulData'

export interface ICoordinatesData {
  coordinatesConfiguration: ICoordinatesConfiguration
}

const getCoordinatesData = async (): Promise<ICoordinatesData> => {
  const [coordinatesConfiguration] = await Promise.all([
    getContentfulData<ICoordinatesConfiguration>('coordinatesConfiguration')
  ])

  return {
    coordinatesConfiguration: coordinatesConfiguration?.[0]
  }
}

export default getCoordinatesData
