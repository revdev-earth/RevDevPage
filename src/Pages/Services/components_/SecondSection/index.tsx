//* Import components
import { HomeServices } from "@components"

//* Import data
import { homeServices } from "@data"

//* Import styles
import { Container } from "./styles"

export const SecondSection = () => {
  return (
    <Container>
      <h3>Toolbox</h3>
      <div>
        <p>
          We have a series of tools that allow us to provide ideas with the best
          fuel to make them grow in a big way. Do you want to know more? contact
          us
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
