import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'
import { CyclesContentProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
