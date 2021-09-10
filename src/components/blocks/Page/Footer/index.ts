import styled from '@emotion/styled'
import Nav from './Nav'

const Footer = styled('footer')`
  margin-top: 50px;
`
type FooterProps = typeof Footer & {
  Nav: typeof Nav
}

const FooterBlock = Footer as FooterProps

FooterBlock.Nav = Nav
export default FooterBlock
