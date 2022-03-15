//* Import react
import React, { Suspense, lazy } from "react"
import { DotLoader, LayoutLazy } from "@components"

function App() {
  return (
    <Suspense fallback={<DotLoader />}>
      <LayoutLazy />
    </Suspense>
  )
}

export default App
