import { useEffect, useState } from "react"

//* Import components
import { Button } from "@components"

//* Import styles
import { Container } from "./styles"

import { homeWorks } from "@data"

export const ThirdSection = () => {
  const [pag, setPag] = useState(0)

  return (
    <Container>
      <h4>Portfolio</h4>
      <h3>Our Great Work</h3>
      <div>
        <h4 onClick={() => setPag(0)}>Website Optimization</h4>

        <h4 onClick={() => setPag(1)}>Website Redesign</h4>

        <h4 onClick={() => setPag(2)}>Search Engine Optimization</h4>
      </div>
      <ul>
        {homeWorks[pag].map((item) => (
          <li key={Math.random() * 10}>
            <img src={item.img} alt="img-item" /> <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <Button primary>See All</Button>
    </Container>
  )
}
