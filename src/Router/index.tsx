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

const Blog = React.lazy(() => {
  return Promise.all([
    import("../Pages/Blog"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

const Team = React.lazy(() => {
  return Promise.all([
    import("../Pages/Team"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

const Case = React.lazy(() => {
  return Promise.all([
    import("../Pages/Case"),
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
        path="/team"
        element={
          <Suspense fallback={<DotLoader />}>
            <Team />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<DotLoader />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/case"
        element={
          <Suspense fallback={<DotLoader />}>
            <Case />
          </Suspense>
        }
      />
    </Routes>
  )
}
