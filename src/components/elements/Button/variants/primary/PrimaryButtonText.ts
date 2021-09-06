import styled from '@emotion/styled'

import ButtonText from '../../ButtonText'

const PrimaryButtonText = styled(ButtonText)`
  color: ${(props) =>
    props.colorStates.unset === 'transparent'
      ? props.theme.colors.warBase09
      : props.theme.colors.warBase01};
`

export default PrimaryButtonText
