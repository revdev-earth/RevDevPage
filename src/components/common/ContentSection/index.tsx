// libraries
import { ReactNode } from "react"

// styles
import { Container } from "./styles"

// assets

import VectorImg1 from "@assets/vector1-white.svg"
import VectorImg3 from "@assets/vector3-white.svg"

// types
interface IContainer {
  children?: ReactNode
}

// JSX
export const ContainerSection = ({ children }: IContainer) => (
  <Container>
    {children}
    <img src={VectorImg1} alt="vector1" />
    <img src={VectorImg3} alt="vector2" />
  </Container>
)
