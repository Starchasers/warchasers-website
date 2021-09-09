import styled from '@emotion/styled'
import hexToRGB from '../../../utils/hexToRGB'

const Title = styled('h1')`
  font-size: 36px;
  color: ${(props) => hexToRGB(props.theme.colors.warSecondary, 0.64)};
  font-weight: 300;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 20px;
    text-align: center;
  }
`

export default Title
