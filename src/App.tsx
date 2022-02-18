//* Import react
import React, { Suspense } from "react"

//* Import components
const Layout = React.lazy(() => {
  return Promise.all([
    import("./Pages/Layout"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Layout />
    </Suspense>
  )
}

export default App
