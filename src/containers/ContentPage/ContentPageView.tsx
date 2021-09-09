import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import Link from 'next/link'

import { IContentPageProps } from '../../pages/[id]'
import { IContentPageStateProps } from './useContentPage'
import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'
import TableOfContent from '../../components/elements/TableOfContent'
import changeTextToHtmlId from '../../utils/changeTextToHtmlId'

interface IContentPageViewProps extends IContentPageProps, IContentPageStateProps {}

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} passHref>
        {node.data.uri[0] === '/' ? (
          <a>{children}</a>
        ) : (
          <a target={'_blank'} rel='noreferrer noopener'>
            {children}
          </a>
        )}
      </Link>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 id={changeTextToHtmlId(node?.content[0]?.value)}>{children}</h2>
    }
  }
}

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
