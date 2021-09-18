import styled from '@emotion/styled'
import theme from '../../assets/theme'

const MobileContainer = styled('div')`
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export default MobileContainer
