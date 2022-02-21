import styled, { ThemeConsumer } from "styled-components"

export const FirstSection = styled.section`
  margin: auto;
  max-width: 1024px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
      color: ${({ theme }) => theme.colors.primary};

      &:after {
        width: 200px;
        background-color: solid ${({ theme }) => theme.colors.secondary};
      }

      span {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fonts.h2};
      }
    }
  }

  img {
    max-width: 500px;
  }
`
