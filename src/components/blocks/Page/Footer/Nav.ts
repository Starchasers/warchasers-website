import styled from '@emotion/styled'
import theme from '../../../../assets/theme'

const Nav = styled('nav')`
  padding: 32px 0;
  background: #21212d;
  color: #ffffff;

  a {
    color: #ffffff;
    transition: ${theme.transitions.normal};

    &:hover {
      color: #d7d7d7;
    }
  }
`

export default Nav
