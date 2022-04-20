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

  h3 {
    margin-top: 50px;
  }

  > div {
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h5 {
      z-index: 3;
      padding: 20px 40px;
      transition: 0.3s all ease-in;
      border: 1px solid transparent;
      border-radius: 50px;
      cursor: pointer;
      color:  ${({ theme }) => theme.colors.secondary};

      &:nth-child(${({ pag }) => pag + 1}) {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ul {
    div:nth-child(1)  {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;

      li {
        z-index: 3;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 5px;
        text-align: start;

        img {
          width: 100%;
          height: 200px;
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
    padding: 50px 100px;
  }
  @media (max-width: 1024px) {
    padding: 50px;

    button {
      bottom: -75px;
    }
  }
  @media (max-width: 800px) {
    padding:  0;
    > div {
      flex-direction: column;
      gap: 0;
    }

    ul {
      overflow: hidden;
      
      div:nth-child(1) {
        position: relative;
        left: -200px;

        width: 1200px;
      }
    }

    button {
      bottom: -25px;
    }
  }

  @media (max-width: 400px){
    ul {
      overflow: hidden;
      
      div:nth-child(1) {
        position: relative;
        left: -400px;
        padding-bottom: 100px;
        width: 1200px;

        
      }
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

export const ControlLeft = styled.div`
  display: none;
  z-index: 5;
  position: absolute;
  top: calc(60% - 12px);
  left: 10px;
  padding: 30px;
  height: 24px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  box-shadow: 0px 4px 10px 0px #000;
  transition: 0.2s all ease-in-out;

  &:active {
    box-shadow: 0px 4px 8px -2px #000;
  }

  img {
    transform: rotate(180deg);
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  } 

  @media (max-width: 400px){
    top: calc(62% - 12px);
  }
`
export const ControlRigth = styled(ControlLeft)`
  right: 10px;
  left: auto;

  img {
    transform: rotate(0);
  }
`
