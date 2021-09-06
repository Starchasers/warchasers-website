import styled from '@emotion/styled'

const TabletContainer = styled('div')`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

export default TabletContainer
