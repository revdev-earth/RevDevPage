// data
import { homeSection4 } from "@data"
// Styles
import { FourthSectionContainer } from "./styles"
// asetss
import ImgHome2 from "@assets/home/img-home-2.png"
import Circles from "@assets/circles.svg"

export const FourthSection = () => (
  <FourthSectionContainer>
    <h3>
      How your idea becomes reality with us <span>reality</span>
    </h3>
    <p>
      Let's see your idea and then we will start with the plan of how to plan
      the development of the idea in reality, we are pleased to know how we will
      be in the future.
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
  </FourthSectionContainer>
)
