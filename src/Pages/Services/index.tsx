//* Import styles
import /* , ThirdSection, FourSection */
"./styles"

//* Import components
import { Button } from "@components"

//* Import sections
import { FirstSection } from "./components_/FirstSection"
import { SecondSection } from "./components_/SecondSection"
import { ThirdSection } from "./components_/ThirdSection"
import { FourthSection } from "./components_/FourthSection"

export default function Services() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  )
}
