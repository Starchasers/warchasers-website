import styled from '@emotion/styled'
import hexToRGB from '../../../utils/hexToRGB'

const Title = styled('h1')`
  font-size: 36px;
  color: ${(props) => hexToRGB(props.theme.colors.warSecondary, 0.64)};
  margin-bottom: 50px;
  font-weight: 300;
`

export default Title
