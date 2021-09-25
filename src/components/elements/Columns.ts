import styled from '@emotion/styled'
import theme from '../../assets/theme'

const Columns = styled('div')<{ columns?: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns ?? '1fr 1fr'};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

export default Columns
