import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.darkBeige};
  max-width: 320px;
  max-height: 708px;
  padding: 8px;
`

export const CardImage = styled.img`
  max-width: 304px;
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
