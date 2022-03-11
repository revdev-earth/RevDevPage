import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.fund};
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;

  gap: ${({ slide }) => (slide ? "0" : "150px")};
  padding: 100px 200px;
  transition: 0.2s all ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 0 0 ${({ slide }) => (slide ? "0px" : "530px")};
    height: ${({ slide }) => (slide ? "0" : "")};
    align-items: flex-start;
    overflow: hidden;
    transition: 0.2s all ease-in-out;

    h5 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    display: flex;
    gap: 40px;
    justify-content: ${({ slide }) => (slide ? "center" : "")};
  }
`

export const New = styled.li`
  flex: 0 0 350px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 35px;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  border-radius: 22px;

  h5 {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    display: flex;
    gap: 10px;
  }
`
export const Arrow = styled.div`
  position: absolute;
  top: 40%;
  right: 7%;
  display: ${({ slide }) => (slide ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 20px;
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
`
