import styled from "styled-components"

export const Container = styled.li`
  text-align: center;

  div {
    &:first-child {
      width: 100%;
      height: 400px;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 24px;
    }
    &:last-child {
      z-index: 2;
      position: relative;
      margin: auto;
      padding: 20px 100px;
      top: -40px;
      width: 90%;
      background-color: ${({ theme }) => theme.colors.whitePrimary};
      box-shadow: 0px 5px 20px -15px #000;
      border-radius: 24px;
    }
  }
`
