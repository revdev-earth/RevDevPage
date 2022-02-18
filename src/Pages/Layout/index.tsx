//** Import Components
import Router from "../../Router"
import { Header } from "@components"
import { Footer } from "@components"

export default function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Router />
      <Footer />
    </div>
  )
}
