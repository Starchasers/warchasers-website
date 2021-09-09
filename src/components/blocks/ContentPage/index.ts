import styled from '@emotion/styled'

import ContentPageContainer from './Container'
import Title from './Title'
import DocumentContainer from './DocumentContainer'

const ContentPage = styled('div')`
  margin-top: 50px;
`

type ContentPageProps = typeof ContentPage & {
  Container: typeof ContentPageContainer
  DocumentContainer: typeof DocumentContainer
  Title: typeof Title
}

const ContentPageBlock = ContentPage as ContentPageProps

ContentPageBlock.Container = ContentPageContainer
ContentPageBlock.DocumentContainer = DocumentContainer
ContentPageBlock.Title = Title

export default ContentPageBlock
