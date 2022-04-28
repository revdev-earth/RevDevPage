import styled from "styled-components"

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 1000px;
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 1024px) {
    padding: 50px;
  }
`

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const ContainerSliders = styled.div`
  box-sizing: content-box;
  position: relative;
  display: flex;
  margin: auto;
  margin-top: 30px;
  flex: 1 1 1024px;
  max-height: 300px;
`

export const Slide = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 80px 50px 80px;
  height: fit-content;
  flex: 1 1 1024px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  span {
    font-size: 38px;
    font-weight: bold;
  }

  p {
    max-width: 900px;
    font-weight: 600;
  }

  @media (max-width: 400px){
    padding: 30px;
  }
`

export const Users = styled.div<{ pos: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 60%;
  gap: 10px;

  ul {
    position: relative;
    padding-bottom: 20px;
    display: flex;
    gap: 50px;

    li {
      position: relative;
      opacity: 0.3;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 90px;
      height: 90px;
      border-radius: 100%;
      transition: 0.2s all ease-in-out;
      cursor: pointer;

      img {
        z-index: 2;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        transition: 0.2s all ease-in;
      }

      &:hover {
        transform: scale(1.1);

        &:after {
          background: transparent;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      &:active {
        transform: scale(0.9);
      }

      &:nth-child(${({ pos }) => pos}) {
        opacity: 1;
        min-width: 100px;
        height: 100px;

        &:after {
          background: transparent;
        }
        &:hover {
          img {
            width: 100%;
            height: 100%;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }

      &:nth-child(${({ pos }) => pos - 1}),
      &:nth-child(${({ pos }) => pos + 1}) {
        opacity: 0.6;
        min-width: 100px;
        height: 100px;
        background-color: ${({ theme }) => theme.colors.grayLight};

        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: rgb(183 183 183 / 40%);
          transition: 0.4s all ease-in;
        }

        &:hover {
          &:after {
            background: transparent;
          }

          img {
            width: 90px;
            height: 90px;
          }
        }

        img {
          width: 90px;
          height: 90px;
        }
      }

      background-color: ${({ theme }) => theme.colors.grayLight};

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: rgb(183 183 183 / 60%);
        transition: 0.4s all ease-in;
      }
    }
  }

  h4 {
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 800px) {
    max-width: fit-content;
  }
  @media (max-width: 400px) {
    max-width: -webkit-fill-available;

    ul {
      position: relative;
      left: -13%;
      gap: 20px;

      li {
      min-width: 60px;
      height: 60px;

      img {
        width: 45px;
        height: 45px;
      }

      &:nth-child(${({ pos }) => pos}) {
        opacity: 1;
        min-width: 60px;
        height: 60px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &:nth-child(${({ pos }) => pos - 1}),
      &:nth-child(${({ pos }) => pos + 1}) {
        opacity: 0.6;
        min-width: 60px;
        height: 60px;
        background-color: ${({ theme }) => theme.colors.grayLight};

        &:hover {

          img {
            width: 90%;
            height: 90%;
          }
        }

        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    }
  }
`

export const Circle = styled.img`
  position: absolute;
  z-index: 0;
  min-width: 190px;
  min-height: 190px;
  background-color: transparent;
  
  @media (max-width: 400px){
    min-width: 100px;
    min-height: 100px;
    
  }
`
export const ControlLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: absolute;
  top: calc(50% - 12px);
  left: -100px;
  padding: 30px;
  height: 24px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  border-radius: 100%;
  box-shadow: 0px 24px 32px rgba(59, 59, 59, 0.12);
  transition: 0.2s all ease-in-out;

  &:active {
    box-shadow: 0px 4px 8px -8px #000;
  }

  img {
    transform: rotate(180deg);
  }

  @media (max-width: 800px) {
    

  }
`
export const ControlRigth = styled(ControlLeft)`
  right: -100px;
  left: auto;

  img {
    transform: rotate(0);
  }
`
