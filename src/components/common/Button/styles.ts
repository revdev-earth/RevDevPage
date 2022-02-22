import styled, { css } from "styled-components"
import type { ButtonProps } from "."

export const Button = styled.button<ButtonProps>`
  ${({
    primary: isPrimary,
    secondary: isSecondary,
    red: isRed,
    yellow: isYellow,
  }) => {
    //
    const styles = `
      ${defaultStyle}
      ${isPrimary && primary}
      ${isSecondary && secondary}
      ${isRed && red}
      ${isYellow && yellow}
    `

    return styles
  }};
`

const defaultStyle = css`
  display: inline-block;
  padding: 12px 30px;
  color: ${({ theme }) => theme.colors.primary};
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
  }

  &:active {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
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
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.red};
`
