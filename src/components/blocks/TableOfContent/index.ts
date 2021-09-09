import styled from '@emotion/styled'

import NavigationItem from '../NavigationMenu/NavigationItem'

const TableOfContent = styled('ol')`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  position: sticky;
  top: 100px;

  hr {
    width: 100%;
    opacity: 0.25;
    margin-top: -2.5px;
  }
`

type TableOfContentProps = typeof TableOfContent & {
  Item: typeof NavigationItem
}

const TableOfContentBlock = TableOfContent as TableOfContentProps

TableOfContentBlock.Item = NavigationItem

export default TableOfContentBlock
