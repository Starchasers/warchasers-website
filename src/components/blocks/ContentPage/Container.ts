import styled from '@emotion/styled'
import theme from '../../../assets/theme'
import Container from '../../elements/Container'

const ContentPageContainer = styled(Container)`
  display: grid;
  grid-template-columns: 225px 1fr 225px;
  grid-template-areas: 'navigation content table-of-content';
  grid-column-gap: 25px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 250px 1fr;
    grid-row-gap: 32px;
    grid-template-areas: 'navigation content';
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
    grid-template-areas:
      'navigation'
      'content';
  }
`

export default ContentPageContainer
