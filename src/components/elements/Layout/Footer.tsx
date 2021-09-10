import { css } from '@emotion/css'
import React from 'react'

import Page from '../../blocks/Page'
import { LayoutProps } from './index'
import Container from '../Container'

const Footer = (props: Omit<Omit<LayoutProps, 'title'>, 'children'>) => (
  <Page.Footer {...props}>
    <Page.Footer.Nav>
      <Container>
        <div>
          <span
            className={css`
              opacity: 0.5;
            `}
          >
            Made by
          </span>{' '}
          <a href={'https://github.com/Starchasers'} target={'_blank'} rel={'noopener noreferrer'}>
            Starchasers
          </a>
        </div>
      </Container>
    </Page.Footer.Nav>
  </Page.Footer>
)

export default Footer
