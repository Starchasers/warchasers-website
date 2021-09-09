import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'next/link'

import Page from '../../blocks/Page'
import Container from '../Container'
import { LayoutProps } from './index'
import DesktopContainer from '../DesktopContainer'
import TabletContainer from '../TabletContainer'
import MobileContainer from '../MobileContainer'

const Header = (props: Omit<Omit<LayoutProps, 'title'>, 'children'>) => (
  <Page.Header {...props}>
    <Container>
      <Page.Header.Nav>
        <Link href={'/'} passHref>
          <a style={{ width: '32px', height: '32px' }}>
            <FontAwesomeIcon icon={faFortAwesomeAlt} size={'2x'} />
          </a>
        </Link>
        <DesktopContainer>
          <Page.Header.Title>{props.layout.fields.projectNameLong}</Page.Header.Title>
        </DesktopContainer>
        <TabletContainer>
          <Page.Header.Title>{props.layout.fields.projectNameLong}</Page.Header.Title>
        </TabletContainer>
        <MobileContainer>
          <Page.Header.Title>{props.layout.fields.projectNameShort}</Page.Header.Title>
        </MobileContainer>
      </Page.Header.Nav>
    </Container>
  </Page.Header>
)

export default Header
