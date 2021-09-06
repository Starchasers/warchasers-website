import React from 'react'

import Layout from '../components/elements/Layout'
import HomePage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'

export interface IHomePageProps extends ILayoutData, IContentPageData {}

const Home = (props: IHomePageProps) => (
  <Layout {...props}>
    <HomePage {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<{ props: IHomePageProps }> => {
  const layout = await getLayoutData()
  const contentPage = await getContentPageData('index')

  return {
    props: {
      ...layout,
      ...contentPage
    }
  }
}

export default Home
