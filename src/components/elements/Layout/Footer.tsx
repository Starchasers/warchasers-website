import React from 'react'

import Page from '../../blocks/Page'
import { LayoutProps } from './index'

const Footer = (props: Omit<Omit<LayoutProps, 'title'>, 'children'>) => <Page.Footer />

export default Footer
