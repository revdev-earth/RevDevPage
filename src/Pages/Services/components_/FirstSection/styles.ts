import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

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

  h3 {
    z-index: 2;
  }
  p {
    z-index: 2;
    margin: auto;
    max-width: 900px;
  }

  img {
    z-index: 1;
    position: absolute;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
      bottom: 0;
    }
  }
`
