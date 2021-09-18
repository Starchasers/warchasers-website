import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import { materialTheme } from '../assets/theme'
import { useGoogleTagManager } from '../utils/googleTagManager'
import { ThemeProvider } from '@mui/material/styles'

const App = ({ Component, pageProps }: AppProps) => {
  useGoogleTagManager()

  return (
    <ThemeProvider theme={materialTheme}>
      {GlobalStyle}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
