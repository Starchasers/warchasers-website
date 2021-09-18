import React from 'react'

import Layout from '../components/elements/Layout'
import CoordinatesCalculationPage from '../containers/CoordinatesCalculationPage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'
import getCoordinatesData, { ICoordinatesData } from '../utils/contentful/models/getCoordinatesData'

export interface ICoordinatesCalculationPageProps
  extends ILayoutData,
    IContentPageData,
    ICoordinatesData {}

const CoordinatesCalculation = (props: ICoordinatesCalculationPageProps) => (
  <Layout
    {...props}
    title={`${props.contentPage?.fields.title} | ${props.layout.fields.projectNameShort}`}
    metaTags={props.contentPage.fields.metaTags}
  >
    <CoordinatesCalculationPage {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<{ props: ICoordinatesCalculationPageProps }> => {
  const layout = await getLayoutData()
  const contentPage = await getContentPageData('coordinates-calculation')
  const coordinatesData = await getCoordinatesData()

  return {
    props: {
      ...layout,
      ...contentPage,
      ...coordinatesData
    }
  }
}

export default CoordinatesCalculation
