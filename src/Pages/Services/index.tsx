//* Import styles
import /* , ThirdSection, FourSection */
"./styles"

//* Import components
import { Button } from "@components"

//* Import sections
import { FirstSection } from "./FirstSection"

export default function Services() {
  return (
    <>
      <FirstSection />

      {/*       <ThirdSection>
        <h3>Interested to work with us ?</h3>
        <p>Send a line here get and update daily</p>
        <Button primary>DaCode@example.com</Button>
      </ThirdSection> */}

      {/* <FourSection>
        <div>
          <h3>Establishing online presence</h3>
          <p>
            Every SaaS website, regardless of niche, must do one thing
            brilliantly, which is converting visitors into users. At first
            glance, the site should encourage and guide visitors in a smooth way
            towards call-to-actions. This goes hand in hand with a responsive
            design, meaning it needs to be apt for different devices. We use a
            data-driven approach to measure user response when developing the
            site. This method usually makes the site quicker to launch, is more
            cost-effective and more successful in the long run. The pages need
            to be search engine optimized (SEO) because it lays the foundation
            for the technical quality, which in turn determines how high it will
            rank among search results. We also make sure that your website is
            indexed properly. We audit your audience and get to know your target
            market to be able to speak to them through the website in the best
            possible way. By finding out their consumer behavior we can refine
            the website approach.
          </p>
        </div>
        <div>
          <h4>Schedule a free session</h4>
          <div>
            <label htmlFor="party">
              Elija la fecha de festejo que prefiera:
            </label>
            <input type="date" name="party" id="party" min="" />
          </div>
        </div>
      </FourSection> */}
    </>
  )
}
