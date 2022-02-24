//* Import components
import { Button } from "@components"

//* Import styles
import { Container } from "./styles"

//* Import assets
import Img1 from "@assets/home/Image-h-1.png"
import Img2 from "@assets/home/Image-h-2.png"
import Img3 from "@assets/home/Image-h-3.png"

export const ThirdSection = () => (
  <Container>
    <h4>Portfolio</h4>
    <h3>Our Great Work</h3>
    <div>
      <h4>Website Optimization</h4>

      <h4>Website Redesign</h4>

      <h4>Search Engine Optimization</h4>
    </div>
    <ul>
      <li>
        <img src={Img1} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
          vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla
          bibendum
        </p>
      </li>
      <li>
        <img src={Img2} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
          vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla
          bibendum
        </p>
      </li>
      <li>
        <img src={Img3} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
          vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla
          bibendum
        </p>
      </li>
    </ul>
    <Button primary>See All</Button>
  </Container>
)
