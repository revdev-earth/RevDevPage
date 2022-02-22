import styled from "styled-components"

export const Container = styled.footer`
  z-index: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  &:after {
    position: absolute;
    content: "";
    top: 40%;
    left: -8%;
    width: 400px;
    height: 400px;
    background-color: #fdfdff63;
    border-radius: 100%;

    @media (max-width: 1650px) {
      left: -10%;
    }
    @media (max-width: 1380px) {
      left: -10%;
    }

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
    border: 1px solid #fdfdff63;
    border-radius: 50%;
  }
`
export const Content = styled.div`
  margin: auto;
  padding: 100px 250px;

  @media (max-width: 1700px) {
    padding: 100px 200px;
  }
  @media (max-width: 1700px) {
    padding: 100px 200px;
  }
  @media (max-width: 1024px) {
    padding: 50px 80px;
  }
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 60px;
  border-bottom: 2px solid #fdfdff63;

  @media (max-width: 1024px) {
    padding-bottom: 30px;
  }

  div {
    z-index: 2;
    &:nth-child(1) {
      p {
        max-width: 360px;
      }
    }
    &:nth-child(2) {
      display: flex;
      gap: 80px;

      @media (max-width: 1024px) {
        gap: 30px;
      }

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
  padding-top: 50px;

  @media (max-width: 1024px) {
    padding-top: 30px;
  }

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
