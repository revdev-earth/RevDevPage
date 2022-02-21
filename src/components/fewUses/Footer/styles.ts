import styled from "styled-components"

export const Container = styled.footer`
  z-index: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;

  &:after {
    position: absolute;
    content: "";
    top: 60%;
    left: -5%;
    width: 150px;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.whiteSecondary};
    border-radius: 100%;

    @media (max-width: 768px) {
      top: 75%;
    }
    @media (max-width: 425px) {
      top: 85%;
      left: -60px;
    }
  }

  &:before {
    position: absolute;
    transform: rotate(-60deg);
    content: "";
    top: -80px;
    left: 70px;
    width: 70px;
    height: 250px;
    border: 1px solid ${({ theme }) => theme.colors.whiteSecondary};
    border-radius: 50%;
  }
`
export const Content = styled.div`
  margin: auto;
  max-width: 1024px;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px;
  border-bottom: 2px solid gray;

  div {
    z-index: 2;
    &:nth-child(1) {
      p {
        max-width: 300px;
      }
    }
    &:nth-child(2) {
      display: flex;
      gap: 20px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;

        li {
          a {
            font-size: 18px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.primary};
          }
          &:nth-child(1) {
            a {
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
      @media (max-width: 425px) {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const Bottom = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding: 30px;

  div {
    z-index: 2;
    ul {
      display: flex;
      gap: 20px;
      li {
        font-weight: 600;
        a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`
