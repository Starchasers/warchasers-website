import styled from '@emotion/styled'

import NavigationItem from './NavigationItem'

const NavigationMenu = styled('ol')`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  position: sticky;
  top: 100px;

  hr {
    width: 100%;
    opacity: 0.25;
    margin-top: -2.5px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-top: -5px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > li {
      padding: 5px;
      margin: 0 5px;
    }
  }
`

type NavigationMenuProps = typeof NavigationMenu & {
  Item: typeof NavigationItem
}

const NavigationMenuBlock = NavigationMenu as NavigationMenuProps

NavigationMenuBlock.Item = NavigationItem

export default NavigationMenuBlock
