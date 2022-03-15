//* Import styles
import { Container } from "./styles"

//* Import assets
import VectorImg1 from "@assets/Vector1.svg"
import VectorImg2 from "@assets/Vector2.svg"

export const FirstSection = () => {
  return (
    <Container>
      <img src={VectorImg1} alt="" />
      <img src={VectorImg2} alt="" />

      <h3>What we can offer your SaaS Business</h3>
      <p>
        We have chosen to only collaborate and work with SaaS businesses, this
        is because our expertise lies and we know that we can provide the most
        value to our clients. Our team has worked with Nordic, European and
        American tech unicorns.
      </p>
    </Container>
  )
}
