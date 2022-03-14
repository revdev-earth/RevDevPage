//*Import styles
import { Container, Circle } from "./styles"

//* Import assets
import ArrowRoght from "../../../assets/arrow-right.svg"

interface HomeServicesProps {
  item: { img: string; title: string; description: string; link: string }
}

export const HomeServices = ({ item }: HomeServicesProps) => (
  <Container>
    <Circle />
    <img src={item.img} alt={item.img} />
    <h4>{item.title}</h4>
    <p>{item.description}</p>
    <a href={item.link}>
      Read More <img src={ArrowRoght} alt="arrow right" />
    </a>
  </Container>
)
