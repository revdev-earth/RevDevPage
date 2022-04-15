import { footer } from "../../../data"
//* Import Links
import { Link } from "react-router-dom"
//* Import styles
import { Top, Container, Bottom, Content, Images } from "./styles"
//* Import assets
import Arrow from "@assets/vector-black.svg"
import Img1 from "@assets/vector1.svg"
import Img2 from "@assets/vector2.svg"

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
          </div>
        </Top>
        <Bottom>
          <div>
            <p>© RevDev. 2020</p>
            <div>
              <p>Language</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
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
      <Images>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
      </Images>
    </Container>
  )
}
