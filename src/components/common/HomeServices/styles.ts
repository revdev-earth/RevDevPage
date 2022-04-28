import styled from "styled-components"

export const Container = styled.li`
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding:   30px;
  max-width: 350px;
  min-height: 350px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  text-align: start;
  box-shadow: 0px 10px 20px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
  border-top: 7px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.3s all ease-in-out;

  img {
    position: relative;
    top: 5px;
    left: 6px;
    z-index: 2;
    display: block;
    margin: 20px 0;
    width: 48px;
  }

  a {
    display: flex;

    img {
      margin-left: 10px;
    }
  }

  @media (max-width: 800px){
    max-width: 325px;
  }
  @media (max-width: 400px){
    max-width: 290px;
  }
`
export const Circle = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;

  &:before {
    z-index: 1;
    position: absolute;
    content: "";

    width: 50px;
    height: 50px;
    background-color: #e9fbf8;
    border-radius: 100%;
  }
`
