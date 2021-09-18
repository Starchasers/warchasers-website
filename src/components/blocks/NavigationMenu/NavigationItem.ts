import styled from '@emotion/styled'
import theme from '../../../assets/theme'
import hexToRGB from '../../../utils/hexToRGB'

const NavigationItem = styled('li')`
  color: ${(props) => hexToRGB(props.theme.palette.secondary.main, 0.85)};

  b {
    font-weight: 700;
  }

  a {
    display: flex;
    color: ${(props) => hexToRGB(props.theme.palette.secondary.main, 0.85)};
    transition: all ${theme.transitions.normal};
  }

  &.active {
    a {
      color: #6788ff;
    }
  }

  a {
    &:hover {
      color: #526ed3;
    }
  }
`

export default NavigationItem
