import { Options } from '@contentful/rich-text-react-renderer'
import { Block, BLOCKS, INLINES, Text } from '@contentful/rich-text-types'
import Link from 'next/link'
import React from 'react'
import LinkIcon from '../../components/elements/LinkIcon'
import changeTextToHtmlId from '../../utils/changeTextToHtmlId'
import ContentfulImage from '../../utils/contentful/ContentfulImage'

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} passHref>
        {node.data.uri[0] === '/' ? (
          <a>{children}</a>
        ) : (
          <a target={'_blank'} rel='noreferrer noopener' title={node.data.uri.split('/')?.[2]}>
            {children}
            <LinkIcon />
          </a>
        )}
      </Link>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 id={changeTextToHtmlId((node?.content[0] as Text)?.value)}>{children}</h2>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if ((node as Block).data?.target?.fields?.file?.contentType === 'image/png') {
        return (
          <div className={'image-container'}>
            <ContentfulImage {...node.data.target} />
          </div>
        )
      }
      return null
    }
  }
}

export default options
