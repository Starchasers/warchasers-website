import styled from '@emotion/styled'
import theme from '../../assets/theme'

const MobileContainer = styled('div')<{ breakpoint?: string }>`
  @media (min-width: ${(props) => props.breakpoint ?? theme.breakpoints.md}) {
    display: none;
  }
`

export default MobileContainer
