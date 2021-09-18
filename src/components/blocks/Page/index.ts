import styled from '@emotion/styled'
import theme from '../../../assets/theme'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Page = styled('div')`
  display: grid;
  min-height: 100vh;
  width: 100%;

  grid-template-columns: auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-rows: auto 1fr auto;
  }
`

type PageProps = typeof Page & {
  Content: typeof Content
  Footer: typeof Footer
  Header: typeof Header
}

const PageBlock = Page as PageProps

PageBlock.Content = Content
PageBlock.Footer = Footer
PageBlock.Header = Header

export default PageBlock
