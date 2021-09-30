import styled from '@emotion/styled'
import theme from '../../../assets/theme'

const GuildTitle = styled('div')`
  display: grid;
  align-items: center;
  grid-template-columns: 60px 1fr;
  margin: 0 32px;
  padding-bottom: 8px;
  grid-column-gap: 8px;
  border-bottom: 1px solid rgba(235, 239, 255, 0.25);

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(235, 239, 255, 0.25);
  }
`

export default GuildTitle
