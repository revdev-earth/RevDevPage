import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 100px 20%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  
  h2, h3{
    color: ${({ theme }) => theme.colors.whitePrimary};
    border-bottom: 1px solid${({ theme }) => theme.colors.whitePrimary};
  }
    

  &:after {
    position: absolute;
    content: "";
    top: 40%;
    left: -8%;
    width: 400px;
    height: 400px;
    background-color: #fdfdff63;
    border-radius: 100%;
  }

  >img {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 270px;
    width: 560px;

    &:last-child {
      top: auto;
      left: auto;
      right: 0;
      bottom: 0;
      height: 470px;
      width: 740px;
    }
  }

  
  
  button{
    position: relative;
    background-color: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.whitePrimary};
    font-size: 28px;
    width: 300px;
    
    &:after{
      content: "";
      position: absolute;
      bottom: 0px;
      left:20%;
      width: 60%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.whitePrimary};
      
    }
  }

  @media (max-width: 1200px) {
    padding: 100px;
  }
  @media (max-width: 800px) {
    padding: 50px;
    &:after {
      width: 200px;
      height: 200px;
      top: auto;

      bottom: -60px;
    }

    img {
      width: 30%;
    }
  }

  @media (max-width: 400px) {
    &:after {
      width: 150px;
      height: 150px;
      top: auto;
      bottom: -50px;
    }
    img {
      width: 50%;
    }
  }
`
