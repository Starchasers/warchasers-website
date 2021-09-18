import styled from '@emotion/styled'
import theme from '../../../assets/theme'

const CoordinatesBlock = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'x y button'
    'message message message';
  grid-column-gap: 8px;
  grid-row-gap: 8px;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'x y'
      'button button'
      'message message';
  }
`

export default CoordinatesBlock
