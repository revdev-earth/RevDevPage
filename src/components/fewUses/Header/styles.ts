import styled from "styled-components"

export const Container = styled.header`
  margin: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  max-width: 1024px;

  @media (max-width: 678px) {
    padding: 0 20px;
  }

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`

export const MenuMovil = styled.div`
  border: none;

  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;

    padding: 10px;
    cursor: pointer;

    img {
      display: block;
      cursor: pointer;
      margin-right: 30px;
      width: 40px;

      background: transparent;

      color: white;
    }
    svg {
      height: 24px;
      width: 24px;
    }
  }

  @media (max-width: 424px) {
    img {
      margin-right: 0;
    }
  }
`

export const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-evenly;

  ul {
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;

    li {
      list-style: none;
      float: right;
      transition: 0.3s all ease-in-out;

      &:hover {
        transform: scale(1.05);
        border-bottom: 1px solid #000;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 768px) {
    /* background-color: ; */
    width: 100%;
    position: fixed;
    top: 90px;
    left: 100%;
    justify-content: center;
    transition: left 0.5s;

    ${({ isOpen }) => {
      return isOpen && `left: 0;`
    }}

    ul {
      width: 100%;
      flex-direction: column;
      gap: 10px;

      li {
        display: block;
        width: 100%;
        padding: 8px 10px;
      }
    }
  }
`
