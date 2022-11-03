import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <GlobalStyle />
    </ThemeProvider >
  )
}
