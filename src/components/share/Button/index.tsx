//* Import react functions
import { Children, ReactNode } from "react"

//* Import styles
import { Container } from "./styles"

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  children?: ReactNode | undefined
  primary?: boolean
  secondary?: boolean
  red?: boolean
  yellow?: boolean
}

export const Button = ({
  type = "button",
  children = "Button",
  ...arg
}: ButtonProps) => (
  <Container type={type} {...arg}>
    {children}
  </Container>
)
