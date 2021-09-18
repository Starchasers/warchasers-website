import { createTheme } from '@mui/material/styles'
import breakpoints from './breakpoints'
import colors from './colors'
import constants from './constants'
import gradients from './gradients'
import palette from './palette'
import shadows from './shadows'
import transitions from './transitions'

export interface ITheme {
  palette: typeof palette
}

// TODO: Figure out how to translate types into valid way to include mode
export const materialTheme = createTheme({
  // @ts-ignore
  palette
})

const theme = {
  name: 'Default theme',
  breakpoints,
  colors,
  constants,
  gradients,
  shadows,
  transitions
}

export default theme
