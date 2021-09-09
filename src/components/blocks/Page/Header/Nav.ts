import styled from '@emotion/styled'

const Nav = styled('nav')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
  align-items: center;
  color: ${(props) => props.theme.colors.warBase01};

  a {
    color: ${(props) => props.theme.colors.warBase01};
    transition: ${(props) => props.theme.transitions.normal};

    &:hover {
      color: ${(props) => props.theme.colors.warBase04};
    }
  }

  > a {
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-column-gap: 16px;
  }
`

export default Nav
