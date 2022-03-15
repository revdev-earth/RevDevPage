// MyApp.js
import { lazily } from "react-lazily"

export const { Layout: LayoutLazy1000 } = lazily(() => {
  return Promise.all([
    import("."),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
})

export const { Layout: LayoutLazy } = lazily(() => import("."))
