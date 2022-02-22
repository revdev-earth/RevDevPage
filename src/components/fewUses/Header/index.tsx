import { useState } from "react"

//* Import link from Router
import { Link } from "react-router-dom"

//* Import styles
import { Container, MenuMovil, Navigation } from "./styles"

//* Import assets
import BarMenu from "@assets/bars-solid.svg"

//* Import components
import { Button } from "@components/common"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toogleMenu = () => {
    setIsOpen((s) => !s)
  }

  return (
    <Container>
      <MenuMovil>
        <Link to="/">
          <h3>REVDEV</h3>
        </Link>
        <img src={BarMenu} alt="" onClick={toogleMenu} />
      </MenuMovil>

      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/case" onClick={closeMenu}>
              Case
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <Button>Request a quote</Button>
        </ul>
      </Navigation>
    </Container>
  )
}
