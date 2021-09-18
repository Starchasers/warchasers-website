import styled from '@emotion/styled'
import theme from '../../assets/theme'

const DesktopContainer = styled('div')`
  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

export default DesktopContainer
