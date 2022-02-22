//* Import asetss
import ImgHome1 from "@assets/home/img-home-1.png"
import { homeServices } from "../../data"

//*Import styles
import { FirstSection } from "./styles"

//*Import components
import { HomeServices } from "@components/common/ItemServices"
import { Button } from "@components/common"

export default function Home() {
  return (
    <main>
      <FirstSection>
        <div>
          <h3>
            We help you create your <span>website</span>
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
      </FirstSection>
      <section>
        <h4>Our Services</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>

        <ul>
          {homeServices.map((item) => (
            <HomeServices item={item} />
          ))}
        </ul>
      </section>
    </main>
  )
}
