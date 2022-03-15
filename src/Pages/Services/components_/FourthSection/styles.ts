import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 100px;
  grid-gap: 30px;

  div {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    height: 500px;
  }
`
