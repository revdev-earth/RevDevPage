import { footer } from "../../../data"

//* Import Links
import { Link } from "react-router-dom"

//* Import styles
import { Top, Container, Bottom, Content } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Top>
          <div>
            <h3>Logo</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <div>
            {footer.map((list) => (
              <ul key={Math.random() * 10}>
                {list.map((item) => (
                  <li key={Math.random() * 10}>
                    <Link to="">{item}</Link>
                  </li>
                ))}
              </ul>
            ))}
            <div>Language</div>
          </div>
        </Top>
        <Bottom>
          <div>© RevDev. 2020</div>
          <div>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  FB
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  TW
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  IG
                </a>
              </li>
            </ul>
          </div>
        </Bottom>
      </Content>
    </Container>
  )
}
