import styled from "styled-components"

export const Container = styled.section<{ pag: number }>`
  position: relative;
  margin: auto;
  padding: 100px 200px;
  max-width: 1920px;
  text-align: center;
  background: linear-gradient(
    ${({ theme }) => theme.colors.whitePrimary} 55%,
    ${({ theme }) => theme.colors.secondary} 45%
  );

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    margin-top: 20px;
  }

  > div {
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h4 {
      z-index: 3;
      padding: 20px 40px;
      transition: 0.3s all ease-in;
      border: 1px solid transparent;
      border-radius: 50px;
      cursor: pointer;

      &:nth-child(${({ pag }) => pag + 1}) {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ul {
    div {
      display: flex;
      justify-content: space-between;
      gap: 40px;

      li {
        z-index: 3;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 5px;
        text-align: start;
        img {
          width: 100%;
          max-height: 300px;
          border-radius: 24px;
        }
      }
    }
  }

  button {
    z-index: 2;
    position: relative;
    bottom: -125px;
  }

  @media (max-width: 1400px) {
    padding: 100px;
  }
  @media (max-width: 1024px) {
    padding: 50px;

    button {
      bottom: -75px;
    }
  }
  @media (max-width: 800px) {
    padding: 0;
    > div {
      flex-direction: column;
      gap: 0;
    }

    ul {
      overflow: hidden;
      div {
        position: relative;
        left: -200px;

        width: 1200px;
      }
    }

    button {
      bottom: -25px;
    }
  }
`
export const Circle = styled.img`
  z-index: 0;
  position: absolute;
  width: 200px;
  top: 200px;
  left: 30%;

  @media (max-width) {
    top: calc(50% - 100px);
    left: 10%;
  }
`
