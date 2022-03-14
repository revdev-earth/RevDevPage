import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  p {
    margin: auto;
    max-width: 900px;
  }
`
