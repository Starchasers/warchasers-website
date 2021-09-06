import styled from '@emotion/styled'

const DesktopContainer = styled('div')`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`

export default DesktopContainer
