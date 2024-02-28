import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const BannerContainer = styled.div`
  object-fit: cover;
  height: 280px;
  width: 100%;
  color: ${colors.white};
  font-size: 32px;
  line-height: 37px;

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 24px;
    }
  }
`

export const Category = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  margin-bottom: 156px;
`

export const Name = styled.h2`
  font-weight: 900;
  font-size: 32px;
  padding-bottom: 32px;
`
