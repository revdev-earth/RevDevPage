//* Import asetss
import ImgHome1 from "@assets/home/img-home-1.png"
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"
//*Import styles
import { FirstSection, SecondSection, HomeSection4 } from "./styles"
//* Import data
import { homeSection4, homeServices } from "@data"
//* Import sections
import { ThirdSection, SixSection, SevenSection } from "./_components"
//* Import components
import { HomeServices } from "@components"
import { Button } from "@components"
import ContainerSection from "@components/common/ContentSection"

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <div>
            <Button secondary>Get Started</Button>
            <Button>contact Us</Button>
          </div>
        </div>
        <img src={ImgHome1} alt="" />
        <img src={Circles} alt="" />
      </FirstSection>
      <SecondSection>
        <h3>Our Services</h3>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>

        <ul>
          {homeServices.map((item) => (
            <HomeServices item={item} key={Math.random() * 10} />
          ))}
        </ul>

        <div>
          <img src={Circles} alt="" />
        </div>
      </SecondSection>
      <ThirdSection />
      <HomeSection4>
        <h3>
          Your idea into <span>reality</span>
        </h3>
        <p>
          We start every web development project with a project manager from
          daCode interviewing you about the goal with the project. This is for
          us to be able to come up with a solution for your SaaS business,
          estimate a timeline, and come up with a budget.
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
      <ContainerSection>
        <h3>Interested to work with us?</h3>
        <p>Send a line here get and update daily</p>
        <Button primary>contact@revdev.com</Button>
      </ContainerSection>
      <SixSection />
      <SevenSection />
    </main>
  )
}
