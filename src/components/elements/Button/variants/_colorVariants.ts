import { TColor } from '../../../../assets/theme/colors'

export type colorStates = {
  unset: TColor
  hover: TColor
  active: TColor
  focus: TColor
  disabled: TColor
}

interface colorVariant {
  [key: string]: colorStates
}

const colorVariants: colorVariant = {
  primary: {
    unset: 'warPrimary',
    hover: 'warPrimaryHover',
    active: 'warPrimaryActive',
    focus: 'warPrimaryActive',
    disabled: 'warPrimaryActive'
  },
  secondary: {
    unset: 'warPositive',
    hover: 'warPositiveHover',
    active: 'warPositiveHover',
    focus: 'warPositiveHover',
    disabled: 'warSuccessBgNight'
  },
  transparent: {
    unset: 'transparent',
    hover: 'transparent',
    active: 'transparent',
    focus: 'transparent',
    disabled: 'transparent'
  }
}

export default colorVariants
