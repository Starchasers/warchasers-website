import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../components/elements/Layout'
import HomePage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getAllContentPageData from '../utils/contentful/models/getAllContentPageData'
import { TGetStaticPaths } from '../../@types/custom'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'

export interface IContentPageProps extends ILayoutData, IContentPageData {}

const ContentPage = (props: IContentPageProps) => (
  <Layout {...props}>
    <HomePage {...props} />
  </Layout>
)

export const getStaticProps: GetStaticProps<IContentPageProps, TGetStaticPaths> = async (
  context
) => {
  const layout = await getLayoutData()
  const contentPage = await getContentPageData(context.params.id)

  return {
    props: {
      ...layout,
      ...contentPage
    }
  }
}

export const getStaticPaths: GetStaticPaths<TGetStaticPaths> = async () => {
  const contentPageData = await getAllContentPageData()

  return {
    paths: contentPageData.contentPages
      .map((contentPage) => ({ params: { id: contentPage.fields.slug } }))
      // Index is reserved only for HomePage
      .filter((contentPage) => contentPage.params.id !== 'index'),
    fallback: false
  }
}

export default ContentPage
