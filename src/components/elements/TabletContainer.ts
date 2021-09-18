import styled from '@emotion/styled'
import theme from '../../assets/theme'

const TabletContainer = styled('div')`
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export default TabletContainer
