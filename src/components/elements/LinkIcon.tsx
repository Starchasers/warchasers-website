import { css } from '@emotion/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const LinkIcon = () => (
  <span
    className={css`
      display: inline;
      vertical-align: super;
      margin-left: 3px;
      line-height: 12px;
      svg {
        width: 10px !important;
        height: 10px !important;
      }
    `}
  >
    <FontAwesomeIcon icon={faExternalLinkAlt} />
  </span>
)

export default LinkIcon
