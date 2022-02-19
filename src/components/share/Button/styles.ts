import styled, { css } from "styled-components"
import { ButtonProps } from "."

export const Container = styled.button<ButtonProps>`
  ${({ primary: isPrimary, secondary: isSecondary }) => {
    const defaultStyle = css`
      background-color: white;
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

    const styles = `
    ${defaultStyle}
    ${isPrimary && primary}
    ${isSecondary && secondary}

    `

    return styles
  }};
`
const primary = css`
  color: #fff;
  background-color: #6658dd;
  border-color: #6658dd;
`
const secondary = css`
  color: #fff;
  background-color: #4a81d4;
  border-color: #4a81d4;
`
