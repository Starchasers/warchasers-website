import styled from '@emotion/styled'

import theme from '../../assets/theme'

const Container = styled('div')`
  width: ${theme.constants.containerSizes.xl};
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.xl}) {
    width: ${theme.constants.containerSizes.lg};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    width: ${theme.constants.containerSizes.md};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: ${theme.constants.containerSizes.sm};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 90%;
  }
`

export default Container
