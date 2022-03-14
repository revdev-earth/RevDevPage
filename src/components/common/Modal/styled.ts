import styled from "styled-components"

export const Portal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const Background = styled.div`
  position: absolute;
  background: rgb(0 0 0 / 35%);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`

export const PopUp = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  font-size: 14px;

  z-index: 2;
`

export const Button = styled.button`
  display: flex;
  align-items: center;

  background: #f5f5f5;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;

  cursor: pointer;

  img {
    width: 14px;
    margin-right: 8px;
  }

  &:hover {
    background: #efefef;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: white;
  height: 56px;
  padding: 17px 24px;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: white;
  height: 66px;
  padding: 18px 24px;
`
