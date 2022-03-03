//* Import styles
import {
  Container,
  ContainerSliders,
  Slider,
  Slide,
  Users,
  Controls,
} from "./styles"

//* Import assets
import Star from "@assets/star.svg"
import Arrow from "@assets/Next.svg"

export const SixSection = () => {
  return (
    <Container>
      <h4>Testimonials</h4>
      <h3>Our Happy Clients</h3>
      <Slider>
        <ContainerSliders>
          <Slide>
            <span>5.0</span>
            <div>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p>
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </Slide>
          <Controls>
            <button>
              <img src={Arrow} alt="" />
            </button>
            <button>
              <img src={Arrow} alt="" />
            </button>
          </Controls>
        </ContainerSliders>
        <Users>
          <ul>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
          </ul>

          <h4> Paulus Haverinen</h4>
          <span>Owner, Ikirakenne Ltd</span>
        </Users>
      </Slider>
    </Container>
  )
}
