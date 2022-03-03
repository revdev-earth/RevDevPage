//* Import react
import React, { Suspense } from "react"

//* Import components
const Layout = React.lazy(() => {
  return Promise.all([
    import("./Pages/Layout"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

import { LoadingPage } from "@components"

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Layout />
    </Suspense>
  )
}

export default App
