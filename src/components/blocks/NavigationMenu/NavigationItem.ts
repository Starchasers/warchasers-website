import styled from '@emotion/styled'
import hexToRGB from '../../../utils/hexToRGB'

const NavigationItem = styled('li')`
  a {
    display: flex;
    color: ${(props) => hexToRGB(props.theme.colors.warSecondary, 0.85)};
    transition: all ${(props) => props.theme.transitions.normal};
  }

  &.active {
    a {
      color: ${(props) => props.theme.colors.warLink};
    }
  }

  a {
    &:hover {
      color: ${(props) => props.theme.colors.warLinkHover};
    }
  }
`

export default NavigationItem
