import { Document, BLOCKS, Text } from '@contentful/rich-text-types'
import { css } from '@emotion/css'
import Link from 'next/link'
import React, { useMemo } from 'react'

import TableOfContentBlock from '../blocks/TableOfContent'
import DesktopContainer from './DesktopContainer'
import changeTextToHtmlId from '../../utils/changeTextToHtmlId'

interface ITableOfContent {
  baseUrl: string
  document: Document
}

const TableOfContent = (props: ITableOfContent) => {
  const headings = useMemo(
    () =>
      props.document.content
        .filter((topLevelBlock) => topLevelBlock.nodeType === BLOCKS.HEADING_2)
        .map((topLevelBlock) => ({
          nodeType: topLevelBlock.nodeType,
          value: (topLevelBlock.content[0] as Text).value
        })),
    [props.document.content]
  )

  if (headings.length === 0) {
    return null
  }

  return (
    <DesktopContainer
      className={css`
        grid-area: table-of-content;
      `}
    >
      <TableOfContentBlock>
        <TableOfContentBlock.Item>
          <b>Table of contents</b>
        </TableOfContentBlock.Item>
        <hr />
        {headings.map((heading) => (
          <TableOfContentBlock.Item key={heading.value}>
            <Link href={`${props.baseUrl}#${changeTextToHtmlId(heading.value)}`} passHref>
              <a>{heading.value}</a>
            </Link>
          </TableOfContentBlock.Item>
        ))}
      </TableOfContentBlock>
    </DesktopContainer>
  )
}

export default TableOfContent
