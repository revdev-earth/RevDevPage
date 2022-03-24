//* Import components
import { Button } from "@components"
import ContainerSection from "@components/common/ContentSection"

//* Import assets
import VectorImg1 from "@assets/Vector1.svg"
import VectorImg2 from "@assets/Vector2.svg"

export const ThirdSection = () => {
  return (
    <section>
      <ContainerSection>
        <h3>Interested to work with us ?</h3>
        <p>Send a line here get and update daily</p>
        <Button primary>DaCode@example.com</Button>
      </ContainerSection>
    </section>
  )
}
