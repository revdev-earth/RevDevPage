import styled from "styled-components"

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.fund};
  padding: 100px;

  h3,
  div > p {
    text-align: center;
  }

  ul {
    display: flex;
    gap: 50px;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: auto;
    padding-top: 80px;
    max-width: 1350px;
    flex-wrap: wrap;
  }
`
