import styled from '@emotion/styled'

const Nav = styled('nav')`
  padding: 32px 0;
  background: #21212d;
  color: ${(props) => props.theme.colors.warBase01};

  a {
    color: ${(props) => props.theme.colors.warBase01};
    transition: ${(props) => props.theme.transitions.normal};

    &:hover {
      color: ${(props) => props.theme.colors.warBase04};
    }
  }
`

export default Nav
