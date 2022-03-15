import styled from "styled-components"

export const DotLoader = styled.div<{
  width?: number
  height?: number
  bottom?: number
  top?: number
}>`
  & {
    content: "";
    color: green;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
    width: ${({ width }) => (width ? `${width}px` : "10px")};
    height: ${({ height }) => (height ? `${height}px` : "10px")};
    border-radius: 50%;
    animation-fill-mode: both;
    position: relative;
  }
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  animation: dotFlashing 1.8s infinite ease-in-out;
  left: -2.5em;

  ::before,
  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: ${({ width }) => (width ? `${width}px` : "10px")};
    height: ${({ height }) => (height ? `${height}px` : "10px")};
    animation-fill-mode: both;
    animation: dotFlashing 1.8s infinite ease-in-out;
  }

  &::before {
    left: ${({ width }) => (width ? `-${width * 1.8}px` : "-15px")};
    animation-delay: -0.32s;
  }

  &::after {
    left: ${({ width }) => (width ? `${width * 1.8}px` : "15px")};
  }

  @keyframes dotFlashing {
    0%,
    80%,
    100% {
      box-shadow: 2.5em 0 0 -1.3em;
    }
    40% {
      box-shadow: 2.5em 0 0 0;
    }
  }
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 48%;
  left: 48%;
  margin: 0 auto;
`
