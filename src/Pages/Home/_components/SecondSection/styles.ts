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
    position: relative;
    z-index: 1;
    overflow: hidden;
    >div {
            width: 1150px;
        height: 690px;


        
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

export const ControlLeft = styled.img`
  display: none;
  z-index: 5;
  position: absolute;
  top: calc(320px - 12px);
  left: 10px;
  padding: 30px;
  height: 24px;
  width: auto;
  border-radius: 100%;
  box-shadow: 0px 4px 10px 0px #000;
  transition: .2s all ease-in-out;
  
  &:active{
    box-shadow: 0px 4px 8px -2px #000;
  }

  @media (max-width: 800px) {
    display: block;
  }

`
export const ControlRigth = styled(ControlLeft)`
  right: 10px;
  left: auto;
`