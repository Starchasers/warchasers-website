import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../components/elements/Layout'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getAllContentPageData from '../utils/contentful/models/getAllContentPageData'
import { TGetStaticPaths } from '../../@types/custom'
import getContentPageData, { IContentPageData } from '../utils/contentful/models/getContentPageData'
import ContentPage from '../containers/ContentPage'

export interface IContentPageProps extends ILayoutData, IContentPageData {}

const IdPage = (props: IContentPageProps) => (
  <Layout {...props} title={props.contentPage?.fields.title}>
    <ContentPage {...props} />
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

  const paths = contentPageData.contentPages
    .filter((contentPage) => contentPage.fields.slug !== '/')
    .map((contentPage) => ({
      params: { id: contentPage.fields.slug.slice(1) }
    }))

  return {
    paths,
    fallback: false
  }
}

export default IdPage