import styled from '@emotion/styled'
import theme from '../../assets/theme'

const DesktopContainer = styled('div')<{ breakpoint?: string }>`
  @media (max-width: ${(props) => props.breakpoint ?? theme.breakpoints.lg}) {
    display: none;
  }
`

export default DesktopContainer
