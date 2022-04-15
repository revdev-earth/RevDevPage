import styled from "styled-components"

export const Container = styled.header`
  margin: auto;
  padding: 25px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1920px;

  @media (max-width: 1024px) {
    padding: 10px 30px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;

    button {
      display: none;
    }
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

  h3 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
  img {
    display: none;
  }

  @media (max-width: 800px) {
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

export const Navigation = styled.nav<{ isOpen: boolean; selected: number }>`
  display: flex;
  justify-content: space-evenly;

  z-index: 10;
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

  @media (max-width: 800px) {
    /* background-color: ; */
    position: fixed;
    top: 75px;
    left: 100%;
    justify-content: center;
    width: 100%;
    transition: left 0.5s;

    ${({ isOpen }) => {
      return isOpen && `left: 0;`
    }}

    ul {
      padding: 30px;
      height: 95vh;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      background-color: ${({ theme }) => theme.colors.gray};

      li {
        display: block;
        padding: 8px 10px;
        width: 100%;

        &:nth-child(${({ selected }) => selected + 1}) {
          a {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
        a {
          font-size: ${({ theme }) => theme.fonts.h4};
        }
      }
    }
  }
`
