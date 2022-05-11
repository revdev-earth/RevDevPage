// components
import { Button, ContainerSection } from "@components"
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FivethSection,
  SixthSection,
} from "./_components"

// JSX

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />

      <ThirdSection />
      <FourthSection />
      <FivethSection />
      <ContainerSection>
        <h2>Do you want to be part?</h2>
        <Button primary>More information</Button>
      </ContainerSection>
      <SixthSection />
    </main>
  )
}
