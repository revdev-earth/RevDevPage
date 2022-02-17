//* Import link from Router
import { Link } from "react-router-dom"

//* Import styles
import { Container, MenuMovil, Navigation } from "./styles"

//* Import assets
import BarMenu from "../../assets/bars-solid.svg"

export default function Header() {
  return (
    <Container>
      <MenuMovil>
        <Link to="/">RevDev</Link>
        <img src={BarMenu} alt="" />
      </MenuMovil>

      <Navigation>
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/case">Case</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  )
}
