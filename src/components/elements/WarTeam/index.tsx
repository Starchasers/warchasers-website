import { css } from '@emotion/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { IWarTeam } from '../../../../@types/generated/contentful'
import theme from '../../../assets/theme'

const WarTeam = (props: IWarTeam) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <span
      className={css`
        position: relative;
        text-align: center;
        padding: 4px 16px 6px;
        margin: 0 auto;

        &::after {
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: ${theme.colors.warSecondary};
          opacity: 0.25;
        }
      `}
    >
      <FontAwesomeIcon icon={faFortAwesome} style={{ marginRight: '4px' }} />
      {props.fields.title}
    </span>
    <div
      className={css`
        display: flex;
        column-gap: 8px;
        row-gap: 8px;
        justify-content: center;
        margin: 18px 0;
        flex-wrap: wrap;
      `}
    >
      {props.fields.members.map((member) => (
        <span key={member}>{member}</span>
      ))}
    </div>
  </div>
)

export default WarTeam
