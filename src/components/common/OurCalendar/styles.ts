import styled from "styled-components"

export const Container = styled.section`
  padding: 100px 10%;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;

    &:nth-child(1) {
      padding-right: 100px;
    }

    &:last-child {
      display: flex;
      position: relative;

      h4 {
        color: ${({ theme }) => theme.colors.secondary};
      }

      img {
        flex: 0 1 600px;
        z-index: 2;

        &:nth-child(2) {
          z-index: 1;
          position: absolute;
          right: 0;
          width: 200px;
        }
      }
    }
  }
`
