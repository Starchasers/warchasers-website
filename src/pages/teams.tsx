import React from 'react'

import Layout from '../components/elements/Layout'
import WarTeamsPage from '../containers/WarTeamsPage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'
import getCoordinatesData, { ICoordinatesData } from '../utils/contentful/models/getCoordinatesData'
import getWarTeamsPageData, {
  IWarTeamsPageData
} from '../utils/contentful/models/getWarTeamsPageData'

export interface IWarTeamsPageProps
  extends ILayoutData,
    IContentPageData,
    ICoordinatesData,
    IWarTeamsPageData {}

const CoordinatesCalculation = (props: IWarTeamsPageProps) => (
  <Layout
    {...props}
    title={`${props.contentPage?.fields.title} | ${props.layout.fields.projectNameShort}`}
    metaTags={props.contentPage.fields.metaTags}
  >
    <WarTeamsPage {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<{ props: IWarTeamsPageProps }> => {
  const layout = await getLayoutData()
  const contentPage = await getContentPageData('teams')
  const coordinatesData = await getCoordinatesData()
  const warTeams = await getWarTeamsPageData()

  return {
    props: {
      ...layout,
      ...contentPage,
      ...coordinatesData,
      ...warTeams
    }
  }
}

export default CoordinatesCalculation
