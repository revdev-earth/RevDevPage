//** Import Components
import Router from "../../Router"
import { Header } from "@components"
import { Button } from "@components"

export default function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Router />
      <Button />
    </div>
  )
}
