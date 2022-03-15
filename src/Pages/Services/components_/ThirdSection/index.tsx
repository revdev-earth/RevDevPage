//* Import syles
import { Container } from "./styles"

//* Import components
import { Button } from "@components"

//* Import assets
import VectorImg1 from "@assets/Vector1.svg"
import VectorImg2 from "@assets/Vector2.svg"

export const ThirdSection = () => {
  return (
    <Container>
      <img src={VectorImg1} alt="" />
      <img src={VectorImg2} alt="" />
      <h3>Interested to work with us ?</h3>
      <p>Send a line here get and update daily</p>
      <Button primary>DaCode@example.com</Button>
    </Container>
  )
}
