import styled from '@emotion/styled'
import hexToRGB from '../../../utils/hexToRGB'

const NavigationItem = styled('li')`
  color: ${(props) => hexToRGB(props.theme.colors.warSecondary, 0.85)};

  b {
    font-weight: 700;
  }

  a {
    display: flex;
    color: ${(props) => hexToRGB(props.theme.colors.warSecondary, 0.85)};
    transition: all ${(props) => props.theme.transitions.normal};
  }

  &.active {
    a {
      color: ${(props) => props.theme.colors.warLinkNight};
    }
  }

  a {
    &:hover {
      color: ${(props) => props.theme.colors.warLinkNightHover};
    }
  }
`

export default NavigationItem
