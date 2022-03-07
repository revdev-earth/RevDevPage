import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.fund};
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  gap: 150px;
  padding: 100px 200px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 0 0 530px;
    align-items: flex-start;

    h5 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    display: flex;
    gap: 40px;
  }
`

export const New = styled.li`
  flex: 0 0 350px;
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
`
export const Arrow = styled.div`
  position: absolute;
  top: 40%;
  right: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: 0 0 10px #000;

  img {
    width: 24px;
    padding-left: 6px;
  }
`
