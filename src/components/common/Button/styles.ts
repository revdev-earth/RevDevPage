import styled, { css } from "styled-components"
import type { ButtonProps } from "."

const defaultStyle = css`
  display: inline-block;
  padding: 12px 30px;

  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  outline: none;
  transition: all 0.15s linear;
  cursor: pointer;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(255, 255, 255, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 1px solid #c9c9c9;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }

  &:active {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(2px);
  }
`

const primary = css`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
`

const secondary = css`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
`

const yellow = css`
  background-color: ${({ theme }) => theme.colors.yellow};
  border-color: ${({ theme }) => theme.colors.yellow};
`

const red = css`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.red};
`

export const Button = styled.button<ButtonProps>`
  ${defaultStyle}
  ${({
    primary: isPrimary,
    secondary: isSecondary,
    red: isRed,
    yellow: isYellow,
  }) => {
    if (isPrimary) return primary
    if (isSecondary) return secondary
    if (isRed) return red
    if (isYellow) return yellow

    return ""
  }};
`
