import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ListContainer = styled.section`
  background-color: ${colors.beige};
  padding-top: 56px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`
