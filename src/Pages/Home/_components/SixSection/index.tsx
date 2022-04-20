import { useState } from "react"

//* Import styles
import {
  Container,
  ContainerSliders,
  Slider,
  Slide,
  Users,
  Circle,
  ControlLeft,
  ControlRigth,
} from "./styles"

//* Import assets
import Star from "@assets/star.svg"
import Circles from "@assets/circles.svg"
import Img3 from "@assets/home/testimonials/image-testimonal-three.png"
import Img2 from "@assets/home/testimonials/image-testimonal-two.png"
import Img1 from "@assets/home/testimonials/image-testimonial-one.png"
import ArrowShort from "@assets/vector-black.svg"

const data = [
  {
    qualification: 5.0,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "Paulus Haverinen",
    enterprise: "Owner, Ikirakenne Ltd",
  },
  {
    qualification: 4.5,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "Erzsébet Franciska",
    enterprise: "enterprice 2",
  },
  {
    qualification: 4.8,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "Kenith Zack",
    enterprise: "enterprice 3",
  },
  {
    qualification: 4.2,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "Rosmarie Théa",
    enterprise: "enterprice 4",
  },
  {
    qualification: 4.9,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "Luis Ángel Yaritza",
    enterprise: "enterprice 5",
  },
]

export const SixSection = () => {
  const [testimonial, setTestimonial] = useState(2)
  const maximo = data.length - 2

  const anterior = () => {
    if (testimonial >= 1) {
      setTestimonial(testimonial - 1)
    }
  }

  const siguiente = () => {
    if (testimonial <= maximo) {
      setTestimonial(testimonial + 1)
    }
  }

  return (
    <Container>
      <h4>Testimonials</h4>
      <h3>Our Happy Clients</h3>
      <Slider>
        <ContainerSliders>
          <Slide>
            <span>{data[testimonial].qualification}</span>
            <div>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p>{data[testimonial].description}</p>
            <ControlLeft aria-disabled>
              <img src={ArrowShort} onClick={anterior} alt="Control left" />
            </ControlLeft>
            <ControlRigth>
              <img src={ArrowShort} onClick={siguiente} alt="" />
            </ControlRigth>
          </Slide>
        </ContainerSliders>
        <Users pos={testimonial + 1}>
          <ul>
            <li onClick={() => setTestimonial(0)}>
              {testimonial === 0 && <Circle src={Circles} alt="" />}
              <img src={Img3} />
            </li>
            <li onClick={() => setTestimonial(1)}>
              {testimonial === 1 && <Circle src={Circles} alt="" />}

              <img src={Img2} />
            </li>
            <li onClick={() => setTestimonial(2)}>
              {testimonial === 2 && <Circle src={Circles} alt="" />}
              <img src={Img1} />
            </li>
            <li onClick={() => setTestimonial(3)}>
              {testimonial === 3 && <Circle src={Circles} alt="" />}
              <img src={Img2} />
            </li>
            <li onClick={() => setTestimonial(4)}>
              {testimonial === 4 && <Circle src={Circles} alt="" />}
              <img src={Img3} />
            </li>
          </ul>

          <h4> {data[testimonial].name}</h4>
          <span>{data[testimonial].enterprise}</span>
        </Users>
      </Slider>
    </Container>
  )
}
