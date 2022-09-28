import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'
import { Food } from './pages/Food'
import { Orders } from './pages/Orders'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Orders/>
    </ThemeProvider>
  </React.StrictMode>
)
