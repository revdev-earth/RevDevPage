import styled from "styled-components"

export const FourthSectionContainer = styled.section`
  overflow: hidden;
  position: relative;
  padding: 100px 200px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > img {
    position: absolute;
    bottom: -10%;
    right: 0;
    max-width: 50%;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 48px;
    }
  }
  p {
    max-width: 1010px;
  }

  ul {
    position: relative;

    &:after{
      z-index: auto;
      position: absolute;
      top: 10%;
      left: 70px;
      content: "";
      height: 80%;
      width: 1px;
      border-left: 1px solid transparent;
    }
    
    li {
      padding: 20px;
      display: flex;
      gap: 80px;
      
      span {
        z-index: 5;
        color: ${({ theme }) => theme.colors.secondary};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        min-width: 100px;
        font-size: 32px;
        font-weight: 600;
        border-radius: 100%;
        box-shadow: 0px 32px 41px rgba(0, 0, 0, 0.13);
      }

      div {
        position: relative;
        padding-top: 10px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        text-align: start;
        max-width: 550px;
        gap: 10px;

        h4 {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      position: absolute;
      max-width: 400px;

      top: -80px;
      left: -80px;

      &:last-child {
        top: -30px;
        right: -10px;
        left: auto;
      }
    }
  }

  @media (max-width: 1240px) {
    padding: 100px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
    ul {
      li {
        gap: 40px;
        span {
          height: 70px;
          min-width: 70px;
        }
      }
    }
  }

  @media (max-width: 999px) {
    ul {
      li {
        gap: 50px;
        span {
          height: 70px;
          min-width: 70px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    gap: 50px;
    padding-bottom: 200px;
    ul {
      li {
        padding: 10px 0px;
        gap: 20px;
        span {
          height: 70px;
          min-width: 70px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 30px;
    padding-bottom: 180px;

    ul {
      li {
        padding: 10px 0px;
        gap: 20px;
        span {
          height: 50px;
          min-width: 50px;
        }
      }
    }

    img {
      bottom: 0px;
    }

    div {
      img:last-child {
        width: 150px;
        top: auto;
        right: auto;
        left: 30px;
        bottom: 10px;
      }
    }
  }
`
