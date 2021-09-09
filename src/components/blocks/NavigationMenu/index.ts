import styled from '@emotion/styled'

import NavigationItem from './NavigationItem'

const NavigationMenu = styled('ol')`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  position: sticky;
  top: 100px;
`

type NavigationMenuProps = typeof NavigationMenu & {
  Item: typeof NavigationItem
}

const NavigationMenuBlock = NavigationMenu as NavigationMenuProps

NavigationMenuBlock.Item = NavigationItem

export default NavigationMenuBlock
