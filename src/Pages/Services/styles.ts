import styled from "styled-components"

export const FritstSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};

  p {
    margin: auto;
    max-width: 900px;
  }
`
export const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const FourSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:nth-child(1) {
      padding: 0 60px;
    }

    &:nth-child(2) {
      div {
        display: block;
        background: red;
        max-width: 700px;
        height: 500px;
      }
    }
  }
`
