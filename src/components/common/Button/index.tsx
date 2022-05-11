//* Import react functions
import { Children, ReactNode } from "react"

//* Import styles
import { Button as ButonStyle } from "./styles"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined
  children?: ReactNode | undefined
  primary?: boolean
  secondary?: boolean
  red?: boolean
  yellow?: boolean
  transparent?: boolean
}

export const Button = ({
  type = "button",
  children = "Button",
  ...arg
}: ButtonProps) => (
  <ButonStyle type={type} {...arg}>
    {children}
  </ButonStyle>
)
