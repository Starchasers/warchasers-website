import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { css } from '@emotion/css'
import React from 'react'

import { IWarTeamsPageProps } from '../../pages/teams'
import { IWarTeamsPageStateProps } from './useWarTeamsPage'

import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'
import options from '../../assets/configs/contentfulRichTextOptions'
import Columns from '../../components/elements/Columns'
import WarTeam from '../../components/elements/WarTeam'
import { TypographyP } from '../../components/elements/Typography'
import DesktopContainer from '../../components/elements/DesktopContainer'
import MobileContainer from '../../components/elements/MobileContainer'
import theme from '../../assets/theme'

interface IWarTeamsPageViewProps extends IWarTeamsPageProps, IWarTeamsPageStateProps {}

const WarTeamsPageView = (props: IWarTeamsPageViewProps) => (
  <ContentPage>
    <ContentPage.Container>
      <PageNavigation
        contentPages={props.layout.fields.contentPages}
        activePage={props.contentPage}
      />
      <ContentPage.DocumentContainer>
        <ContentPage.Title>{props.contentPage.fields.title}</ContentPage.Title>
        {documentToReactComponents(props.contentPage.fields.content, options)}
        <DesktopContainer breakpoint={theme.breakpoints.md}>
          <Columns
            className={css`
              position: relative;
              grid-column-gap: 16px;
              grid-row-gap: 16px;

              &::after {
                position: absolute;
                content: '';
                top: 0;
                bottom: 0;
                right: calc(50% - (1px / 2));
                width: 1px;
                background: ${theme.colors.warSecondary};
                opacity: 0.25;

                @media (max-width: ${theme.breakpoints.md}) {
                  display: none;
                }
              }
            `}
          >
            <TypographyP
              className={css`
                text-align: center;
                font-size: 24px;
              `}
            >
              {props.warTeamsPage.fields.groupAName}
            </TypographyP>
            <TypographyP
              className={css`
                text-align: center;
                font-size: 24px;
              `}
            >
              {props.warTeamsPage.fields.groupBName}
            </TypographyP>
            {Array.from(
              Array(
                props.warTeamsPage.fields.groupA.length > props.warTeamsPage.fields.groupB.length
                  ? props.warTeamsPage.fields.groupA.length
                  : props.warTeamsPage.fields.groupB.length
              ).keys()
            ).map((id) => (
              <React.Fragment key={id}>
                {(props.warTeamsPage.fields.groupA[id] && (
                  <WarTeam key={id + 'a'} {...props.warTeamsPage.fields.groupA[id]} />
                )) ?? <div />}
                {(props.warTeamsPage.fields.groupB[id] && (
                  <WarTeam key={id + 'b'} {...props.warTeamsPage.fields.groupB[id]} />
                )) ?? <div />}
              </React.Fragment>
            ))}
          </Columns>
        </DesktopContainer>
        <MobileContainer>
          <Columns
            className={css`
              position: relative;
              grid-column-gap: 16px;
              grid-row-gap: 64px;
            `}
          >
            <Columns
              columns={'1fr'}
              className={css`
                grid-row-gap: 8px;
              `}
            >
              <TypographyP
                className={css`
                  text-align: center;
                  font-size: 24px;
                `}
              >
                {props.warTeamsPage.fields.groupAName}
              </TypographyP>
              {props.warTeamsPage.fields.groupA?.map((team) => (
                <WarTeam key={team.sys.id} {...team} />
              ))}
            </Columns>
            <Columns
              columns={'1fr'}
              className={css`
                grid-row-gap: 8px;
              `}
            >
              <TypographyP
                className={css`
                  text-align: center;
                  font-size: 24px;
                `}
              >
                {props.warTeamsPage.fields.groupBName}
              </TypographyP>
              {props.warTeamsPage.fields.groupB?.map((team) => (
                <WarTeam key={team.sys.id} {...team} />
              ))}
            </Columns>
          </Columns>
        </MobileContainer>
      </ContentPage.DocumentContainer>
    </ContentPage.Container>
  </ContentPage>
)

export default WarTeamsPageView
