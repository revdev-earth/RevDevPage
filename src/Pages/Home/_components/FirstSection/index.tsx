import { Button } from "@components"

// asetss
import ImgHome1 from "@assets/home/img-home-1.svg"
import Circles from "@assets/circles.svg"

// Styles
import { ContainerFirstSection } from "./styles"

export const FirstSection = () => (
  <ContainerFirstSection>
    <div>
      <h3>
        It's <span>our</span> turn to <span>revolutionize</span> the{" "}
        <span>market</span>
      </h3>
      <p>
        Our ideas move the world, and your idea is one of them. We are going to
        make your idea a reality, welcome.
      </p>
      <div>
        <Button secondary>start now!</Button>
        <Button>contact Us</Button>
      </div>
    </div>
    <img src={ImgHome1} alt="" />
    <img src={Circles} alt="" />
  </ContainerFirstSection>
)
