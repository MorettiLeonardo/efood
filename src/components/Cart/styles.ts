import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  left?: string
  right?: string
}

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
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .margin-top {
    margin-top: 16px;
  }

  .is-hidden {
    display: none;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const FormContainer = styled.form`
  background-color: ${colors.salmon};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 16px 8px 0 8px;
`

export const SideBar = styled.aside`
  h3 {
    font-size: 16px;
    color: ${colors.darkBeige};
    margin-bottom: 16px;
    margin-top: 16px;
  }
`

export const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  border: none;
  background-color: ${colors.darkBeige};
  color: ${colors.salmon};
  padding: 4px;
  font-weight: 700;
  cursor: pointer;
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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.darkBeige};
  }

  input {
    width: 100%;
    margin: 8px 0;
    background-color: ${colors.darkBeige};
    border: 4px solid ${colors.darkBeige};
    max-height: 32px;
    padding: 8px;

    &.is-error {
      border: 4px solid red;
    }
  }
`

export const Group = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => props.left} ${(props) => props.right};
  column-gap: 34px;
`

export const TextOrderPlaced = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.darkBeige};
  margin-top: 8px;
`
