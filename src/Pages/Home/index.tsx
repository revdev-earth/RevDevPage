// asetss
import ImgHome1 from "@assets/home/img-home-1.png"
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"

// styles
import { FirstSection, HomeSection4 } from "./styles"

// data
import { homeSection4 } from "@data"

// components
import { Button, ContainerSection } from "@components"
import {
  SecondSection,
  ThirdSection,
  SixSection,
  SevenSection,
} from "./_components"

// JSX

export default function Home() {
  return (
    <main>
      <FirstSection>
        <div>
          <h3>
            It's <span>our</span> turn to <span>revolutionize</span> the{" "}
            <span>market</span>
          </h3>
          <p>
            Our ideas move the world, and your idea is one of them. We are going
            to make your idea a reality, welcome.
          </p>
          <div>
            <Button secondary>start now!</Button>
            <Button>contact Us</Button>
          </div>
        </div>
        <img src={ImgHome1} alt="" />
        <img src={Circles} alt="" />
      </FirstSection>
      <SecondSection />

      <ThirdSection />
      <HomeSection4>
        <h3>
          how your idea becomes reality with us <span>reality</span>
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
