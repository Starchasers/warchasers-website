import { css } from '@emotion/css'
import React from 'react'
import Link from 'next/link'
import { IContentPage, INavigationLink } from '../../../@types/generated/contentful'
import NavigationMenu from '../blocks/NavigationMenu'

interface IPageNavigation {
  contentPages: (IContentPage | INavigationLink)[]
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
      {props.contentPages?.map((link, index) => (
        <NavigationMenu.Item
          key={link.sys.id + index}
          className={link.sys.id === props.activePage.sys.id ? 'active' : undefined}
        >
          {link.sys.contentType.sys.id === 'contentPage' && (
            <Link href={link.fields.slug} passHref>
              <a>{link.fields.title}</a>
            </Link>
          )}
          {link.sys.contentType.sys.id === 'navigationLink' && (
            <Link href={link.fields.slug} passHref>
              <a target={'_blank'} rel='noreferrer noopener'>
                {link.fields.title}
              </a>
            </Link>
          )}
        </NavigationMenu.Item>
      ))}
    </NavigationMenu>
  </div>
)

export default PageNavigation
