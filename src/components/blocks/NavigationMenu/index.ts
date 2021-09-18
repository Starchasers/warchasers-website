import styled from '@emotion/styled'
import theme from '../../../assets/theme'

import NavigationItem from './NavigationItem'

const NavigationMenu = styled('ol')`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  position: sticky;
  top: 100px;

  > li:first-of-type {
    position: relative;
    margin-bottom: 10px;

    &::after {
      position: absolute;
      content: '';
      height: 2px;
      bottom: -7.5px;
      left: 0;
      right: 0;
      background: #ebefff;
      opacity: 0.25;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      width: calc(100% - 10px);
      text-align: center;
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
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
