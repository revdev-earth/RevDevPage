//* Import asetss
import ImgHome1 from "@assets/home/img-home-1.png"
import { homeServices } from "../../data"

//*Import styles
import { FirstSection, SecondSection } from "./styles"

//*Import components
import { HomeServices } from "@components"
import { Button } from "@components"

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
      <SecondSection>
        <h3>Our Services</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>

        <ul>
          {homeServices.map((item) => (
            <HomeServices item={item} />
          ))}
        </ul>
      </SecondSection>
      <section>
        <h4>Portfolio</h4>
        <h3>Our Great Work</h3>
        <ul>
          <li>Website Optimization</li>
          <li>Website Redesign</li>
          <li>Search Engine Optimization</li>
        </ul>
        <ul>
          <li>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              hic provident molestias totam! Nisi, illo asperiores. Officiis
              vero nesciunt labore eligendi, ipsam, ea rem, aliquam dolores
              maiores voluptatem quam. Repudiandae!
            </p>
          </li>
          <li>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              hic provident molestias totam! Nisi, illo asperiores. Officiis
              vero nesciunt labore eligendi, ipsam, ea rem, aliquam dolores
              maiores voluptatem quam. Repudiandae!
            </p>
          </li>
          <li>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              hic provident molestias totam! Nisi, illo asperiores. Officiis
              vero nesciunt labore eligendi, ipsam, ea rem, aliquam dolores
              maiores voluptatem quam. Repudiandae!
            </p>
          </li>
        </ul>
        <Button primary>See All</Button>
      </section>
    </main>
  )
}
