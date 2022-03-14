import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`
