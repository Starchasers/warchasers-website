import { injectGlobal } from '@emotion/css'

import resetStyle from './resetStyle'
import animationsStyle from './animationsStyle'

const GlobalStyle = injectGlobal`
  ${resetStyle};

   html {
     overflow-y: scroll;
     scroll-behavior: smooth;
   }

   body {
     font-family: 'Roboto', sans-serif;
     font-size: 16px;
     line-height: 1.2;
     color: #333333;
     font-weight: 400;
   }
 
  ${animationsStyle};
`

export default GlobalStyle
