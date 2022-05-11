// libraries
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

// styles
import { Container, MenuMovil, Navigation } from "./styles"

// assets
import BarMenu from "@assets/bars-solid.svg"

// components
import { Button } from "@components"

// JSX

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const locationPath = location.pathname
  const [actualLocation, setActualLocation] = useState(0)

  useEffect(() => {
    if (locationPath === "/") setActualLocation(0)
    if (locationPath === "/services") setActualLocation(1)
    if (locationPath === "/ideas") setActualLocation(2)
  }, [locationPath])

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

      <Navigation isOpen={isOpen} selected={actualLocation}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/ideas" onClick={closeMenu}>
              Ideas
            </Link>
          </li>
        </ul>
      </Navigation>
      <Button red style={{ height: "59px", width: "284px" }}>
        Request a quote
      </Button>
    </Container>
  )
}
