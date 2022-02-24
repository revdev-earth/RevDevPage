import styled from "styled-components"

export const Text = styled.div<{
  size?: number | 12 | 14 | 16 | 18 | 20 | 22 | 24
  height?: number | 16 | 20 | 22 | 24
  weight?: 400 | 500 | 600 | 700 | 800 | 900
  align?: "center" | "end" | "justify"
  color?:
    | "#2E00FF"
    | "white"
    | "black"
    | "#E30000"
    | "#818181"
    | "#707070"
    | "#121212"
    | "#00AD30"
    | "#EF0D53"
    | "#949494"
    | "#163637"
    | "#999999"
    | string
  decoration?: "underline" | "none"
  cursor?: "pointer" | "default"
  font?: "Inter" | "Lato" | "Epilogue" | "Sources Sans Pro"
}>`
  display: inline;

  ${({ font }) => font && `font-family: ${font};`}

  font-size: ${({ size = 12 }) => size}px;
  line-height: ${({ height = 20 }) => height}px;
  font-weight: ${({ weight = 400 }) => weight};

  text-align: ${({ align }) => align};

  color: ${({ color }) => color};

  text-decoration: ${({ decoration }) => decoration};

  cursor: ${({ cursor = "default" }) => cursor};
`
