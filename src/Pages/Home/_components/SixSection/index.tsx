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
import Img3 from "@assets/home/image-testimonal-three.png"
import Img2 from "@assets/home/testimonials/image-testimonal-two.png"
import Img1 from "@assets/home/testimonials/image-testimonial-one.png"

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
    name: "name 2",
    enterprise: "enterprice 2",
  },
  {
    qualification: 4.8,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "name 3",
    enterprise: "enterprice 3",
  },
  {
    qualification: 4.2,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    name: "name 4",
    enterprise: "enterprice 4",
  },
  {
    qualification: 4.9,
    description:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
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
