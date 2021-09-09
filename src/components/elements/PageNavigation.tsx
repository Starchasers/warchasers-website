import { css } from '@emotion/css'
import React from 'react'
import Link from 'next/link'
import { IContentPage } from '../../../@types/generated/contentful'
import NavigationMenu from '../blocks/NavigationMenu'

interface IPageNavigation {
  contentPages: IContentPage[]
  activePage: IContentPage
}

const PageNavigation = (props: IPageNavigation) => (
  <div
    className={css`
      grid-area: navigation;
    `}
  >
    <NavigationMenu>
      <NavigationMenu.Item>
        <b>Navigation</b>
      </NavigationMenu.Item>
      {props.contentPages?.map((contentPage, index) => (
        <NavigationMenu.Item
          key={contentPage.sys.id + index}
          className={contentPage.sys.id === props.activePage.sys.id ? 'active' : undefined}
        >
          <Link href={contentPage.fields.slug} passHref>
            <a>{contentPage.fields.title}</a>
          </Link>
        </NavigationMenu.Item>
      ))}
    </NavigationMenu>
  </div>
)

export default PageNavigation
