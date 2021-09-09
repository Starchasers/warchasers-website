import React, { ReactChild } from 'react'
import Head from 'next/head'

import Providers from './Providers'
import Page from '../../blocks/Page'
import Header from './Header'
import Footer from './Footer'

import { ILayoutData } from '../../../utils/contentful/models/getLayoutData'
import { IMetaTag } from '../../../../@types/generated/contentful'

export interface LayoutProps extends ILayoutData {
  children: ReactChild
  title?: string
  metaTags?: IMetaTag[]
}

const Layout = ({ title, children, metaTags, ...props }: LayoutProps) => (
  <Providers>
    <Head>
      <title>{title ?? props.layout.fields.defaultTitle}</title>
      {[...(props.layout.fields.metaTags || []), ...(metaTags || [])].map((metaTag) => (
        <meta key={metaTag.sys.id} {...metaTag.fields.content} />
      ))}
    </Head>
    <Page>
      <Header {...props} />
      <Page.Content {...props} children={children} />
      <Footer {...props} />
    </Page>
  </Providers>
)

export default Layout
