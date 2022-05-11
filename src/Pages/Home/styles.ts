import styled from "styled-components"

export const FifthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 100px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1024px) {
    padding: 50px;
  }
`

