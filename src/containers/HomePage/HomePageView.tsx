import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = (props: IHomePageViewProps) => (
  <ContentPage>
    <ContentPage.Container>
      <PageNavigation
        contentPages={props.layout.fields.contentPages}
        activePage={props.contentPage}
      />
    </ContentPage.Container>
  </ContentPage>
)

export default HomePageView
