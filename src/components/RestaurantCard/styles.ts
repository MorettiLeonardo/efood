import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantImage = styled.img`
  margin-bottom: -8px;
  object-fit: cover;
  max-height: 217px;
  width: 100%;
`

export const CardContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.salmon};
`

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: bold;
  background-color: ${colors.white};
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  margin-bottom: 16px;
`

export const TagContainer = styled.div`
  background-color: red;
  position: absolute;
  top: 10px;
  right: 10px;
`
