import { useState } from "react"

//* Import styles
import {
  Container,
  ContainerSliders,
  Slider,
  Slide,
  Users,
  Circle,
} from "./styles"

//* Import assets
import Star from "@assets/star.svg"
import Circles from "@assets/circles.svg"

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
    description: "Second Testimonial.",
    name: "name 2",
    enterprise: "enterprice 2",
  },
  {
    qualification: 4.8,
    description: "Third testimonial.",
    name: "name 3",
    enterprise: "enterprice 3",
  },
  {
    qualification: 4.2,
    description: "four testimonial",
    name: "name 4",
    enterprise: "enterprice 4",
  },
  {
    qualification: 4.9,
    description: "five testimonial",
    name: "name 5",
    enterprise: "enterprice 5",
  },
]

export const SixSection = () => {
  const [testimonial, setTestimonial] = useState(2)

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
          </Slide>
        </ContainerSliders>
        <Users pos={testimonial + 1}>
          <ul>
            <Circle src={Circles} alt="" />
            <li onClick={() => setTestimonial(0)}>
              <img />
            </li>
            <li onClick={() => setTestimonial(1)}>
              <img />
            </li>
            <li onClick={() => setTestimonial(2)}>
              <img />
            </li>
            <li onClick={() => setTestimonial(3)}>
              <img />
            </li>
            <li onClick={() => setTestimonial(4)}>
              <img />
            </li>
          </ul>

          <h4> {data[testimonial].name}</h4>
          <span>{data[testimonial].enterprise}</span>
        </Users>
      </Slider>
    </Container>
  )
}
