import React from "react"
import ReactDOM from "react-dom"

//* Import components
import App from "./App"

//* Import styles
import { GlobalStyle } from "./config/globalStyles"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
