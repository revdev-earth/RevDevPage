import styled, { css } from "styled-components"
import type { ButtonProps } from "."

const defaultStyle = css`
  box-sizing: border-box;
  display: inline-block;
  padding: 20px 30px;
  width: 210px;
  background-color: transparent;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  outline: none;
  background-color: ${({theme}) => theme.colors.whitePrimary};
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.15s linear;
  cursor: pointer;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

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

const trasnparent = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
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
  font-size: 18px;
  font-weight: 400;
`

export const Button = styled.button<ButtonProps>`
  ${defaultStyle}
  ${({
    primary: isPrimary,
    secondary: isSecondary,
    red: isRed,
    yellow: isYellow,
    transparent: isTrasparent,
  }) => {
    if (isPrimary) return primary
    if (isSecondary) return secondary
    if (isRed) return red
    if (isYellow) return yellow
    if (isTrasparent) return trasnparent

    return ""
  }};
`
