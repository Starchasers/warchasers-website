import { GetStaticProps } from 'next'
import React from 'react'

import Layout from '../components/elements/Layout'
import HomePage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'

export interface IHomePageProps extends ILayoutData, IContentPageData {}

const Home = (props: IHomePageProps) => (
  <Layout
    {...props}
    title={props.layout?.fields.defaultTitle}
    metaTags={props.contentPage.fields.metaTags}
  >
    <HomePage {...props} />
  </Layout>
)

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const layout = await getLayoutData()
  const contentPage = await getContentPageData('')

  return {
    props: {
      ...layout,
      ...contentPage
    }
  }
}

export default Home
