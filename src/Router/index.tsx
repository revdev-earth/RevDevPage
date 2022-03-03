//*Import react functions and components
import React, { Suspense } from "react"

//* Import reac router
import { Routes, Route } from "react-router-dom"

//* Import components
const Home = React.lazy(() => {
  return Promise.all([
    import("../Pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 10)),
  ]).then(([moduleExport]) => moduleExport)
})
const Services = React.lazy(() => {
  return Promise.all([
    import("../Pages/Services"),
    new Promise((resolve) => setTimeout(resolve, 10)),
  ]).then(([moduleExport]) => moduleExport)
})
const Blog = React.lazy(() => {
  return Promise.all([
    import("../Pages/Blog"),
    new Promise((resolve) => setTimeout(resolve, 10)),
  ]).then(([moduleExport]) => moduleExport)
})
const Team = React.lazy(() => {
  return Promise.all([
    import("../Pages/Team"),
    new Promise((resolve) => setTimeout(resolve, 10)),
  ]).then(([moduleExport]) => moduleExport)
})
const Case = React.lazy(() => {
  return Promise.all([
    import("../Pages/Case"),
    new Promise((resolve) => setTimeout(resolve, 10)),
  ]).then(([moduleExport]) => moduleExport)
})

export default function Router() {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/Services"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/team"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Team />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/case"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Case />
          </Suspense>
        }
      />
    </Routes>
  )
}
