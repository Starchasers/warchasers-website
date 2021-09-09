import React from 'react'

import { IContentPageProps } from '../../pages/[id]'

import useContentPage from './useContentPage'
import ContentPageView from './ContentPageView'

const ContentPage = (props: IContentPageProps) => {
  const state = useContentPage(props)
  return <ContentPageView {...props} {...state} />
}

export default ContentPage
