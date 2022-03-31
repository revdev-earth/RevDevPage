//* Import hooks
import { useRef, useEffect } from "react"
//* Import components
import { HomeServices } from "@components"
//* Import Data
import { homeServices } from "@data"
//* Import assets
import Circles from "@assets/circles.svg"
//* Import styles
import { Container } from "./styles"

export const SecondSection = () => {
  const slideshow = useRef(null)

  console.log(":: Slide ::", slideshow?.current?.children[1])

  return (
    <Container>
      <h3>Our Services</h3>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </p>

      <ul>
        <div ref={slideshow}>
          {homeServices.map((item) => (
            <HomeServices item={item} key={Math.random() * 10} />
          ))}
        </div>
      </ul>

      <div>
        <img src={Circles} alt="" />
      </div>
    </Container>
  )
}
