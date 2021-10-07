import { css } from '@emotion/css'
import React from 'react'
import { IWarTeam } from '../../../../@types/generated/contentful'
import theme from '../../../assets/theme'
import ContentfulImage from '../../../utils/contentful/ContentfulImage'

const WarTeam = (props: IWarTeam) => (
  <div
    className={css`
      display: grid;
      grid-template-columns: 60px 1fr;
      grid-template-areas:
        'banner title'
        'banner nicknames';
      justify-content: center;
      padding: 0 32px;

      @media (max-width: ${theme.breakpoints.lg}) {
        padding: 0;
      }
    `}
    style={props.fields.isDead && { opacity: '0.5' }}
  >
    <div
      className={css`
        grid-area: banner;
      `}
    >
      {props.fields.banner ? <ContentfulImage {...props.fields.banner} /> : <div />}
    </div>
    <span
      className={css`
        grid-area: title;
        position: relative;
        text-align: center;
        padding: 4px 16px 6px;
        margin: 0 auto;
        font-size: 20px;
        display: flex;
        align-items: center;
        word-break: break-all;

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
      style={props.fields.isDead && { textDecoration: 'line-through' }}
    >
      {props.fields.title}
    </span>
    <div
      className={css`
        grid-area: nicknames;
        display: flex;
        column-gap: 6px;
        row-gap: 6px;
        align-items: center;
        flex-direction: column;
        margin: 8px 0 16px;
        flex-wrap: wrap;
        font-size: 16px;

        @media (max-width: ${theme.breakpoints.lg}) {
          align-items: unset;
          justify-content: center;
          flex-direction: row;
        }
      `}
    >
      {props.fields.members.map((member) => (
        <span key={member}>{member}</span>
      ))}
    </div>
  </div>
)

export default WarTeam
