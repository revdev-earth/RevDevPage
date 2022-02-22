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

  @media (max-width: 999px) {
    padding: 50px 30px;

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
      grid-row: 1;
    }
  }
`
export const SecondSection = styled.section`
  background: #e9fbf8;
  padding: 50px 200px;
  text-align: center;
`
