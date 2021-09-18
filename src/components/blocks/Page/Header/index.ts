import styled from '@emotion/styled'

import Title from './Title'
import Nav from './Nav'

const Header = styled('header')`
  padding: 12px 0;
  background: ${(props) => props.theme.palette.primary.main};
`

type HeaderProps = typeof Header & {
  Title: typeof Title
  Nav: typeof Nav
}

const HeaderBlock = Header as HeaderProps

HeaderBlock.Title = Title
HeaderBlock.Nav = Nav

export default HeaderBlock
