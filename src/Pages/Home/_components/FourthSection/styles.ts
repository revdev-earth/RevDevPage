import styled from "styled-components"

export const FourthSectionContainer = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 200px;
  height: 1300px;

  > img {
    z-index: 5;
    position: absolute;
    bottom: -15%;
    right: -15px;
    max-width: 50%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 48px;
    }
  }
  
  > div:nth-of-type(1){
    > div{
      img {
        z-index: 2;
        
      }
    }
    ul {
      position: relative;
      margin-top: 90px;
      
      li {
        padding: 20px;
        display: flex;
        gap: 80px;
        
        span {
          z-index: 5;
        color: ${({ theme }) => theme.colors.secondary};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        min-width: 80px;
        font-size: 32px;
        font-weight: 600;
        border-radius: 100%;
        box-shadow: 0px 32px 41px rgba(0, 0, 0, 0.13);
      }
      
      div {
        position: relative;
        padding-top: 10px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        text-align: start;
        max-width: 550px;
        gap: 10px;
        
        h3 {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
  }
    
  > div:nth-of-type(2) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      z-index: 1;
      position: absolute;
      max-width: 450px;
      top: -220px;
      left: -181px;

      &:last-child {
        top: -100px;
        right: -44px;
        left: auto;
      }
    }
  }

  @media (max-width: 1240px) {
    padding: 100px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
    > div:nth-of-type(1){
      
      ul {
        li {
          gap: 40px;
          span {
            height: 70px;
            min-width: 70px;
          }
        }
      }
    }
  }

  @media (max-width: 999px) {
    > div:nth-of-type(1){

      ul {
        li {
          gap: 50px;
          span {
            height: 70px;
            min-width: 70px;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    gap: 50px;
    padding-bottom: 200px;

    > div:nth-of-type(1){

      ul {
        li {
          padding: 10px 0px;
          gap: 20px;
          span {
            height: 70px;
            min-width: 70px;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 30px;
    padding-bottom: 180px;
    
    > div:nth-of-type(1){

      ul {
        li {
          padding: 10px 0px;
          gap: 20px;
          span {
            height: 50px;
            min-width: 50px;
          }
        }
      }
    }

    img {
      bottom: 0px;
    }

    div {
      img:last-child {
        width: 150px;
        top: auto;
        right: auto;
        left: 30px;
        bottom: 10px;
      }
    }
  }
`
export const VerticalLine = styled.div`
  z-index: 0;
  position: absolute;
  top: 360px;
  left: 270px;
`