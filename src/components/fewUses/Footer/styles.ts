import styled from "styled-components"

export const Container = styled.footer`
  overflow: hidden;
  position: relative ;
  background color: salmon;
  width: 100%;

  &:after {
    position: absolute;
    content: "";
    top: 60%;
    left: -5%;
    width:150px;
    height: 150px;
    background-color: salmon;
    border-radius: 100%;
  }

  &:before {
    position: absolute;
    transform: rotate(-60deg);
    content: "";
    top: -80px;
    left: 70px;
    width: 70px;
    height: 250px;
    border: 1px solid salmon;
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
    &:nth-child(1) {
      z-index: 2;
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
          }
          &:nth-child(1) {
            a {
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  div {
    ul {
      display: flex;
      gap: 20px;
      li {
        font-weight: 600;
        a {
        }
      }
    }
  }
`
