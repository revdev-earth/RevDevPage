import styled from "styled-components"

export const FirstSection = styled.section`
  margin: auto;
  padding: 0 100px;
  display: grid;
  grid-template-columns: 3fr 4fr;

  div {
    margin: center;
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    h3 {
      position: relative;
      max-width: 500px;
      color: ${({ theme }) => theme.colors.primary};

      &:before {
        content: "";
        position: absolute;
        top: -30px;
        width: 200px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      span {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fonts.h3};
      }
    }

    div {
      padding: 0;
      flex-direction: row;
      justify-content: start;
    }
  }

  img {
    padding-right: 50px;
    max-width: 100%;
    max-height: 750px;
  }

  @media (max-width: 1480px) {
    padding: 50px 80px;

    div {
      padding-left: 10px;
    }
  }
  @media (max-width: 1024px) {
    padding: 50px;
    grid-template-columns: 1fr 1fr;

    div {
      padding-left: 0px;

      h3:before {
        top: -10px;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 50px;

    grid-template-columns: 4fr 2fr;

    img {
      padding-right: 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    div {
      grid-row: 2;
    }
    img {
    }
  }
`
export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  background: #e9fbf8;
  padding: 50px 200px;
  text-align: center;

  @media (max-width: 1300px) {
    padding: 50px 100px;
  }

  p {
    max-width: 650px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: auto;
    max-width: 1100px;
  }

  @media (max-width: 1024px) {
    padding: 50px;
  }
`
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

export const HomeSection4 = styled.section`
  overflow: hidden;
  position: relative;
  padding: 100px 200px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  img {
    position: absolute;
    bottom: -10%;
    right: 0;
    max-width: 50%;
  }

  h3 {
    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 48px;
    }
  }
  p {
    max-width: 1010px;
  }

  ul {
    li {
      padding: 20px;
      display: flex;
      gap: 80px;

      span {
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

  @media (max-width: 1240px) {
    padding: 100px;
  }

  @media (max-width: 1024px) {
    padding: 50px;

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
    padding: 30px;

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

  @media (max-width: 768px) {
    padding: 30px;

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
  }
`
