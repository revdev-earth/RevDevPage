// libraries
import { ReactNode } from "react"

// styles
import { Container } from "./styles"

// assets
import VectorImg1 from "@assets/vector1.svg"
import VectorImg2 from "@assets/vector2.svg"

// types
interface IContainer {
  children?: ReactNode
}

// JSX
export const ContainerSection = ({ children }: IContainer) => (
  <Container>
    {children}
    <img src={VectorImg1} alt="vector1" />
    <img src={VectorImg2} alt="vector2" />
  </Container>
)
