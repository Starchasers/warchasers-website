import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import ContentPage from '../../components/blocks/ContentPage'
import Container from '../../components/elements/Container'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = (props: IHomePageViewProps) => (
  <ContentPage>
    <Container>{props.contentPage.fields.title}</Container>
  </ContentPage>
)

export default HomePageView
