//* Import link from Router
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/case">Case</Link>
        <Link to="/team">Team</Link>
      </nav>
    </header>
  )
}
