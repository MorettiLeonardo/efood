import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.salmon};
  color: ${colors.darkBeige};
  max-width: 320px;
  max-height: 708px;
  padding: 8px;
`

export const CardImage = styled.img`
  max-width: 304px;
  width: 100%;
  max-height: 167px;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 18px;
  margin: 8px 0px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const CardButton = styled.button`
  width: 100%;
  padding: 4px 0;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  background-color: ${colors.darkBeige};
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${colors.salmon};
  height: 344px;
  padding: 32px;
  gap: 24px;
  display: flex;
  z-index: 1;

  img:last-child {
    max-width: 16px;
    max-height: 16px;
    bottom: 0;
    right: 0;
    position: relative;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 16px;
    max-width: 218px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
