//** Import Components
import Router from "../../../Router"
import { Header } from "@components"
import { Footer } from "@components"

export function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Router />
      <Footer />
    </div>
  )
}

export * from "./LayoutLazy"
