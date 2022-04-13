import styled from "styled-components"

export const Container = styled.footer`
  z-index: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  &:after {
    position: absolute;
    content: "";
    top: 40%;
    left: -8%;
    width: 400px;
    height: 400px;
    background-color: #fdfdff63;
    border-radius: 100%;

    @media (max-width: 1700px) {
      left: -10%;
      width: 350px;
      height: 350px;
    }
    @media (max-width: 1500px) {
      left: -10%;
      width: 300px;
      height: 300px;
    }
    @media (max-width: 1300px) {
      top: 50%;
    }
    
    @media (max-width: 800px) {
      top: 70%;
      left: -2%;
    }
    @media (max-width: 425px) {
      width: 200px;
      height: 200px;
      top: 65%;
      left: -10px;
    }
  }

`
export const Content = styled.div`
  margin: auto;
  padding: 100px 250px;

  @media (max-width: 1700px) {
    padding: 100px 200px;
  }
  @media (max-width: 1500px) {
    padding: 80px 150px;
  }
  @media (max-width: 1300px) {
    padding: 50px 80px;
  }
  @media (max-width: 1024px) {
    padding: 50px 80px;
  }
  
  @media (max-width: 1024px) {
    padding: 30px;

  }

`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 60px;
  border-bottom: 2px solid #fdfdff63;

  @media (max-width: 1200px) {
    padding-bottom: 30px;
    gap: 50px;
  }

  div {
    z-index: 2;
    display: flex;

    &:nth-child(1) {
      flex-direction: column;
      gap: 15px;
      
      p {
        max-width: 360px;
      }

      @media (max-width: 800px){
      padding: 30px;
      border-bottom: 2px solid #fdfdff63;
      }
    }
    &:nth-child(2) {
      
      gap: 80px;

      @media (max-width: 1500px) {
        gap: 40px;
      }
      @media (max-width: 1024px) {
        gap: 30px;
      }
      @media (max-width: 800px){
      padding: 0 30px 0 30px;

      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;

        li {
          a {
            font-size: 18px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.primary};
          }
          &:nth-child(1) {
            a {
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
      @media (max-width: 425px) {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const Bottom = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  gap: 50px;

  > div{
    z-index: 2;
    display: flex;

    &:first-child{
      gap: 30px;
      div{
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        p {
          font-weight: 600;
        }

        img {
          height: 20px;
          transform: rotate(90deg);
        }
      }
    }
    
    &:last-child {
      gap: 50px;
    ul {
      display: flex;
      gap: 20px;
      li {
        font-weight: 600;
        a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    }
  }

  @media ( max-width: 800px ){
    position: relative;
    
  }
  
  @media ( max-width: 400px ){
    padding: 30px 10px;
    
    >div {
      justify-content: center;
      
      &:first-child{
        width: 100%;
        gap: 50px;
        
        div {
          position: relative;
          gap:15px;
        }
      }
      
      &:last-child{
        overflow: hidden;
        width: 0;
        padding: 0;
        margin: 0;
        position: absolute;
        display: none;
      }
    }
  }
`
export const Images = styled.div`
z-index: 1;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

  img {
    width: 40%;
    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width: 800px){
        width: 60%;
        left: -30%;
      }
      @media (max-width: 400px){
        width: 100%;
        left: -50%;

      }
    }
    
    &:last-child {
      position: absolute;
      height: 100%;
      bottom: 0;
      right: 0;

      @media (max-width: 800px){
        width: 60%;
        height: auto;
        top: 40%;

      }
      @media (max-width: 400px){
        width: 90%;
  
      }
    }
  }
`