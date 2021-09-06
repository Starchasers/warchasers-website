import styled from '@emotion/styled'

const MobileContainer = styled('div')`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

export default MobileContainer
