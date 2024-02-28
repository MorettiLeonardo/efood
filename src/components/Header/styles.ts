import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import bgHeader from '../../assets/images/bg-header.svg'

export const HeaderContainer = styled.header`
  background-image: url(${bgHeader});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: ${colors.salmon};
  max-width: 539px;
  text-align: center;
  font-weight: 900;
  font-size: 36px;
  margin-top: 140px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    max-width: 80%;
  }
`

export const HeaderImage = styled.img`
  margin-top: 64px;
  max-width: 125px;
`
