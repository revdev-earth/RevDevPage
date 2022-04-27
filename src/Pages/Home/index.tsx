// asetss
import ImgHome1 from "@assets/home/img-home-1.svg"
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"

// components
import { Button, ContainerSection } from "@components"
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  SixSection,
  SevenSection,
} from "./_components"

// JSX

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />

      <ThirdSection />
      <FourthSection />
      <SixSection />
      <ContainerSection>
        <h3>Do you want to be part?</h3>
        <Button primary>More information</Button>
      </ContainerSection>
      <SevenSection />
    </main>
  )
}
