import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const SideBar = styled.aside`
  background-color: ${colors.salmon};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 16px 8px 0 8px;

  button {
    width: 100%;
    border: none;
    background-color: ${colors.darkBeige};
    color: ${colors.salmon};
    padding: 4px;
    margin-top: 16px;
    font-weight: 700;
    cursor: pointer;
  }
`

export const Product = styled.li`
  position: relative;
  background-color: ${colors.darkBeige};
  color: ${colors.salmon};
  display: flex;
  padding: 8px;
  gap: 8px;
  margin-top: 16px;

  img {
    max-width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: ${colors.darkBeige};
  font-weight: 700;
  font-size: 14px;
`

export const Trash = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  max-width: 16px;
  max-height: 16px;
  cursor: pointer;
`
