import { useEffect, useState } from "react"
//* Import components
import { Button } from "@components"
//* Import styles
import { Container, Circle } from "./styles"
import { homeWorks } from "@data"
//* Import assets
import Circles from "@assets/circles.svg"

export const ThirdSection = () => {
  const [pag, setPag] = useState(0)

  return (
    <Container pag={pag}>
      <h4>Portfolio</h4>
      <h3>Our Great Work</h3>
      <Circle src={Circles} alt="" />
      <div>
        <h4 onClick={() => setPag(0)}>Website Optimization</h4>

        <h4 onClick={() => setPag(1)}>Website Redesign</h4>

        <h4 onClick={() => setPag(2)}>Search Engine Optimization</h4>
      </div>
      <ul>
        <div>
          {homeWorks[pag].map((item) => (
            <li key={Math.random() * 10}>
              <img src={item.img} alt="img-item" /> <p>{item.description}</p>
            </li>
          ))}
        </div>
      </ul>
      <Button primary>See All</Button>
    </Container>
  )
}
