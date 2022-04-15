import styled from "styled-components"

export const Container = styled.section``

export const Section2 = styled.section`
  padding: 100px 15%;
`

export const Section3Content = styled.div`
  h2 {
    padding: 20px;
    color: ${({ theme }) => theme.colors.whitePrimary};
  }

  a {
    margin: auto;
    padding: 20px;
    width: 200px;
    color: ${({ theme }) => theme.colors.whitePrimary};
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.whitePrimary};
    transition: 0.3s all ease-in-out;

    &:hover {
      border-radius: 8px;
      transform: scale(1.05);
      border: 1px solid ${({ theme }) => theme.colors.whitePrimary};
      box-shadow: 0px 2px 20px -5px #000;
    }

    &:active {
      transform: scaleY(0.95);
      box-shadow: 0px 2px 5px -5px #000;
    }
  }
`
