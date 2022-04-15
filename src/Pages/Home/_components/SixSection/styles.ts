import styled from "styled-components"

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 100px;
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
  box-shadow: 0px 25px 100px -50px #000;
  border-radius: 24px;

  span {
    font-size: 38px;
    font-weight: bold;
  }

  p {
    max-width: 900px;
    font-weight: 600;
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
`

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: -8.5%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1200px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.whiteSecondary};
    cursor: pointer;
    transition: 0.2s all ease-in;
    box-shadow: 0px 2px 8px -2px #000;

    &:hover {
      transform: scale(1.1);
    }
    &:nth-of-type(1) {
      img {
        transform: rotate(180deg);

        &:hover {
          transform: scale(1.1);
          transform: rotate(180deg);
        }
      }
    }

    img {
      &:hover {
        transform: scale(1.1);
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
`
