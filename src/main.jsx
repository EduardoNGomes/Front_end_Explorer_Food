import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
)
