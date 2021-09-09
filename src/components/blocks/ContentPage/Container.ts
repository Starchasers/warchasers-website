import styled from '@emotion/styled'

import Container from '../../elements/Container'

const ContentPageContainer = styled(Container)`
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-template-areas: 'navigation content';

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
    grid-template-areas:
      'navigation'
      'content';
  }
`

export default ContentPageContainer
