import { Children, ReactNode } from "react"

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  children?: ReactNode | undefined
  primary?: boolean
  secondary?: boolean
  red?: boolean
  yellow?: boolean
}

const Button = ({
  type = "button",
  children = "Button",
  ...arg
}: ButtonProps) => (
  <button type={type} {...arg}>
    {children}
  </button>
)
