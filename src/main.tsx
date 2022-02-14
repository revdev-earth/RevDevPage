import React from "react"
import ReactDOM from "react-dom"

//* Import components
import App from "./App"

//* Import styles
import { GlobalStyle } from "./config/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./config/theme"

//* Import Router browser
import { BrowserRouter } from "react-router-dom"
//* Import styles
import { GlobalStyle } from "./config/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./config/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
)
