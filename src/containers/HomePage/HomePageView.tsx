import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'
import options from '../../assets/configs/contentfulRichTextOptions'
import DesktopContainer from '../../components/elements/DesktopContainer'
import TabletContainer from '../../components/elements/TabletContainer'
import MobileContainer from '../../components/elements/MobileContainer'
import { css } from '@emotion/css'
import theme from '../../assets/theme'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = (props: IHomePageViewProps) => (
  <ContentPage>
    <ContentPage.Container>
      <PageNavigation
        contentPages={props.layout.fields.contentPages}
        activePage={props.contentPage}
      />
      <ContentPage.DocumentContainer>
        <DesktopContainer>
          <FontAwesomeIcon
            icon={faFortAwesomeAlt}
            style={{ display: 'block', width: '256px', height: '256px', margin: '0 auto' }}
          />
        </DesktopContainer>
        <TabletContainer>
          <FontAwesomeIcon
            icon={faFortAwesomeAlt}
            style={{ display: 'block', width: '200px', height: '200px', margin: '0 auto' }}
          />
        </TabletContainer>
        <MobileContainer>
          <FontAwesomeIcon
            icon={faFortAwesomeAlt}
            style={{ display: 'block', width: '128px', height: '128px', margin: '0 auto' }}
          />
        </MobileContainer>
        <h1
          style={{ fontSize: '32px', lineHeight: '40px', textAlign: 'center', margin: '24px 0' }}
          className={css`
            @media (max-width: ${theme.breakpoints.md}) {
              font-size: 28px !important;
              line-height: 32px !important;
            }
          `}
        >
          <div>Warchasers</div>
          <div>Minecraft Guild Wars</div>
        </h1>
        <hr />
        {documentToReactComponents(props.contentPage.fields.content, options)}
      </ContentPage.DocumentContainer>
    </ContentPage.Container>
  </ContentPage>
)

export default HomePageView
