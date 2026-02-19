import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'
import { ThemeProvider } from './context/ThemeProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider initialTheme="theme3">
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
