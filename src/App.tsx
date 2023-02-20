import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import {GitHubContextProvider } from './context/GitHubContext'

export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubContextProvider>
          <Router />
        </GitHubContextProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}