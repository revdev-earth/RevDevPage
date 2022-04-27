// asetss
import ImgHome1 from "@assets/home/img-home-1.svg"
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"

// styles
import { HomeSection4 } from "./styles"

// data
import { homeSection4 } from "@data"

// components
import { Button, ContainerSection } from "@components"
import {
  FirstSection,
  SecondSection,
  ThirdSection,
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
      <HomeSection4>
        <h3>
          How your idea becomes reality with us <span>reality</span>
        </h3>
        <p>
          Let's see your idea and then we will start with the plan of how to
          plan the development of the idea in reality, we are pleased to know
          how we will be in the future.
        </p>
        <ul>
          {homeSection4.map((item) => (
            <li key={Math.random() * 10}>
              <span>{item.id}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <img src={ImgHome2} alt="img section 4" />
        <div>
          <img src={Circles} alt="" />
          <img src={Circles} alt="" />
        </div>
      </HomeSection4>
      <SixSection />
      <ContainerSection>
        <h3>Do you want to be part?</h3>
        <Button primary>More information</Button>
      </ContainerSection>
      <SevenSection />
    </main>
  )
}
