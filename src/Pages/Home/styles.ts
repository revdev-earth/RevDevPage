import styled, { ThemeConsumer } from "styled-components"

export const FirstSection = styled.section`
  margin: auto;
  max-width: 1024px;
  display: flex;

  div {
    margin: center;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    h4 {
      width: 350px;
      color: ${({ theme }) => theme.colors.primary};

      &:after {
        width: 200px;
        background-color: solid ${({ theme }) => theme.colors.secondary};
      }

      span {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fonts.h4};
      }
    }

    div {
      padding: 0;
      flex-direction: row;
      justify-content: start;
    }
  }

  img {
    max-width: 500px;
  }
`
