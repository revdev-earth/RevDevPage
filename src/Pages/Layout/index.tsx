//** Import Components
import Router from "../../Router"
import { Header } from "@components"
import { Button } from "@components/share/Button"

export default function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Router />
      <Button />
      <Button primary>Esto es un texto de prueba</Button>
      <Button secondary />
    </div>
  )
}
