//* Import components
import { HomeServices } from "@components"

//* Import data
import { homeServices } from "@data"

//* Import styles
import { Container } from "./styles"

export const SecondSection = () => {
  return (
    <Container>
      <h3>Our services</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>
      </div>

      <ul>
        {homeServices.map((item) => (
          <HomeServices item={item} />
        ))}
      </ul>
    </Container>
  )
}
