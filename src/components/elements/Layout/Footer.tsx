import { css } from '@emotion/css'
import React from 'react'
import format from 'date-fns/format'

import Page from '../../blocks/Page'
import Container from '../Container'
import theme from '../../../assets/theme'
import Columns from '../Columns'

export interface IFooter {
  updatedAt?: Date
}

const Footer = (props: IFooter) => (
  <Page.Footer {...props}>
    <Page.Footer.Nav>
      <Container>
        <Columns columns={'auto 1fr auto'} breakpoint={theme.breakpoints.sm}>
          <div>
            <span
              className={css`
                opacity: 0.5;
              `}
            >
              Made by
            </span>{' '}
            <a
              href={'https://github.com/Starchasers'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              Starchasers
            </a>
          </div>
          <div />
          {props.updatedAt && (
            <div>
              <span
                className={css`
                  opacity: 0.5;
                `}
              >
                Last modified: {format(new Date(props.updatedAt), 'dd.MM.yyyy kk:mm')}
              </span>
            </div>
          )}
        </Columns>
      </Container>
    </Page.Footer.Nav>
  </Page.Footer>
)

export default Footer
