import styled from '@emotion/styled'
import theme from '../../../../assets/theme'

const Nav = styled('nav')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
  align-items: center;
  color: #ffffff;

  a {
    color: #ffffff;
    transition: color ${theme.transitions.normal};

    &:hover {
      color: #d7d7d7;
    }
  }

  > a {
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-column-gap: 16px;
  }
`

export default Nav
