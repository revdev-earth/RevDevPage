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

  > p {
    max-width: 650px;
  }

  ul {
    z-index: 1;
    overflow: hidden;
    >div {
            width: 1150px;
        height: 800px;


        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        gap: 20px;
        margin: auto;

      }
    }

  > div{
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
      flex:0 1 600px;
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

/*   @media (max-width: 800px) {
    padding: 40px;

    ul {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      height: 670px;
      
    }
  } */
`