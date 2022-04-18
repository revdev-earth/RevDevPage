import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  background: #e9fbf8;
  padding: 50px 200px;
  text-align: center;

  ul {
    position: relative;
    z-index: 1;
    display: flex;

    div:nth-child(1) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      margin: auto;
    }
  }

  > div {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      flex: 0 1 600px;
    }
  }

  @media (max-width: 1400px) {
    padding: 50px;
  }
  @media (max-width: 1200px) {
    ul {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    ul {
      overflow: hidden;

      div:nth-child(1) {
        flex-shrink: 0;
        width: 1150px;
        max-height: 800px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
      }
    }
  }
`

export const ControlLeft = styled.div`
  display: none;
  z-index: 5;
  position: absolute;
  top: calc(320px - 12px);
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
`
export const ControlRigth = styled(ControlLeft)`
  right: 10px;
  left: auto;

  img {
    transform: rotate(0);
  }
`
