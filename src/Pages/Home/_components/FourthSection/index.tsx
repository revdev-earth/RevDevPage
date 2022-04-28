// data
import { homeSection4 } from "@data"
// Styles
import { FourthSectionContainer, VerticalLine } from "./styles"
// asetss
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"
import LineVertical from "@assets/lineVertical.svg"

export const FourthSection = () => (
  <FourthSectionContainer>
    <h2>
      How your idea becomes reality with us <span>reality</span>
    </h2>
    <p>
      Let's see your idea and then we will start with the plan of how to plan
      the development of the idea in reality, we are pleased to know how we will
      be in the future.
    </p>
    <div>
      {/*       <VerticalLine>
        <img src={LineVertical} alt="vertical line." />
      </VerticalLine> */}
      <ul>
        {homeSection4.map((item) => (
          <li key={Math.random() * 10}>
            <span>{item.id}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <img src={ImgHome2} alt="img section 4" />
    <div>
      <img src={Circles} alt="" />
      <img src={Circles} alt="" />
    </div>
  </FourthSectionContainer>
)
