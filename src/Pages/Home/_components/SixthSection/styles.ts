import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.fund};
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 780px;


  @media (max-width: 800px){
    padding-bottom: 50px;
  }
`

export const Content = styled.div<{ slide: boolean }>`
  display: flex;
  gap: ${({ slide }) => (slide ? "0" : "355px")};
  padding: 100px;
  transition: 0.6s all ease-in-out;
  justify-content: ${({ slide }) => (slide ? "center" : "")} ;

  > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
    flex: 0 0 ${({ slide }) => (slide ? "0px" : "530px")};
    height: ${({ slide }) => (slide ? "0" : "")};
    align-items: flex-start;
    overflow: hidden;
    transition: 0.6s all ease-in-out;

    h4 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    
    > div{
      display: flex;
      gap: 40px;
    }

    justify-content: ${({ slide }) => (slide ? "center" : "")};
  }

  @media (max-width: 1024px) {
    padding: 50px;

    > div {
      flex: 0 0 ${({ slide }) => (slide ? "0px" : "350px")};
    }
  }

  @media (max-width: 800px){
    flex-direction: column;
    gap: 20px;

    > div {
      flex: 0 0 auto;
    }

    ul {
      overflow: hidden;
    }
  }
`

export const New = styled.li<{ slide: boolean }>`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 350px;
  width: 350px;
  gap: 20px;
  padding: 60px 30px ;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  border-radius: 22px;
  text-align: center;


  > h4 {
    text-align: initial;
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    display: flex;
    gap: 10px;
  }

  p{
    font-size: 16px;
    text-align: justify;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 800px){
    flex: 0 0 325px;
  }
  @media (max-width: 400px){
    flex: 0 0 300px;
  }
`

export const Arrowrigth = styled.div<{ slide: boolean }>`
  position: absolute;
  top: calc(50%-30px);
  right: 7%;
  display: ${({ slide }) => (slide ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: 0 5px 15px -5px #000, inset 0px 4px 4px rgba(255, 255, 255, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px -5px #000,
      inset 0px 4px 4px rgba(255, 255, 255, 0.25),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    box-shadow: 0px 1px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 24px;
    padding-left: 6px;
  }

  @media (max-width: 800px){
    top: 55%;
    right: 2%;
  }
`

export const SeeAll = styled.div`
position: absolute;
bottom: 250px;
@media (max-width: 800px){
  bottom: 25px;
  left: calc(50% - 65px);
}
`

export const Slider = styled.div`
`

export const ArrowLeft = styled(Arrowrigth)<{ slide: boolean }>`
display: ${({ slide }) => (slide ? "flex" : "none")};
right: auto;
left: 10%;

img{
  transform: rotate(180deg);
}

@media (max-width: 800px){
  display: flex;
  left: 2%;
}
`

export const CirclesContent = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;

img{
  position: absolute;
  width: 370px;

  z-index: 0;

  &:nth-of-type(1){
    bottom: -140px;
    left: -130px;
  }
  &:nth-of-type(2){
    top: calc(50% - 185px);
    left: calc(50% - 185px);
    
  }
  &:nth-of-type(3){
    right: -160px;
    top: -200px;
  }
}
`
