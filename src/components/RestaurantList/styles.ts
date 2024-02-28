import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.ul`
  margin-top: 80px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
