import React from "react"
import ReactDOM from "react-dom"

//* Import components
import App from "./App"

//* Import Router browser
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
