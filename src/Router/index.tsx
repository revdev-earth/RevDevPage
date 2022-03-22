//*Import react functions and components
import React, { Suspense } from "react"

//* Import reac router
import { Routes, Route } from "react-router-dom"
import { DotLoader } from "@components"

//* Import components
const Home = React.lazy(() => import("../Pages/Home"))

const Services = React.lazy(() => {
  return Promise.all([
    import("../Pages/Services"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

const Ideas = React.lazy(() => {
  return Promise.all([
    import("../Pages/Ideas"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})


export default function Router() {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<DotLoader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/Services"
        element={
          <Suspense fallback={<DotLoader />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/ideas"
        element={
          <Suspense fallback={<DotLoader />}>
            <Ideas />
          </Suspense>
        }
      />
    </Routes>
  )
}
