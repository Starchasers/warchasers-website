import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'

import { IContentPageProps } from '../../pages/[id]'
import { IContentPageStateProps } from './useContentPage'
import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'
import TableOfContent from '../../components/elements/TableOfContent'
import options from '../../assets/configs/contentfulRichTextOptions'

interface IContentPageViewProps extends IContentPageProps, IContentPageStateProps {}

const ContentPageView = (props: IContentPageViewProps) => (
  <ContentPage>
    <ContentPage.Container>
      <PageNavigation
        contentPages={props.layout.fields.contentPages}
        activePage={props.contentPage}
      />
      <ContentPage.DocumentContainer>
        <ContentPage.Title>{props.contentPage.fields.title}</ContentPage.Title>
        {documentToReactComponents(props.contentPage.fields.content, options)}
      </ContentPage.DocumentContainer>
      <TableOfContent
        baseUrl={props.contentPage.fields.slug}
        document={props.contentPage.fields.content}
      />
    </ContentPage.Container>
  </ContentPage>
)

export default ContentPageView
